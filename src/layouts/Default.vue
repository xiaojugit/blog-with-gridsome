<template>
  <div class="layout">
    <header class="header">
      <div class="container">
        <div class="left">
          <g-link to="/" aria-current="page" class="home-link active--exact active">
            <img src="/logo.svg" alt="Nichlas W. Andersen" class="logo" />
          </g-link>
        </div>
        <nav class="nav right">
          <g-link to="/journals" class="nav__link">Journal</g-link>
          <g-link to="/contact" class="nav__link">Say Hi!</g-link>
        </nav>
      </div>
    </header>
    <slot />
    <footer class="footer">
      <div class="container">
        <span>Copyright © 2021</span>
      </div>
    </footer>
    <!-- <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>-->
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
.header {
  position: relative;
  height: 6rem;
  z-index: 10;
}

.header.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.header > .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.home-link {
  text-decoration: none;
}

.logo {
  height: 1.5rem;
}

.site-name {
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-decoration: none;
  text-transform: uppercase;
}

.nav > *{
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  margin-top: 4px;
  margin-right: 3rem;
  padding-bottom: 4px;
  border-bottom: 1px solid;
  border-color: transparent;
  transition: border 0.15s;
}

.nav > :last-of-type {
  margin: 0;
}

.nav > .active,
.nav > :hover {
  border-color: inherit;
}

.footer {
  font-size: 0.8rem;
  padding: 6rem 0;
}

</style>
