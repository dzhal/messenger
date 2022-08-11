export function first(list) {
  if (!Array.isArray(list)) {
    return undefined
  }
  if (list.length === 0) {
    return undefined
  }
  return list[0]
}