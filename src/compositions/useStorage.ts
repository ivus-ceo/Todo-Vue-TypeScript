import useIsJson from '@/compositions/useIsJson'
import type StorageInterface from '@/interfaces/Storage'

const useStorage: StorageInterface = (key, value): unknown => {
  // Return item in storage, if there is no value
  if (!value) {
    const data = localStorage.getItem(key)

    if (data === null) return data
    if (useIsJson(data)) return JSON.parse(data)

    return data
  }

  // Convert objects and arrays to JSON
  if (typeof value === 'object') value = JSON.stringify(value)
  // Convert numbers to string
  if (typeof value === 'number') value = String(value)

  return localStorage.setItem(key, value)
}

export default useStorage
