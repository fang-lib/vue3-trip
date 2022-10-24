<template>
  <div class="swiper">
    <van-swipe class="my-swipe">
      <van-swipe-item v-for="img in swipeData" :key="img.url">
        <img class="swipe-img" :src="img.url" />
      </van-swipe-item>
      <!-- 指示器 -->
      <template #indicator="{ active }">
        <div class="custom-indicator">
          <div :class="['item', swipeData[active]?.enumPictureCategory == key ? 'active' : '']" v-for="(item, key, index) in indicatorInfo" :key="index">
            {{ getTitle(item[0].title) }}
            <span v-if="swipeData[active]?.enumPictureCategory == key">{{ `${getCategoryIndex(active)} / ${item.length}` }}</span>
          </div>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
import { computed, watch } from "vue"

const props = defineProps({
  swipeData: {
    type: Array,
    default: () => []
  }
})
const indicatorInfo = {}

watch(props, () => {
  // 轮播图指示器数据处理
  for (const item of props.swipeData) {
    let valueArray = indicatorInfo[item.enumPictureCategory]
    if (!valueArray) {
      valueArray = []
      indicatorInfo[item.enumPictureCategory] = valueArray
    }
    valueArray.push(item)
  }
})

const getTitle = computed(() => {
  return (value) => {
    return value.replace('【', '').replace('】：', '')
  }
})
const getCategoryIndex = computed(() => {
  return (active) => {
    const item = props.swipeData[active]
    const index =  indicatorInfo[item.enumPictureCategory].findIndex(info => {
      return info.url == item.url
    }) + 1
    return index
  }
})


</script>

<style lang="less" scoped>
.my-swipe {
  height: 250px;

  .swipe-img {
    width: 100%;
    height: 100%;
  }
}
.custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    display: flex;
    align-items: center;
    padding: 2px 5px;
    font-size: 12px;
    color: #fff;
    background: rgba(0, 0, 0, 0.8);
    .item {
      margin: 0 8px;
    }
    .active {
      padding: 0 8px;
      border-radius: 6px;
      color: #000;
      background: #fff;
    }
  }
</style>