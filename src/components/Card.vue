<template>
  <v-card>
    <v-row justify="center">
      <v-col cols="12" lg="6" xl="5">
        <v-layout column justify-space-between fill-height>
          <v-img contain v-if="result.steamUrl" :src="result.image"></v-img>
          <v-img
            contain
            v-else
            src="https://steamuserimages-a.akamaihd.net/ugc/942844113153764888/C7383772E06C8BA8060F7940B5C36E83714445E9/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
          ></v-img>
        </v-layout>
      </v-col>
      <v-col cols="12" lg="6" xl="7">
        <v-card-title
          style="font-weight: bold; margin-bottom: -16px; margin-top: -16px;"
          >{{ result.title }}</v-card-title
        >
        <v-card-text style="margin-bottom: -16px;">
          Fully Optimized:
          <b>{{ this.isAvailable(result.isFullyOptimized) }}</b>
          <br />
          Highlights Supported:
          <b>{{ this.isAvailable(result.isHighlightsSupported) }}</b>
          <br />
          Publisher:
          {{ result.publisher }}
          <br />
          Genre(s):
          {{ result.genres.toString() }}
        </v-card-text>
        <v-card-actions>
          <v-img
            id="steam-icon"
            style="margin-left: -8px; margin-bottom: -12px; cursor: pointer"
            v-if="result.steamUrl"
            max-width="200px"
            src="https://images.squarespace-cdn.com/content/v1/5b45fae8b98a78d9d80b9c5c/1531959264455-E7B8MJ3VMPX0593VGCZG/ke17ZwdGBToddI8pDm48kN8apspGukzgos6frmxv8N4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcn1JAjKfvrLftyUdzBH7TuC6435FrIls799f53l0WBScgvW54fKSkWPxA0JJ5qDp9/button-steam-available-fixed-2.png?format=1500w"
            @click="goToSteamUrl(result.steamUrl)"
          ></v-img>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: ["result"],
  data() {
    return {};
  },
  methods: {
    goToSteamUrl(steamUrl) {
      let win = window.open(steamUrl, "_blank");
      win.focus();
    },
    isAvailable(boolean) {
      if (boolean) {
        return "Yes";
      } else {
        return "No";
      }
    },
  },
  computed: {},
  created() {},
};
</script>

<style>
@media screen and (max-width: 600px) {
  #steam-icon {
    max-width: 100% !important;
  }
}
</style>
