<template>
  <div class="column">
    <h1 class="title">
      Hersteller
    </h1>

    <table class="table">
      <tbody>
        <tr v-for="manufacturer in manufacturers" :key="manufacturer.manufacturer_id">
          <td>{{ manufacturer.name }}</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const manufacturers = await $axios.$get('http://localhost/api/manufacturers')
    return { manufacturers }
  },
  data () {
    return {
      manufacturers: []
    }
  },
  head () {
    return {
      title: 'Hersteller'
    }
  }
}
</script>
