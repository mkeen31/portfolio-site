<template>
    <div class="page-container portfolio">
        <div id="portfolio-content">
            <h2>Portfolio</h2>
            <section>
                <h4>Education</h4>
                <div v-for="education in educationData" :key="education.id">
                    <router-link :to="{name: 'education-details', params: { id: education.id }}">
                        <div class="card">
                            <img>
                            <div class="card-container">
                                <h4><strong>{{ education.degree }}</strong></h4>
                                <p>{{ education.major }}</p>
                                <p>{{ education.institution }}</p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </section>
            <section class="clear">
                <h4>Employment History</h4>
                <div v-for="employment in employmentData" :key="employment.id">
                    <router-link :to="{name: 'employment-details', params: {id: employment.id}}">
                        <div class="card">
                            <img>
                            <div class="card-container">
                                <h4><strong>{{ employment.position }}</strong></h4>
                                <p>{{ employment.employer }}</p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </section>
            <section class="clear">
                <h4>Project Experience</h4>
                <div v-for="experience in experienceData" :key="experience.id">
                    <router-link :to="{name: 'experience-details', params: {id: experience.id}}">
                        <div class="card">
                            <img>
                            <div class="card-container">
                                <h4><strong> {{ experience.name }}</strong></h4>
                                <p>{{ experience.institution }}</p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </section>
            <!--<section class="clear">
                <h4>Skills</h4>
                <div>   
                </div>
            </section>-->
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import '../styles/App.css';

export default {
    name: 'Portfolio',
    created()
    {
    this.loadEmploymentData();
    this.loadExperienceData();
    this.loadEducationData();
    },

    methods: {
        ...mapActions(['getEmploymentData', 'getExperienceData', 'getEducationData']),

        loadEmploymentData()
        {
            this.getEmploymentData();
        },

        loadExperienceData()
        {
            this.getExperienceData();
        },

        loadEducationData()
        {
            this.getEducationData();
        },
    },
    computed: {
        ...mapState(['employmentData', 'experienceData', 'educationData']),
    }
}

</script>

<style scoped>
.portfolio {
    overflow-y: scroll;
}

#portfolio-content {
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, 0);
}

.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 5px;
    width: 400px;
    height: auto;
    padding-bottom: 15px;
    background-color: #464646;
    margin: 30px 20px;
    float: left;
    z-index: 10;
    position: relative;
}

a {
    color: #fff;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.card-container {
    padding: 2px 16px;
    z-index: 1;
}

.clear {
    clear: both;
}

@media only screen and (max-width: 450px){
    .card {
        width: unset;
        max-width: 400px;
    }
}
</style>