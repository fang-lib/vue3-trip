<template>
  <div class="item-v9">
    <img class="item-bg" :src="info.image.url" />
    <div class="item-content">
      <div class="item-type">{{ info.summaryText}}</div>
      <div class="item-title over-two_ell">{{ info.houseName }}</div>
      <div class="item-bottom">
        <van-rate :size="15" color="#fff" :model-value="info.commentScore * 1" />
        <div class="item-price">￥{{ info.finalPrice }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  info: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.item-v9 {
  position: relative;
  width: 48%;
  height: 226px;
  border-radius: 16px;
  margin-bottom: 10px;
  font-size: 12px;
  overflow: hidden;

  .item-bg {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .item-content {
    position: absolute;
    top: 132px;
    padding: 8px 10px;
    color: #fff;

    .item-title {
      margin: 5px 0;
    }
    .item-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>