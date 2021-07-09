<template>
  <div id="home">
    <div>
      <!--<img> <- put picture of self here -->
      <h1>Michael Keen</h1>
      <h3>Researcher, Developer, Student</h3>
      <div class="text-container">
        <p>
        Hello, and welcome to my website! I am an aspiring cybersecurity professional and 
        software developer who is currently studying for a master's degree in computer science.
        Find more info about me in the links on this page!
      </p>
      </div>
    </div>
    <div id="home-links">
      <ul>
        <li><router-link :to="PORTFOLIO_LINK" class="btn btn-outline-secondary">My Experience</router-link></li>
        <li><router-link :to="CONTACT_LINK" class="btn btn-outline-secondary">Contact Information</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
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
<style>
   #home {
     width: 1000px;
     height: 400px;
     margin: auto;
   }

   #home-links ul li {
     margin-left: 15px;
     display: inline-block;
   }

   ul {
     list-style-type: none;
   }

</style>
