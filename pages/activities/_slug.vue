<template>
  <div>
    <v-img
      v-if="activity.Image"
      class="white--text align-end"
      height="320"
      :src="`http://localhost:8080/uploads/activities/` + activity.Image"
      :lazy-src="`http://localhost:8080/uploads/activities/` + activity.Image"
      :alt="activity.Activity_Name"
      eager
    >
                      <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>

      <h1 class="ts text-uppercase text-center">
        {{ activity.Activity_Name }}
      </h1>
    </v-img>
    <div style="background: cadetblue">
      <v-breadcrumbs :items="items" class="container">
        <template v-slot:divider>
          <v-icon>mdi-forward</v-icon>
        </template>
      </v-breadcrumbs>
    </div>
    <section class="container">
      <v-row>
        <v-col cols="8">
          <p class="text-justify" v-text="activity.Contents"></p>
        </v-col>
        <v-col cols="4">
          <v-card class="mx-auto">
            <v-toolbar color="teal" dark>
              <v-toolbar-title class="mx-auto"
                >Other Activities</v-toolbar-title
              >
            </v-toolbar>

            <v-list>
              <v-list-item
                v-for="(act, index) in activities"
                :key="index"
                :to="act.Slug"
              >
                <v-list-item-title>{{ act.Activity_Name }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </section>
    <section class="container">
      <h3 class="text-center">Related Packages</h3>
      <package
        :packitems="activity.packages"
        :activity="activity.Activity_Name"
      ></package>
    </section>
  </div>
</template>


<script>
import Package from "../../components/homepage/PackageList";
export default {
  components: { Package },
  data: () => ({
    activity: {},
    activities: [],
    items: [
      {
        text: "Home",
        disabled: false,
        to: "/"
      },
      {
        text: "Activities",
        disabled: false,
        to: "/activities"
      }
    ]
  }),
  beforeMount() {
    this.getSingleActivity();
    this.getActivities();
  },
  methods: {
    getSingleActivity() {
      this.$axios
        .$get("package/activity/" + this.$route.params.slug)
        .then(response => {
          this.activity = response;
          this.items.push({
            text: response.Activity_Name,
            disabled: true,
          });
        });
    },
    getActivities() {
      this.$axios.$get("package/activity").then(response => {
        this.activities = response;
      });
    }
  }
};
</script>

<style></style>
