<template>
  <div class="column">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <h1 class="title">
            {{ feed.name }}
          </h1>
        </div>
      </div>
      <div class="level-right">
        <p class="level-item">
          <span class="tag is-primary is-medium">{{ feed.stock_total }}</span>
        </p>
      </div>
    </div>
    <hr>
    <div class="content">
      <div>
        <span class="has-text-weight-bold">Futterart:</span>
        <span>{{ feed.feed_type_title }}</span>
      </div>
      <div>
        <span class="has-text-weight-bold">Verpackungseinheit:</span>
        <span>{{ feed.package_unit_title }}</span>
      </div>
      <div>
        <span class="has-text-weight-bold">Erstellt am:</span>
        <span>{{ feed.created_at | moment("DD.MM.YYYY, HH:mm") }} Uhr</span>
      </div>
      <div>
        <span class="has-text-weight-bold">zuletzt geändert:</span>
        <span>{{ feed.updated_at | moment("DD.MM.YYYY, HH:mm") }} Uhr</span>
      </div>
    </div>
    <hr>
    <h2 class="subtitle">
      Kommentare & Hinweise
    </h2>
    <div v-if="!comments.length" class="box comment">
      <article>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>Noch keine Kommentare</strong>
            </p>
          </div>
        </div>
      </article>
    </div>
    <div v-for="comment in comments" :key="comment.comment_id" class="box comment">
      <article>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ comment.created_at | moment("DD.MM.YYYY, HH:mm") }}</strong>
              <br>
              {{ comment.comment }}
            </p>
          </div>
        </div>
      </article>
    </div>
    <hr>
    <h2 class="subtitle">
      Letzte Bestandsänderungen
    </h2>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <!--<th>Art</th>-->
          <th>Datum</th>
          <th class="has-text-centered">
            Menge
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="stockMovement in stockMovements" :key="stockMovement.stock_movement_id">
          <!--<td></td>-->
          <td>{{ stockMovement.created_at | moment("DD.MM.YYYY") }}</td>
          <td class="has-text-centered">
            {{ stockMovement.quantity }}
          </td>
        </tr>
      </tbody>
    </table>
    <!--
    <hr>
  <h2 class="subtitle">
    weitere Futter des Herstellers
  </h2>
    <hr>
    <h2 class="subtitle">
      Statistik
    </h2>
    -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id,
      feed: [],
      stockMovements: [],
      comments: []
    }
  },
  mounted () {
    this.getFeedData()
  },
  methods: {
    getFeedData () {
      Promise.all([
        this.getFeed(),
        this.getStockMovements(),
        this.getComments()
      ])
    },
    getFeed () {
      this.$axios.$get('http://localhost/api/feeds/' + this.id)
        .then((response) => {
          this.feed = response
        })
    },
    getStockMovements () {
      this.$axios.$get('http://127.0.0.1/api/stock_movement/' + this.id)
        .then((response) => {
          this.stockMovements = response
        })
    },
    getComments () {
      this.$axios.$get('http://127.0.0.1/api/comments/' + this.id)
        .then((response) => {
          this.comments = response
        })
    }
  },
  head () {
    return {
      title: 'Futter'
    }
  }
}
</script>
