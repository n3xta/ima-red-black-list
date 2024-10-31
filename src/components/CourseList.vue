<template>
  <div class="page">
    <h1>IMA Red Black List</h1>
    <div class="board">
      <!-- Use computed property here to filter out the 'Elective' category -->
      <div v-for="(courses, category) in filteredCategories" :key="category" class="outer-card">
        <div class="category-card">
          <h2 class="category-title">{{ category }}</h2>
          <div v-for="course in courses" :key="course.id" class="course-item">
            <h3>{{ course.name }}</h3>
            <button @click="upvote(course.id)">👍 {{ course.upvotes }}</button>
            <button @click="downvote(course.id)">👎 {{ course.downvotes }}</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Full-width Elective Board -->
    <div class="outer-card elective-outer">
      <div class="elective-board">
        <h2 class="category-title">Elective</h2>
        <div v-for="course in categorizedCourses['Elective']" :key="course.id" class="course-item">
          <h3>{{ course.name }}</h3>
          <button @click="upvote(course.id)">👍 {{ course.upvotes }}</button>
          <button @click="downvote(course.id)">👎 {{ course.downvotes }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courses: [],
      categorizedCourses: {}
    };
  },

  created() {
    fetch('/courses_updated.json')
      .then((response) => response.json())
      .then((data) => {
        this.courses = data.map((course, index) => ({
          ...course,
          id: `${Date.now()}-${index}`,
          upvotes: 0,
          downvotes: 0
        }));
        this.categorizeCourses();
      });
  },

  computed: {
    filteredCategories() {
      // Filter out the 'Elective' category here
      return Object.fromEntries(
        Object.entries(this.categorizedCourses).filter(
          ([category]) => category !== 'Elective'
        )
      );
    }
  },

  methods: {
    categorizeCourses() {
      this.categorizedCourses = this.courses.reduce((acc, course) => {
        const category = course.category ? course.category : "Elective";
        if (!acc[category]) acc[category] = [];
        acc[category].push(course);
        return acc;
      }, {});
    },
    upvote(id) {
      const course = this.courses.find(c => c.id === id);
      if (course) course.upvotes++;
    },
    downvote(id) {
      const course = this.courses.find(c => c.id === id);
      if (course) course.downvotes++;
    }
  }
};
</script>

  
<style scoped>
/* Set full-page background color */
html, body, .page {
  background-color: #121212;
  color: #e0e0e0;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  min-height: 100%;
  box-sizing: border-box;
}

/* Ensure all elements follow border-box sizing for better layout control */
*,
*::before,
*::after {
  box-sizing: border-box;
}

.course-item {
  margin: 10px 0;
  display: flex;
  align-items: center;
}

/* Outer board container */
.outer-card {
  background-color: #2a2a2a; /* Light gray outer layer */
  padding: 8px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden; /* Prevent inner content from overflowing */
}

/* Inner dark gray content area */
.category-card,
.elective-board {
  background-color: #1a1a1a; /* Dark inner content */
  padding: 20px;
  margin-top: 80px;
  border-radius: 8px;
  color: #e0e0e0;
  height: 80%;
  position: relative;
}

/* Title styling with position adjustment */
.category-title {
  text-align: left;
  font-size: 1.2em;
  font-weight: bold;
  color: #e0e0e0;
  background-color: #2a2a2a; /* Same color as outer layer */
  /* padding: 5px 10px; */
  position: absolute;
  top: -60px; /* Position closer to outer border */
  left: 20px;
  z-index: 1;
  border-radius: 4px;
  margin: 0; /* Remove default margin to control spacing */
}

.board {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

/* Button styling */
button {
  margin-left: 10px;
  background: #333;
  color: #e0e0e0;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}

button:hover {
  background: #444;
  transform: scale(1.05);
}
</style>
  