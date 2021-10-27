<template>
    <div class="page-container">
        <BackButton/>
        <div id="employment-content">
            <h2>{{ employment.position }}</h2>
            <h3>{{ employment.employer }}</h3>

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
        BackButton
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
</style>