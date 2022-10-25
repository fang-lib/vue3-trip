<template>
  <div class="search-result">
    <z-navbar>
      <template #title>
        <div class="title-box">
          <div class="title-address">{{ searchStore.city }}</div>
            <div class="title-time_box">
              <div class="time-cell">
              <span class="time-cell_label">住</span>
              <span class="item-cell_value">{{ formatDate(searchStore.startDate, 'MM.DD') }}</span>
            </div>
            <div class="time-cell">
              <span class="time-cell_label">离</span>
              <span class="item-cell_value">{{ formatDate(searchStore.endDate, 'MM.DD') }}</span>
            </div>
          </div>
          <div class="title-desc over-one_ell" @click="toSearch">{{ searchStore.address || '搜索博尔塔拉的景点、地标、房源' }}</div>
        </div>
      </template>
    </z-navbar>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import useSearch from "@/stores/modules/search"
import zNavbar from "@/components/common/z-navbar.vue"
import { formatDate } from "@/utils/date";

const router = useRouter()
const route = useRoute()
const searchStore = useSearch()

function toSearch() {
  router.push({
    path: '/search',
    query: {
      address: route.query.address,
      startDate: route.query.startDate,
      endDate: route.query.endDate
    }
  })
}
</script>

<style lang="less" scoped>
.title-box {
  display: flex;
  align-items: stretch;
  width: 100%;
  font-size: 14px;
  color: #333;

  .title-address {
    padding: 7px;
    background: #f2f4f6;
  }
  .title-time_box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3px;
    margin-left: 3px;
    background: #f2f4f6;
    font-size: 10px;

    .time-cell_label {
      margin-right: 3px;
      color: #666;
    }
  }
  .title-desc {
    flex: 1;
    margin-left: 3px;
    padding: 5px;
    padding-top: 8px;
    text-align: left;
    color: #999;
    background: #f2f4f6;
  }
}

:deep(.van-nav-bar) {
  line-height: 1 !important;
}
:deep(.van-nav-bar__title ) {
  flex: 1;
}
</style>