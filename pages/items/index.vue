<template>
  <div class="product-list-page">
    <product-card v-for="item in products" :key="item.id" :item="item">
    </product-card>
  </div>
</template>
<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import ProductCard from '../../components/ProductCard'
export default {
  components: { 'product-card': ProductCard },
  data() {
    return {
      categories: [],
      apiItems: 'http://localhost:3000/api/items?q=value',
    }
  },

  async fetch({ store, query }) {
    console.log(query.search)
    const search = query.search
    if (search) {
      await store.dispatch('fetchProducts', search)
    }
  },

  head() {
    return {
      title: 'MercadoLibre',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Comprá en Mercado Libre en cuotas sin tarjeta Activá Mercado Crédito gratis. y 100% Online Activá Mercado Crédito y usalo para comprar en cuotas fijas en Mercado Libre Pagá en Cuotas con DNI Solo con DNI Sin bancos ni filas 100% Online Pagá en Mercado Libre',
        },
      ],
    }
  },

  computed: {
    ...mapState(['products']),
    ...mapGetters(['productsCount']),
    productsCount() {
      return this.products.length
    },
  },

  watchQuery(newQuery, oldQuery) {
    return newQuery.search !== oldQuery.search
  },

  methods: {
    ...mapActions(['fetchProducts']),
  },
}
</script>
