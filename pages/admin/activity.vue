<template>
  <add-activity></add-activity>
</template>
<script>
  import AddActivity from "../../components/Activity/AddActivity";
  export  default {
    components: {AddActivity},

    data() {
      return {
        choices: [],
      }
        },
        created()
      {
        this.getActivity()
      },

        methods: {
          getActivity () {
            this.$axios.$get('package/activity')
              .then((response)=> {
                this.choices = response.results
              })
          },

      }
  }
</script>
