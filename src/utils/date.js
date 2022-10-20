import dayjs from "dayjs"

export function formatDate(date, formatString) {
  return dayjs(date).format(formatString)
}

export function diffDate(startDate, endDate) {
  return dayjs(endDate).diff(startDate, 'day')
}