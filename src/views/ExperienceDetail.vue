<template>
    <div class="page-container">
        <BackButton/>
        <div id="experience-content">
            <h2>{{ experience.name }}</h2>
            <h3>{{ experience.institution }}</h3>
            <p>({{ experience.start }} - {{ experience.end }})</p>

            <div id="description">
                <p v-html="experience.description"></p>
            </div>
        </div>
    </div>
</template>
<script>
import '../styles/App.css';
import { mapGetters } from 'vuex';
import BackButton from '../components/BackButton.vue';

export default {
    name: 'ExperienceDetail',
    props: {
        id: {
            type: Number,
            default: 0,
        }
    },
    data() {
        return {
            experience: {},
        }
    },
    mounted()
    {
        this.experience = { ...this.getExperienceById(this.id)};
    },
    computed: {
        ...mapGetters(['getExperienceById']),
    },
    components: {
        BackButton
    }
}

</script>

<style scoped>
#experience-content {
    max-width: 700px;
    margin: 0 auto;
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, 0);
}
#description {
    margin-top: 25px;
}
</style>