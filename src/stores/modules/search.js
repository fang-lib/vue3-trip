import { defineStore } from "pinia";

const useSearch = defineStore('search', {
  state() {
    return {
      city: '广州',
      cityInfo: {},
      startDate: 0,
      endDate: 0
    }
  }
})

export default useSearch