<template>
  <q-page padding>
    <h3>Vendas</h3>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  preFetch({ store, redirect }) {
    if (!store.state.example.logged) {
      redirect({ path: '/entrar' })
    }
  },
  name: 'Vendas',
  computed: {
    ...mapGetters('example', ['logged'])
  }
}
</script>
