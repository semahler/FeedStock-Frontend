<template>
  <div class="column">
    {{ stockMovement }}
    <h1 class="title">
      Bestandsänderung
    </h1>
    <hr>
    <form @submit.prevent="createStockMovement">
      <div class="field">
        <label class="label">Hersteller</label>
        <div class="control">
          <div class="select is-fullwidth" :class="{'is-danger': $v.stockMovement.manufacturerId.$error, 'is-success': !$v.stockMovement.manufacturerId.$invalid}">
            <select v-model="stockMovement.manufacturerId" @change="getManufacturerFeeds($event)">
              <option value="">
                Bitte auswählen
              </option>
              <option v-for="manufacturer in manufacturers" :key="manufacturer.manufacturer_id" :value="manufacturer.manufacturer_id">
                {{ manufacturer.name }}
              </option>
            </select>
          </div>
          <p v-if="!$v.stockMovement.manufacturerId.required && $v.stockMovement.manufacturerId.$error" class="help is-danger">
            Bitte wählen Sie einen Hersteller aus
          </p>
        </div>
      </div>

      <div class="field">
        <label class="label">Futter</label>
        <div class="control">
          <div class="select is-fullwidth" :class="{'is-danger': $v.stockMovement.feedId.$error, 'is-success': !$v.stockMovement.feedId.$invalid}">
            <select v-model="stockMovement.feedId">
              <option value="">
                Bitte auswählen
              </option>
              <option v-for="feed in feeds" :key="feed.feed_id" :value="feed.feed_id">
                {{ feed.name }}
              </option>
            </select>
          </div>
          <p v-if="!$v.stockMovement.feedId.required && $v.stockMovement.feedId.$error" class="help is-danger">
            Bitte wählen Sie ein Futter aus
          </p>
        </div>
      </div>

      <div class="field">
        <label class="label">Menge</label>
        <div class="control">
          <!-- changed from v-model="$v.manufacturer.name.$model" to get blur-event working -->
          <input
            v-model="stockMovement.quantity"
            type="text"
            class="input"
            placeholder="Anzahl"
            :class="{'is-danger': $v.stockMovement.quantity.$error, 'is-success': !$v.stockMovement.quantity.$invalid}"
            @blur="$v.stockMovement.quantity.$touch()"
          >
          <p v-if="!$v.stockMovement.quantity.required && $v.stockMovement.quantity.$error" class="help is-danger">
            Bitte geben Sie eine Anzahl ein
          </p>
          <p v-else-if="!$v.stockMovement.integer && $v.stockMovement.quantity.$error" class="help is-danger">
            Bitte geben Sie eine Zahl größer als 1 ein
          </p>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <label class="radio">
            <input v-model="stockMovement.movement_type" type="radio" name="movement_type" value="+">
            Zugang
          </label>
          <label class="radio">
            <input v-model="stockMovement.movement_type" type="radio" name="movement_type" value="-">
            Abgang
          </label>
          <p v-if="!$v.stockMovement.movement_type.required && $v.stockMovement.movement_type.$error" class="help is-danger">
            Bitte wählen Sie einen Bewegungsart aus
          </p>
        </div>
      </div>

      <hr>
      <submit-reset-button-component />
    </form>
  </div>
</template>

<script>
import { required, integer, minValue } from 'vuelidate/lib/validators'
import SubmitResetButtonComponent from '@/components/form-components/SubmitResetButtonComponent'

export default {
  components: {
    SubmitResetButtonComponent
  },
  data () {
    return {
      manufacturers: [],
      feeds: [],
      stockMovement: {
        manufacturerId: null,
        feedId: null,
        quantity: null,
        movement_type: null
      }
    }
  },
  validations: {
    stockMovement: {
      manufacturerId: {
        required
      },
      feedId: {
        required
      },
      quantity: {
        required,
        integer,
        minValue: minValue(1)
      },
      movement_type: {
        required
      }
    }
  },
  mounted () {
    this.getManufacturers()
  },
  methods: {
    getManufacturers () {
      this.$axios.$get('http://localhost/api/manufacturers')
        .then((response) => {
          this.manufacturers = response
        })
    },
    getManufacturerFeeds (event) {
      this.$axios.$get('http://localhost/api/feedsByManufacturer/' + this.stockMovement.manufacturerId)
        .then((response) => {
          this.feeds = response
        })
    },
    createStockMovement (e) {
      this.$v.$touch() // Touch all form-elements to validate without user-interaction needed
      if (!this.$v.stockMovement.$invalid) {
        e.preventDefault()

        let quantity = this.$v.stockMovement.quantity.$model
        if (this.$v.stockMovement.movement_type.$model === '-') {
          quantity = -Math.abs(quantity)
        }

        const formData = new FormData()
        formData.set('feed_id', this.$v.stockMovement.feedId.$model)
        formData.set('quantity', quantity)

        this.$axios.post('http://localhost/api/stock_movement', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
          .then((response) => {
            this.$router.push({ name: 'inventory-overview' })
          })
          .catch((error) => {
            window.console.log(error)
          })
      }
    }
  },
  head () {
    return {
      title: 'Bestandsänderung'
    }
  }
}
</script>
