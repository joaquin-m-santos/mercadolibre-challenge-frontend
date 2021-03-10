import { apiItems } from '../../helpers/endpoints.js'
import formatCategories from '../../helpers/formatCategories.js'
import formatItems from './formatItems.js'
import axios from 'axios'

export default (queryValue) => {
  const url = apiItems.replace(':query', encodeURI(queryValue))

  // find element on filters with id === 'category' and return their first group of values

  return axios.get(url).then((val) => {
    const data = { ...val.data }

    const filter = data.filters.find((filter) => {
      return filter.id === 'category'
    })

    let categoriesArray = []

    if (filter) {
      categoriesArray = formatCategories(filter.values[0])
    }

    const result = {
      author: {
        name: 'Joaquín',
        lastname: 'Santos',
      },
      categories: categoriesArray,
      items: formatItems(data.results),
    }
    return result
  })
}
