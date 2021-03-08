<template>
  <nuxt-link :to="'/items/' + item.id" class="product-card">
    <div class="product-card__img-wrapper">
      <div class="product-card__img-wrapper-zoom">
        <img :src="item.picture" alt="imagen" class="img--fluid" />
      </div>
    </div>
    <div class="product-card__content-wrapper">
      <div class="product-card__header">
        <h2>
          {{ item.price | formatMoney }}
          <span v-if="item.free_shipping" class="meli-shipping--free">
            <i class="icon-truck"></i>
          </span>
        </h2>
        <p class="product-card__seller-state">{{ item.location }}</p>
      </div>
      <h3>{{ item.title }}</h3>
    </div>
  </nuxt-link>
</template>
<script>
import FormatMoney from './mixins/FormatMoney.vue'
import TranslateCondition from './mixins/TranslateCondition.vue'
export default {
  mixins: [FormatMoney, TranslateCondition],

  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>
