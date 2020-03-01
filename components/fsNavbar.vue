<template>
  <nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>

      <a role="button" class="navbar-burger burger is-hidden-tablet" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="navbarMobile" class="navbar-menu">
      <div class="navbar-start is-hidden-tablet">
        <a class="navbar-item" href="#">
          Dashboard
        </a>

        <div class="navbar-item has-dropdown">
          <a class="navbar-link">
            Stammdaten
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item" href="#">Futter</a>
            <a class="navbar-item" href="#">Hersteller</a>
            <a class="navbar-item" href="#">Futterarten</a>
            <a class="navbar-item" href="#">Packungseinheiten</a>
          </div>
        </div>

        <div class="navbar-item has-dropdown">
          <a class="navbar-link">
            Bestand
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item" href="#">Gesamtübersicht</a>
            <a class="navbar-item" href="#">Zugang</a>
            <a class="navbar-item" href="#">Abgang</a>
          </div>
        </div>

        <a class="navbar-item" href="#">
          Dashboard
        </a>
      </div>
    </div>
  </nav>
</template>
