<template>
  <div class="page-container about">
    <div id="about-content">
      <h2>About</h2>
      <p>
      I am an Indiana native and grew up in the city of Fishers. I began attending Ball
      State University in Muncie, Indiana starting August 2017. In May 2021, I graduated 
      <em>summa cum laude</em> from Ball State with a bachelor's degree in computer science. 
      During my time as a student there, I was a member of the Golden Key International Honour Society 
      and served as chapter president during the 2020-21 school year. In the classroom, I developed a 
      keen (pun intended) interest in web development, networking, and cybersecurity, all of which I have 
      continued to learn about in both my professional life and my spare time.
      </p>
      <p>
      I am currently employed as a software developer and technical team lead at Cheetah Inc. (formerly Accutech Systems) 
      in Muncie, Indiana. Outside of technology, I enjoy going outside, exercising, and reading philosophy, fantasy, 
      and spirituality. I also enjoy spending time with my friends and my family.
      </p>
    </div>
  </div>
</template>
<script>

export default {
  
}
</script>
<style scoped>

#about-content {
    max-width: 700px;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

#about-content p {
    margin-bottom: 25px;
}

@media only screen and (max-width: 1024px){
  #about-content {
    position: relative;
    top: 5%;
    left: 0;
    transform: none;
  }
}

</style>
