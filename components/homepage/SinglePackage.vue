<template>
  <v-card class="mx-auto" max-width="350px">
    <v-img
      height="250"
      alt="Name"
      src="http://himalayantrekkers.com/uploads/packages/15758055066nights-7Days-glimpse-of-nepal-tour.jpg"
    ></v-img>

    <v-card-title>6 Nights 7 Days Glimpse of Nepal Tour</v-card-title>
    <v-divider></v-divider>
    <v-card-title class="h6 py-1">
      <span>Religious Tours</span>
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
    </v-card-title>
    <v-card-text class="pb-1">
      <p class="text-justify">
        Glimpse of Nepal Tour (6 nights and 7 days) package from Himalayan
        Trekkers has a unique combination of nature, culture, and adventure.
        This Nepal...
      </p>
    </v-card-text>
    <v-card-title class="py-0">
      <div>
        <span class="d-block"> <small>Price: </small>$ 1000 </span>
        <span class="d-block"><small>Duration: </small>18 days</span>
      </div>
      <v-spacer></v-spacer>
      <div>
        <img
          src="https://himalayantrekkers.com/images/tripgrade/3.svg"
          alt="tripgrade"
          width="90px"
          class="d-block"
        />
        <v-card-subtitle class="pa-0 d-block text-center"
          >Moderate</v-card-subtitle
        >
      </div>
    </v-card-title>
  </v-card>
</template>

<style>
  

.v-slide-group__next, .v-slide-group__prev {
  min-width: 22px !important;
}
</style>
