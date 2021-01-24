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
    <h3>Criar uma conta</h3>
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
      <q-card-actions align="center">
        <q-btn
          to="/entrar"
          class="q-px-md"
          size="sm"
          flat
          label="Ou, entrar no sistema"
          color="primary"
        />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'Logon',
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
          this.alert = !this.alert
        })
        .catch(() => {
          this.message = 'Ops, não foi possível realizar a operação'
          this.alert = !this.alert
        })
    }
  }
}
</script>
