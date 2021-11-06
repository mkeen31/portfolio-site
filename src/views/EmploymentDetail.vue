<template>
    <div class="page-container">
        <BackButton/>
        <div id="employment-content">
            <h2>{{ employment.position }}</h2>
            <h3>{{ employment.employer }}</h3>
            <p>({{ employment.start }} - {{ employment.end }})</p>

            <img v-if="employment.imagePath" id="company-logo" :src="`/assets/${employment.imagePath}`">

            <div id="description">
                <p v-html="employment.description"></p>
            </div>
        </div>
    </div>
</template>
<script>
import '../styles/App.css';
import { mapGetters } from 'vuex';
import BackButton from '../components/BackButton.vue';

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
            imagePath: '',
        }
    },
    created()
    {
        this.employment = { ...this.getEmploymentById(this.id)};
    },
    computed: {
        ...mapGetters(['getEmploymentById']),
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