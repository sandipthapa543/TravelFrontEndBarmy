<template>
  <v-card>
    <v-card-title class="headline">Package Enquiry</v-card-title>

    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12">
            <p v-text="pname" class="text-center"></p>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="formValues.People"
              label="No. of People"
              outlined
              dense
              id="people"
              name="people"
              type="number"
            />
          </v-col>
          <v-col cols="12">
            <v-textarea
              v-model="formValues.Message"
              label="Message"
              outlined
              dense
              id="message"
              name="message"
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

      <v-btn color="green darken-1" text @click="postInquiry">
        Submit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["pname","packageId"],
  data: () => ({
    formValues: {},
  }),
  methods: {
    postInquiry() {
      if (this.$auth.loggedIn) {
        let inqData = {
          People: this.formValues.People,
          Message: this.formValues.Message,
          package_id: this.packageId
        };
        this.$axios
          .$post("user/inquiry", inqData)
          .then(async response => {
            this.setNotifyMessage({
              message: "Inquiry completed.",
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
