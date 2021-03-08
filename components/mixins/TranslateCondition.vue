<script>
export default {
  filters: {
    translateCondition(condition) {
      switch (condition) {
        case 'new':
          return 'Nuevo'
          break

        case 'used':
          return 'Usado'
          break

        default:
          return 'Desconocido'
          break
      }
    },
  },
}
</script>
