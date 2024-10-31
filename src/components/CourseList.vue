<template>
    <div>
      <h1>IMA Red Black List</h1>
      <div v-for="course in courses" :key="course.id" class="course-item">
        <h3>{{ course.name }}</h3>
        <button @click="upvote(course.id)">👍 {{ course.upvotes }}</button>
        <button @click="downvote(course.id)">👎 {{ course.downvotes }}</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        courses: [],
      };
    },
    created() {
      fetch('https://raw.githubusercontent.com/n3xta/ima-red-black-list/main/public/courses.json')
        .then((response) => response.json())
        .then((data) => {
          this.courses = data.map((course) => ({
            ...course,
            upvotes: 0,
            downvotes: 0,
          }));
        });
    },
    methods: {
      upvote(id) {
        const course = this.courses.find((c) => c.id === id);
        if (course) course.upvotes++;
      },
      downvote(id) {
        const course = this.courses.find((c) => c.id === id);
        if (course) course.downvotes++;
      }
    }

  };
  </script>
  
  <style scoped>
  .course-item {
    margin: 10px 0;
    display: flex;
    align-items: center;
  }
  
  button {
    margin-left: 10px;
  }
  </style>
  