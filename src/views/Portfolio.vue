<template>
    <div class="page-container">
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
                <h4>Employment Experience</h4>
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
        </div>
    </div>
</template>
<script>
import '../styles/App.css';
import '../styles/Portfolio.css';
import employmentData from '../data/employment.json';
import experienceData from '../data/experience.json';
import educationData from '../data/education.json';

export default {
    name: 'Portfolio',
    data() {
        return {
            employmentData,
            experienceData,
            educationData,
            employment: [],
            experience: [],
            education: [],
        }
    },
    created()
    {
    this.employment = this.employmentData;
    this.education = this.educationData;
    this.experience = this.experienceData;
    },
}

</script>
