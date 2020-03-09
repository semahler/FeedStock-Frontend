<template>
  <div class="column">
    <h1 class="title">
      Section
    </h1>
    <h2 class="subtitle">
      A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
    </h2>
    <!--<font-awesome-icon :icon="['fab', 'github']" :class="['fa-2x']" />-->
    <logo />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  head () {
    return {
      title: 'Dashboard'
    }
  }
}
</script>
