<template>
  <form @submit.prevent="createOrUpdatePackageUnit">
    <input v-model="packageUnit.package_unit_id" type="hidden">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <!-- changed from v-model="$v.package_unit.title.$model" to get blur-event working -->
        <input
          v-model="packageUnit.title"
          type="text"
          class="input"
          placeholder="Packungseinheit"
          :class="{'is-danger': $v.packageUnit.title.$error, 'is-success': !$v.packageUnit.title.$invalid}"
          @blur="$v.packageUnit.title.$touch()"
        >
        <p v-if="$v.packageUnit.title.$error" class="help is-danger">
          Bitte geben Sie eine Bezeichnung für die Verpackungseinheit ein
        </p>
      </div>
    </div>

    <hr>
    <submit-reset-button-component />
  </form>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import SubmitResetButtonComponent from '@/components/form-components/SubmitResetButtonComponent'

export default {
  name: 'PackageUnitNewEditFormComponent',
  components: {
    SubmitResetButtonComponent
  },
  props: {
    packageUnit: {
      type: Object,
      default: null
    }
  },
  validations: {
    packageUnit: {
      title: {
        required
      }
    }
  },
  methods: {
    createOrUpdatePackageUnit (e) {
      this.$v.$touch() // Touch all form-elements to validate without user-interaction needed
      if (!this.$v.packageUnit.$invalid) {
        e.preventDefault()

        const formData = new FormData()
        if (this.packageUnit.package_unit_id) {
          formData.set('id', this.packageUnit.package_unit_id)
        }
        formData.set('title', this.$v.packageUnit.title.$model)

        this.$axios.post('http://localhost/api/package_units', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
          .then((response) => {
            this.$router.push({ name: 'package-unit' })
          })
          .catch((error) => {
            window.console.log(error)
          })
      }
    }
  }
}
</script>
