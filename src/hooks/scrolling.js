import { ref, onMounted, onUnmounted, onActivated, onDeactivated } from "vue"

export const onScrolling = function(scrollToBottomCB) {
  // 滚动数据
  const scrollTop = ref(0)
  const scrollHeight = ref(0)
  const clientHeight = ref(0)

  const _scrolling = () => {
    scrollTop.value = document.documentElement.scrollTop
    scrollHeight.value = document.documentElement.scrollHeight
    clientHeight.value = document.documentElement.clientHeight
    if(scrollTop.value + clientHeight.value >= scrollHeight.value && scrollToBottomCB) {
      scrollToBottomCB()
    }
  }
  onActivated(() => {
    document.addEventListener('scroll', _scrolling)
  })
  onMounted(() => {
    document.addEventListener('scroll', _scrolling)
  })

  // 由于是监听窗口滚动，需要取消scroll事件的监听
  onUnmounted(() => {
    document.removeEventListener('scroll', _scrolling)
  })
  onDeactivated(() => {
    document.removeEventListener('scroll', _scrolling)
  })
  return { scrollTop, scrollHeight, clientHeight }
}