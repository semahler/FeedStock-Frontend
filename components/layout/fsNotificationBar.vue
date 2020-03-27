<template>
  <div v-if="notificationMessage" class="notification" :class="notificationClass">
    <button class="delete" @click="dismissNotification()" />
    {{ notificationMessage }}
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
