<template>
  <section class="container">
    <h1 class="text-center">All Packages</h1>
    <package :packitems="packitems"></package>
  </section>
</template>

<script>
import Package from "../../components/homepage/PackageList";
export default {
  components: { Package },
  data: () => ({
    packitems: []
  }),
  created() {
    this.getPackages();
  },

  methods: {
    getPackages() {
      this.$axios.$get("package/show").then(response => {
        this.packitems = response;
      });
    }
  }
};
</script>

<style></style>
