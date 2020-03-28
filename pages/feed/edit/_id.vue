<template>
  <div class="column">
    <h1 class="title">
      Futter Bearbeiten
    </h1>
    <hr>
    <feed-new-edit-form-component :feed="feed" />
  </div>
</template>

<script>
import FeedNewEditFormComponent from '@/components/forms/FeedNewEditFormComponent'
import { ERROR_TYPES } from '~/const'

export default {
  components: {
    FeedNewEditFormComponent
  },
  data () {
    return {
      id: this.$route.params.id,
      feed: {
        feed_id: null,
        manufacturer_id: null,
        feed_type_id: null,
        package_unit_id: null,
        name: null,
        url: null
      }
    }
  },
  mounted () {
    this.getFeed()
  },
  methods: {
    getFeed () {
      this.$axios.$get('http://localhost/api/feeds/' + this.id)
        .then((response) => {
          this.feed = response
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
      title: 'Futter bearbeiten'
    }
  }
}
</script>
