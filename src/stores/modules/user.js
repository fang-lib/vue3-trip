import { defineStore } from "pinia";

const useUser = defineStore('user', {
  state() {
    return {
      name: 'why'
    }
  }
})

export default useUser