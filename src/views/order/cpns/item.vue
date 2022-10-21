<template>
  <div class="item">
    <div class="item-header">
      <div class="item-header_title over-one_ell">{{ info.unitName }}</div>
      <div :class="['item-status', info.orderStatus === 1 ? 'item-status_pending' : 'item-status_cancel' ]">{{ info.orderStatusDesc }}</div>
    </div>
    <div class="item-content_box">
      <img class="item-content_bg" :src="info.unitPicture" />
      <div class="item-content">
        <div class="start-box">
          <div class="start-date">{{ day.formatDate(`${info.checkInDate}`, 'M月DD日') }}</div>
          <div class="start-time">{{ day.formatWeekday(info.checkInDate) }}{{ info.checkInLatestTime }}</div>
        </div>
        <img class="content-icon" src="@/assets/img/order/icon_right_orderlist.png" />
        <div class="start-box end-box">
          <div class="start-date">{{ day.formatDate(`${info.checkOutDate}`, 'M月DD日') }}</div>
          <div class="start-time">{{ day.formatWeekday(info.checkOutDate) }}{{ info.checkOutLatestTime }}</div>
        </div>
        <div class="price-box">
          <div class="price-label">支付总价</div>
          <div class="price-value">¥{{ info.prepayAmount }}</div>
        </div>
      </div>
    </div>
    <div v-if="info.orderStatus === 1" class="item-footer">
      <div class="btn-box">
        <div class="hollow-btn">联系房东</div>
        <div class="solid-btn">去支付</div>
      </div>
      <div class="footer-status_box">
        <img class="status-icon" src="@/assets/img/order/icon-time.png" />
        <span class="status-min">0分</span>
        <div class="status-text">{{ info.summary }}</div>
      </div>
    </div>
    <div v-else class="item-footer">
      <div class="btn-box">
        <div class="hollow-btn">删除</div>
        <div class="solid-btn">再次预定</div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  info: {
    type: Object,
    defaulte: () => ({})
  }
})
</script>

<style lang="less" scoped>
.item {
  margin: 10px 0;
  background: #fff;
  padding: 20px;

  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;

    .item-header_title {
      width: 204px;
    }
    .item-status {
      font-size: 18px;
    }
    .item-status_pending {
      color: var(--primary-color);
    }
    .item-status_cancel {
      color: rgb(178, 178, 178);
    }
  }
  .item-content_box {
    position: relative;
    height: 223px;
    margin: 20px 0;
    border-radius: 14px;
    overflow: hidden;

    .item-content_bg {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .item-content {
      box-sizing: border-box;
      position: absolute;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 60px;
      padding: 0 20px;
      font-size: 12px;
      color: #fff;
      background: rgba(9, 10, 14, 0.7);

      .content-icon {
        width: 16px;
        height: 12px;
        // margin: 0 20px;
      }
      .start-box {
        .start-date {
          font-size: 16px;
          margin-bottom: 6px;
        }
      }
      .end-box {
        padding-right: 15px;
        border-right: 1px solid #fff;
      }
      .price-box {
        text-align: center;
        .price-label {
          margin-bottom: 6px;
        }
        .price-value {
          font-size: 16px;
          color: var(--primary-color);
        }
      }
    }
  }
  .item-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;

    .footer-status_box {
      display: flex;
      align-content: center;
      font-size: 11px;
      color: #666;

      .status-icon {
        width: 11px;
        height: 11px;
        margin-right: 3px;
      }
      .status-min {
        color: var(--primary-color);
      }
    }
    .btn-box {
      display: flex;
      align-items: center;

      div {
        width: 75px;
        line-height: 34px;
        border-radius: 6px;
        font-size: 14px;
      }
      .solid-btn {
        margin-left: 8px;
      }
    }

  }
}
</style>