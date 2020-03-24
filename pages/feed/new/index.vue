<template>
  <div class="column">
    <h1 class="title">
      Neues Futter anlegen
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
  head () {
    return {
      title: 'Neues Futter'
    }
  }
}
</script>
