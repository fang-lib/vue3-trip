<template>
  <div class="app">
    <h2>{{ userStore.name }}</h2>
    <router-view></router-view>
  </div>
</template>

<script setup>
  import useUser from "@/stores/modules/user" 
  const userStore = useUser()

</script>

<style scoped>
</style>
