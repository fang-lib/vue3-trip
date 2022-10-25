<template>
  <div class="search">
    <van-search class="search-input" v-model="value" shape="round" show-action :placeholder="`搜索${searchStore.city}的景点、地标、房源`" @cancel="onBack" @search="handleSearch" @update:model-value="handleSearch"></van-search>

    <div class="recommend-box" v-show="!value">
      <!-- 搜索历史 -->
      <recommend-item color="#f0f3f6" title="搜索历史" operatorText="清空" name="delete-o" :keyWords="historyList" @onClick="handelClear" @itemClick="chooseWord"></recommend-item>
      <template v-for="(group, index) in guessULike.groups" :key="index">
        <recommend-item :title="group.name" :keyWords="getKeyWords(group.suggests)" :color="group.name == '热门搜索' ? '#fff4ec' : '#f0f3f6'" @itemClick="chooseWord"></recommend-item>
      </template>
    </div>

    <div v-show="value">
      <van-cell v-for="(item, index) in searchResult" :key="index" :title="item.standardName" :value="item.itemTypeName" @click="chooseWord(item.standardName)" />
    </div>

  </div>
</template>

<script setup>
import useSearch from '@/stores/modules/search';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { getGuessulike, keywordsearchsuggest } from '@/services/modules/search'
import * as _ from 'lodash'
import recommendItem from "@/views/search/cpns/recommend-item.vue"
import storage from '@/utils/storage'

const searchStore = useSearch()
const router = useRouter()
const value = ref('')
const guessULike = ref({})
const historyList = ref(storage.getStorage('history') ?? [])
const searchResult = ref([])

// 数据请求
getGuessulike().then(res => {
  console.log(res)
  guessULike.value = res
})

const getKeyWords = computed(() => {
  return (value) => {
    return value.map(item => item.standardName)
  }
})

function onBack() {
  router.back()
}

function chooseWord(word) {
  searchStore.address = word
  router.back()
}

const handleSearch = _.debounce((value) => {
  if(!value) return
  
  // 请求数据
  keywordsearchsuggest(value).then(res => {
    searchResult.value = res.suggests
    // 去重
    let list = new Set(historyList.value)
    list.add(value)
    historyList.value = [ ...list ]
    storage.setStorage('history', historyList.value)
  })
}, 500)

function handelClear() {
  historyList.value = []
  storage.setStorage('history', historyList.value)
}

</script>

<style lang="less" scoped>
.search {
  background: #fff;
}
.search-input {
  position: sticky;
  top: 0;
  z-index: 9;
}
.recommend-box {
  margin-top: 15px;
}
</style>