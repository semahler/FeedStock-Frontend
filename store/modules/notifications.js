export const state = () => ({
  notificationMessage: null,
  notificationClass: null
})

export const mutations = {
  setNotificationMessage (state, payload) {
    state.notificationMessage = payload.notificationMessage
    state.notificationClass = payload.notificationClass
  },
  dismissNotification (state) {
    state.notificationMessage = null
    state.notificationClass = null
  }
}

export const getters = {
  getNotificationMessage (state) {
    return state.notificationMessage
  },
  getNotificationClass (state) {
    return state.notificationClass
  }
}

export const setters = {}
