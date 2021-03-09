export default (results) => {
  let items = []

  items = results.map((element) => {
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
