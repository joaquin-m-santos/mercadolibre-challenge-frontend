<template>
  <div class="product-list-page">
    <product-card v-for="item in products" :key="item.id" :item="item">
    </product-card>
    <no-items-found v-if="products.length == 0" />
  </div>
</template>
<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import ProductCard from '../../components/ProductCard'
import NoItemsFound from '../../components/NoItemsFound'
export default {
  components: { 'product-card': ProductCard, 'no-items-found': NoItemsFound },
  data() {
    return {
      apiItems: 'http://localhost:3000/api/items?q=value',
    }
  },

  async fetch({ store, query }) {
    const search = query.search
    if (typeof search === 'string') {
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
    ...mapState(['products', 'categories']),
    ...mapGetters(['productsCount']),
  },

  watchQuery(newQuery, oldQuery) {
    return newQuery.search !== oldQuery.search
  },

  methods: {
    ...mapActions(['fetchProducts']),
  },
}
</script>
