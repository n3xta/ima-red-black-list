import json

# Define the categories and subcategories
categories = {
    "Design & Fabrication": ["Design Fundamentals", "User Experience Design", "Introduction to Digital Fabrication"],
    "Media Arts": ["Methods of Motion", "Immersive Experiences"],
    "Physical Computing": ["Designing Interfaces for Live Performance", "Physical Computing", "Interaction as Art Medium"],
    "Programming & Data": ["Introduction to Machine Learning for the Arts", "The Code of Music", "Networked Media", "Reading and Writing Electronic Text", "Pixel by Pixel", "Nature of Code", "Live Web"],
    "Project Development & Research": ["Creative Approaches to Emerging Media", "Critical Experiences", "Open Call", "Storytelling for Project Development"],
    "Tech & Society": ["Big Ideas in the History and Future of Technology", "Useless Machines", "Communications and Technology", "Politics of Code", "Design Skills for Responsible"],
}

# Load the existing courses JSON
with open('public/courses.json', 'r', encoding='utf-8') as f:
    courses = json.load(f)

# Update each course with major/elective and specific category
for course in courses:
    course_name = course["name"]
    course["type"] = "Elective"  # Default type

    # Check if the course belongs to a major category
    for major, subcategories in categories.items():
        if course_name in subcategories:
            course["type"] = "Major"
            course["category"] = major
            break
    else:
        course["category"] = "Elective"  # If no match found, mark as Elective

# Save the updated courses to a new JSON file
with open('public/courses_updated.json', 'w', encoding='utf-8') as f:
    json.dump(courses, f, ensure_ascii=False, indent=4)

print("Courses have been categorized and saved to 'public/courses_updated.json'")
