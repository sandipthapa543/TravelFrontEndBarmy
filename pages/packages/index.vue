<template>
  <section class="container">
    <h1 class="text-center">All Packages</h1>
    <div v-if="$fetchState.pending">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
    <p v-else-if="$fetchState.error">Error: {{ $fetchState.error.message }}</p>
    <div v-else>
      <v-row align="center" class="px-4">
        <v-col cols="6">
          <p class="mb-1 text-black-50">
            Total packages: <b>{{ packages.length }}</b>
          </p>
          <p class="mb-1 text-black-50">
            Displayed Packages: <b>{{ packitems.length }}</b>
          </p>
        </v-col>
        <v-col cols="6" class="d-flex">
          <v-select
            dense
            solo
            v-model="sort"
            label="Sort by"
            :items="choices"
            item-text="name"
            item-value="value"
            @change="refresh()"
            class="px-2"
          ></v-select>
          <v-btn @click="changeOrder" class="px-2" title="Change order">
            <v-icon>mdi-format-line-spacing</v-icon>
          </v-btn>
        </v-col>
      </v-row>
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
    </div>
  </section>
</template>

<script>
import Package from "@/components/homepage/PackageList";
import FilterPack from "@/components/Packages/Filter";
export default {
  components: { Package, FilterPack },
  data: () => ({
    choices: [
      {
        name: "Popularity",
        value: "id"
      },
      {
        name: "Price",
        value: "Price"
      },
      {
        name: "Duration",
        value: "Days"
      },
      {
        name: "Difficulty_level",
        value: "Difficulty_level"
      }
    ],
    ordering: ["ASC", "DESC"],
    packitems: [],
    packages: [],
    sort: "id",
    current: 1,
    order: "ASC",
    limit: 3,
    skip: 0
  }),
  created() {
    this.getPacks();
  },
  async fetch() {
    this.packitems = await this.$axios.$get(
      `package/show?sort=${this.sort}&order=${this.order}&limit=${this.limit}&skip=${this.skip}`
    );
  },

  methods: {
    changeOrder() {
      this.order === "ASC" ? (this.order = "DESC") : (this.order = "ASC");
      this.$fetch();
    },
    refresh() {
      this.$fetch();
    },

    total() {
      return Math.ceil(this.packages.length / this.limit);
    },
    skipPack(index, skipValue) {
      this.skip = skipValue;
      this.current = index;
      this.$fetch();
    },
    prev(curr) {
      this.current = curr - 1;
      this.skipPack(curr - 1, (curr - 2) * this.limit);
    },
    next(curr) {
      this.current = curr + 1;
      this.skipPack(curr + 1, curr * this.limit);
    },
    // getPackages() {
    //   this.$axios
    //     .$get(
    //       `package/show?sort=${this.sort}&order=${this.order}&limit=${this.limit}&skip=${this.skip}`
    //     )
    //     .then(response => {
    //       this.packitems = response;
    //     });
    // },
    getPacks() {
      this.$axios.$get(`package/show?sort=id&order=ASC`).then(response => {
        this.packages = response;
      });
    }
  }
};
</script>

<style></style>
