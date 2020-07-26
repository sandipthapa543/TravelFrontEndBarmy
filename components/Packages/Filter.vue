<template>
  
</template>

<script>
export default {
  data: () => ({
    queries: "id",
    choices: [
      {
        name: "Popularity",
        value: "id"
      },
      {
        name: "Price",
        value: "Price"
      },
      {
        name: "Duration",
        value: "Days"
      },
      {
        name: "Difficulty_level",
        value: "Difficulty_level"
      }
    ]
  }),
  methods: {
  },
  updated(){
      this.$emit("sorting", this.queries);
  }
};
</script>

<style></style>
