<template>
  <div id="nav">
    <router-link to="/">Home</router-link> 
    <router-link to="/blog">Blog</router-link> 
    <router-link to="/portfolio">Portfolio</router-link> 
    <router-link to="/about">About</router-link> 
    <router-link to="/contact">Contact</router-link>
  </div>
</template>

<script>

export default {
  name: "Navbar",
}

</script>

<style>

#nav {
  padding: 30px;
  background-color: #373742;
  margin-bottom: 3%;
}

#nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin: 0 1.5% 0 1.5%;
}

#nav a:hover {
  color: #aca8a8;
}

#nav a.router-link-exact-active {
  color: #797676;
}
</style>
