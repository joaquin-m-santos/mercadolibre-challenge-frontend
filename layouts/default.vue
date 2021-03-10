<template>
  <div class="main-app">
    <header>
      <nav>
        <div class="nav__logo">
          <nuxt-link to="/">
            <img
              src="~/assets/images/logo.png"
              class="img--fluid"
              alt="logo mercado libre"
            />
          </nuxt-link>
        </div>
        <search-bar></search-bar>
      </nav>
    </header>
    <bread-crumb :crumbs="categories"></bread-crumb>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SearchBar from '../components/SearchBar.vue'
import Breadcrumb from '../components/Breadcrumb.vue'

export default {
  components: { 'search-bar': SearchBar, 'bread-crumb': Breadcrumb },
  computed: {
    ...mapState(['categories']),
  },
}
</script>
