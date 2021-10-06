<template>
    <p id="back-button" class="btn btn-full" @click="onBackClicked">
        <i class="fas fa-arrow-left"></i>
        Back
    </p>
</template>
<script>
import '../styles/App.css';

export default {
    methods: {
        onBackClicked()
        {
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
#back-button {
    position: absolute;
    top: 5%;
    left: 5%;
}
#back-button p {
    font-size: 25px;
}
</style>