<template>
  <div class="column">
    <h1 class="title">
      Bestandsänderung
    </h1>
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
      title: 'Bestandsänderung'
    }
  }
}
</script>
