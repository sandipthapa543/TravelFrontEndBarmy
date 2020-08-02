<template>
  <v-row>
    <v-col
      v-for="(packitem, index) in packitems"
      :key="index"
      cols="12"
      sm="6"
      md="4"
    >
      <package-one
        :packitem="packitem"
        :activity="activity"
        :reviews="reviews"
      />
    </v-col>
  </v-row>
</template>

<script>
import PackageOne from "./SinglePackage";
export default {
  components: { PackageOne },
  props: ["packitems", "activity"],
  data: () => ({
    reviews: []
  }),
  created() {
    this.$axios.$get(`package/review`).then(response => {
      this.reviews = response;
    });
  }
};
</script>

<style></style>
