<template>
  <v-content>
    <v-container id="container">
      <v-row>
        <v-col cols="12">
          <v-text-field
            @keydown.enter.prevent="search"
            v-model="searchInput"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col v-for="(result, i) in resultList" :key="i" cols="12">
          <card :result="result" />
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    gamesList: [],
    resultList: [],
    searchInput: "",
  }),

  components: {
    card: () => import("@/components/Card"),
  },

  methods: {
    search() {
      let result = this.gamesList.filter((i) =>
        i.title.toLowerCase().includes(this.searchInput)
      );
      result.forEach((i) => {
        let steamId = i.steamUrl.slice(35);
        i.image = `https://steamcdn-a.akamaihd.net/steam/apps/${steamId}/header.jpg`;
      });
      this.resultList = result;
    },
  },

  async created() {
    let response = await this.$http.get(
      "https://static.nvidiagrid.net/supported-public-game-list/gfnpc.json?JSON"
    );
    this.gamesList = response.body;
  },
};
</script>

<style>
#container {
  width: 50%;
  margin-top: 100px;
}

@media screen and (max-width: 960px) {
  #container {
    width: 80% !important;
  }
}
</style>
