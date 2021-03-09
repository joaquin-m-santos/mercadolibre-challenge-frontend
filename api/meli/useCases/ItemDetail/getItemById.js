function ExceptionNoItemReturn() {
  this.status = 500
  this.message =
    'No se ha encontrado ningún producto con el parámetro solicitado.'
  this.name = 'ExceptionNoItemsReturn'
}
import formatPrice from '../../helpers/formatPrice.js'
import axios from 'axios'
import { apiCategory } from '../../helpers/endpoints.js'
import formatCategories from '../../helpers/formatCategories.js'

export default async (itemUrl) => {
  const data = await axios.get(itemUrl).then((response) => {
    if (response.data.length == 0) {
      throw new ExceptionNoItemsReturn()
    }
    return response.data
  })

  const url = apiCategory.replace(':category', data.category_id)
  const categories = await axios.get(url).then((response) => {
    return formatCategories(response.data)
  })

  return {
    author: {
      name: 'Joaquín',
      lastname: 'Santos',
    },
    item: {
      id: data.id,
      title: data.title,
      price: { ...formatPrice(data.currency_id, data.price) },
      picture: data.pictures[0].secure_url,
      condition: data.condition,
      free_shipping: data.shipping.free_shipping,
      sold_quantity: data.sold_quantity,
      categories: categories,
    },
  }
}
