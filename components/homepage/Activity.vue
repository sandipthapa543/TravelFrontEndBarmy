<template>
  <v-row>
    <v-col v-for="activity in activity" :key="activity.id" cols="12" sm="6" md="3">
      <v-card>
        <v-img
          :src="activity.image"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
        >
          <div class="ts">
            <v-card-title class="pt-0 pointer" v-text="activity.title" @click="$router.push('/activity')"></v-card-title>
            <v-card-subtitle class="pb-1" style="color: white !important" v-text="activity.total + ` Packages`"></v-card-subtitle>
          </div>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      activity: [
      {
        id:1,
        image: "https://himalayantrekkers.com/images/adventure.jpg",
        title: "Trekking and Hiking",
        total: 107
      },
      {
        id:2,
        image: "https://himalayantrekkers.com/images/7.jpg",
        title: "Peak Climbing",
        total: 5
      },
      {
        id:3,
        image: "https://himalayantrekkers.com/images/adventure.jpg",
        title: "Adventure trips",
        total: 70
      },
      {
        id:4,
        image: "https://himalayantrekkers.com/images/nepal.jpg",
        title: "Religious Tours",
        total: 47
      },
      {
        id:5,
        image: "https://himalayantrekkers.com/images/5.jpg",
        title: "Helicopter Tours",
        total: 13
      },
      {
        id:6,
        image: "https://himalayantrekkers.com/images/mountain.jpg",
        title: "Trekking and Hiking",
        total: 21
      },
      {
        id:7,
        image: "https://himalayantrekkers.com/images/mountain.jpg",
        title: "Jungle Safari",
        total: 2
      },
      {
        id:8,
        image: "https://himalayantrekkers.com/images/homestay.jpg",
        title: "Homestay Tours",
        total: 6
      }
    ]
    }
}
}
</script>

<style>
.ts {
  text-shadow: 2px 2px #000;
  background: linear-gradient(180deg, transparent 0, rgba(0, 0, 0, 0.75));
}
.pointer {
    cursor: pointer !important;
}
</style>
