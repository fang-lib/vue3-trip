<template>
  <div class="tabbar">
    <van-tabbar route v-model="currentIndex"  active-color="#ff9645">
      <template v-for="(item, index) in tabBarList" :key="index">
        <van-tabbar-item :name="index" :to="item.url" :icon="item.icon">{{ item.text }}</van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  tabBarList: {
    type: Array,
    default: () => []
   }
})
  
const currentIndex = ref(0)
</script>

<style scoped>

</style>