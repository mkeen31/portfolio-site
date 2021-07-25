<template>
<div id="app">
  <div>
  <Navbar/>
  </div>
  <main>
    <router-view/>
  </main>
  <Footer/>
</div>
</template>
<script>
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/App.css';

export default {
  components: {
    Navbar,
    Footer,
  }
}
</script>
