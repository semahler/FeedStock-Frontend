<template>
  <div v-if="notificationMessage" class="notification" :class="notificationClass">
    <button class="delete" @click="dismissNotification()" />

    <div>
      <p><strong>{{ notificationMessage }}</strong></p>
      <div v-if="notificationDetails.statusCode">
        <p>Status-Code {{ notificationDetails.statusCode }} ({{ notificationDetails.statusText }})</p>
        <p>{{ notificationDetails.errorMessage }}</p>
      </div>
    </div>
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
    notificationDetails () {
      return this.$store.getters['modules/notifications/getNotificationDetails']
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
