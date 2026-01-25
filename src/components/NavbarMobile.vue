<template>
  <header>
    <nav>
      <div id="logo">
        <!--<img src="@/assets/logo.png" height="100" width="100">-->
      </div>
      <div id="menu-mobile">
        <i id="bars" class="fas fa-bars" @click="showNav = !showNav"></i>
        <ul id="menu-list-mobile" v-if="showNav">
          <li><router-link to="/">Home</router-link></li>
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
  name: "NavbarMobile",
  data(){
    return {
      showNav: false,
    }
  },
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
  padding: 20px 0 35px 0;
  background-color: #2f88bb;
  z-index: 20;
  position: relative;
}

#menu-mobile {
    float: right;
}

#menu-list-mobile {
  width: 100%;
  background-color: #2f88bb;
  position: absolute;
  top: 55px;
  right: 0;
  height: 160px;

}
#menu-list-mobile li {
  display: block;
  margin: 10px 0;
  text-align: right;
  margin-right: 20px;
}

#bars {
  display: block;
  color: #fff;
  margin-right: 20px;
}

#menu-list-mobile li a {
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.2s, border 0.2s;
}

#menu-list-mobile li a:hover {
  color: #464646;
}

#menu-list-mobile li a.router-link-exact-active {
  color: #464646;
}

</style>