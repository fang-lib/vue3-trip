import http from "@/services/request/index"

export const getAllCity = () => http.get({url: '/city/all'})