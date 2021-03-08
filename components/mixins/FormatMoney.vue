<script>
export default {
  filters: {
    formatMoney: function (price) {
      let finalAmount = price.amount
      if (price.decimals === 0) {
        finalAmount = price.amount + price.decimals / 100
      }
      return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: price.currency,
      }).format(finalAmount)
    },
  },
}
</script>
