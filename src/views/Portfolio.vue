<template>
    <div id="portfolio" class="page-container">
        <h2>Portfolio</h2>
        <div id="education-section">
            <h4>Education</h4>
            <div>
                <div class="card">
                    <img>
                    <div class="card-container">
                        <h4><strong>Master of Science (in progress)</strong></h4>
                        <p>Computer Science</p>
                        <p>Purdue University</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="employment-section">
            <h4>Employment Experience</h4>
            <div>
                <div class="card">
                    <img>
                    <div class="card-container">
                        <h4><strong>Software Developer Intern</strong></h4>
                        <p>Accutech Systems Corporation</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="project-section">
            <h4>Project Experience</h4>
            <div>
                <div class="card">
                    <img>
                    <div class="card-container">
                        <h4><strong>Undergraduate Capstone Project</strong></h4>
                        <p>Ball State University</p>
                    </div>
                </div>
            </div>
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
            employment: employmentData,
            experience: experienceData,
            education: educationData,
        }
    },
}

</script>
