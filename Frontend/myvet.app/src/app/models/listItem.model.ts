export interface ListItemModel {
  price_data: {
    currency: string,
    product_data: {
      name: string,
      images: []
    },
    unit_amount: number
  },
  quantity: number
}