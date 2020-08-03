<template>
  <div>
    <v-carousel hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="item in items" :key="item.id" justify="center">
        <iframe
          width="100%"
          height="550"
          :src="item.content"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </v-carousel-item>
    </v-carousel>
    <section class="white">
      <about></about>
    </section>
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
    <v-parallax height="600" :src="require('../assets/images/himal.jpg')">
      <v-container>
        <h2 class="text-center font-weight-bold">Client Reviews</h2>
        <rating :reviews="reviews"></rating>
        <v-btn class="mx-auto" primary @click="$router.push('/reviews')"
          >View all reviews</v-btn
        >
      </v-container>
    </v-parallax>
  </div>
</template>

<script>
import Activity from "../components/homepage/ActivityLists";
import Package from "../components/homepage/PackageList";
import Slider from "../components/homepage/PackageSlider";
import About from "../components/homepage/About";
import Rating from "../components/Rating";
export default {
  head: {
    title: "Travel and Tourism App",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description"
      }
    ],
    noscript: [{ innerHTML: "Body No Scripts", body: true }]
  },
  components: { Activity, Package, Slider, Rating, About },
  data: () => ({
    packitems: [],
    activities: [],
    sliderItems: [],
    reviews: [],
    items: [
      {
        id: "1",
        content: "https://www.youtube.com/embed/ut-U-4m42aQ"
      },
      {
        id: "2",
        content: "https://www.youtube.com/embed/j61j9X4xCnA"
      }
    ]
  }),
  created() {
    this.getPackages();
    this.getSlider();
    this.getActivities();
    this.getReviews();
  },

  methods: {
    getPackages() {
      this.$axios
        .$get("package/show?sort=id&order=ASC&limit=6")
        .then(response => {
          this.packitems = response;
        });
    },
    getSlider() {
      this.$axios
        .$get("package/show?sort=Price&order=DESC&limit=6")
        .then(response => {
          this.sliderItems = response;
        });
    },
    getActivities() {
      this.$axios.$get("package/activity?limit=4").then(response => {
        this.activities = response;
      });
    },
    getReviews() {
      this.$axios.$get(`package/allreviews?where=4&limit=6`).then(response => {
        this.reviews = response;
      });
    }
  }
};
</script>

<style>
  .aboutus {
    
  }
</style>