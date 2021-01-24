<template>
  <q-page>
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Aviso</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ message }}
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            @click="!alert"
            flat
            label="OK"
            color="primary"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
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
      <q-card-actions align="center">
        <q-btn
          to="/criar-conta"
          class="q-px-md"
          size="sm"
          flat
          label="Não tem conta? Crie uma agora"
          color="primary"
        />
      </q-card-actions>
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
    },
    message: '',
    alert: false
  }),
  computed: {
    logged() {
      return this.$store.state.example.logged
    }
  },
  methods: {
    login() {
      this.$store
        .dispatch('example/loginUser', this.data)
        .then(() => {
          this.$router.push('/')
          this.alert = !this.alert
        })
        .catch(() => {
          this.message = 'Email ou usuário incorreto'
          this.alert = !this.alert
        })
    }
  }
}
</script>
