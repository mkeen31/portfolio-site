<template>
  <div id="home">
    <div id="home-intro">
      <h1>Michael Keen</h1>
      <h3>Researcher, Developer, Student</h3>
      <div id="home-text">
        <p>
        Hello! I am an aspiring cybersecurity researcher and 
        software developer who is currently studying for a master's degree in computer science.
        Find more info about me in the links on this page!
      </p>
      </div>
      <div id="home-links">
      <ul>
        <li><router-link :to="PORTFOLIO_LINK" class="btn btn-outline">My Experience</router-link></li>
        <li><router-link :to="CONTACT_LINK" class="btn btn-outline">Contact Information</router-link></li>
      </ul>
    </div>
    </div>
  </div>
</template>
<script>
import '../styles/Home.css';

// @ is an alias to /src

export default {
  name: 'Home',
  data(){
    return {
      PORTFOLIO_LINK: '/portfolio',
      CONTACT_LINK: '/contact',
    };
  }
}
</script>
