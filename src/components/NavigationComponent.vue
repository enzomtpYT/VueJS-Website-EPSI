<template>
  <nav>
    <router-link to="/">Acceuil</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/api">API</router-link>
    <router-link to="/bonus">Bonus</router-link>
  </nav>
  <div class="divider"></div>
  <div class="margin"></div>
</template>

<style>
nav {
  background-color: #010409;
  padding: 15px;
}
nav a {
  font-weight: bold;
  font-size: 1em;
  color: #d3d3d3;
  background-color: #40434c00;
  transition: 0.2s;
  padding: 7px 20px;
  border-radius: 10px;
}
nav a:hover {
  color: #ffffff;
  background-color: #40434c;
}
nav a.router-link-exact-active {
  color: #9060da;
}
nav a.router-link-exact-active:hover {
  color: #a970ff;
}
.margin {
 margin-bottom: 25px;
 width: 100%;
}
</style>
  