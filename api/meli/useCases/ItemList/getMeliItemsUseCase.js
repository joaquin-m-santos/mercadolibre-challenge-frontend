import { apiItems } from '../../helpers/endpoints.js'
import formatCategories from './formatCategories.js'
import formatItems from './formatItems.js'
import axios from 'axios'

export default (queryValue) => {
  const url = apiItems.replace(':query', queryValue)

  return axios.get(url).then((val) => {
    const data = { ...val.data }
    const result = {
      author: {
        name: 'Joaquín',
        lastname: 'Santos',
      },
      categories: formatCategories(data.filters),
      items: formatItems(data.results),
    }
    return result
  })
}
