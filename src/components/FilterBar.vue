<template>
  <v-row no-gutters justify="space-between">
    <v-col cols="9" align-self="center">
      <div class="white--text">
        Showing {{ this.$store.state.resultList.length }} game(s).
      </div>
    </v-col>
    <v-col align-self="center" cols="3">
      <v-row no-gutters justify="space-between">
        <v-col cols="2" align-self="center">
          <div class="white--text">
            Sort by:
          </div>
        </v-col>
        <v-col cols="3" align-self="center">
          <v-select
            hide-details
            v-model="sortItem"
            @change="sortGames"
            :items="sortItems"
            flat
            solo
            dense
          ></v-select>
        </v-col>
        <v-col cols="2" align-self="center">
          <div class="white--text">
            Filter:
          </div>
        </v-col>
        <v-col cols="4" align-self="center">
          <v-select
            hide-details
            v-model="filterItem"
            @change="filterGames"
            :items="filterItems"
            flat
            solo
            dense
          ></v-select>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "FilterBar",
  data: () => ({}),

  computed: {
    sortItems() {
      return this.$store.state.sortItems;
    },
    sortItem: {
      get() {
        return this.$store.state.sortItem;
      },
      set(value) {
        this.$store.commit("updateSortItem", value);
      },
    },
    filterItems() {
      return this.$store.state.filterItems;
    },
    filterItem: {
      get() {
        return this.$store.state.filterItem;
      },
      set(value) {
        this.$store.commit("updateFilterItem", value);
      },
    },
  },

  methods: {
    sortGames() {
      this.$store.commit("sortResultList");
    },
    filterGames() {
      this.$store.commit("filterGames");
    },
  },
};
</script>

<style></style>
