import requests
from bs4 import BeautifulSoup
import json

def fetch_courses():
    base_url = "https://itp.nyu.edu/ima/category/courses/page/"
    headers = {'User-Agent': 'Mozilla/5.0'}
    courses = []
    page = 1

    while True:
        url = f"{base_url}{page}/"
        response = requests.get(url, headers=headers)
        if response.status_code != 200:
            break  # Exit if no more pages are found

        soup = BeautifulSoup(response.text, 'html.parser')
        course_elements = soup.find_all('h2', class_='wp-block-post-title')

        if not course_elements:
            break  # Exit loop if no courses are found on this page

        for course in course_elements:
            course_name = course.get_text(strip=True)
            courses.append({"name": course_name})

        page += 1  # Go to the next page

    # Save to JSON
    with open('public/courses.json', 'w', encoding='utf-8') as f:
        json.dump(courses, f, ensure_ascii=False, indent=4)

    print("Courses data saved to public/courses.json")

if __name__ == "__main__":
    fetch_courses()
