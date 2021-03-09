<template>
  <div class="error-page">
    <img
      class="img--fluid"
      src="~/assets/images/error-icon.svg"
      alt="Imágen página error"
    />
    <h1 v-if="error.statusCode === 404">Página no encontrada</h1>
    <h1 v-else>Ups... Ocurrió un error</h1>
    <NuxtLink to="/">Volver a Home</NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'error', // you can set a custom layout for the error page
  props: {
    error: { type: Object, required: true },
  },
}
</script>
