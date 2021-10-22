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

<style scoped>
header {
  width: 100%;
  height: 100%;
}

#logo img {
    float: left;
}

ul {
    list-style: none;
}

nav {
  padding: 20px 0 50px 0;
  background-color: #2f88bb;
  z-index: 20;
  position: relative;
}

#menu {
    float: right;
}

#bars {
  display: none;
}

#menu-list li {
    display: inline-block;
    margin: 0 20px;
}

i {
  color: #fff;
  margin-right: 20px;
}

#menu-list li a {
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.2s, border 0.2s;
}

#menu-list li a:hover {
  color: #464646;
}

#menu-list li a.router-link-exact-active {
  color: #464646;
}

@media only screen and (max-width: 700px) {
  #menu-list {
    width: 100%;
    background-color: #2f88bb;
    position: absolute;
    top: 75px;
    right: 0;

  }
  #menu-list li {
    display: block;
    margin: 10px 0;
    text-align: right;
    margin-right: 20px;
  }

  #bars {
    display: block;
  }
}
</style>