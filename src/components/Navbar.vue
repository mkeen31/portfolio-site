<template>
  <header>
    <nav>
      <div id="logo">
        <!--<img src="@/assets/logo.png" height="100" width="100">-->
      </div>
      <div id="menu">
        <i id="bars" class="fas fa-bars" @click="toggleMenu"></i>
        <ul id="menu-list">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
          <li><router-link to="/portfolio">Portfolio</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import '@/styles/Navbar.css';

export default {
  name: "Navbar",
  mounted()
  {
    let menuList = document.getElementById("menu-list");
    menuList.style.maxHeight = "0px";
  },
  methods: {
    toggleMenu()
    {
      let menuList = document.getElementById("menu-list");
      if (menuList.style.maxHeight == "0px")
      {
        menuList.style.maxHeight = "130px";
      }
      else 
      {
        menuList.style.maxHeight = "0px";
      }
    }
  }
}

</script>

