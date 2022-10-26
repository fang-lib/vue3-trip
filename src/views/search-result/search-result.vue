<template>
  <div class="search-result">
    <!-- 导航栏 -->
    <z-navbar>
      <template #title>
        <div class="title-box">
          <div class="title-address">{{ route.query.address }}</div>
            <div class="title-time_box">
              <div class="time-cell">
              <span class="time-cell_label">住</span>
              <span class="item-cell_value">{{ formatDate(route.query.startDate * 1, 'MM.DD') }}</span>
            </div>
            <div class="time-cell">
              <span class="time-cell_label">离</span>
              <span class="item-cell_value">{{ formatDate(route.query.endDate * 1, 'MM.DD') }}</span>
            </div>
          </div>
          <div class="title-desc over-one_ell" @click="toSearch">{{ searchStore.address || '搜索博尔塔拉的景点、地标、房源' }}</div>
        </div>
      </template>
    </z-navbar>
    <!-- 筛选栏 -->
    <van-dropdown-menu active-color="#ff9645">
      <van-dropdown-item v-model="filterFavor" ref="addressItemRef">
        <template #title>位置</template>
        <template #default>
          <van-tree-select
            v-model:active-id="filterAddress"
            v-model:main-active-index="addressIndex"
            :items="filterAddressInfo"
            @click-item="handleSearch"
          />
        </template>
      </van-dropdown-item>
      <van-dropdown-item v-model="filterFavor" :options="filterFavorInfo"></van-dropdown-item>
      <van-dropdown-item v-model="filterFavor" ref="filterItemRef">
        <template #title>筛选</template>
        <template #default>
          <van-tree-select
            v-model:active-id="filter"
            v-model:main-active-index="filterIndex"
            :items="filterInfo"
            @click-item="handleSearch"
          />
        </template>
      </van-dropdown-item>
    </van-dropdown-menu>
    <!-- 搜索结果展示 -->
    <div class="result-box">
      <item v-for="(info, subIndex) in searchResult" :key="subIndex" :info="info"></item>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from "vue-router";
import useSearch from "@/stores/modules/search"
import { getSearchKeyWord, getSearchResult } from "@/services/modules/search.js"
import { formatDate } from "@/utils/date";

import zNavbar from "@/components/common/z-navbar.vue"
import item from "@/views/favor/cpns/item.vue"

const router = useRouter()
const route = useRoute()
const searchStore = useSearch()
const filterAddressInfo = ref([])
const filterFavorInfo = ref([])
const filterInfo = ref([])
const searchResult = ref([])
const filterAddress = ref()
const filterFavor = ref()
const filter = ref()
const addressIndex = ref(0)
const filterIndex = ref(0)
const filterItemRef = ref()
const addressItemRef = ref()

// 获取筛选数据
getSearchKeyWord().then(res => {
  console.log(res)
  filterAddressInfo.value = res.data.allConditions[0].subGroups.map(item => ({text: item.itemTypeLabel, children: item.items.map(subItem => ({text: subItem.label, id: subItem.value}))}))
  filterFavorInfo.value = res.data.allConditions[1].items.map(item =>({text:  item.label, value: item.value}))
  filterFavor.value = filterFavorInfo.value[0]?.value
  filterInfo.value = res.data.allConditions[2].subGroups.map(item => ({text: item.label, children: item.subGroups[0]?.items.map(subItem => ({text: subItem.label, id: subItem.value}))}))
})

// 搜索结果
getSearchResult().then(res => {
  searchResult.value = res.data.items
})

function handleSearch() {
  filterItemRef.value.toggle(false)
  addressItemRef.value.toggle(false)
}

function toSearch() {
  router.push({
    path: '/search',
    query: {
      address: route.query.address,
      startDate: route.query.startDate,
      endDate: route.query.endDate
    }
  })
}
</script>

<style lang="less" scoped>
.title-box {
  display: flex;
  align-items: stretch;
  width: 100%;
  font-size: 14px;
  color: #333;

  .title-address {
    padding: 7px;
    background: #f2f4f6;
  }
  .title-time_box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3px;
    margin-left: 3px;
    background: #f2f4f6;
    font-size: 10px;

    .time-cell_label {
      margin-right: 3px;
      color: #666;
    }
  }
  .title-desc {
    flex: 1;
    margin-left: 3px;
    padding: 5px;
    padding-top: 8px;
    text-align: left;
    color: #999;
    background: #f2f4f6;
  }
}
.result-box {
  margin-top: 20px;
}

:deep(.van-nav-bar) {
  line-height: 1 !important;
}
:deep(.van-nav-bar__title ) {
  flex: 1;
}
</style>