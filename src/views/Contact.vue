<template>
    <div class="contact page-container">
        <div id="contact-content">
            <h2>Contact</h2>
            <img src="../images/selfie.jpg"><br>
            <label>Personal Email: </label>
            <p><a href="mailto:mkeen31@gmail.com">mkeen31@gmail.com</a></p>
            <label>School Email: </label>
            <p><a href="mailto:keen18@purdue.edu">keen18@purdue.edu</a></p>
            <label>Phone Number: </label>
            <p>(317) 979-6151</p>
            <label>My Links: </label>
            <div id="links">
                <ul>
                    <li><a :href="GITHUB" target="_blank"><i class="fab fa-github fa-2x"></i></a></li>
                    <li><a :href="LINKEDIN" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a></li>
                    <li><a :href="TWITTER" target="_blank"><i class="fab fa-twitter fa-2x"></i></a></li>
                    <li><a :href="INSTAGRAM" target="_blank"><i class="fab fa-instagram fa-2x"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import '../styles/Contact.css';

export default {
    name: 'Contact',
    data() {
        return {
            GITHUB: "https://github.com/mkeen31",
            LINKEDIN: "https://www.linkedin.com/in/michaeljkeen",
            TWITTER: "https://twitter.com/mkeen31",
            INSTAGRAM: "https://www.instagram.com/mkeen31",
        }
    }
}

</script>
