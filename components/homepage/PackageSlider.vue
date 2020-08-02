<template>
  <v-slide-group
    :prev-icon="prevIcon ? 'mdi-minus' : undefined"
    :next-icon="nextIcon ? 'mdi-plus' : undefined"
    :show-arrows="showArrows"
  >
    <!-- <v-slide-item> -->
    <v-scale-transition>
      <v-row>
        <v-col v-for="(packitem, index) in packitems" :key="index">
          <package :packitem="packitem" :reviews="reviews"></package>
        </v-col>
      </v-row>
    </v-scale-transition>
    <!-- </v-slide-item> -->
  </v-slide-group>
</template>

<script>
import Package from "./SinglePackage";

export default {
  components: { Package },
  props: ["packitems"],
  data: () => ({
    showArrows: true,
    prevIcon: false,
    nextIcon: false,
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
