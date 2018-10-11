export const getItem = (key) => {
  return localStorage.getItem(key)
}
export const setItem = (key, value) => {
  JSON.stringify(value)
  localStorage.setItem(key, value)
}
export const cleanItem = (key) => {
  localStorage.cleanItem(key)
}
