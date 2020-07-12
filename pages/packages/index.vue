<template>
  <section class="container">
    <h1 class="text-center">All Packages</h1>
    <package :packitems="packitems"></package>
    <div class="pa-4 text-center">
      <v-btn
        :disabled="current === 1 ? true : false"
        @click="prev(current)"
        color="primary"
        
        fab
      >
        <v-icon dark>mdi-arrow-left</v-icon>
      </v-btn>
      <!-- <span v-for="i in packitems.length" :key="i"> -->
      <v-btn
        class="mx-1"
        :color="i === current ? 'success' : 'danger'"
        v-for="i in total()"
        :key="i"
        @click="skipPack(i, (i - 1) * limit)"
        fab
      >
        {{ i }}
      </v-btn>
      <!-- </span> -->
      <v-btn
        :disabled="current === total() ? true : false"
        @click="next(current)"
        color="primary"
        fab
      >
        <v-icon dark>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
  </section>
</template>

<script>
import Package from "@/components/homepage/PackageList";
export default {
  components: { Package },
  data: () => ({
    packitems: [],
    packages: [],
    sort: "id",
    current: 1,
    order: "ASC",
    limit: 3,
    skip: 0
  }),
  created() {
    this.getPackages();
    this.getPacks();
  },

  methods: {
    total() {
      return Math.ceil(this.packages.length / this.limit);
    },
    skipPack(index, skipValue) {
      this.skip = skipValue;
      this.current = index;
      this.getPackages();
    },
    prev(curr) {
      this.current = curr - 1;
      this.skipPack(curr - 1, (curr - 2) * this.limit);
    },
    next(curr) {
      this.current = curr + 1;
      this.skipPack(curr + 1, curr * this.limit);
    },
    getPackages() {
      this.$axios
        .$get(
          `package/show?sort=${this.sort}&order=${this.order}&limit=${this.limit}&skip=${this.skip}`
        )
        .then(response => {
          this.packitems = response;
        });
    },
    getPacks() {
      this.$axios.$get(`package/show?sort=id&order=ASC`).then(response => {
        this.packages = response;
      });
    }
  }
};
</script>

<style></style>
