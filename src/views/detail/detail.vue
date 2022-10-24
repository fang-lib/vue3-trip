<template>
  <div class="detail">
    <z-navbar title="房屋详情" backtext="旅途"></z-navbar>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRoute } from "vue-router"
import { getDetail } from "@/services/modules/detail"
import zNavbar from "@/components/common/z-navbar.vue"

const route = useRoute()
const houseId = ref('')
const detailInfo = ref({})

houseId.value = route.query.houseId
// 数据请求
getDetail({houseId: houseId.value}).then(res => {
  detailInfo.value = res
})
</script>

<style scoped>

</style>