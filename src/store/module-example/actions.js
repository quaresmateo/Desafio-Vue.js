import api from '../../services/api'

export function loginUser(context, payload) {
  return api
    .get(`/users?username=${payload.username}`)
    .then(res => {
      if (res.data.length > 0) {
        const user = res.data[0]
        context.commit('SET_USER', user)
        context.commit('LOGIN', true)
      }
    })
    .catch(err => {
      return err
    })
}

export function createUser(context, payload) {
  return api
    .post('/users', payload)
    .then(res => {
      if (res.data) {
        const user = res.data
        context.commit('SET_USER', user)
        context.commit('LOGIN', true)
      }
    })
    .catch(err => {
      return err
    })
}
