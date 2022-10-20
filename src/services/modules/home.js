import http from "@/services/request/index"
// 热门建议
export const getHotSuggests = () => http.get({url: '/home/hotSuggests'})
// 推荐类别
export const getCategory = () => http.get({url: '/home/categories'})
// 房屋列表
export const getHouseList = (params) => http.get({url: '/home/houselist', params})
