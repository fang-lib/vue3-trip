<template>
  <div class="search">
    <van-search v-model="value" shape="round" show-action :placeholder="`搜索${searchStore.city}的景点、地标、房源`" @cancel="onBack" ></van-search>
  </div>
</template>

<script setup>
import useSearch from '@/stores/modules/search';
import { useRouter } from 'vue-router';

const searchStore = useSearch()
const router = useRouter()

function onBack() {
  router.back()
}

</script>

<style scoped>

</style>