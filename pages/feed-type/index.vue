<template>
  <div class="column">
    <h1 class="title is-3">
      Futterarten
    </h1>
    <div class="has-text-right">
      <button class="button is-small is-success has-text-right" @click="createFeedType">
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
        <tr v-for="(feedType, index) in feedTypes" :key="feedType.feed_type_id">
          <td>
            {{ feedType.title }}
          </td>
          <td class="has-text-centered">
            <button class="button is-small is-primary is-outlined" @click="editFeedType(feedType.feed_type_id)">
              <span class="icon is-small">
                <font-awesome-icon :icon="['fas', 'pen']" />
              </span>
            </button>

            <button class="button is-small is-danger is-outlined" @click="deleteFeedType(feedType.feed_type_id, index)">
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
      feedTypes: []
    }
  },
  created () {
    this.getFeedTypes()
  },
  methods: {
    getFeedTypes () {
      this.$axios.$get('http://127.0.0.1/api/feed_types')
        .then((response) => {
          this.feedTypes = response
        })
    },
    createFeedType () {
      this.$router.push({ name: 'feed-type-new' })
    },
    editFeedType (feedTypeId) {
      this.$router.push({ name: 'feed-type-edit-id', params: { id: feedTypeId } })
    },
    deleteFeedType (feedTypeId, index) {
      this.$axios.$delete('http://127.0.0.1/api/feed_types/' + feedTypeId)
        .then((response) => {
          this.feedTypes.splice(index, 1)
        })
    }
  },
  head () {
    return {
      title: 'Futterarten'
    }
  }
}
</script>
