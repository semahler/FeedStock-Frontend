<template>
  <div class="column">
    <h1 class="title">
      Futter-Arten
    </h1>
    <h2 class="subtitle">
      A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
    </h2>
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
      title: 'Futterarten'
    }
  }
}
</script>
