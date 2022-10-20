<template>
  <div class="item-v3">
    <img class="item-img" :src="info.image.url" />
    <div class="item-address_box">
      <img class="item-address_icon" src="@/assets/img/home/location.png" />
      <div class="item-address_text">{{ info.location }}</div>
    </div>
    <div class="item-title over-two_ell">{{ info.houseName }}</div>
    <div class="item-type">{{ info.summaryText }}</div>
    <div class="item-price_box">
      <div class="item-current_price">¥{{ info.finalPrice }}</div>
      <div class="item-old_price">¥{{ info.productPrice }}</div>
      <div class="item-discount">{{ info.priceTipBadge.text }}</div>
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
.item-v3 {
  position: relative;
  width: 48%;
  height: 226px;
  border-radius: 16px;
  margin-bottom: 10px;
  font-size: 12px;
  overflow: hidden;
  background: #fff;

  .item-img {
    width: 100%;
    height: 114px;
  }
  .item-address_box {
    display: flex;
    align-items: center;
    margin-top: 5px;
    color: #666;

    .item-address_icon {
      width: 12px;
      height: 12px;
    }
  }
  .item-title {
    margin: 5px 0;
  }
  .item-price_box {
    display: flex;
    margin-top: 5px;

    .item-current_price {
      font-size: 14px;
      color: #ff9645;
    }
    .item-old_price {
      margin: 0 3px;
      font-size: 12px;
      text-decoration: line-through;
      color: #999;
    }
    .item-discount {
      line-height: 18px;
      padding: 0 6px;
      border-radius: 8px;
      background-image: linear-gradient(270deg, #f66, #ff9f9f);
      color: #fff;
    }
  }
}
</style>