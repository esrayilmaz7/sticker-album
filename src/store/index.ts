import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scrumTeams: [],
    remainedStickerSets: 3,
  },
  mutations: {
    UPDATE_SCRUM_TEAMS(state, scrumTeams) {
      state.scrumTeams = scrumTeams;
    },
    UPDATE_REMAINED_STICKERS(state, remainedStickerSets) {
      state.remainedStickerSets = remainedStickerSets;
    },
  },
  actions: {
    updateScrumTeams({ commit }, scrumTeams) {
      commit("UPDATE_SCRUM_TEAMS", scrumTeams);
    },
    updateRemainedStickerSets({ commit }, remainedStickerSets) {
      commit("UPDATE_REMAINED_STICKERS", remainedStickerSets);
    },
  },
  getters: {
    getScrumTeams: (state) => {
      return state.scrumTeams;
    },
    getRemainedStickerSets: (state) => {
      return state.remainedStickerSets;
    },
  },
  modules: {},
});
