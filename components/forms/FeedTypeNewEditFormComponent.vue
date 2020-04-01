<template>
  <form @submit.prevent="createOrUpdateFeedType">
    <input v-model="feedType.feed_type_id" type="hidden">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <!-- changed from v-model="$v.feed_type.title.$model" to get blur-event working -->
        <input
          v-model="feedType.title"
          type="text"
          class="input"
          placeholder="Futterart"
          :class="{'is-danger': $v.feedType.title.$error, 'is-success': !$v.feedType.title.$invalid}"
          @blur="$v.feedType.title.$touch()"
        >
        <p v-if="$v.feedType.title.$error" class="help is-danger">
          Bitte geben Sie eine Bezeichnung für die Futterart ein
        </p>
      </div>
    </div>

    <hr>
    <submit-reset-button-component />
  </form>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import SubmitResetButtonComponent from '@/components/form-components/SubmitResetButtonComponent'
import { ERROR_TYPES } from '~/const'

export default {
  name: 'FeedTypeNewEditFormComponent',
  components: {
    SubmitResetButtonComponent
  },
  props: {
    feedType: {
      type: Object,
      default: null
    }
  },
  validations: {
    feedType: {
      title: {
        required
      }
    }
  },
  methods: {
    createOrUpdateFeedType (e) {
      this.$v.$touch() // Touch all form-elements to validate without user-interaction needed
      if (!this.$v.feedType.$invalid) {
        e.preventDefault()

        const formData = new FormData()
        if (this.feedType.feed_type_id) {
          formData.set('id', this.feedType.feed_type_id)
        }
        formData.set('title', this.$v.feedType.title.$model)

        this.$axios.post('http://localhost/api/feed_types', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
          .then((response) => {
            this.$router.push({ name: 'feed-type' })
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
      }
    },
    showErrorNotification (errorType, errorDetails) {
      this.$store.commit('modules/notifications/setErrorNotificationData', { errorType, errorDetails })
    }
  }
}
</script>
