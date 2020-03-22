<template>
  <div class="column">
    <h1 class="title is-3">
      Hersteller Bearbeiten
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
      id: this.$route.params.id,
      manufacturer: {
        id: null,
        name: null,
        url: null,
        image: null
      }
    }
  },
  mounted () {
    this.getManufacturer()
  },
  methods: {
    getManufacturer () {
      this.$axios.$get('http://localhost/api/manufacturers/' + this.id)
        .then((response) => {
          this.manufacturer = response
        })
    }
  },
  head () {
    return {
      title: 'Hersteller bearbeiten'
    }
  }
}
</script>
