<template>
<div id="app">
  <div id="content">
    <NavbarMobile v-if="mobileView"/>
    <Navbar v-if="!mobileView"/>
  </div>
  <main>
    <router-view/>
  </main>
</div>
</template>
<script>
import '@/styles/App.css';
import Navbar from '@/components/Navbar.vue';
import NavbarMobile from '@/components/NavbarMobile.vue';

export default {
  data(){
    return {
      mobileView: window.innerWidth < 1024,
    }
  },
  methods: {
    handleView(){
      this.mobileView = window.innerWidth < 1024;
    },
  },
  components: {
    Navbar,
    NavbarMobile
  },
  created(){
    window.addEventListener('resize', this.handleView);
  },
}
</script>
