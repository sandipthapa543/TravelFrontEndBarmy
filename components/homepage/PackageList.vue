<template>
  <v-row>
    <v-col v-for="i in 8" :key="i" cols="12" sm="6" md="3">
        <package-one/>
    </v-col>
  </v-row>
</template>

<script>
import PackageOne from "./SinglePackage";
export default {
    components: {PackageOne}
};
</script>

<style></style>
