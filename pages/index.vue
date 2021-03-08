<template>
  <div class="container">
    <picture>
      <source
        media="(min-width: 768px)"
        srcset="~/assets/images/banner-desktop.webp"
        class="img--fluid"
      />
      <img src="~/assets/images/banner-mobile.webp" alt="" class="img--fluid" />
    </picture>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
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
  computed: {},
}
</script>
