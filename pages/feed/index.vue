<template>
  <div class="column">
    <h1 class="title">
      Futter
    </h1>
    <div class="has-text-right">
      <button class="button is-small is-success has-text-right" @click="createFeed">
        <span class="icon is-small">
          <font-awesome-icon :icon="['fas', 'plus']" />
        </span>
        <span>Neu</span>
      </button>
    </div>
    <table class="table is-fullwidth is-hoverable">
      <thead>
        <tr>
          <th>Hersteller</th>
          <th>
            Bezeichnung
          </th>
          <th class="has-text-centered">
            Bestand
          </th>
          <th class="has-text-centered">
            Bewertung
          </th>
          <th class="has-text-centered">
            Aktionen
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(feed, index) in feeds" :key="feed.feed_id">
          <td>
            <nuxt-link :to="{ name: 'feed-id', params: { id: feed.feed_id }}">
              {{ feed.manufacturer_name }}
            </nuxt-link>
          </td>
          <td>
            {{ feed.name }}
          </td>
          <td class="has-text-centered">
            {{ feed.stock_total }}
          </td>
          <td class="has-text-centered">
            {{ feed.rating }}
          </td>
          <td class="has-text-centered">
            <button class="button is-small is-primary is-outlined" @click="editFeed(feed.feed_id)">
              <span class="icon is-small">
                <font-awesome-icon :icon="['fas', 'pen']" />
              </span>
            </button>

            <button
              class="button is-small is-danger is-outlined"
              :disabled="(feed.stock_total > 0)"
              @click="deleteFeed(feed.feed_id, index)"
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
import { ERROR_TYPES } from '~/const'

export default {
  data () {
    return {
      feeds: []
    }
  },
  created () {
    this.getFeeds()
  },
  methods: {
    getFeeds () {
      this.$axios.$get('http://localhost/api/feeds')
        .then((response) => {
          this.feeds = response
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
    createFeed () {
      this.$router.push({ name: 'feed-new' })
    },
    editFeed (feedId) {
      this.$router.push({ name: 'feed-edit-id', params: { id: feedId } })
    },
    deleteFeed (feedId, index) {
      this.$axios.$delete('http://localhost/api/feeds/' + feedId)
        .then((response) => {
          this.feeds.splice(index, 1)
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
    showErrorNotification (errorType, errorDetails) {
      this.$store.commit('modules/notifications/setErrorNotificationData', { errorType, errorDetails })
    }
  },
  head () {
    return {
      title: 'Futter'
    }
  }
}
</script>
