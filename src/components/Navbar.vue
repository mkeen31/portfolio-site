<template>
  <header>
    <nav>
      <div id="logo">
      </div>
      <ul id="main-nav">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
        <li><router-link to="/portfolio">Portfolio</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import '../styles/Navbar.css';

export default {
  name: "Navbar",
}

</script>

