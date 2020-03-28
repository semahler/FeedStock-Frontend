<template>
  <div v-if="notificationMessage" class="notification" :class="notificationClass">
    <button class="delete" @click="dismissNotification()" />

    <div v-if="notificationClass === 'is-danger'">
      <p><strong>Beim Abfragen der Daten ist ein Fehler aufgetreten</strong></p>
      <p>StatusCode: {{ statusCode }}, {{ notificationMessage }}</p>
    </div>
    <div v-else-if="notificationClass === 'is-success'" />
  </div>
</template>

<script>
export default {
  computed: {
    notificationMessage () {
      return this.$store.getters['modules/notifications/getNotificationMessage']
    },
    notificationClass () {
      return this.$store.getters['modules/notifications/getNotificationClass']
    },
    statusCode () {
      return this.$store.getters['modules/notifications/getStatusCode']
    }
  },
  watch: {
    $route (to, from) {
      this.dismissNotification()
    }
  },
  methods: {
    dismissNotification () {
      this.$store.commit('modules/notifications/dismissNotification')
    }
  }
}
</script>
