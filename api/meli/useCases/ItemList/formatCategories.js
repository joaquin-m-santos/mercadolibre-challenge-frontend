export default (filters) => {
  let categories = []

  filters.forEach((filter) => {
    if (filter.id === 'category') {
      filter.values[0].path_from_root.forEach((category) => {
        categories.push(category.name)
      })
    }
  })

  return categories
}
