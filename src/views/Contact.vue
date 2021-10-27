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
<style scoped>
h2 {
    margin-bottom: 30px;
}

#contact-content {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 3%;
    background-color: #464646;
    border-radius: 25px;
}

#contact-content:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

#contact-content img {
    display: inline-block;
    height: 200px;
    width: auto;
    margin-bottom: 35px;
    border-radius: 50%;
}

#contact-content p {
    margin-bottom: 15px;
}

#links ul {
    margin-top: 20px;
    list-style: none;
}

#links ul li {
    display: inline-block;
    margin: 0 35px;
}

#links ul li a {
    color: #fff;
}

a i:hover {
    color: #c0c0c0;
}

@media only screen and (max-width: 1024px){
    #links ul li {
        margin: 20px;
    }
}

@media only screen and (max-height: 775px){
    #contact-content {
        padding: 2%;
    }

    #contact-content img {
        margin-bottom: 25px;
        height: 150px;
    }

    #contact-content p {
        margin-bottom: 10px;
    }

    #links ul {
        margin-top: 5px;
    }
}

</style>
