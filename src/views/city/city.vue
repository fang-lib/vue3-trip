<template>
  <div class="city">
    <!-- 搜索框 -->
    <van-search placeholder="城市/区域/位置" show-action shape="round" v-model="searchValue" @cancel="handleBack"></van-search>
    <!-- 标签页面 -->
      <van-tabs color="#ff9645" v-model:active="active">
        <div class="list-box">
          <!-- 国内和海外列表 -->
          <van-tab :title="allCity?.cityGroup?.title">
            <list :info="allCity.cityGroup" @onCityClick="handleBack"></list>
          </van-tab>
          <van-tab :title="allCity?.cityGroupOverSea?.title">
            <list :info="allCity.cityGroupOverSea"></list>
          </van-tab>
        </div>
      </van-tabs>
    </div>
</template>

<script setup>
import { ref } from "vue-demi";
import { useRouter } from "vue-router";
import { getAllCity } from "@/services/modules/city"
import list from "@/views/city/cpns/list.vue"
// 变量
const router = useRouter()
const searchValue = ref('')
const allCity = ref({})
const active = ref()

// 获取所有城市信息
getAllCity().then(res => {
  allCity.value = res
})

function handleBack() {
  router.back()
}
</script>

<style scoped>
.list-box {
  height: calc(100vh - 120px);
  overflow-y: scroll;
}
:deep(.van-tabs__wrap) {
  position: relative;
  z-index: 9;
}
</style>