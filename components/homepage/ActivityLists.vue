<template>
  <v-row>
    <v-col
      v-for="activity in activities"
      :key="activity.id"
      cols="12"
      sm="6"
      md="3"
    >
      <v-card>
        <v-img
          :src="`http://localhost:8080/uploads/activities/` + activity.Image"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
        >
          <div class="ts">
            <v-card-title
              class="pt-0 pointer"
              v-text="activity.Activity_Name"
              @click="$router.push(`/activities/${activity.Slug}`)"
              :id="activity.Slug"
            ></v-card-title>
            <v-card-subtitle
              class="pb-1"
              style="color: white !important"
              v-text="
                activity.packages.length === 1
                  ? `${activity.packages.length} Package`
                  : `${activity.packages.length} Packages`
              "
            ></v-card-subtitle>
          </div>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    activities: {}
  },
  // data() {}
};
</script>

<style>

</style>
