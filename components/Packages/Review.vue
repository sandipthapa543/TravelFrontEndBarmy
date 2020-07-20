<template>
  <v-card>
    <v-card-title class="headline">Review Package ({{ packname }})</v-card-title>

    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12">
            <p v-text="packs.Package_Name" class="text-center"></p>
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

      <v-btn color="green darken-1" text @click="dialog = false">
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
  props: ["packname"],
  name: "",

  // data: () => ({
  //     name: package,
  // }),
};
</script>

<style></style>
