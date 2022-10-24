<template>
  <div class="loading">
    <div class="loading-img_box">
      <img class="loading-img" src="@/assets/img/home/full-screen-loading.gif" />
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.loading {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(46, 46, 46, 0.2);
  z-index: 1;

  .loading-img_box {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto auto;
    display: flex;
    // align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    background: url(../../assets/img/home/loading-bg.png) no-repeat center;
    background-size: contain;

    .loading-img {
      margin-top: 15px;
      width: 75%;
      height: 70%;
    }
  }
}
</style>