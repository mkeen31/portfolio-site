<template>
    <div class="page-container">
        <BackButton/>
        <div id="pdf-content">
            <h2>{PDF Name}</h2>
            <iframe id="pdf" src="../docs/Michael_Keen_Resume.PDF"></iframe>
        </div>
    </div>
</template>
<script>
import BackButton from '../components/BackButton.vue';
import '../styles/App.css';
export default {
    components: {
        BackButton
    }
}
</script>
<style scoped>
#pdf {
    height: 700px;
    width: 900px;
    overflow-y: scroll;
}

#pdf-content {
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, 0);
}
</style>