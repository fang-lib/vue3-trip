<template>
  <div class="recommend-item">
    <div class="item-header">
      <div class="header-line"></div>
      <div class="header-title">{{ title }}</div>
      <div class="operator-box">
        <div class="operator-text">{{ operatorText }}</div>
        <van-icon v-if="name" :name="name" size="16" @click="onClick" />
        <template v-else>
          <i v-show="isOpen" class="operator-icon operator-icon_col" @click="isOpen = !isOpen"></i>
          <i v-show="!isOpen" class="operator-icon operator-icon_open" @click="isOpen = !isOpen"></i>
        </template>
      </div>
    </div>
    <div class="key-word_box" :style="{maxHeight: isOpen ? 'auto' : '60px'}">
      <template v-for="word in keyWords" :key="word">
        <div class="word" :style="{background: color}" @click="itemClick(word)">{{ word }}</div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const emits = defineEmits(['onClick', 'itemClick'])

defineProps({
  color: {
    type: String,
    default: '#f0f3f6'
  },
  name: {
    type: String,
    default: ''
  },
  operatorText: {
    type: String,
    default: '展开'
  },
  title: {
    type: String,
    default: ''
  },
  keyWords: {
    type: Array,
    default: () => []
  }
})

const isOpen = ref(false)

function onClick() {
  emits('onClick')
}

function itemClick(word) {
  emits('itemClick', word)
}
</script>

<style lang="less" scoped>
.recommend-item {
  padding: 20px;
}
.item-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  .header-line {
    width: 3px;
    height: 15px;
    margin-right: 5px;
    background: var(--primary-color);
  }
  .header-title {
    flex: 1;
    font-size: 16px;
  }
  .operator-box {
    display: flex;
    align-items: center;

    .operator-text {
      margin-right: 5px;
      font-size: 12px;
    }
    .operator-icon {
      width: 20px;
      height: 11px;
      transform: scale(70%);
      background: url(@/assets/img/sprite.png) no-repeat;
    }
    .operator-icon_col {
      background-position: -23px -196px;
    }
    .operator-icon_open {
      background-position: -47px -196px;
    }
  }
}
.key-word_box {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;

    .word {
      padding: 5px 8px;
      margin-bottom: 10px;
      margin-right: 8px;
      font-size: 12px;
      border-radius: 16px;
    }
  }
</style>