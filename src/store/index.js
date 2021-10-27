import { createStore } from 'vuex';
import employmentData from '../data/employment.json';
import experienceData from '../data/experience.json';
import educationData from '../data/education.json';

const state = {
  employmentData: [],
  experienceData: [],
  educationData: []
};

const mutations = {
  mutateEmploymentData(state, data)
  {
    state.employmentData = data;
  },
  mutateExperienceData(state, data)
  {
    state.experienceData = data;
  },
  mutateEducationData(state, data)
  {
    state.educationData = data;
  },
};

const actions = {
  getEmploymentData({ commit })
  {
    const emData = employmentData;
    commit("mutateEmploymentData", emData);
  },
  getExperienceData({ commit })
  {
    const exData = experienceData;
    commit("mutateExperienceData", exData);
  },
  getEducationData({ commit })
  {
    const edData = educationData;
    commit("mutateEducationData", edData);
  },
};

const getters = {
  getEmploymentById: state => id => state.employmentData.find(em => em.id === id),
  getExperienceById: state => id => state.experienceData.find(ex => ex.id === id),
  getEducationById: state => id => state.educationData.find(ed => ed.id === id),
};

export default createStore({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
});
