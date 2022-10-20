<template>
  <div class="category-box">
      <div :class="['item', currentIndex === index ? 'item-active' : '']" v-for="(item, index) in list" :key="item.id" @click="currentIndex = index">
        <img class="item-img" :src="item.pictureUrl" />
        <div class="item-title">{{ item.title }}</div>
      </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
defineProps({
  list: {
    type: Array,
    default: () => []
  }
})

const currentIndex = ref(0)
</script>

<style lang="less" scoped>
.category-box {
    display: flex;
    justify-content: space-between;
    width: 100%;
    overflow-x: scroll;
    background: #fff;

    &::-webkit-scrollbar{
      display:none;
    }

    .item {
      flex-shrink: 0;
      margin: 20px 15px;
      padding-bottom: 3px;
      text-align: center;
    }
    .item-active {
      border-bottom: 3px solid var(--primary-color);
    }
    .item-img {
      width: 32px;
      height: 32px;
      margin-bottom: 8px;
    }
    .item-title {
      font-size: 12px;
    }
  }
</style>