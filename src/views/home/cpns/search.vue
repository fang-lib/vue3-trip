<template>
  <div class="search">
     <!-- 筛选 -->
     <div class="screen-box">
      <div class="address-box" @click="toCity">
        <div class="address-text">
          {{ city }}
        </div>
        <div class="location-box">
          <div class="location-label">我的位置</div>
          <img class="location-icon" src="@/assets/img/home/icon_location.png" />
        </div>
      </div>
      <!-- 时间 -->
      <div class="time-box">
        <div class="item" @click="isShow=true">
          <div class="label">入住</div>
          <div class="time">{{ day.formatDate(startDate, 'M月DD日') }}</div>
        </div>
        <div class="item stay-item">共{{ day.diffDate(startDate, endDate, 'day') }}晚</div>
        <div class="item" @click="isShow=true">
          <div class="label">离店</div>
          <div class="time">{{ day.formatDate(endDate, 'M月DD日') }}</div>
        </div>
      </div>
      <div class="search-label_box">
        <div class="label">价格不限</div>
        <div class="label">人数不限</div>
      </div>
      <div class="search-label_box">关键字/位置/民宿名</div>
      <div class="hot-suugests_box">
        <div class="item" v-for="item in tagList" :key="item.tagText?.text">{{ item.tagText?.text }}</div>
      </div>
      <div class="solid-btn">开始搜索</div>
      <!-- 日历 -->
      <van-calendar v-model:show="isShow" type="range" color="#ff9645" @confirm="onConfirm"></van-calendar>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { storeToRefs } from "pinia"
import useSearch from "@/stores/modules/search"

defineProps({
  tagList: {
    type: Array,
    default: () => []
  }
})

const router = useRouter()
const searchStore = useSearch()
const isShow = ref(false)
const { city, startDate, endDate } = storeToRefs(searchStore)

// 初始化入住日期
searchStore.startDate = new Date().getTime()
searchStore.endDate = startDate.value + 24*60*60*1000


function toCity() {
  router.push('/city')
}
function onConfirm(e) {
  isShow.value = false
  searchStore.startDate = new Date(e[0]).getTime()
  searchStore.endDate = new Date(e[1]).getTime()
}
</script>

<style lang="less" scoped>
  .screen-box {
    padding: 0 20px;

    .address-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 45px;
      font-size: 15px;

      .location-box {
        display: flex;
        align-items: center;

        .location-label {
          flex: 1;
          margin-right: 8px;
          font-size: 12px;
          color: #666;
        }
        .location-icon {
          width: 18px;
          height: 18px;
          margin-left: 8px;
          margin-top: -3px;
        }
      }
    }
  }
  .time-box {
    display: flex;
    align-items: center;
    margin-bottom: 5px;

    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 12px;

      .label {
        color: #999;
      }
      .time {
        margin-top: 3px;
        font-size: 15px;
      }
    }
    .stay-item {
      color: #666;
    }
  }
  .search-label_box {
    display: flex;
    align-content: center;
    justify-content: space-between;
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    color: #999;

    .label {
      flex: 1;
      &:first-child {
        flex: 2;
      }
    }
  }
  .hot-suugests_box {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 12px;

    .item {
      padding: 4px 8px;
      margin: 3px;
      border-radius: 14px;
      background-color: #f1f3f5;
    }
  }
  :deep(.van-popup--bottom.van-popup--round) {
    border-radius: 0;
  }
</style>