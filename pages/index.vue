<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">mercadolibre-challenge-frontend</h1>
      {{ post[0].title }}
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: [],
    }
  },

  async fetch() {
    await this.$axios
      .get('https://api.nuxtjs.dev/posts')
      .then((res) => (this.post = res.data))
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
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
