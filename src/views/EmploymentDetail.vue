<template>
    <div class="page-container">
        <BackButton/>
        <div id="employment-content">
            <h2>{{ employment.position }}</h2>
            <h3>{{ employment.employer }}</h3>
            <p>({{ startDate }} - {{ endDate }})</p>

            <img v-if="employment.imagePath" id="company-logo" :src="`/assets/${employment.imagePath}`">

            <div id="description">
                <p v-html="employment.description"></p>
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
    name: 'EmploymentDetail',
    props: {
        id: {
            type: Number,
            default: 0,
        }
    },
    data() {
        return {
            employment: {},
            startDate: '',
            endDate: ''
        }
    },
    async created()
    {
        this.employment = { ...this.getEmploymentById(this.id)};
        if (!Object.keys(this.employment).length) {
            // State was lost, so make another API call
            await this.getEmploymentData(`/${this.id}`);
            this.employment = { ...this.getEmploymentById(this.id)};
        }
        this.startDate = dateFormatter(this.employment.start);
        this.endDate = dateFormatter(this.employment.end);
    },
    computed: {
        ...mapGetters(['getEmploymentById']),
    },
    methods: {
        ...mapActions(['getEmploymentData'])
    },
    components: {
        BackButton,
    }
}

</script>
<style scoped>
#employment-content {
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

#company-logo {
    margin-top: 25px;
    max-width: 175px;
    max-height: 175px;
}

@media only screen and (max-width: 1024px){
    #company-logo {
        margin-top: 20px;
        max-width: 125px;
        max-height: 125px;
    }

    #description {
    margin-top: 20px;
}
}

@media only screen and (max-width: 512px){
    #company-logo {
        margin-top: 10px;
        max-width: 60px;
        max-height: 60px;
    }

    #description {
    margin-top: 10px;
}
}
</style>