class storage {
  setStorage(key, value) {
    if(typeof value == 'object') {
      value = JSON.stringify(value)
    }
    window.localStorage.setItem(key, value)
  }
  getStorage(key) {
    return JSON.parse(window.localStorage.getItem(key))
  }
  clearStorage() {
    window.clearStorage()
  }
}

export default new storage()