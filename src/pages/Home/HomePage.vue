<script setup lang="ts"></script>

<template>
  <div class="home width-full height-full d-flex-col flex-content-around flex-item-center">
    <h1>web_vue3_ts_ele_vite</h1>
    <h2>开始新项目的开发吧！记得把100%成功的登录改掉哦</h2>
    <p>STEP1: /src/store/auth/index.ts 里修改登录的逻辑</p>
    <p>STEP2: /src/Login.vue 修改登录页面</p>
    <p>STEP3: /src/pages/404/NotFound.vue 修改404页面</p>
    <p>STEP4: /src/router 配置路由</p>
    <p>STEP5: 开始开发</p>
  </div>
</template>

<style scoped>
  .home {
    padding: 20% 0;
  }
  .home > p {
    padding: 10px 10px;
    border-radius: 10px;
    background-color: rgb(30, 85, 30);
    color: #fff;
    transition: background-color 0.2s linear;
  }
  .home > p:hover {
    background-color: rgb(16, 177, 16);
  }
</style>
