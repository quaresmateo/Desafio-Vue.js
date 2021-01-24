<template>
  <q-page class="flex"> index </q-page>
</template>

<script>
import api from '../services/api'

export default {
  preFetch({ store, redirect }) {
    if (!store.state.state.logged) {
      redirect({ path: '/entrar' })
    }
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
  }
}
</script>
