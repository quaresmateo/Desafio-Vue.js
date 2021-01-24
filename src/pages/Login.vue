<template>
  <q-page padding>
    <h2>Login</h2>
    <q-card class="my-card" style="max-width: 500px">
      <q-card-section>
        <q-input
          class="q-mb-md"
          filled
          v-model="data.username"
          label="Nome de usuário"
        />
        <q-input
          class="q-mb-md"
          type="password"
          filled
          v-model="data.password"
          label="Senha"
        />
      </q-card-section>
      <q-btn @click="login()" label="Entrar" color="primary" />
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    data: {
      username: '',
      password: ''
    }
  }),
  computed: {
    logged() {
      return this.$store.state.example.logged
    }
  },
  methods: {
    login() {
      this.$store.dispatch('actions/loginUser', this.data)
    }
  }
}
</script>
