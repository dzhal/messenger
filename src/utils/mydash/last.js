export function last(list) {
  if (!Array.isArray(list)) {
    return undefined
  }
  if (list.length === 0) {
    return undefined
  }
  return list[list.length - 1]
}