<template>
  <!-- <v-container> -->
  <v-row class="pl-12">
    <v-col cols="8" class="mt-3">
      <h1>Welcome to the Himalayas !</h1>
      <blockquote class="blockquote px-0">
        “A mesmerizing mystical nation of the majestic Himalayas”
      </blockquote>
      <p>
        For the Himalayan country Nepal and its tourism industry, spring is the
        season of Mt. Everest expedition. This year's spring is different as
        COVID-19 pandemic has brought the whole world to a standstill. Nepali
        Sherpa community regards Mt. Everest as God. Sherpas are dependent upon
        mountains for livelihood. But this time, they are compelled to be locked
        up inside their homes. However, their kindness and compassion have
        touched many lives even during this crisis. Despite losing jobs and the
        only income source, they are determined to support each other especially
        those less privileged.
      </p>
      <h1>Why Barmy Travels ?</h1>
      <ul class="pa-0">
        <li
          v-for="(list, index) in lists"
          :key="index"
          class="d-flex py-1 align-start"
        >
          <v-icon class="mr-2">mdi-chevron-double-right</v-icon>
          {{ list }}
        </li>
      </ul>
    </v-col>
    <v-col cols="4" class="primary white--text">
      <h2 class="text-center">Featured Countries</h2>
      <ul style="width: 80%">
        <li v-for="(country,index) in countries" :key="index" class="d-flex mt-4 country">
          <span class="mr-3">
            <img :src="country.icon" :alt="country.name" :title="country.name" width="60px">
          </span>
          <div class="pb-4 border">
            <h3>{{country.name}}</h3>
            <span>{{country.desc}}</span>
          </div>
        </li>
      </ul>
    </v-col>
  </v-row>
  <!-- </v-container> -->
</template>

<script>
export default {
  data: () => ({
    lists: [
      "Best tour guaranteed.",
      "Customer satisfaction.",
      "East tour booking and free cancelation.",
      "We help your search and find the perfect trip you desire to help create your dream holiday tour package with us.",
      "All kinds of tours and trips available."
    ],
    countries: [
      {
        id: 1,
        icon: require("../../assets/images/flags/nepal.svg"),
        name: "Nepal",
        desc: "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet"
      },
      {
        id: 2,
        icon: require("../../assets/images/flags/india.svg"),
        name: "India",
        desc: "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet"
      },
      {
        id: 3,
        icon: require("../../assets/images/flags/bhutan.svg"),
        name: "Bhutan",
        desc: "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet"
      },
      {
        id: 4,
        icon: require("../../assets/images/flags/tibet.svg"),
        name: "Tibet",
        desc: "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet"
      },
      {
        id: 5,
        icon: require("../../assets/images/flags/pakistan.svg"),
        name: "Pakistan",
        desc: "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet"
      },
    ]
  })
};
</script>

<style>
.country .border{
  border-bottom: 1px solid whitesmoke;
}
.country:last-child .border{
  border: none;
}
</style>
