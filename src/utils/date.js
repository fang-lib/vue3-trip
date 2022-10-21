import dayjs from "dayjs"

export function formatDate(date, formatString) {
  return dayjs(date).format(formatString)
}

export function diffDate(startDate, endDate, formatStr) {
  return dayjs(endDate).diff(startDate, formatStr)
}
export function formatWeekday(date) {
  const list = ['一', '二', '三', '四', '五', '六', '七']
  let num = new Date(date).getDay() + 1
  return `周${list[num]}`
}