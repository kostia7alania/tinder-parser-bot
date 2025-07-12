export const formatDateTime = (date?: number | string) => {
  if (!date) return ""
  return new Date(date).toLocaleString("ru-RU", {
    year: "numeric",
    day: "numeric",
    month: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
}

export const formatDate = (date?: number | string) => {
  if (!date) return ""
  return new Date(date).toLocaleString("ru-RU", {
    year: "numeric",
    day: "numeric",
    month: "numeric",
    hour12: false,
  })
}
