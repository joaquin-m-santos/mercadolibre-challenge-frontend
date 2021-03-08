<template>
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
      <h1>{{ product.price | formatMoney }}</h1>
      <button class="meli-btn meli-btn--buy">Comprar</button>
    </div>
    <div class="product-description">
      <h2>Descripción del producto</h2>
      <p>{{ description }}</p>
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

  methods: {
    getProduct() {},

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
