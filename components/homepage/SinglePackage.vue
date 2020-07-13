<template>
  <v-card class="mx-auto" max-width="350px">
    <v-img
      v-if="packitem.Image"
      height="220"
      :alt="packitem.Package_Name"
      :src="`http://localhost:8080/uploads/packages/`+packitem.Image"
    ></v-img>

    <h4 class="px-4 pt-2" style="min-height: 64px">
    <router-link :to="`/packages/${packitem.Slug}`" class="no-underline">{{ packitem.Package_Name }}</router-link>
    </h4>
    <!-- <v-divider></v-divider> -->
    <v-card-subtitle class="py-1 d-flex">
      <span v-if="packitem.activity">{{ packitem.activity.Activity_Name }}</span>
      <span v-else>{{ activity }}</span>
      <v-spacer></v-spacer>
      <v-rating
        :value="4.3"
        color="amber"
        dense
        half-increments
        readonly
        size="14"
        :hover="true"
        title="Rating: 5"
      ></v-rating>
    </v-card-subtitle>
    <v-divider></v-divider>
    <v-card-text>
      <p class="text-justify mb-0" style="min-height: 66px" v-if="packitem.Description">{{ packitem.Description.length > 120 ? packitem.Description.substring(0, 120)+"..." : packitem.Description  }}</p>
    </v-card-text>
        <v-divider></v-divider>

    <v-card-title class="py-2">
      <div>
        <span class="d-block">
          <small>Price: </small>$ {{ formatPrice(packitem.Price) }}
        </span>
        <span class="d-block"
          ><small>Duration: </small>{{ packitem.Days }} days</span
        >
      </div>
      <v-spacer></v-spacer>
      <div>
        <img :src="`https://himalayantrekkers.com/images/tripgrade/`+packitem.Difficulty_level+`.svg`"
        alt="tripgrade" width="90px" class="d-block" />
        <v-card-subtitle class="pa-0 d-block text-center">
          <span v-if="packitem.Difficulty_level === 1">Easy</span>
          <span v-else-if="packitem.Difficulty_level === 2">Moderate</span>
          <span v-else-if="packitem.Difficulty_level === 3">Sternous</span>
          <span v-else-if="packitem.Difficulty_level === 4">Difficult</span>
          <span v-else>Challenging</span>
          </v-card-subtitle
        >
      </div>
    </v-card-title>
  </v-card>
</template>

<style>
.v-slide-group__next,
.v-slide-group__prev {
  min-width: 22px !important;
}
</style>

<script>
export default {
  props: {
    packitem: {},
    activity: ""
  },
  methods: {
    formatPrice(value) {
        let val = (value/1).toFixed(0)
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
  }
};
</script>
