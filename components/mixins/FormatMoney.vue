<script>
export default {
  filters: {
    formatMoney: (price, withDecimals = true) => {
      let finalAmount = price.amount

      const hasDecimals = price.decimal === 0 && withDecimals

      if (hasDecimals) {
        finalAmount = price.amount + price.decimal / 100
      }

      const options = {
        style: 'currency',
        currency: price.currency,
        minimumFractionDigits: hasDecimals ? 2 : 0,
        useGrouping: true,
      }
      return new Intl.NumberFormat('es-AR', options).format(finalAmount)
    },
  },
}
</script>
