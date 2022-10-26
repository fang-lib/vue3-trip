<template>
  <div class="app">
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>
    <z-tabbar v-if="!isHideTabBar" :tabBarList="tabBarList"></z-tabbar>
    <loading></loading>
  </div>
</template>

<script setup>
import { ref, watch } from "vue"
import { useRoute } from "vue-router"
import loading from "@/components/content/loading.vue"
const route = useRoute()
const isHideTabBar = ref(false)
const tabBarList = [
    {
      name: 'home',
      icon: 'wap-home-o',
      text: '首页',
      url: '/home'
    },
    {
      name: 'favor',
      icon: 'like-o',
      text: '收藏',
      url: '/favor'
    },
    {
      name: 'order',
      icon: 'orders-o',
      text: '订单',
      url: '/order',
    },
    {
      name: 'message',
      icon: 'chat-o',
      text: '消息',
      url: '/message'
    },
  ]

watch(() => route.path, () => {
  isHideTabBar.value = route.meta.isHideTabBar
})

</script>

<style scoped>
</style>
