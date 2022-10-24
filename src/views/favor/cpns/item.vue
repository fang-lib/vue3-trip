<template>
  <div class="item">
    <div class="item-header-box">
      <img class="header-bg" :src="info.defaultPicture" />
      <div class="header-right_box">
        <img class="right-avatar" :src="info.logoUrl" />
        <img class="right-favor_icon" src="@/assets/img/search/tj-mob-ui_unit-item_collected-new.png" />
        <div class="message-box">
          <img class="message-icon" src="@/assets/img/search/tj-mob-ui_unit-item_comment-new.png" />
          <div class="message-num">{{ info.commentBrief.totalCount }}</div>
        </div>
      </div>
      <div class="sore-box">
        <div class="sore-point">{{ info.commentBrief.overall }}分</div>
        <div class="sore-label">{{ info.commentBrief.commentBrief }}</div>
      </div>
    </div>
    <div class="cell">
      <div class="address">{{ info.address }}</div>
      <div class="type">{{ info.unitSummeries[0].text }}.{{ info.unitSummeries[1].text }}</div>
    </div>
    <div class="name over-two_ell">{{ info.unitName }}</div>
    <div class="cell">
      <div class="label" v-for="label in info.allActiveAndRedPacket.activeRedPacket" :key="label">{{ label.title }}{{ formatDiscount(label.introduction) }}元</div>
    </div>
    <div class="cell">
      <div class="new-price">¥{{ info.finalPrice }}</div>
      <div class="old-price">¥{{ info.productPrice }}</div>
      <div class="notice">{{ info.priceTipBadge?.text }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue-demi"

defineProps({
  info: {
    type: Object,
    default: () => ({})
  }
})

const formatDiscount = computed(() => {
  return (string) => {
    return string.replace('-￥', '减')
  }
})
</script>

<style lang="less" scoped>
.item {
  margin: 0 20px;

  .item-header-box {
    position: relative;
    height: 224px;
    border-radius: 16px;
    overflow: hidden;

    .header-bg {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .header-right_box {
      position: absolute;
      right: 10px;
      top: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .right-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: contain;
        text-align: center;
      }
      .right-favor_icon {
        width: 30px;
        height: 30px;
        margin: 10px 0;
      }
      .message-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 14px;
        color: #fff;
        .message-icon {
          width: 30px;
          height: 30px;
          margin-bottom: 5px;
        }
      }
    }
    .sore-box {
      position: absolute;
      bottom: 10px;
      left: 10px;
      display: flex;
      align-items: center;
      padding: 3px;
      border-radius: 16px;
      font-size: 10px;
      background: rgba(225, 225, 225, 0.9);

      .sore-point {
        margin-right: 10px;
      }
    }
  }
  .cell {
      display: flex;
      align-items: center;
      font-size: 10px;
      margin: 8px 0;

      .address {
        padding: 3px;
        margin-right: 8px;
        color: #fff;
        background: rgb(63, 73, 84);
      }
      .type {
        color: #666;
      }
      .label {
        padding: 3px;
        margin-right: 8px;
        color: rgb(255, 102, 102);
        background: rgba(255, 102, 102, 0.1);
      }
      .new-price {
        margin-right: 8px;
        font-size: 22px;
        color: var(--primary-color);
      }
      .old-price {
        margin-right: 8px;

        text-decoration: line-through;
        color: #999;
      }
      .notice {
        padding: 0 5px;
        border-radius: 16px;
        font-size: 8px;
        color: rgb(255, 255, 255);
        background: rgb(251, 74, 74);
      }
    }
    .name {
      width: 100%;
      font-size: 18px;
    }
}
</style>