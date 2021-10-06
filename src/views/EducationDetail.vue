<template>
    <div class="page-container">
        <BackButton/>
        <h2>{ Education Details }</h2>
        <h4></h4>
    </div>
</template>
<script>
import '../styles/App.css';
import BackButton from '../components/BackButton.vue';

export default {
    props: {
        id: {
            type: Number,
            default: 0,
        }
    },
    components: {
        BackButton
    }
}
</script>