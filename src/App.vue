<template>
  <div class="app">
    <router-view></router-view>
    <z-tabbar v-if="!isHideTabBar"></z-tabbar>
  </div>
</template>

<script setup>
import { ref, watch } from "vue"
import { useRoute } from "vue-router"
const route = useRoute()
const isHideTabBar = ref(false)
watch(() => route.path, () => {
  isHideTabBar.value = route.meta.isHideTabBar
})

</script>

<style scoped>
</style>
