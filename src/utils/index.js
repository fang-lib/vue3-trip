import * as dateFns from "@/utils/date"

export const registerDateFns = (app) => {
  app.config.globalProperties.day = dateFns
}