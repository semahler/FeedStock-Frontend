<template>
  <div class="column">
    <h1 class="title">
      Packungseinheiten
    </h1>
    <div class="has-text-right">
      <button class="button is-small is-success has-text-right" @click="createPackageUnit">
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
            Aktionen
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(packageUnit, index) in packageUnits" :key="packageUnit.package_unit_id">
          <td>
            {{ packageUnit.title }}
          </td>
          <td class="has-text-centered">
            <button class="button is-small is-primary is-outlined" @click="editPackageUnit(packageUnit.package_unit_id)">
              <span class="icon is-small">
                <font-awesome-icon :icon="['fas', 'pen']" />
              </span>
            </button>

            <button class="button is-small is-danger is-outlined" @click="deletePackageUnit(packageUnit.package_unit_id, index)">
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
      packageUnits: []
    }
  },
  created () {
    this.getPackageUnits()
  },
  methods: {
    getPackageUnits () {
      this.$axios.$get('http://127.0.0.1/api/package_units')
        .then((response) => {
          this.packageUnits = response
        })
    },
    createPackageUnit () {
      this.$router.push({ name: 'package-unit-new' })
    },
    editPackageUnit (packageUnitId) {
      this.$router.push({ name: 'package-unit-edit-id', params: { id: packageUnitId } })
    },
    deletePackageUnit (packageUnitId, index) {
      this.$axios.$delete('http://127.0.0.1/api/package_units/' + packageUnitId)
        .then((response) => {
          this.packageUnits.splice(index, 1)
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
