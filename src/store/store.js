import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    gameList: [],
    resultList: [],
    search: "",
    sortItem: "A-Z",
    sortItems: ["A-Z", "Z-A"],
    filterItem: "No Filter",
    filterItems: ["No Filter", "Steam", "Epic", "UPLAY", "Origin"]
  },

  mutations: {
    updateLists: (state, result) => {
      state.gameList = result;
      state.resultList = result;
    },

    updateSortItem: (state, value) => {
      state.sortItem = value;
    },

    updateFilterItem: (state, value) => {
      state.filterItem = value;
    },

    updateSearch: (state, value) => {
      state.search = value;
    },

    updateResultList: (state, result) => {
      state.resultList = result;
    },

    sortResultList: (state) => {
      state.resultList = state.resultList.reverse();
    },

    filterGames(state) {
      console.log(state.search, state.filterItem)
      if (state.filterItem === "No Filter") {
        if (state.search) {
          let result = state.gameList.filter((i) =>
              i.title.toLowerCase().includes(state.search)
          );
          state.resultList = result;
        } else {
          state.resultList = state.gameList;
        }
      } else {
        let result = state.gameList.filter((i) =>
            i.title.toLowerCase().includes(state.search) && i.store === state.filterItem
        );
        state.resultList = result;
      }
    },
  },

  actions: {
    async fetchGames(context) {
      let res = await axios.get(
        "https://static.nvidiagrid.net/supported-public-game-list/gfnpc.json?JSON"
      );
      let result = res.data;
      await result.forEach((i) => {
        let steamId = i.steamUrl.slice(35);
        i.image = `https://steamcdn-a.akamaihd.net/steam/apps/${steamId}/header.jpg`;
      });
      context.commit("updateLists", result);
    },
  },
});
