<template>
  <v-row>
    <v-col v-for="(packitem,index) in packitems" :key="index" cols="12" sm="6" md="4">
        <package-one :packitem="packitem" :activity="activity" />
    </v-col>
    <!-- <p>{{packitems}}</p> -->
  </v-row>
</template>

<script>
import PackageOne from "./SinglePackage";
export default {
    components: {PackageOne},
    props: ['packitems','activity']
};
</script>

<style></style>
