<template>
  <q-page padding>
    <h2>Medicamentos</h2>
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
  name: 'Medicaments',
  data: () => ({}),
  computed: {
    ...mapGetters('example', ['logged', 'me'])
  }
}
</script>
