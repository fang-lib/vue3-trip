<template>
  <div class="favor">
    <van-sticky>
      <z-navbar backtext="旅途">
        <template #title>
          <div class="title-box">
            <div :class="['title', currentTitleIndex == 0 ? 'title-active' : '']" @click="titleChange(0)">我的收藏</div>
            <div :class="['title', currentTitleIndex == 1 ? 'title-active' : '']" @click="titleChange(1)">浏览历史</div>
          </div>
        </template>
      </z-navbar>
    </van-sticky>
    
    <!-- 我的收藏 -->
    <van-tabs v-if="currentTitleIndex === 0" color="#ff9645" v-model:active="type" @change="typeChange">
      <van-tab v-for="(item, index) in typeList" :key="index" :title="item.text">
        <div v-if="favorList.length > 0" class="item-box">
          <item v-for="(info, subIndex) in favorList" :key="subIndex" :info="info"></item>
        </div>
        <template v-else>
          <empty @onGoClick="toHome"></empty>
        </template>
      </van-tab>
    </van-tabs>
    <!-- 浏览历史 -->
    <template v-else>
      <div v-if="historyList.length > 0" class="item-box">
          <item v-for="(info, subIndex) in historyList" :key="subIndex" :info="info"></item>
        </div>
        <template v-else>
          <empty @onGoClick="toHome"></empty>
        </template>
    </template>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue"
import { getFavorList, getFavorHistory } from "@/services/modules/favor"
import zNavbar from "@/components/common/z-navbar.vue"
import item from "@/views/favor/cpns/item.vue"
import empty from "@/components/content/empty.vue"
import { useRouter } from "vue-router"

const router = useRouter()
const currentTitleIndex = ref(0)
const type = ref(0)
const typeList = reactive([
  {
    text: '房东'
  },
  {
    text: '房屋'
  }
])
const favorList = ref([])
const historyList = ref([])

function titleChange(index) {
  currentTitleIndex.value = index
  if(index === 1) {
    getFavorHistoryData()
  } else {
    typeChange()
  }
}

function getFavorListData() {
  getFavorList().then(res => {
    favorList.value = res.data.items
  })
}
getFavorListData()

function getFavorHistoryData() {
  getFavorHistory().then(res => {
    historyList.value = res.data.items
  })
}

function typeChange() {
  if(type.value == 0) {
    getFavorListData()
  } else {
    favorList.value = []
  }
}

function toHome() {
  router.push('/home')
}
 
</script>

<style lang="less" scoped>
.favor {
  position: relative;
  padding-bottom: 50px;
}
.title-box {
  display: flex;
  align-items: center;
  font-size: 14px;
  border-radius: 3px;

  .title {
    padding: 0 8px;
    line-height: 28px;
    text-align: center;
    border: 1px solid var(--primary-color);
  }
  .title-active {
    color: #fff;
    background: var(--primary-color);
  }
}
.item-box {
  margin-top: 15px;
}
</style>