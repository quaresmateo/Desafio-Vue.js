<template>
  <q-page>
    <Alert :active="alert">
      {{ message }}
    </Alert>
    <h2>Criar uma conta</h2>
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
          filled
          v-model="data.name"
          label="Nome completo"
        />
        <q-select
          class="q-mb-md"
          filled
          v-model="data.type"
          :options="types"
          label="Tipo"
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
          @click="logon()"
          label="Criar"
          color="primary"
        />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import Alert from 'components/Alert.vue'
export default {
  name: 'Logon',
  components: { Alert },
  data: () => ({
    data: {
      username: '',
      password: '',
      name: '',
      type: '',
      password: ''
    },
    types: [
      {
        label: 'Administrador',
        value: 'adm'
      },
      {
        label: 'Vendedor',
        value: 'seller'
      }
    ],
    message: '',
    alert: false
  }),
  methods: {
    logon() {
      this.$store
        .dispatch('example/createUser', this.data)
        .then(() => {
          this.$router.push('/')
        })
        .catch(() => {
          this.message = 'Ops, não foi possível realizar a operação'
          this.alert = true
        })
    }
  }
}
</script>
