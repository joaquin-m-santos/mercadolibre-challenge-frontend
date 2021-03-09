export default (filter) => {
  let categories = []

  filter.path_from_root.forEach((category) => {
    categories.push(category.name)
  })

  return categories
}
