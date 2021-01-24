export function LOGIN(state, payload) {
  state.logged = payload
}

export function SET_USER(state, payload) {
  state.currentUser = Object.assign({}, state.user, payload)
}
