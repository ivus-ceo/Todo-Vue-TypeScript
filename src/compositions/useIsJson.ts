const isJson = (key: string): boolean => {
  try {
    JSON.parse(key)
  } catch (error) {
    return false
  }

  return true
}

export default isJson
