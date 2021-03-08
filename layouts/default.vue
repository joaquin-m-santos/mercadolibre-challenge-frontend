<template>
  <div class="main-app">
    <header>
      <nav>
        <div class="nav__logo">
          <img
            src="~/assets/images/logo.png"
            class="img--fluid"
            alt="logo mercado libre"
          />
        </div>
        <search-bar></search-bar>
      </nav>
    </header>
    <main>
      <div class="container">
        <Nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'

export default {
  components: { 'search-bar': SearchBar },
}
</script>
