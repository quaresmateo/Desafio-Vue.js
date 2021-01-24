<template>
  <q-page padding>
    <h2>Dashboard</h2>
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
  name: 'Dashboard',
  computed: {
    ...mapGetters('example', ['logged'])
  }
}
</script>
