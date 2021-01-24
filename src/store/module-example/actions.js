import api from '../../services/api'

export function loginUser(context, payload) {
  return new Promise((resolve, reject) => {
    api
      .get(`/users?username=${payload.username}`)
      .then(res => {
        if (res.data.length > 0) {
          const user = res.data[0]
          if (payload.password === user.password) {
            context.commit('SET_USER', user)
            context.commit('LOGIN', true)
            resolve()
          } else {
            reject('Error')
          }
        }
      })
      .catch(err => {
        reject(err)
      })
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
