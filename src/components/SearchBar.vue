<template>
  <v-text-field
    class="mt-n2"
    solo-inverted
    rounded
    flat
    hide-details
    dense
    color="black"
    placeholder="Enter the name of game you are looking for!"
    v-model="search"
    @keydown.enter.prevent="filterGames"
  >
  </v-text-field>
</template>

<script>
export default {
  name: "SearchBar",

  computed: {
    search: {
      get() {
        return this.$store.state.search;
      },
      set(value) {
        this.$store.commit("updateSearch", value);
      },
    },
  },

  methods: {
    filterGames() {
      this.$store.commit("filterGames");
    },
  },
};
</script>

<style></style>
