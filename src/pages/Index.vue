<template>
  <q-page class="flex"> index </q-page>
</template>

<script>
import api from '../services/api'
import { mapGetters } from 'vuex'

export default {
  preFetch({ store, redirect }) {
    if (!store.state.example.logged) {
      redirect({ path: '/Entrar' })
    }
    redirect({ path: '/Vendas' })
  },
  name: 'PageIndex',
  data: () => ({ response: null }),
  beforeMount() {
    api
      .get('/posts')
      .then(response => {
        this.response = response.data
      })
      .catch(error => {
        console.log('Ops! Ocorreu um erro :(')
      })
  },
  computed: {
    ...mapGetters('example', ['logged'])
  }
}
</script>
