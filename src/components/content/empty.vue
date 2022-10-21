<template>
  <div class="empty">
    <img class="empty-img" src="@/assets/img/favor/empty_favorite.44731802.png" />
    <div class="empty-text">暂无数据</div>
    <div class="solid-btn" @click="onGoClick">随便去逛逛</div>
  </div>
</template>

<script setup>
const emits = defineEmits(['onGoClick'])
function onGoClick() {
  emits('onGoClick')
}
</script>

<style lang="less" scoped>
.empty {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 335px;
  height: 0px;
  margin: auto auto;

  .empty-img {
    width: 100%;
    height: 244px;
  }
  .empty-text {
    margin-bottom: 20px;
    font-size: 18px;
  }
  .solid-btn {
    width: 156px;
  }
}
</style>