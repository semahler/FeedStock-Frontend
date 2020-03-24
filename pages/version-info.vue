<template>
  <div class="column">
    <h1 class="title is-3 is-spaced">
      Versionsinformationen
    </h1>
    <hr>
    <h2 class="title is-4">
      FeedStock Version 0.1.0 "Amber Alpaca" <span class="tag is-primary is-medium">@ 03/2020</span>
    </h2>
    <div class="content">
      <h2 class="subtitle is-5">
        FeedStock-API
      </h2>
      <ul>
        <li>Integration Lumen 6.2.0, MySQL 5.7, Nginx 1.17.6, PHP 7.2.25</li>
        <li>Implementierung der Grundarchitektur (Model, Controller) der Anwendung</li>
        <li>Umsetzung Datenbankstruktur und Seeder</li>
        <li>Definition der API-Routen zum Abrufen/Schreiben von Daten</li>
      </ul>

      <h2 class="subtitle is-5">
        FeedStock-Frontend
      </h2>
      <ul>
        <li>Integration NuxtJS 2.0.0, Bulma 1.2.1, Fontawesome 0.4.0</li>
        <li>Implementierung Layout, Menu und mobile Navbar</li>
        <li>Designindividualisierung und Logointegration</li>
        <li>Umsetzung der Grundfunktionalitäten/Formulare</li>
        <ul>
          <li>Anlegen/Bearbeiten/Löschen von Herstellern</li>
          <li>Anlegen/Bearbeiten/Löschen von Futtern</li>
          <li>Verwaltung von Futterarten und Verpackungseinheiten</li>
          <li>Gesamtbestandsübersicht</li>
          <li>Anlegen und Eintragen von Bestandsveränderungen</li>
        </ul>
        <li>Globale Benachrichtungskomponente zur Anzeige von Erfolgs-/Fehlermeldungen & Informationen</li>
      </ul>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Versionsinformationen'
    }
  }
}
</script>
