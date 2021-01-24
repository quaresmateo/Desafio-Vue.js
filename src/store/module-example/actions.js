import api from '../../services/api'

export async function loginUser(context, payload) {
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
      console.log(err)
    })
}
