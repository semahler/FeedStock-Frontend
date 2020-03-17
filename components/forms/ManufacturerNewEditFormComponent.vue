<template>
  <form @submit.prevent="createOrUpdateManufacturer">
    <input v-model="manufacturer.manufacturer_id" type="hidden">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <!-- changed from v-model="$v.manufacturer.name.$model" to get blur-event working -->
        <input
          v-model="manufacturer.name"
          type="text"
          class="input"
          placeholder="Name"
          :class="{'is-danger': $v.manufacturer.name.$error, 'is-success': !$v.manufacturer.name.$invalid}"
          @blur="$v.manufacturer.name.$touch()"
        >
        <p v-if="$v.manufacturer.name.$error" class="help is-danger">
          Bitte geben Sie einen Namen ein
        </p>
      </div>
    </div>

    <div class="field">
      <label class="label">URL</label>
      <div class="control">
        <input
          v-model="manufacturer.url"
          type="text"
          class="input"
          placeholder="URL"
          :class="{'is-danger': $v.manufacturer.url.$error, 'is-success': !$v.manufacturer.url.$invalid}"
          @blur="$v.manufacturer.url.$touch()"
        >
        <p v-if="!$v.manufacturer.url.required && $v.manufacturer.url.$error" class="help is-danger">
          Bitte geben Sie eine URL ein
        </p>
        <p v-else-if="!$v.manufacturer.url.url && $v.manufacturer.url.$error" class="help is-danger">
          Sie haben keine gültige URL eingegeben
        </p>
      </div>
    </div>

    <div class="field">
      <label class="label">Bild/Logo</label>
      <div class="control">
        <div class="file has-name is-fullwidth" :class="{'is-danger': $v.manufacturer.image.$error, 'is-success': !$v.manufacturer.image.$invalid}">
          <label class="file-label">
            <input
              ref="file"
              type="file"
              class="file-input"
              @change="setUploadFile()"
            >
            <span class="file-cta">
              <span class="file-icon">
                <font-awesome-icon :icon="['fas', 'file-upload']" />
              </span>
              <span class="file-label">
                Hochladen
              </span>
            </span>
            <span class="file-name">{{ (manufacturer.image) ? manufacturer.image.name : 'Kein Bild ausgewählt' }}</span>
          </label>
        </div>
      </div>
      <p v-if="!$v.manufacturer.image.required && $v.manufacturer.image.$error" class="help is-danger">
        Bitte wählen Sie ein Bild zum Upload aus
      </p>
    </div>

    <hr>

    <div class="field is-grouped">
      <div class="control">
        <button id="register_submit" type="submit" class="button is-primary">
          Absenden
        </button>
      </div>
      <div class="control">
        <button type="reset" class="button is-light">
          Zurücksetzen
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { required, url } from 'vuelidate/lib/validators'

export default {
  name: 'ManufacturerNewEditComponent',
  props: {
    manufacturer: {
      type: Object,
      default: null
    }
  },
  validations: {
    manufacturer: {
      name: {
        required
      },
      url: {
        required,
        url
      },
      image: {
        required
      }
    }
  },
  methods: {
    createOrUpdateManufacturer (e) {
      this.$v.$touch() // Touch all form-elements to validate without user-interaction needed
      if (!this.$v.manufacturer.$invalid) {
        e.preventDefault()

        const formData = new FormData()
        if (this.manufacturer.manufacturer_id) {
          formData.set('id', this.manufacturer.manufacturer_id)
        }
        formData.set('name', this.$v.manufacturer.name.$model)
        formData.set('url', this.$v.manufacturer.url.$model)
        formData.set('image', this.$v.manufacturer.image.$model)

        this.$axios.post('http://localhost/api/manufacturers', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
          .then((response) => {
            this.$router.push({ name: 'manufacturer' })
          })
          .catch((error) => {
            window.console.log(error)
          })
      }
    },
    setUploadFile () {
      this.manufacturer.image = this.$refs.file.files[0]
    }
  }
}
</script>
