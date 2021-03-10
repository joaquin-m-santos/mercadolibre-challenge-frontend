import { apiItem, apiItemDescription } from '../../helpers/endpoints.js'
import getItem from './getItemById.js'

export default async (id) => {
  const itemUrl = apiItem.replace(':id', id)
  const descriptionUrl = apiItemDescription.replace(':id', id)

  const item = getItem(itemUrl, descriptionUrl)
  // const description = getDescription(descriptionUrl)
  return item.then((values) => {
    return {
      author: {
        name: 'Joaquín',
        lastname: 'Santos',
      },
      item: values.item,
      description: values.description,
    }
  })
}
