import http from "@/services/request/index"
export const getSearchKeyWord = () => http.get({url: '/search/top'})