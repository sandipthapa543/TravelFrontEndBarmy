<template>
  <v-card>
    <v-card-title class="headline"
      >Review Package ({{ packname }})</v-card-title
    >
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12"> </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="formValues.rating"
              label="Rating"
              outlined
              dense
              min="1"
              max="5"
              id="rating"
              name="rating"
              type="number"
            />
          </v-col>
          <v-col cols="12">
            <v-textarea
              v-model="formValues.review"
              label="Review Contents"
              outlined
              dense
              id="review"
              name="review"
            ></v-textarea>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="green darken-1" text @click="$emit('close')">
        Cancel
      </v-btn>

      <v-btn color="green darken-1" text @click="postReviews">
        Submit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["packname", "packageId"],

  data: () => ({
    formValues: {}
  }),
  methods: {
    postReviews() {
      if (this.$auth.loggedIn) {
        let inqData = {
          rating: this.formValues.rating,
          review: this.formValues.review
        };
        this.$axios
          .$post(`package/review/${this.packageId}`, inqData)
          .then(async response => {
            this.setNotifyMessage({
              message: "Package reviewed successfully.",
              color: "green"
            });
            this.$emit("close");
          })
          .catch(() => {
            this.setNotifyMessage({
              message: "Something went wrong.",
              color: "red"
            });
          });
      } else {
        this.setNotifyMessage({
          message: "Please login first.",
          color: "red"
        });
      }
    }
  }
};
</script>

<style></style>
