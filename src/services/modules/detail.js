import http from "@/services/request/index"

export const getDetail = (params) => http.get({url: '/detail/infos', params})