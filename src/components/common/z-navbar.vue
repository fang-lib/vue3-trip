<template>
  <div class="z-navbar">
    <van-nav-bar :left-text="backtext" left-arrow @click-left="onBack">
      <template #title>
        <slot name="title">
          {{ title }}
        </slot>
      </template>
      <template #right>
        <i class="right-icon"></i>
      </template>
    </van-nav-bar>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"
defineProps({
  title: {
    type: String,
    default: ''
  },
  backtext: {
    type: String,
    default: ''
  }
})

const router = useRouter()

function onBack() {
  router.back()
}

</script>

<style lang="less" scoped>
.right-icon {
  width: 20px;
  height: 15px;
  background: url(../../assets/img/home/icon-right-menu.png) no-repeat center;
  background-size: contain;
}
</style>