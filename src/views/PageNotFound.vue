<template>
    <div class="page-container">
        <div id="not-found-content">
            <h2>Oops! Page not found</h2>
            <p>This page was not found on the site. Please check the URL and try again.</p>
        </div>
    </div>
</template>
<script>

export default {
    name: 'PageNotFound',
}
</script>
<style scoped>
#not-found-content {
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, 0);
}
</style>
