<template>
  <div class="search">
    <van-search class="search-input" v-model="value" shape="round" show-action :placeholder="`搜索${searchStore.city}的景点、地标、房源`" @cancel="onBack" @search="handleSearch" @update:model-value="handleSearch"></van-search>

    <div class="recommend-box" v-show="!value">
      <!-- 搜索历史 -->
      <recommend-item color="#f0f3f6" title="搜索历史" operatorText="清空" name="delete-o" :keyWords="historyList" @onClick="handelClear" @itemClick="handleSearch"></recommend-item>
      <template v-for="(group, index) in guessULike.groups" :key="index">
        <recommend-item :title="group.name" :keyWords="getKeyWords(group.suggests)" :color="group.name == '热门搜索' ? '#fff4ec' : '#f0f3f6'" @itemClick="chooseWord"></recommend-item>
      </template>
    </div>

    <div v-show="value">
      <div class="cell" v-for="(item, index) in searchResult" :key="index" @click="chooseWord(item.standardName)">
        <div class="title" v-html="getSuggestName(item.standardName)"></div>
        <div class="value">{{ item.itemTypeName }}</div>
      </div>
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

const handleSearch = _.debounce((word) => {
  value.value = word
  if(!value.value) return
  
  // 请求数据
  keywordsearchsuggest(value.value).then(res => {
    searchResult.value = res.suggests
    // 历史记录查重处理
    let list = new Set(historyList.value)
    list.add(value.value)
    historyList.value = [ ...list ]
    storage.setStorage('history', historyList.value)
  })
}, 500)

const getSuggestName = computed(() => {
  return (word) => {
    // console.log(word.replace(value.value, `<span style="color: #ff9645">${value.value}</span>`))
    return word.replaceAll(value.value, `<span style="color: #ff9645">${value.value}</span>`)
  }
})

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
.cell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px;

  .value {
    color: #999;
  }
}
</style>