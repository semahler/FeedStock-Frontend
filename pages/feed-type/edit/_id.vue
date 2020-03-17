<template>
  <div class="column">
    <h1 class="title">
      Futterart bearbeiten
    </h1>
    <hr>
    <feed-type-new-edit-form-component :feed-type="feedType" />
  </div>
</template>

<script>
import FeedTypeNewEditFormComponent from '@/components/forms/FeedTypeNewEditFormComponent'

export default {
  components: {
    FeedTypeNewEditFormComponent
  },
  data () {
    return {
      id: this.$route.params.id,
      feedType: {
        id: null,
        title: null
      }
    }
  },
  mounted () {
    this.getFeedType()
  },
  methods: {
    getFeedType () {
      this.$axios.$get('http://127.0.0.1/api/food_types/' + this.id)
        .then((response) => {
          this.feedType = response
        })
    }
  },
  head () {
    return {
      title: 'Futterart bearbeiten'
    }
  }
}
</script>
