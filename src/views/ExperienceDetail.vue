<template>
    <div class="page-container">
        <BackButton/>
        <div id="experience-content">
            <h2>{{ experience.name }}</h2>
            <h3>{{ experience.institution }}</h3>
            <p>({{ experience.start }} - {{ experience.end }})</p>

            <img v-if="experience.imagePath" id="experience-logo" :src="`/assets/${experience.imagePath}`">

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

#experience-logo {
    margin-top: 25px;
    max-width: 175px;
    max-height: 175px;
}

@media only screen and (max-width: 1024px){
    #experience-logo {
        margin-top: 20px;
        max-width: 125px;
        max-height: 125px;
    }

    #description {
    margin-top: 20px;
}
}

@media only screen and (max-width: 512px){
    #experience-logo {
        margin-top: 10px;
        max-width: 60px;
        max-height: 60px;
    }

    #description {
    margin-top: 10px;
}
}
</style>