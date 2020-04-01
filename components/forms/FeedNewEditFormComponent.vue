<template>
  <form @submit.prevent="createOrUpdateFeed">
    <input v-model="feed.feed_id" type="hidden">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <!-- changed from v-model="$v.manufacturer.name.$model" to get blur-event working -->
        <input
          v-model="feed.name"
          type="text"
          class="input"
          placeholder="Name"
          :class="{'is-danger': $v.feed.name.$error, 'is-success': !$v.feed.name.$invalid}"
          @blur="$v.feed.name.$touch()"
        >
        <p v-if="$v.feed.name.$error" class="help is-danger">
          Bitte geben Sie einen Namen ein
        </p>
      </div>
    </div>

    <div class="field">
      <label class="label">Hersteller</label>
      <div class="control">
        <div class="select is-fullwidth" :class="{'is-danger': $v.feed.manufacturer_id.$error, 'is-success': !$v.feed.manufacturer_id.$invalid}">
          <select v-model="feed.manufacturer_id">
            <option disabled value="">
              Bitte auswählen
            </option>
            <option
              v-for="manufacturer in manufacturers"
              :key="manufacturer.manufacturer_id"
              :value="manufacturer.manufacturer_id"
            >
              {{ manufacturer.name }}
            </option>
          </select>
        </div>
        <p v-if="!$v.feed.manufacturer_id.required && $v.feed.manufacturer_id.$error" class="help is-danger">
          Bitte wählen Sie einen Hersteller aus
        </p>
      </div>
    </div>

    <div class="field">
      <label class="label">Futterart</label>
      <div class="control">
        <div class="select is-fullwidth" :class="{'is-danger': $v.feed.feed_type_id.$error, 'is-success': !$v.feed.feed_type_id.$invalid}">
          <select v-model="feed.feed_type_id">
            <option disabled value="">
              Bitte auswählen
            </option>
            <option v-for="feedType in feedTypes" :key="feedType.feed_type_id" :value="feedType.feed_type_id">
              {{ feedType.title }}
            </option>
          </select>
        </div>
        <p v-if="!$v.feed.feed_type_id.required && $v.feed.feed_type_id.$error" class="help is-danger">
          Bitte wählen Sie eine Futterart aus
        </p>
      </div>
    </div>

    <div class="field">
      <label class="label">Verpackungseinheit</label>
      <div class="control">
        <div class="select is-fullwidth" :class="{'is-danger': $v.feed.package_unit_id.$error, 'is-success': !$v.feed.package_unit_id.$invalid}">
          <select v-model="feed.package_unit_id">
            <option value="">
              Bitte auswählen
            </option>
            <option v-for="packageUnit in packageUnits" :key="packageUnit.package_unit_id" :value="packageUnit.package_unit_id">
              {{ packageUnit.title }}
            </option>
          </select>
        </div>
        <p v-if="!$v.feed.package_unit_id.required && $v.feed.package_unit_id.$error" class="help is-danger">
          Bitte wählen Sie eine Verpackungseinheit aus
        </p>
      </div>
    </div>

    <div class="field">
      <label class="label">URL</label>
      <div class="control">
        <input
          v-model="feed.url"
          type="text"
          class="input"
          placeholder="URL"
          :class="{'is-danger': $v.feed.url.$error, 'is-success': !$v.feed.url.$invalid}"
          @blur="$v.feed.url.$touch()"
        >
        <p v-if="!$v.feed.url.required && $v.feed.url.$error" class="help is-danger">
          Bitte geben Sie eine URL ein
        </p>
        <p v-else-if="!$v.feed.url.url && $v.feed.url.$error" class="help is-danger">
          Sie haben keine gültige URL eingegeben
        </p>
      </div>
    </div>

    <hr>
    <submit-reset-button-component />
  </form>
</template>

<script>
import { required, url } from 'vuelidate/lib/validators'
import SubmitResetButtonComponent from '@/components/form-components/SubmitResetButtonComponent'
import { ERROR_TYPES } from '~/const'

export default {
  name: 'FeedNewEditComponent',
  components: {
    SubmitResetButtonComponent
  },
  props: {
    feed: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      manufacturers: [],
      feedTypes: [],
      packageUnits: []
    }
  },
  validations: {
    feed: {
      manufacturer_id: {
        required
      },
      feed_type_id: {
        required
      },
      package_unit_id: {
        required
      },
      name: {
        required
      },
      url: {
        required,
        url
      }
    }
  },
  mounted () {
    this.getFormData()
  },
  methods: {
    getFormData () {
      Promise.all([
        this.getManufacturer(),
        this.getFeedTypes(),
        this.getPackageUnits()
      ])
    },
    getManufacturer () {
      this.$axios.$get('http://localhost/api/manufacturers')
        .then((response) => {
          this.manufacturers = response
        })
        .catch((error) => {
          if (error.response) {
            this.showErrorNotification(ERROR_TYPES.REQUEST_ERROR, error.response)
          } else if (error.request) {
            this.showErrorNotification(ERROR_TYPES.CONNECTION_ERROR)
          } else {
            this.showErrorNotification(ERROR_TYPES.GENERAL_ERROR, error.message)
          }
        })
    },
    getFeedTypes () {
      this.$axios.$get('http://127.0.0.1/api/feed_types')
        .then((response) => {
          this.feedTypes = response
        })
        .catch((error) => {
          if (error.response) {
            this.showErrorNotification(ERROR_TYPES.REQUEST_ERROR, error.response)
          } else if (error.request) {
            this.showErrorNotification(ERROR_TYPES.CONNECTION_ERROR)
          } else {
            this.showErrorNotification(ERROR_TYPES.GENERAL_ERROR, error.message)
          }
        })
    },
    getPackageUnits () {
      this.$axios.$get('http://127.0.0.1/api/package_units')
        .then((response) => {
          this.packageUnits = response
        })
        .catch((error) => {
          if (error.response) {
            this.showErrorNotification(ERROR_TYPES.REQUEST_ERROR, error.response)
          } else if (error.request) {
            this.showErrorNotification(ERROR_TYPES.CONNECTION_ERROR)
          } else {
            this.showErrorNotification(ERROR_TYPES.GENERAL_ERROR, error.message)
          }
        })
    },
    createOrUpdateFeed (e) {
      this.$v.$touch() // Touch all form-elements to validate without user-interaction needed
      if (!this.$v.feed.$invalid) {
        e.preventDefault()

        const formData = new FormData()
        if (this.feed.feed_id) {
          formData.set('id', this.feed.feed_id)
        }
        formData.set('name', this.$v.feed.name.$model)
        formData.set('manufacturer_id', this.$v.feed.manufacturer_id.$model)
        formData.set('feed_type_id', this.$v.feed.feed_type_id.$model)
        formData.set('package_unit_id', this.$v.feed.package_unit_id.$model)
        formData.set('url', this.$v.feed.url.$model)

        this.$axios.post('http://localhost/api/feeds', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
          .then((response) => {
            this.$router.push({ name: 'feed' })
          })
          .catch((error) => {
            window.console.log(error)
          })
      }
    },
    showErrorNotification (errorType, errorDetails) {
      this.$store.commit('modules/notifications/setErrorNotificationData', { errorType, errorDetails })
    }
  }
}
</script>
