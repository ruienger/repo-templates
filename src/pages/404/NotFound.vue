<script setup lang="ts">
  import { HOME } from 'src/router/name';

  function goBack() {
    window.history.back();
  }
</script>

<template>
  <div class="page-not-found width-full height-full d-flex-col flex-content-around flex-item-center">
    <h1>您要找的资源不存在(404)</h1>
    <p>尝试回到主页或者联系我们 github/ruienger</p>
    <p
      class="go-back"
      @click="goBack"
    >
      或者点击这里回退
    </p>
    <RouterLink :to="{ name: HOME }"><ElLink type="primary">回到主页</ElLink></RouterLink>
  </div>
</template>

<style scoped>
  .page-not-found {
    background-color: rgb(43, 43, 43);
    color: rgb(230, 230, 230);
    padding: 20%;
  }

  .go-back {
    position: absolute;
    transform: rotateZ(-25deg);
    top: 3%;
    left: 3%;
  }
</style>
