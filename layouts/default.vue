<template>
  <div>
    <fsNavbar />
    <section class="section">
      <div class="container">
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
import fsNavbar from '@/components/fsNavbar'
import fsMenu from '@/components/fsMenu'
import fsFooter from '@/components/fsFooter'

export default {
  components: {
    fsNavbar,
    fsMenu,
    fsFooter
  }
}
</script>
