<template>
  <nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link to="/">
          <fs-logo />
        </nuxt-link>
        <a
          role="button"
          class="navbar-burger burger is-hidden-tablet"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMobile"
          :class="{'is-active': navbarMobileExpanded}"
          @click="navbarMobileExpanded = !navbarMobileExpanded"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarMobile" class="navbar-menu" :class="{'is-active': navbarMobileExpanded}">
        <div class="navbar-start is-hidden-tablet">
          <nuxt-link to="/" class="navbar-item">
            Dashboard
          </nuxt-link>

          <div class="navbar-item has-dropdown">
            <a class="navbar-link" :class="{'rotate-icon': navbarMobileBaseDataDropdownExpanded}" @click="navbarMobileBaseDataDropdownExpanded = !navbarMobileBaseDataDropdownExpanded">
              Stammdaten
            </a>
            <div class="navbar-dropdown" :class="{'show-mobile': navbarMobileBaseDataDropdownExpanded}">
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

          <div class="navbar-item has-dropdown" :class="{'show-mobile': navbarMobileBaseDataDropdownExpanded}">
            <a class="navbar-link" @click="navbarMobileInventoryDropdownExpanded = !navbarMobileInventoryDropdownExpanded">
              Bestand
            </a>
            <div class="navbar-dropdown" :class="{'show-mobile': navbarMobileInventoryDropdownExpanded}">
              <nuxt-link to="/inventory/overview" class="navbar-item">
                Gesamtübersicht
              </nuxt-link>

              <nuxt-link to="/inventory/inventory_change" class="navbar-item">
                Bestandsänderung
              </nuxt-link>
            </div>
          </div>

          <nuxt-link to="/about" class="navbar-item">
            Über
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import fsLogo from '~/components/fsLogo.vue'

export default {
  components: {
    fsLogo
  },
  data () {
    return {
      navbarMobileExpanded: false,
      navbarMobileBaseDataDropdownExpanded: false,
      navbarMobileInventoryDropdownExpanded: false
    }
  }
}
</script>
