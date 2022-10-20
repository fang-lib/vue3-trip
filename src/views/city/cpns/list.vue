<template>
  <div class="list">
    <van-index-bar :index-list="indexList">
      <!-- 热门 -->
      <van-index-anchor index="热门"></van-index-anchor>
      <div class="hot-box">
        <template v-for="label in info.hotCities" :key="label">
          <div class="item" @click="onCityClick(label)">{{ label.cityName }}</div>
        </template>
      </div>
      <template v-for="(group, index) in info.cities" :key="index">
        <van-index-anchor :index="group.group"></van-index-anchor>
        <template v-for="(city, subIndex) in group.cities" :key="subIndex">
          <van-cell :title="city.cityName"  @click="onCityClick(city)"></van-cell>
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import { computed } from "vue-demi"
import useSearch from "@/stores/modules/search"

const props = defineProps({
  info: {
    type: Object,
    default: () => ({})
  }
})
const emits = defineEmits(['onCityClick'])
const searchStore = useSearch()
// 获取索引列表
const indexList = computed(() => {
  let list = props.info?.cities?.map(item => item.group)
  list?.unshift('#')
  return list
})

// 选择城市
function onCityClick(value) {
  searchStore.city = value.cityName
  searchStore.cityInfo = value
  emits('onCityClick')
}
</script>

<style lang="less" scoped>
.hot-box {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 10px 16px 0 16px;

  .item {
    width: 70px;
    height: 28px;
    text-align: center;
    border-radius: 14px;
    line-height: 28px;
    font-size: 12px;
    background-color: #fff4ec;
    margin: 6px;
  }
}
</style>