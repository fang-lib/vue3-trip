<template>
  <div class="detail">
    <z-navbar title="房屋详情" backtext="旅途"></z-navbar>
    <swiper :swipeData="detailInfo.mainPart?.topModule?.housePicture.housePics"></swiper>
    <infos :top-infos="detailInfo.mainPart?.topModule" />
    <facility :house-facility="detailInfo.mainPart?.dynamicModule.facilityModule.houseFacility"></facility>
    <landlord :landlord="detailInfo.mainPart?.dynamicModule.landlordModule"></landlord>
    <comment :comment="detailInfo.mainPart?.dynamicModule.commentModule"></comment>
    <notice :order-rules="detailInfo.mainPart?.dynamicModule.rulesModule.orderRules"></notice>
    <detail-map :position="detailInfo.mainPart?.dynamicModule.positionModule" />
    <intro :price-intro="detailInfo.mainPart?.introductionModule"></intro>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRoute } from "vue-router"
import { getDetail } from "@/services/modules/detail"
import zNavbar from "@/components/common/z-navbar.vue"
import swiper from "@/views/detail/cpns/swiper.vue"
import comment from "@/views/detail/cpns/comment.vue"
import facility from "@/views/detail/cpns/facility.vue"
import infos from "@/views/detail/cpns/infos.vue"
import intro from "@/views/detail/cpns/intro.vue"
import landlord from "@/views/detail/cpns/landlord.vue"
import detailMap from "@/views/detail/cpns/map.vue"
import notice from "@/views/detail/cpns/notice.vue"

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