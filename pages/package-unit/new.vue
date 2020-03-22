<template>
  <div class="column">
    <h1 class="title is-3">
      Neue Packungseinheit anlegen
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
      packageUnit: {
        id: null,
        title: null
      }
    }
  },
  head () {
    return {
      title: 'Neue Packungseinheit anlegen'
    }
  }
}
</script>
