import api from '../../services/api'

export function loginUser(context, payload) {
  return api
    .get(`/users?username=${payload.username}`)
    .then(res => {
      if (res.data.length > 0) {
        console.log(res.data[0])
      }
    })
    .catch(err => {
      console.log(err)
    })
}
