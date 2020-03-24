<template>
  <div class="column">
    <h1 class="title">
      Neuen Hersteller anlegen
    </h1>
    <hr>
    <manufacturer-new-edit-form-component :manufacturer="manufacturer" />
  </div>
</template>

<script>
import ManufacturerNewEditFormComponent from '@/components/forms/ManufacturerNewEditFormComponent'

export default {
  components: {
    ManufacturerNewEditFormComponent
  },
  data () {
    return {
      manufacturer: {
        id: null,
        name: null,
        url: null,
        image: null
      }
    }
  },
  head () {
    return {
      title: 'Neuer Hersteller'
    }
  }
}
</script>
