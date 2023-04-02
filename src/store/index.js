import { createStore } from 'vuex';
import axiosClient from '../utils/axios-client';

const state = {
  employmentData: [],
  experienceData: [],
  educationData: []
};

const mutations = {
  mutateEmploymentData(state, data)
  {
    state.employmentData = state.employmentData.concat(data);
    state.employmentData = filterDuplicates(state.employmentData);
  },
  mutateExperienceData(state, data)
  {
    state.experienceData = state.experienceData.concat(data);
    state.experienceData = filterDuplicates(state.experienceData);
  },
  mutateEducationData(state, data)
  {
    state.educationData = state.educationData.concat(data);
    state.educationData = filterDuplicates(state.educationData);
  },
  mutateStateData(state)
  {
    state.employmentData = [];
    state.experienceData = [];
    state.educationData = [];
  }
};

const actions = {
  async getEmploymentData({ commit }, subPath)
  {
    const data = await (await axiosClient().get(`Employment${subPath}`)).data;
    commit("mutateEmploymentData", data);
  },
  async getExperienceData({ commit }, subPath)
  {
    const data = await (await axiosClient().get(`Experience${subPath}`)).data;
    commit("mutateExperienceData", data);
  },
  async getEducationData({ commit }, subPath)
  {
    const data = await (await axiosClient().get(`Education${subPath}`)).data;
    commit("mutateEducationData", data);
  },
};

const getters = {
  getEmploymentById: state => id => state.employmentData.find(em => em.id === id),
  getExperienceById: state => id => state.experienceData.find(ex => ex.id === id),
  getEducationById: state => id => state.educationData.find(ed => ed.id === id),
};

const filterDuplicates = function(array)
{
  array = array.filter((value, index) => {
    const _value = JSON.stringify(value);
    return index === array.findIndex(obj => {
      return JSON.stringify(obj) === _value;
    });
  });
return array;
}

export default createStore({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
});
