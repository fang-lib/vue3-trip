<template>
  <div class="tabbar">
    <van-tabbar v-model="currentIndex"  active-color="#ff9645">
      <template v-for="(item, index) in tabBarList" :key="index">
        <van-tabbar-item :name="index" :to="item.url" :icon="item.icon">{{ item.text }}</van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

  const tabBarList = reactive([
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
  ])
  const currentIndex = ref(0)
</script>

<style scoped>

</style>