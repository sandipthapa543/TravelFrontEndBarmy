<template>
  <div>
    <v-container>
    <v-carousel
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for=" item in items"
        :key="item.id"
        v-html="item.content"
        justify="center"
      >
      </v-carousel-item>
    </v-carousel>
    </v-container>
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
      <v-container>
      <h2 class="text-center font-weight-bold">Rate us</h2>
      <rating></rating>
    </v-container>
  </div>
</template>

<script>
import Activity from "../components/homepage/ActivityLists";
import Package from "../components/homepage/PackageList";
import Slider from "../components/homepage/PackageSlider";
import Rating from "../components/Rating"
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
  components: { Activity, Package, Slider, Rating },
  data: () => ({
    packitems: [],
    activities: [],
    sliderItems: [],
    items: [{
      id: "1",
      content: '<iframe width="1200" height="550" src="https://www.youtube.com/embed/ut-U-4m42aQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen allow="autoplay; encrypted-media" ></iframe>'},
      { id: "2",
        content: '<iframe width="1200" height="550" src="https://www.youtube.com/embed/j61j9X4xCnA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen allow="autoplay; encrypted-media"></iframe>'}
    ]
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
