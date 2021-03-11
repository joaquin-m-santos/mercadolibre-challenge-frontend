<template>
  <div class="form">
    <input
      v-model="query"
      type="text"
      placeholder="Buscar productos, marcas y más..."
      @keyup.enter="pushRoute"
    />
    <button class="nav__button" aria-label="Buscar" @click.prevent="pushRoute">
      <i class="icon-search"></i>
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SearchBar',
  data() {
    return {
      query: this.searchQuery || '',
    }
  },

  watch: {
    '$route.query.search'() {
      this.setDataByQueryString()
    },
    $route() {
      if (this.$route.name === 'index') {
        this.query = ''
      }
    },
  },

  mounted() {
    this.setDataByQueryString()
  },

  methods: {
    ...mapActions(['fetchProducts', 'pushRoute']),
    pushRoute() {
      if (this.query.trim().length > 0) {
        this.$router.push({
          path: '/items',
          query: { search: encodeURI(this.query) },
        })
      }
    },
    setDataByQueryString() {
      if (typeof this.$route.query.search === 'string') {
        if (this.query !== this.$route.query.search)
          this.query = decodeURI(this.$route.query.search)
      }
    },
  },
}
</script>
