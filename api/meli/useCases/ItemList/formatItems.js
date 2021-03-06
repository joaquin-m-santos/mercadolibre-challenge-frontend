function ExceptionNoItemsReturn() {
  this.status = 500; 
  this.message = 'No se han encontrado resultados';
  this.name = "ExceptionNoItemsReturn";
}

export default (results) => {
  if( results.length == 0){
    throw new ExceptionNoItemsReturn
  }

  let items = results.map( (element)=>{
    return {
      id: element.id,
      title: element.title,
      price: {
        currency: element.currency_id,
        amount: Math.floor(element.price),
        decimal: Math.floor((element.price % 1) * 100)
      },
      picture: element.thumbnail,
      condition: element.condition,
      free_shipping: element.shipping.free_shipping
    }
  });

  return items;
}