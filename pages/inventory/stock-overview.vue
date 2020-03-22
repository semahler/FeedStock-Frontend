<template>
  <div class="column">
    <h1 class="title is-3">
      Gesamtbestand
    </h1>
    <table class="table is-fullwidth is-hoverable">
      <thead>
        <tr>
          <th>Name/Bezeichnung</th>
          <th class="has-text-centered">
            Gesamtbestand
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="feed in feeds" :key="feed.feed_id">
          <td>
            {{ feed.manufacturer_name }} {{ feed.name }}
          </td>
          <td class="has-text-centered" :class="[feed.stock_total < 3 ? 'has-background-danger' : (feed.stock_total < 5 ? 'has-background-warning' : '')]">
            {{ feed.stock_total }}
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
      feeds: []
    }
  },
  created () {
    this.getFeeds()
  },
  methods: {
    getFeeds () {
      this.$axios.$get('http://127.0.0.1/api/feeds')
        .then((response) => {
          this.feeds = response
        })
    }
  },
  head () {
    return {
      title: 'Gesamtbestand'
    }
  }
}
</script>
