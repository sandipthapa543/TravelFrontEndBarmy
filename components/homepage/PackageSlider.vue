<template>
  <v-slide-group
    :prev-icon="prevIcon ? 'mdi-minus' : undefined"
    :next-icon="nextIcon ? 'mdi-plus' : undefined"
    :show-arrows="showArrows"
  >
    <!-- <v-slide-item> -->
      <v-scale-transition>
        <v-row>
          <v-col v-for="n in 15" :key="n">
        <package></package>

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
  data: () => ({
    showArrows: true,
    prevIcon: false,
    nextIcon: false
  })
};
</script>

<style></style>
