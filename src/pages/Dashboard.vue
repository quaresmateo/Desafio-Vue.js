<template>
  <q-page padding>
    <h2>Dashboard</h2>
  </q-page>
</template>

<script>
export default {
  preFetch({ store, redirect }) {
    if (!store.state.state.logged) {
      redirect({ path: '/entrar' })
    }
  },
  name: 'Dashboard',
  computed: {
    logged() {
      return this.$store.state.state.logged
    }
  }
}
</script>
