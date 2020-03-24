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
import fsNavbar from '@/components/layout/fsNavbar'
import fsMenu from '@/components/layout/fsMenu'
import fsFooter from '@/components/layout/fsFooter'

export default {
  components: {
    fsNavbar,
    fsMenu,
    fsFooter
  }
}
</script>
