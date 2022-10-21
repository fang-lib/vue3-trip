<template>
  <div class="message">
    <z-navbar title="消息中心"></z-navbar>
    <!-- 空状态 -->
    <div class="empty-box">
      <img class="empty-img" src="@/assets/img/message/icon_message.png" />
      <div class="empty-text">暂无聊天消息</div>
    </div>
  </div>
</template>

<script setup>
import zNavbar from "@/components/common/z-navbar.vue"

</script>

<style lang="less" scoped>
.empty-box {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 360px;
  width: 330px;
  margin: auto auto;

  .empty-img {
    width: 330px;
    height: 260px;
  }
  .empty-text {
    text-align: center;
  }
}
</style>