import requests
from bs4 import BeautifulSoup
import json

def fetch_courses():
    url = "https://itp.nyu.edu/ima/category/courses/"
    headers = {'User-Agent': 'Mozilla/5.0'}
    response = requests.get(url, headers=headers)
    if response.status_code != 200:
        print("Failed to retrieve the webpage")
        return

    soup = BeautifulSoup(response.text, 'html.parser')
    courses = []

    # 找到课程标题元素
    course_elements = soup.find_all('h2', class_='wp-block-post-title')

    for course in course_elements:
        course_name = course.get_text(strip=True)
        courses.append({"name": course_name})

    with open('public/courses.json', 'w', encoding='utf-8') as f:
        json.dump(courses, f, ensure_ascii=False, indent=4)
    
    print("Courses data saved to public/courses.json")

if __name__ == "__main__":
    fetch_courses()
