import { API_ITEMS } from '../utils/api.js'

export const state = () => {
  return {
    products: [],
    categories: [],
    loading: false,
  }
}
export const getters = {
  productsCount: (state) => {
    return state.products.length
  },
}
export const mutations = {
  setLoading(state, val = false) {
    if (!(typeof val === 'boolean')) {
      state.loading = !state.loading
    } else {
      state.loading = val
    }
  },
  setList(state, list) {
    state.products = list
  },
  setProduct(state, product) {
    state.product = product
  },
}
export const actions = {
  fetchProducts({ commit }, query) {
    commit('setLoading', true)

    const api = API_ITEMS.replace('value', query)
    return this.$axios
      .get(api)
      .then((val) => {
        commit('setList', val.data.items, val.data.categories)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        commit('setLoading', false)
      })
  },
}
