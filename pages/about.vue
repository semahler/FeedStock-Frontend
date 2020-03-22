<template>
  <div class="column">
    <div class="page-logo">
      <fs-logo />
    </div>
    <h2 class="title is-4 is-spaced">
      Keep track of feedstack
    </h2>
    <h2 class="subtitle is-4">
      Behalten Sie den Überblick über den Futterbestand Ihres Haustieres und Verwalten Sie Hersteller,
      Futter und weitere Informationen zur Haustierverpflegung
    </h2>
    <hr>
    <div class="content">
      <a href="https://github.com/semahler/feedStock-api" target="_blank">
        <h2 class="subtitle is-5 is-spaced">
          <font-awesome-icon :icon="['fab', 'github']" :class="['has-text-primary']" />
          FeedStock-API @GitHub
        </h2>
      </a>

      <a href="https://github.com/semahler/feedStock-frontend" target="_blank">
        <h2 class="subtitle is-5">
          <font-awesome-icon :icon="['fab', 'github']" :class="['has-text-primary']" />
          FeedStock-Frontend @GitHub
        </h2>
      </a>
    </div>
  </div>
</template>

<script>
import fsLogo from '@/components/layout/fsLogo.vue'

export default {
  components: {
    fsLogo
  },
  head () {
    return {
      title: 'Über'
    }
  }
}
</script>
