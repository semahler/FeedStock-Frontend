<template>
  <div class="column">
    <h1 class="title is-3">
      Hersteller
    </h1>
    <div class="has-text-right">
      <button class="button is-small is-success has-text-right" @click="createManufacturer">
        <span class="icon is-small">
          <font-awesome-icon :icon="['fas', 'plus']" />
        </span>
        <span>Neu</span>
      </button>
    </div>
    <table class="table is-fullwidth is-hoverable">
      <thead>
        <tr>
          <th>Name</th>
          <th class="has-text-centered">
            Anzahl Futter
          </th>
          <th class="has-text-centered">
            Aktionen
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(manufacturer, index) in manufacturers" :key="manufacturer.manufacturer_id">
          <td>
            <nuxt-link :to="{ name: 'manufacturer-id', params: { id: manufacturer.manufacturer_id }}">
              {{ manufacturer.name }}
            </nuxt-link>
          </td>
          <td class="has-text-centered">
            {{ manufacturer.feed_count }}
          </td>
          <td class="has-text-centered">
            <button class="button is-small is-primary is-outlined" @click="editManufacturer(manufacturer.manufacturer_id)">
              <span class="icon is-small">
                <font-awesome-icon :icon="['fas', 'pen']" />
              </span>
            </button>

            <button
              class="button is-small is-danger is-outlined"
              :disabled="(manufacturer.feed_count > 0)"
              @click="deleteManufacturer(manufacturer.manufacturer_id, index)"
            >
              <span class="icon is-small">
                <font-awesome-icon :icon="['fas', 'trash']" />
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      manufacturers: []
    }
  },
  created () {
    this.getManufacturers()
  },
  methods: {
    getManufacturers () {
      this.$axios.$get('http://localhost/api/manufacturers')
        .then((response) => {
          this.manufacturers = response
        })
    },
    createManufacturer () {
      this.$router.push({ name: 'manufacturer-new' })
    },
    editManufacturer (manufacturerId) {
      this.$router.push({ name: 'manufacturer-edit-id', params: { id: manufacturerId } })
    },
    deleteManufacturer (manufacturerId, index) {
      this.$axios.$delete('http://localhost/api/manufacturers/' + manufacturerId)
        .then((response) => {
          this.manufacturers.splice(index, 1)
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
