<template>
  <q-page padding>
    <h2>Medicamentos</h2>
  </q-page>
</template>

<script>
export default {
  preFetch({ store, redirect }) {
    if (!store.state.state.logged) {
      redirect({ path: '/entrar' })
    }
  },
  name: 'Medicaments'
}
</script>
