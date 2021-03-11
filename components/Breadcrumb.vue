<template>
  <div v-if="crumbs.length > 0" class="breadcrumb-nav">
    <ul class="container">
      <li v-for="(crumb, index) of crumbs" :key="index">
        <nuxt-link
          :to="{ path: '/items', query: { search: encodeURI(crumb) } }"
          :aria-label="'Ver categoria: ' + crumb"
          >{{ crumb }}</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Breadcrumb',

  props: {
    crumbs: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
}
</script>
