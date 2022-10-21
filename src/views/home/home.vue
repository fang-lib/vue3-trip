<template>
  <div class="home">
    <van-nav-bar title="弘源旅途" ></van-nav-bar>
    <img class="cover-img" src="@/assets/img/home/banner.webp" />
    <search-bar :tagList="hotSuggests"></search-bar>
    <category-list :list="category"></category-list>
    <!-- 热门精选 -->
    <h3 class="hot-title">热门精选</h3>
    <div class="hot-box">
      <template v-for="item in houseList" :key="item.data.houseId">
        <item-v9 v-if="item.discoveryContentType === 9" :info="item.data"></item-v9> 
        <item-v3 v-if="item.discoveryContentType === 3" :info="item.data"></item-v3>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { getHotSuggests, getCategory, getHouseList } from "@/services/modules/home"
import searchBar from "@/views/home/cpns/search-bar.vue"
import categoryList from "@/views/home/cpns/category-list.vue"
import itemV9 from "@/views/home/cpns/item-v9.vue"
import itemV3 from "@/views/home/cpns/item-v3.vue"

const hotSuggests = ref([])
const category = ref([])
const houseList = ref([])

// 请求数据
getHotSuggests().then(res => {
  hotSuggests.value = res
})
getCategory().then(res => {
  category.value = res
})
getHouseList({page: 1}).then(res => {
  houseList.value = res
}) 
</script>

<style lang="less" scoped>
.home {
  padding-bottom: 50px;
  // background: #f8f8f8;
}
  .cover-img {
    width: 100%;
    height: 130px;
  }
  .hot-title {
    margin: 0 20px;
  }
  .hot-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 10px 20px;
  }
  
</style>