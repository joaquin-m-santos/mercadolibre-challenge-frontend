export default (currency_id, price)=>{
  return {
    currency: currency_id,
    amount: Math.floor(price),
    decimal: Math.floor((price % 1) * 100)
  }
}