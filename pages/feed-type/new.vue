<template>
  <div class="column">
    <h1 class="title is-3">
      Neue Futterart anlegen
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
      feedType: {
        id: null,
        title: null
      }
    }
  },
  head () {
    return {
      title: 'Neue Futterart anlegen'
    }
  }
}
</script>
