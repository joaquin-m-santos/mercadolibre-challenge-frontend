function ExceptionNoItemReturn() {
  this.status = 500
  this.message =
    'No se ha encontrado ningún producto con el parámetro solicitado.'
  this.name = 'ExceptionNoItemsReturn'
}
import formatPrice from '../../helpers/formatPrice.js'
import axios from 'axios'

export default (itemUrl) => {
  return axios.get(itemUrl).then((response) => {
    let data = response.data

    if (response.data.length == 0) {
      throw new ExceptionNoItemsReturn()
    }

    let item = {
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
      },
    }
    return item
  })
}
