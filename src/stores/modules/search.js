import { defineStore } from "pinia";

const useSearch = defineStore('search', {
  state() {
    return {
      city: '广州',
      cityInfo: {}
    }
  }
})

export default useSearch