<template>
<div id="app">
  <div>
  <Navbar/>
  </div>
  <main>
    <router-view/>
  </main>
</div>
</template>
<script>
import Navbar from '@/components/Navbar';
import '@/styles/App.css';

export default {
  components: {
    Navbar,
  }
}
</script>
