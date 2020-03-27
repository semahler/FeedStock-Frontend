<template>
  <div>
    <fsNavbar />
    <section class="section">
      <div class="container">
        <fs-notification-bar />
        <div class="columns">
          <fsMenu />
          <nuxt />
        </div>
      </div>
    </section>
    <fsFooter />
  </div>
</template>

<script>
import fsNotificationBar from '@/components/layout/fsNotificationBar'
import fsNavbar from '@/components/layout/fsNavbar'
import fsMenu from '@/components/layout/fsMenu'
import fsFooter from '@/components/layout/fsFooter'

export default {
  components: {
    fsNavbar,
    fsNotificationBar,
    fsMenu,
    fsFooter
  }
}
</script>
