<template>
  <div class="detail" ref="detailRef">
    <!-- 导航栏 -->
    <van-tabs v-if="isShowTabs" v-model:active="active" color="#ff9645" class="tabs" sticky @click-tab ="tabChange">
      <van-tab v-for="item in tabList" :key="item" :title="item" :name="item"></van-tab>
    </van-tabs>


    <z-navbar title="房屋详情" backtext="旅途"></z-navbar>
    <swiper :swipeData="detailInfo.mainPart?.topModule?.housePicture.housePics"></swiper>
    <infos name="描述" :ref="getRefs" :top-infos="detailInfo.mainPart?.topModule" />
    <facility name="设施" :ref="getRefs" :house-facility="detailInfo.mainPart?.dynamicModule.facilityModule.houseFacility"></facility>
    <landlord name="房东" :ref="getRefs" :landlord="detailInfo.mainPart?.dynamicModule.landlordModule"></landlord>
    <comment name="评论" :ref="getRefs" :comment="detailInfo.mainPart?.dynamicModule.commentModule"></comment>
    <notice name="须知" :ref="getRefs" :order-rules="detailInfo.mainPart?.dynamicModule.rulesModule.orderRules"></notice>
    <detail-map name="周边" :ref="getRefs" :position="detailInfo.mainPart?.dynamicModule.positionModule" />
    <intro :price-intro="detailInfo.mainPart?.introductionModule"></intro>
  </div>
</template>

<script setup>
import { ref, watch } from "vue"
import { useRoute } from "vue-router"
import { getDetail } from "@/services/modules/detail"
import { onScrolling } from "@/hooks/scrolling"
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
const active = ref('描述')
const tabList = ['描述', '设施', '房东', '评论', '须知', '周边']
const isShowTabs = ref(false)
const detailRef = ref()
const elRefs = ref({})
// 记录滚动是否是通过点击
let isClick = false

houseId.value = route.query.houseId
// 数据请求
getDetail({houseId: houseId.value}).then(res => {
  detailInfo.value = res
})


const { scrollTop } = onScrolling(() => {
  active.value = tabList[tabList.length - 1]
}, detailRef)
watch(scrollTop, (newValue) => {
// 监听滚动，显示tabs
  if(newValue > 200) {
    isShowTabs.value = true
  } else {
    isShowTabs.value = false
  }
  let currentIndex = tabList.findIndex(item => item === active.value)
  let currentDistance = elRefs.value[tabList[currentIndex]].offsetTop
  
  // 如果是点击触发的滚动
  if(isClick) {
    if(newValue === currentDistance - 44 || currentIndex === tabList.length - 1) {
      isClick = false
      return 
    } else {
      return
    }
  }

  // 跳转到最后处理
  if(currentIndex === tabList.length - 1) {
    if(newValue < currentDistance && currentIndex != 0) {
      active.value = tabList[currentIndex - 1]
    }
    return
  }
  

  let nextDistance = elRefs.value[tabList[currentIndex + 1]].offsetTop
  if(newValue > nextDistance) {
    active.value = tabList[currentIndex + 1]
  } else if(newValue < currentDistance && currentIndex != 0) {
    active.value = tabList[currentIndex - 1]
  }
})

// 动态获取组件根元素
const getRefs = (value) => {
  if(!value) false
  elRefs.value[value.$el.getAttribute('name')] = value.$el
}

// 点击tab滚动到对应的区域
function tabChange(e) {
  console.log(e)
  const el = elRefs.value[e.title]
  const distance = el.offsetTop - 44
  isClick = true
  detailRef.value.scrollTo({
    top: distance,
    behavior: "smooth"
  })
}
</script>

<style lang="less" scoped>
.detail {
  height: 100vh;
  overflow-y: scroll;

  .tabs {
    position: fixed;
    width: 100%;
    z-index: 999;
  }
}
</style>