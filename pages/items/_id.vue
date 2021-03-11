<template>
  <div class="container main-container">
    <div class="product-detail-page">
      <div class="product-image">
        <img :src="product.picture" :alt="'Imagen ' + product.title" />
      </div>
      <div class="product-content">
        <p class="product-epigraph">
          {{ product.condition | translateCondition }}
          <span v-if="product.sold_quantity > 0">
            - {{ product.sold_quantity }} vendidos
          </span>
        </p>
        <h2>{{ product.title }}</h2>
        <div class="product-price__total">
          <span class="product-price__integer">{{
            product.price | formatMoney(false)
          }}</span>
          <span class="product-price__decimal">{{ formatDecimals() }}</span>
        </div>
        <button class="meli-btn meli-btn--buy" aria-label="Comprar">
          Comprar
        </button>
      </div>
      <div class="product-description">
        <h2>Descripción del producto</h2>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>
<script>
//  VUEX

import { API_ITEM } from '../../utils/api.js'

//  MIXINS
import TranslateCondition from '../../components/mixins/TranslateCondition.vue'
import FormatMoney from '../../components/mixins/FormatMoney.vue'

export default {
  name: 'ProductDetail',

  mixins: [FormatMoney, TranslateCondition],

  async asyncData({ $axios, params }) {
    if (params.id !== 0) {
      const api = API_ITEM + params.id

      const data = await $axios.get(api).then((response) => {
        const product = response.data.item
        const description = response.data.description
        return { product, description }
      })

      return {
        product: data.product,
        description: data.description,
      }
    }
  },

  data() {
    return {
      product: {},
      description: '',
      error: {},
    }
  },
  head() {
    return {
      title: 'MercadoLibre:' + this.product.title,
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

  mounted() {
    this.$store.commit('setCategories', this.product.categories)
  },

  methods: {
    formatDecimals() {
      return this.product.price.decimal.toLocaleString('es-AR', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })
    },

    translateCondition(condition) {
      let value = ''
      switch (condition) {
        case 'new':
          value = 'Nuevo'
          break

        case 'used':
          value = 'Usado'
          break

        default:
          value = 'Desconocido'
          break
      }
      return value
    },
  },
}
</script>
