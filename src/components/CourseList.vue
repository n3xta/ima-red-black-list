<template>
    <div>
      <h1>IMA红黑榜</h1>
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
        courses: [], // 初始课程列表
      };
    },
    created() {
      // 加载课程数据，可以替换为从文件或 API 获取的数据
      fetch('https://n3xta.github.io/ima-red-black-list/courses.json')
        .then((response) => response.json())
        .then((data) => {
          // 初始化点赞和点踩数据
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
        course.upvotes++;
      },
      downvote(id) {
        const course = this.courses.find((c) => c.id === id);
        course.downvotes++;
      },
    },
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
  