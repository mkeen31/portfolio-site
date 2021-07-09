<template>
    <div id="footer">
        <a :href="github" target="_blank"><i class="fab fa-github fa-2x"></i></a>
    </div>
</template>
<script>
export default {
    name: "Footer",
    data() {
        return {
            github: "https://github.com/mkeen31",
        }
    }
}
</script>

<style>

#footer {
    padding: 20px;
    background-color: #373742;
}

#footer a i {
    color: white;
}

#footer a i:hover {
    color: #aca8a8;
}

</style>
