import { apiItem, apiItemDescription } from '../../helpers/endpoints.js'
import getItem from './getItemById.js'
import getDescription from './getDescriptionById.js'

export default async (id) => {
  const itemUrl = apiItem.replace(':id', id)
  const descriptionUrl = apiItemDescription.replace(':id', id)

  const item = getItem(itemUrl)
  const description = getDescription(descriptionUrl)

  return Promise.all([item, description]).then((values) => {
    console.log(values)
    return {
      ...values[0],
      description: values[1],
    }
  })
}
