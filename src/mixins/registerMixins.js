import state from '../store/module-example'

export const RegisterMixin = {
  data() {
    return {
      logged: false
    }
  },

  created() {
    this.register()
  },

  methods: {
    register() {
      new Registration().register().then(response => {
        this.logged = state.example.logged
      })
    }
  }
}
