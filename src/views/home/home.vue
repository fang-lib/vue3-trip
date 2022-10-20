<template>
  <div class="home">
    <van-nav-bar title="弘源旅途" ></van-nav-bar>
    <img class="cover-img" src="@/assets/img/home/banner.webp" />
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
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"
import { storeToRefs } from "pinia"
import useSearch from "@/stores/modules/search"
const router = useRouter()
const searchStore = useSearch()
const { city } = storeToRefs(searchStore)


function toCity() {
  router.push('/city')
}
</script>

<style lang="less" scoped>
  .cover-img {
    width: 100%;
    height: 130px;
  }
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
</style>