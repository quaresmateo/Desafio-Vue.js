<template>
  <q-page class="flex"> index </q-page>
</template>

<script>
import api from '../services/api'

export default {
  name: 'PageIndex',
  data: () => ({ response: null }),
  beforeMount() {
    api
      .get('/posts')
      .then(response => {
        this.response = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
