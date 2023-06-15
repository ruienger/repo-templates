<script setup lang="ts">
  import { useRouter } from 'vue-router';

  setTimeout(() => {
    useRouter().push('/');
  }, 1000);
</script>

<template>
  <div class="page-not-found">Page Not Found. Redirect after 1 secound......</div>
</template>

<style scoped>
  .page-not-found {
    text-align: center;
    font-size: 27px;
    font-weight: bold;
  }
</style>
