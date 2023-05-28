export default interface StorageInterface {
  (key: string, value?: string | number | object | null): unknown
}
