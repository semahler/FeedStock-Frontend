export const state = () => ({
  notificationMessage: null,
  notificationClass: null,
  statusCode: null
})

export const mutations = {
  setErrorNotification (state, payload) {
    state.notificationMessage = payload.errorMessage
    state.notificationClass = 'is-danger'
    state.statusCode = payload.errorStatusCode
  },
  setSuccessNotifiaction (state, payload) {

  },
  dismissNotification (state) {
    state.notificationMessage = null
    state.notificationClass = null
    state.statusCode = null
  }
}

export const getters = {
  getNotificationMessage (state) {
    return state.notificationMessage
  },
  getNotificationClass (state) {
    return state.notificationClass
  },
  getStatusCode (state) {
    return state.statusCode
  }
}

export const setters = {}
