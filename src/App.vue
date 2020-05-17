<template>
  <v-content>
    <v-container id="container">
      <v-row>
        <v-col cols="12">
          <v-text-field
            class="mt-n2"
            solo-inverted
            rounded
            flat
            hide-details
            dense
            color="black"
            placeholder="Enter the game"
            v-model="search"
            @keydown.enter.prevent="filteredGames"
          >
          </v-text-field>
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
    resultList: [],
    gameList: [],
    search: "",
  }),

  components: {
    card: () => import("@/components/Card"),
  },

  methods: {
    filteredGames() {
      if (this.search) {
        let result = this.gameList.filter((i) =>
          i.title.toLowerCase().includes(this.search)
        );
        if (result.length !== 0) {
          result.forEach((i) => {
            let steamId = i.steamUrl.slice(35);
            i.image = `https://steamcdn-a.akamaihd.net/steam/apps/${steamId}/header.jpg`;
          });
          this.resultList = result;
        } else {
          this.resultList = [];
          this.resultList.push({
            title:
              "The game that you are looking for not available on Nvidia Now yet!",
            image:
              "https://www.androidcentral.com/sites/androidcentral.com/files/styles/mediumplus/public/article_images/2016/07/sad-pikachu.jpg",
            genres: [],
            steamUrl: true,
            show: true,
          });
        }
      } else {
        this.resultList = this.gameList;
      }
    },
  },

  async created() {
    let res = await this.$http.get(
      "https://static.nvidiagrid.net/supported-public-game-list/gfnpc.json?JSON"
    );

    let result = res.body;
    result.forEach((i) => {
      let steamId = i.steamUrl.slice(35);
      i.image = `https://steamcdn-a.akamaihd.net/steam/apps/${steamId}/header.jpg`;
    });
    this.resultList = result;
    this.gameList = result;
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
