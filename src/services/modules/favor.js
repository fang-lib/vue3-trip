import http from "@/services/request/index"

export const getFavorList = () => http.get({url: '/favor/list'})
export const getFavorHistory = () => http.get({url: '/favor/history'})