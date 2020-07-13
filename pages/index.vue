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
      <slider :packitems="sliderItems" />
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
    activities: [],
    sliderItems: []
  }),
  created() {
    this.getPackages();
    this.getSlider();
    this.getActivities();
  },

  methods: {
    getPackages() {
      this.$axios.$get("package/show?sort=id&order=ASC&limit=6").then(response => {
        this.packitems = response;
      });
    },
    getSlider() {
      this.$axios.$get("package/show?sort=Price&order=DESC&limit=6").then(response => {
        this.sliderItems = response;
      });
    },
    getActivities() {
      this.$axios.$get("package/activity?limit=4").then(response => {
        this.activities = response;
      });
    }
  }
};
</script>