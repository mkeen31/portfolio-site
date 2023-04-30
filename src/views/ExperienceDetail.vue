<template>
    <div class="page-container">
        <BackButton/>
        <div id="experience-content">
            <h2>{{ experience.name }}</h2>
            <h3>{{ experience.institution }}</h3>
            <p>({{ startDate }} - {{ endDate }})</p>

            <img v-if="experience.imagePath" id="experience-logo" :src="`/assets/${experience.imagePath}`">

            <div id="description">
                <p v-html="experience.description"></p>
            </div>
        </div>
    </div>
</template>
<script>
import '../styles/App.css';
import { mapGetters, mapActions } from 'vuex';
import BackButton from '../components/BackButton.vue';
import dateFormatter from '../utils/date-formatter';

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
            startDate: '',
            endDate: ''
        }
    },
    async created()
    {
        this.experience = { ...this.getExperienceById(this.id)};
        if (!Object.keys(this.experience).length) {
            // State was lost, so make another API call
            await this.getExperienceData(`/${this.id}`);
            this.experience = { ...this.getExperienceById(this.id)};
        }
        this.startDate = dateFormatter(this.experience.start);
        this.endDate = dateFormatter(this.experience.end);
    },
    computed: {
        ...mapGetters(['getExperienceById']),
    },
    methods: {
        ...mapActions(['getExperienceData'])
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