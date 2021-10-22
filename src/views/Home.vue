<template>
    <div class="home-background page-container">
      <div id="home-intro">
        <h1>Michael Keen</h1>
        <h3>Professional, Engineer, Student</h3>
        <div id="home-text">
          <p>
            Hello! I am an aspiring cybersecurity professional and 
            software engineer who is currently studying for a master's degree in computer science.
            Find more info about me in the links on this page!
          </p>
        </div>
        <div id="home-links">
          <ul>
            <li><router-link :to="PORTFOLIO_LINK" class="btn btn-outline">My Portfolio</router-link></li>
            <li><router-link :to="CONTACT_LINK" class="btn btn-outline">Contact Information</router-link></li>
            <li><a target="_blank" :href="RESUME_LINK" class="btn btn-outline">My Resume</a></li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
import '../styles/App.css';
import '../styles/Home.css';

export default {
  name: 'Home',
  data(){
    return {
      PORTFOLIO_LINK: '/portfolio',
      CONTACT_LINK: '/contact',
      RESUME_LINK: 'https://mkeen31.github.io/Michael_Keen_Resume.PDF',
    };
  }
}
</script>
