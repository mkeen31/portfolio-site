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
import '@/styles/App.css';
import Navbar from '@/components/Navbar';

export default {
  components: {
    Navbar,
  }
}
</script>
