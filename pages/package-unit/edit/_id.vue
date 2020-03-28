<template>
  <div class="column">
    <h1 class="title is-3">
      Packungseinheit bearbeiten
    </h1>
    <hr>
    <package-unit-new-edit-form-component :package-unit="packageUnit" />
  </div>
</template>

<script>
import PackageUnitNewEditFormComponent from '@/components/forms/PackageUnitNewEditFormComponent'
import { ERROR_TYPES } from '~/const'

export default {
  components: {
    PackageUnitNewEditFormComponent
  },
  data () {
    return {
      id: this.$route.params.id,
      packageUnit: {
        id: null,
        title: null
      }
    }
  },
  mounted () {
    this.getPackageUnit()
  },
  methods: {
    getPackageUnit () {
      this.$axios.$get('http://127.0.0.1/api/package_units/' + this.id)
        .then((response) => {
          this.packageUnit = response
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
      title: 'Packungseinheit bearbeiten'
    }
  }
}
</script>
