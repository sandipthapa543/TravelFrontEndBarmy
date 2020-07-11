<template>
  <!-- <v-row>
    <v-col>
      <v-carousel
        cycle
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for=" (items,i) in items"
          :key="i"
          :src="items"
          justify="center"
        >
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row> -->
  <div>
    <v-container>
      <h2 class="text-center font-weight-bold">Top Packages</h2>
      <package :packitems="packitems"></package>
    </v-container>
    <v-container>
      <h2 class="text-center font-weight-bold">Recommended Packages</h2>
      <slider :packitems="packitems" />
    </v-container>
    <v-container>
      <h2 class="text-center font-weight-bold">Our Activities</h2>
      <activity :activities="activities"></activity>
    </v-container>
  </div>
</template>

<script>
import Activity from "../components/homepage/ActivityLists";
import Package from "../components/homepage/PackageList";
import Slider from "../components/homepage/PackageSlider";
export default {
  head: {
    title: "Travel and Tourism App",
    meta: [
      { hid: 'description', name: 'description', content: 'Home page description' }
    ],
    noscript: [
      { innerHTML: 'Body No Scripts', body: true }
    ],
  },
  components: { Activity, Package, Slider },
  data: () => ({
    packitems: [],
    activities: []
  }),
  created() {
    this.getPackages();
    this.getActivities();
  },

  methods: {
    getPackages() {
      this.$axios.$get("package/show?limit=1").then(response => {
        this.packitems = response;
      });
    },
    getActivities() {
      this.$axios.$get("package/activity?limit=2").then(response => {
        this.activities = response;
      });
    }
  }
};
</script>
