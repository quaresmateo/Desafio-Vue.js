<template>
  <q-page-container>
    <h2>Entrar no sistema</h2>
    <q-card
      bordered
      flat
      class="my-card q-px-lg q-py-lg"
      style="max-width: 500px"
    >
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
      <q-card-actions align="center">
        <q-btn
          class="q-px-md"
          size="md"
          @click="login()"
          label="Entrar"
          color="primary"
        />
      </q-card-actions>
    </q-card>
  </q-page-container>
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
      this.$store.dispatch('example/loginUser', this.data).then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>
