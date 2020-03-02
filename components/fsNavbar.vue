<template>
  <nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </nuxt-link>
      <a role="button" class="navbar-burger burger is-hidden-tablet" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="navbarMobile" class="navbar-menu">
      <div class="navbar-start is-hidden-tablet">
        <nuxt-link to="/" class="navbar-item">
          Dashboard
        </nuxt-link>

        <div class="navbar-item has-dropdown">
          <a class="navbar-link">
            Stammdaten
          </a>
          <div class="navbar-dropdown">
            <nuxt-link to="/baseData/feed" class="navbar-item">
              Futter
            </nuxt-link>

            <nuxt-link to="/baseData/manufacturer" class="navbar-item">
              Hersteller
            </nuxt-link>

            <nuxt-link to="/baseData/feed_type" class="navbar-item">
              Futterarten
            </nuxt-link>

            <nuxt-link to="/baseData/package_unit" class="navbar-item">
              Verpackungseinheiten
            </nuxt-link>
          </div>
        </div>

        <div class="navbar-item has-dropdown">
          <a class="navbar-link">
            Bestand
          </a>
          <div class="navbar-dropdown">
            <nuxt-link to="/inventory/overview" class="navbar-item">
              Gesamtübersicht
            </nuxt-link>

            <nuxt-link to="/inventory/inventory_change" class="navbar-item">
              Bestandsänderung
            </nuxt-link>
          </div>
        </div>

        <nuxt-link to="/about" class="navbar-item">
          Üger
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>
