<template> 
    <v-container>
      <h1 class="text-center font-weight-bold">All Activities</h1>
      <activity :activities="activities"></activity>
    </v-container>

</template>

<script>
import Activity from "../../components/homepage/ActivityLists";
export default {
  components: {Activity},
  data: () => ({
    activities: []
  }),
  created() {
    this.getActivities();
  },
  methods: {
    getActivities() {
      this.$axios.$get("package/activity").then(response => {
        this.activities = response;
      });
    }
  }
};
</script>