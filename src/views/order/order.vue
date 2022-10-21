<template>
  <div class="order">
    <van-sticky>
      <nav-bar title="订单列表"></nav-bar>
      <van-tabs  color="#ff9645" v-model="active" @change="onChange">
        <van-tab name="all" title="全部订单"></van-tab>
        <van-tab name="recent" title="近期订单"></van-tab>
        <van-tab name="pend" title="待支付"></van-tab>
      </van-tabs>
    </van-sticky>
    <item v-for="item in orderList" :key="item.orderId" :info="item"></item>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { getOrderList } from "@/services/modules/order"
import navBar from "@/components/common/z-navbar.vue"
import item from "@/views/order/cpns/item.vue"

const active = ref('all')
const orderList = ref([])
function getOrderListData() {
  getOrderList({type: active.value}).then(res => {
    orderList.value = res.data.orders
  })
}
function onChange(e) {
  active.value = e
  getOrderListData()
}
</script>

<style lang="less" scoped>
.order {
  padding-bottom: 50px;
}
</style>