<template>
  <div>
    <gmap-map :center="center" :map-type-id="mapTypeId" :zoom="5">
      <gmap-info-window
        @closeclick="window_open=false"
        :opened="window_open"
        :position="center"
        :options="{
          pixelOffset: {
            width: 0,
            height: -35
          }
        }"
      >
        Travel Barmy
      </gmap-info-window>

      <gmap-marker
        v-for="(item, index) in markers"
        :key="index"
        :position="item.position"
        v-text="item.name"
        @click="openWindow"
      ></gmap-marker>
    </gmap-map>
    <div style="background: cadetblue">
      <v-breadcrumbs :items="items" class="container">
        <template v-slot:divider>
          <v-icon>mdi-forward</v-icon>
        </template>
      </v-breadcrumbs>
    </div>
    <section class="container">
      <p>
        With a many years experience in the travel and tour industry,
        specializing in the tour as well as flight ticket, BarmyTravel has
        become the preferred travel agency for several travelers and adventures
        from around the world. As one of the leading travel agency and tour
        operator in Kathmandu, offering a complete range of travel and tour
        related services, BarmyTravel is full services travel and tour
        organization, which is renowned for its professionalism in handling the
        individual or group travel in Nepal.
      </p>
      <p>
        BarmyTravel not only offers you the sights and sound of the Beautiful
        Himalayan realm but also introduces you to the ever-smiling faces, open
        hearts and warmth of its people. The company strongly supports the
        gradual and systematic development of tourism in Nepal. We also promote
        the preservation and well-being of our natural, cultural and traditional
        legacies.
      </p>

      <p>
        Located between two nations India and China, Nepal is known as a
        Himalayan kingdom, country of Mt. Everest, full of flora and fauna.
        Along with fascinating spots for the sightseeing, trekking,
        mountaineering, rafting, wild life safari, splendid arts and crafts. The
        parallel mountain ranges of varying heights traverse the country from
        the East to the West The Chure Range in the south, The Mahabharat Range
        in the center and the main Himalayas on the North are the main dividing
        features of the country. Hence, Nepal has been the dreamland of the
        tourists since long. Nestled in the cradle of the highest mountains on
        earth, Nepal is the kingdom where deities mingle with mortals.
      </p>
      <p>
        The heart of Nepal are the Hills; slopes are so incredible steep that it
        is impossible to imagine that there could be people climbing the hill to
        live, yet there they are, working on tiered fields stacked up towards
        sky.
      </p>
    </section>
    <gallery></gallery>
  </div>
</template>

<script>
import Gallery from "../components/Gallery";

export default {
  components: {
    Gallery
  },
  data: () => ({
    center: { lat: 27.7052354, lng: 85.3294158 },
    mapTypeId: "terrain",
    markers: [
      { position: { lat: 27.7052354, lng: 85.3294158,} },
      {name:'Travel Barmy'}
    ],
    window_open: false,
    info_marker: null,
    items: [
      {
        text: "Home",
        disabled: false,
        to: "/"
      },
      {
        text: "About Us"
      }
    ]
  }),

  methods: {
    openWindow () {
      this.window_open = true
    }
  }
};
</script>
<style lang="scss" scoped>
  .vue-map-container {
    height: 450px;
    width: 100%;
  }
</style>
