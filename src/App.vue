<template>
  <nav>
    <router-link to="/">Acceuil</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/api">API</router-link>
  </nav>
  <div class="divider"></div>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #fff;
}

body {
  background-color: #010409;
  color: #fff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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

.divider {
  width: 100%;
  height: 1px;
  background-color: #3d444d;
  margin-bottom: 25px;
}
</style>
