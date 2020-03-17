<template>
  <div class="column">
    <h1 class="title">
      {{ manufacturer.name }}
    </h1>
    <figure class="image is-128x128">
      <img :src="manufacturer.image">
    </figure>
    <hr>
    <h2 class="subtitle">
      Sortiment
    </h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id,
      manufacturer: [],
      feeds: []
    }
  },
  mounted () {
    this.getManufacturer()
    this.getFeedByManufacturerId(this.id)
  },
  methods: {
    getManufacturer () {
      this.$axios.$get('http://localhost/api/manufacturers/' + this.id)
        .then((response) => {
          this.manufacturer = response
        })
    },
    getFeedByManufacturerId (manufacturerId) {
      this.$axios.$get('http://localhost/api/manufacturers/' + this.id)
        .then((response) => {
          this.feeds = response
        })
    }
  },
  head () {
    return {
      title: 'Hersteller'
    }
  }
}
</script>
