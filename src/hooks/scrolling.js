import { ref, onMounted, onUnmounted, onActivated, onDeactivated } from "vue"

export const onScrolling = function(scrollToBottomCB, elRef) {
  let el = window
  // 滚动数据
  const scrollTop = ref(0)
  const scrollHeight = ref(0)
  const clientHeight = ref(0)

  const _scrolling = () => {

    if(el === window) {
      scrollTop.value = document.documentElement.scrollTop
      scrollHeight.value = document.documentElement.scrollHeight
      clientHeight.value = document.documentElement.clientHeight
    } else {
      scrollTop.value = el.scrollTop
      scrollHeight.value = el.scrollHeight
      clientHeight.value = el.clientHeight
    }
   
    if(scrollTop.value + clientHeight.value >= scrollHeight.value && scrollToBottomCB) {
      scrollToBottomCB()
    }
  }
  onActivated(() => {
    if(elRef) el = elRef.value
    el.addEventListener('scroll', _scrolling)
  })
  onMounted(() => {
    if(elRef) el = elRef.value
    el.addEventListener('scroll', _scrolling)
  })

  // 由于是监听窗口滚动，需要取消scroll事件的监听
  onUnmounted(() => {
    el.removeEventListener('scroll', _scrolling)
  })
  onDeactivated(() => {
    el.removeEventListener('scroll', _scrolling)
  })
  return { scrollTop, scrollHeight, clientHeight }
}