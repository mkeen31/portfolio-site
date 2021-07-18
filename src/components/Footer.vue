<template>
    <footer>
        <ul>
            <li><a :href="GITHUB" target="_blank"><i class="fab fa-github fa-2x"></i></a></li>
            <li><a :href="LINKEDIN" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a></li>
            <li><a :href="TWITTER" target="_blank"><i class="fab fa-twitter fa-2x"></i></a></li>
            <li><a :href="INSTAGRAM" target="_blank"><i class="fab fa-instagram fa-2x"></i></a></li>
            <li><a :href="REDDIT" target="_blank"><i class="fab fa-reddit fa-2x"></i></a></li>
        </ul>
    </footer>
</template>
<script>
export default {
    name: "Footer",
    data() {
        return {
            GITHUB: "https://github.com/mkeen31",
            LINKEDIN: "https://www.linkedin.com/in/michaeljkeen",
            TWITTER: "https://twitter.com/mkeen31",
            INSTAGRAM: "https://www.instagram.com/mkeen31",
            REDDIT: "https://www.reddit.com/user/mkeen3",
        }
    }
}
</script>

<style>

footer {
    padding: 22px;
    background-color: #2f88bb;
    text-align: center;
}

footer ul {
    list-style: none;
}

footer ul li {
    display: inline-block;
    margin: 0 35px;
}

footer ul li a{
    color: white;
}

footer a i:hover {
    color: #c0c0c0;
}

</style>
