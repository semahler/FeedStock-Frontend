<template>
  <div class="column">
    <h1 class="title is-3">
      Hersteller Bearbeiten
    </h1>
    <hr>
    <manufacturer-new-edit-form-component :manufacturer="manufacturer" />
  </div>
</template>

<script>
import ManufacturerNewEditFormComponent from '@/components/forms/ManufacturerNewEditFormComponent'
import { ERROR_TYPES } from '~/const'

export default {
  components: {
    ManufacturerNewEditFormComponent
  },
  data () {
    return {
      id: this.$route.params.id,
      manufacturer: {
        id: null,
        name: null,
        url: null,
        image: null
      }
    }
  },
  mounted () {
    this.getManufacturer()
  },
  methods: {
    getManufacturer () {
      this.$axios.$get('http://localhost/api/manufacturers/' + this.id)
        .then((response) => {
          this.manufacturer = response
        })
        .catch((error) => {
          if (error.response) {
            this.showErrorNotification(ERROR_TYPES.REQUEST_ERROR, error.response)
          } else if (error.request) {
            this.showErrorNotification(ERROR_TYPES.CONNECTION_ERROR)
          } else {
            this.showErrorNotification(ERROR_TYPES.GENERAL_ERROR, error.message)
          }
        })
    },
    showErrorNotification (errorType, errorDetails) {
      this.$store.commit('modules/notifications/setErrorNotificationData', { errorType, errorDetails })
    }
  },
  head () {
    return {
      title: 'Hersteller bearbeiten'
    }
  }
}
</script>
