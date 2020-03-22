<template>
  <aside class="column is-3 aside menu is-hidden-mobile">
    <div class="dashboard-menu">
      <p class="menu-label">
        Allgemein
      </p>
      <ul class="menu-list">
        <li>
          <nuxt-link to="/">
            Dashboard
          </nuxt-link>
        </li>
      </ul>

      <p class="menu-label">
        Stammdaten
      </p>
      <ul class="menu-list">
        <li>
          <nuxt-link to="/baseData/feed">
            Futter
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{ name: 'manufacturer'}">
            Hersteller
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{name: 'feed-type'}">
            Futterarten
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{ name: 'package-unit'}">
            Verpackungseinheiten
          </nuxt-link>
        </li>
      </ul>

      <p class="menu-label">
        Bestand
      </p>
      <ul class="menu-list">
        <li>
          <nuxt-link :to="{ name: 'inventory-stock-overview'}">
            Gesamtübersicht
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{ name: 'inventory-stock-movement'}">
            Bestandsänderung
          </nuxt-link>
        </li>
      </ul>

      <p class="menu-label">
        Über
      </p>
      <ul class="menu-list">
        <nuxt-link to="/about">
          Über
        </nuxt-link>
      </ul>
    </div>
  </aside>
</template>
