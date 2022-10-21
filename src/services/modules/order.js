import http from "@/services/request/index"
export const getOrderList = (params) => http.get({url: '/order/list', params})