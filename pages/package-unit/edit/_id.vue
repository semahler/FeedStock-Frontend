<template>
  <div class="column">
    <h1 class="title is-3">
      Packungseinheit bearbeiten
    </h1>
    <hr>
    <package-unit-new-edit-form-component :package-unit="packageUnit" />
  </div>
</template>

<script>
import PackageUnitNewEditFormComponent from '@/components/forms/PackageUnitNewEditFormComponent'

export default {
  components: {
    PackageUnitNewEditFormComponent
  },
  data () {
    return {
      id: this.$route.params.id,
      packageUnit: {
        id: null,
        title: null
      }
    }
  },
  mounted () {
    this.getPackageUnit()
  },
  methods: {
    getPackageUnit () {
      this.$axios.$get('http://127.0.0.1/api/package_units/' + this.id)
        .then((response) => {
          this.packageUnit = response
        })
    }
  },
  head () {
    return {
      title: 'Packungseinheit bearbeiten'
    }
  }
}
</script>
