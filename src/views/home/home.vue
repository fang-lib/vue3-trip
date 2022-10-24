<template>
  <div class="home">
    <van-nav-bar title="弘源旅途" ></van-nav-bar>
    <img class="cover-img" src="@/assets/img/home/banner.webp" />
    <search :tagList="hotSuggests"></search>
    <category-list :list="category"></category-list>
    <!-- 热门精选 -->
    <h3 class="hot-title">热门精选</h3>
    <div class="hot-box">
      <template v-for="item in houseList" :key="item.data.houseId">
        <item-v9 v-if="item.discoveryContentType === 9" :info="item.data" @click="toDetail(item.data.houseId)"></item-v9> 
        <item-v3 v-if="item.discoveryContentType === 3" :info="item.data" @click="toDetail(item.data.houseId)"></item-v3>
      </template>
    </div>
    <search-bar v-if="isShowSearchBar"></search-bar>
  </div>
</template>

<script setup>
import { ref, watch } from "vue"
import { useRouter } from "vue-router"
import { getHotSuggests, getCategory, getHouseList } from "@/services/modules/home"
import  { onScrolling } from "@/hooks/scrolling"
import search from "@/views/home/cpns/search.vue"
import categoryList from "@/views/home/cpns/category-list.vue"
import itemV9 from "@/views/home/cpns/item-v9.vue"
import itemV3 from "@/views/home/cpns/item-v3.vue"
import searchBar from "@/views/home/cpns/search-bar.vue"

const router = useRouter()
const hotSuggests = ref([])
const category = ref([])
const houseList = ref([])
const currentPage = ref(1)
const isShowSearchBar = ref(false)

// 请求数据
getHotSuggests().then(res => {
  hotSuggests.value = res
})
getCategory().then(res => {
  category.value = res
})
function getHouseListData() {
  getHouseList({page: currentPage.value++}).then(res => {
    houseList.value.push(...res)
  }) 
}
getHouseListData()

// 滚动事件
onScrolling(getHouseListData)
const { scrollTop } = onScrolling(getHouseListData)
watch(scrollTop, () => {
  if(scrollTop.value > 300) {
    isShowSearchBar.value = true
  } else {
    isShowSearchBar.value = false
  }
})

// 跳转页面
function toDetail(id) {
  router.push({
    path: '/detail',
    query: {
      houseId: id
    }
  })
}


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