interface IpageStatus {
  [key: string]: boolean
}
interface IPageStatusWithValues {
  [key: string]: number | string
}

export const pageStatus: IpageStatus = {
  'Laptop': false,
  'Phone': false,
  'Tablet': false,
  'Headphones': false,
  'Watch': false,
  'Apple': false,
  'Samsung': false,
  'Xiaomi': false,
  'Lenovo': false,
  'Huawei': false,
  'XiaomiPoco': false,
  'cardViewMore': false,
  'cardViewLess': false,
}

export const PageStatusWithValues: IPageStatusWithValues = {  
  'minPrice': 0,
  'maxPrice': 4500,
  'minPriceRange': 0,
  'maxPriceRange': 4500,
  'minStock': 1,
  'maxStock': 100,
  'minStockRang': 1,
  'maxStockRang': 100,
  'sortType': 'Сортировать по',
  'searchValue': '',
}
