import { apiItems } from '../../helpers/endpoints.js'
import getSearchedItems from './getSearchedItems.js'

export default async (queryValue) => {
  const url = apiItems.replace(':query', encodeURI(queryValue))

  // find element on filters with id === 'category' and return their first group of values
  const items = getSearchedItems(url)
  return items.then((values) => {
    return {
      author: {
        name: 'Joaquín',
        lastname: 'Santos',
      },
      items: values.items,
      categories: values.categories,
    }
  })
}
