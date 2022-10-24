import { defineStore } from "pinia";

const useCommon = defineStore('common', {
  state() {
    return {
      isLoading: false
    }
  }
})

export default useCommon