<template>
    <div class="home-background page-container">
      <div id="home-intro">
        <h1>Michael Keen</h1>
        <h3>Software Developer</h3>
        <div id="home-text">
          <p>
            Hello! I am a software developer who is currently based in Muncie, Indiana and mainly
            experienced with full stack web development and mobile application development. Find more 
            info about me in the links on this page!
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

export default {
  name: 'Home',
  data(){
    return {
      PORTFOLIO_LINK: '/portfolio',
      CONTACT_LINK: '/contact',
      RESUME_LINK: '../assets/Michael_Keen_Resume.pdf',
    };
  }
}
</script>
<style scoped>
.home-background {
    background-image: linear-gradient(rgba(63, 63, 63, 0.7), rgba(63, 63, 63, 0.7)), url(../images/computer_background.jpg);
    background-size: cover;
    background-position: center;
    overflow: hidden;
  }

  #home-intro {
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    z-index: 5;
  }

  #home-text {
    max-width: 700px;
    margin: 30px auto 0 auto;
  }

  #home-links {
      margin-top: 45px;
  }

  #home-links ul li {
    margin: 5px 25px;
    display: inline-block;
  }

  ul {
    list-style-type: none;
  }

@media only screen and (max-width: 1460px) {
  #home-links ul li {
    display: block;
    margin: 40px;
  }
}

@media only screen and (max-width: 1024px) {
  #home-intro {
    position: relative;
  }
}
</style>
