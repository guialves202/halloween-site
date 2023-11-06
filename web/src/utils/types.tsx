export enum Categories {
  VASSOURA = 'VASSOURA',
  CHAPEU = 'CHAPEU',
  ABOBORA = 'ABOBORA',
  CALDEIRAO = 'CALDEIRAO'
}

export type ProductModel = {
  id: string
  name: string
  description: string
  price: number
  imageFilename: string
  category: Categories
}
