<template>
    <div class="page-container">
        <BackButton/>
        <div id="education-content">
            <h2>{{ education.degree }}</h2>
            <h3>{{ education.institution }}</h3>
            <p>({{ startDate }} - {{ endDate }})</p>

            <img v-if="education.imagePath" id="university-logo" :src="`/assets/${education.imagePath}`">

            <div id="description">
                <p v-html="education.description"></p>
            </div>
        </div>
    </div>
</template>
<script>
import '../styles/App.css';
import { mapActions, mapGetters } from 'vuex';
import BackButton from '../components/BackButton.vue';
import dateFormatter from '../utils/date-formatter';


export default {
    name: 'EducationDetail',
    props: {
        id: {
            type: Number,
            default: 0,
        }
    },

    data() {
        return {
            education: {},
            startDate: '',
            endDate: ''
        }
    },

    async created()
    {
        this.education = { ...this.getEducationById(this.id)};
        if (!Object.keys(this.education).length) {
            // State was lost, so make another API call
            await this.getEducationData(`/${this.id}`);
            this.education = { ...this.getEducationById(this.id)};
        }
        this.startDate = dateFormatter(this.education.start);
        this.endDate = dateFormatter(this.education.end);
    },

    computed: {
        ...mapGetters(['getEducationById'])
    },
    methods: {
        ...mapActions(['getEducationData'])
    },

    components: {
        BackButton
    }
}
</script>

<style scoped>
#education-content {
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

#university-logo {
    margin-top: 25px;
    max-width: 175px;
    max-height: 175px;
}

@media only screen and (max-width: 1024px){
    #university-logo {
        margin-top: 20px;
        max-width: 125px;
        max-height: 125px;
    }

    #description {
    margin-top: 20px;
}
}

@media only screen and (max-width: 512px){
    #university-logo {
        margin-top: 10px;
        max-width: 60px;
        max-height: 60px;
    }

    #description {
    margin-top: 10px;
}
}
</style>