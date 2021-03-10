import axios from 'axios'
import formatCategories from '../../helpers/formatCategories'

function formatItems(rawItems) {
  let items = []

  items = rawItems.map((element) => {
    return {
      id: element.id,
      title: element.title,
      price: {
        currency: element.currency_id,
        amount: Math.floor(element.price),
        decimal: Math.floor((element.price % 1) * 100),
      },
      picture: element.thumbnail,
      condition: element.condition,
      free_shipping: element.shipping.free_shipping,
      location: element.seller_address.state.name,
    }
  })

  return items
}

export default (urlSearch) => {
  return axios.get(urlSearch).then((val) => {
    const data = { ...val.data }

    const filter = data.filters.find((filter) => {
      return filter.id === 'category'
    })

    let categoriesArray = []

    if (filter) {
      categoriesArray = formatCategories(filter.values[0])
    }

    return {
      categories: categoriesArray,
      items: formatItems(data.results),
    }
  })
}
