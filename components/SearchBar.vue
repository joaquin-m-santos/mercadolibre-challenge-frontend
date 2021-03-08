<template>
  <form>
    <input
      v-model="query"
      type="text"
      placeholder="Buscar productos, marcas y más..."
    />
    <button class="nav__button" @click.prevent="changeQueryString">
      <i class="icon-search"></i>
    </button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SearchBar',
  data() {
    return {
      query: this.searchQuery,
    }
  },

  mounted() {
    if (typeof this.$route.query.search === 'string') {
      this.query = this.$route.query.search
    }
  },
  methods: {
    ...mapActions(['fetchProducts']),
    changeQueryString() {
      this.$router.push({ path: '/items', query: { search: this.query } })
    },
  },
}
</script>
