import { ERROR_TYPES, ERROR_MESSAGES } from '~/const'

export const state = () => ({
  notificationMessage: null,
  notificationDetails: {
    statusCode: null,
    statusText: null,
    errorMessage: null
  },
  notificationClass: null
})

export const mutations = {
  setErrorNotificationData (state, payload) {
    state.notificationClass = 'is-danger'

    switch (payload.errorType) {
      case ERROR_TYPES.REQUEST_ERROR:
        state.notificationMessage = ERROR_MESSAGES.REQUEST_ERROR
        state.notificationDetails.statusCode = payload.errorDetails.status
        state.notificationDetails.statusText = payload.errorDetails.statusText
        state.notificationDetails.errorMessage = payload.errorDetails.data.message
        break
      case ERROR_TYPES.CONNECTION_ERROR:
        state.notificationMessage = ERROR_MESSAGES.CONNECTION_ERROR
        break
      case ERROR_TYPES.GENERAL_ERROR:
        state.notificationMessage = ERROR_MESSAGES.GENERAL_ERROR
    }
  },
  setSuccessNotifiaction (state, payload) {

  },
  dismissNotification (state) {
    state.notificationMessage = null
    state.notificationClass = null
    state.notificationDetails.statusCode = null
    state.notificationDetails.statusText = null
    state.notificationDetails.errorMessage = null
  }
}

export const getters = {
  getNotificationMessage (state) {
    return state.notificationMessage
  },
  getNotificationClass (state) {
    return state.notificationClass
  },
  getNotificationDetails (state) {
    return state.notificationDetails
  }
}

export const setters = {}
