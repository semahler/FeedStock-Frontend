<template>
  <div class="column">
    <h1 class="title">
      Futter Bearbeiten
    </h1>
    <hr>
    <feed-new-edit-form-component :feed="feed" />
  </div>
</template>

<script>
import FeedNewEditFormComponent from '@/components/forms/FeedNewEditFormComponent'

export default {
  components: {
    FeedNewEditFormComponent
  },
  data () {
    return {
      id: this.$route.params.id,
      feed: {
        feed_id: null,
        manufacturer_id: null,
        feed_type_id: null,
        package_unit_id: null,
        name: null,
        url: null
      }
    }
  },
  mounted () {
    this.getFeed()
  },
  methods: {
    getFeed () {
      this.$axios.$get('http://localhost/api/feeds/' + this.id)
        .then((response) => {
          this.feed = response
        })
    }
  },
  head () {
    return {
      title: 'Futter bearbeiten'
    }
  }
}
</script>
