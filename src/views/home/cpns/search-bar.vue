<template>
  <div class="search-bar">
    <div class="time-box">
      <div class="time-cell">
        <span class="time-cell_label">住</span>
        <span class="item-cell_value">{{ day.formatDate(startDate, 'MM.DD') }}</span>
      </div>
      <div class="time-cell">
        <span class="time-cell_label">离</span>
        <span class="item-cell_value">{{ day.formatDate(endDate, 'MM.DD') }}</span>
      </div>
    </div>
    <van-cell-group inset>
      <van-field disabled right-icon="search" placeholder="关键词/位置/民宿"></van-field>
    </van-cell-group>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia"
import useSearch from "@/stores/modules/search.js"
const { startDate, endDate } = storeToRefs(useSearch())
</script>

<style lang="less" scoped>
.search-bar {
  position: fixed;
  top: 0;
  display: flex;
  align-items: stretch;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  background: #fff;

  .time-box {
    padding: 8px;
    border-radius: 6px 0 0 6px;
    background: #f2f4f6;
    font-size: 14px;

    .time-cell_label {
      margin-right: 3px;
      color: #666;
    }
  }
  :deep(.van-cell-group) {
    flex: 1;
  }
  :deep(.van-cell ){
    align-items: center;
    height: 100%;
    background: #f2f4f6;
  }
  :deep(.van-cell-group--inset) {
    border-radius: 0 8px 8px 0;
    margin: 0 0 0 5px;
  }
  :deep(.van-field__control) {
    font-size: 16px;
  }
}
</style>