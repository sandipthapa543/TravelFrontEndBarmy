<template>
  <v-card>
    <v-card-title>
      Create Activity
      <v-spacer></v-spacer>
      <v-btn icon @click="$emit('close')">
        <v-icon v-text="'mdi-close-circle'"></v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>
      <v-form v-model="valid" ref="form">
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="formValues.Activity_Name"
              label="Activity Name"
              :rules="nameRules"
              prepend-inner-icon="mdi-file"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-file-input
              v-model="formValues.image"
              label="Activity Image"
              :rules="nameRules"
              prepend-inner-icon="mdi-file"
            ></v-file-input>
          </v-col>
          <v-col sm="12" md="6" cols="6">
            <v-textarea
              v-model="formValues.Contents"
              label="Description"
              :rules="nameRules"
              prepend-inner-icon="mdi-file"
            ></v-textarea>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="grey" class="text-capitalize" text @click="$emit('close')">
        Cancel
      </v-btn>
      <v-btn
        color="red darken-3"
        class="white--text text-capitalize"
        depressed
        @click="createActivity"
      >
        Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    actionData: Object
  },
  data() {
    return {
      valid: true,
      updatePost: {
        text: "",
        newImages: { names: [], files: [] },
        deletedImages: []
      },
      nameRules: [v => !!v || "This field is required."],
      formValues: {
      }
    };
  },
  created() {
    this.formValues = this.actionData || {};
  },
  methods: {
    createActivity() {
      let formData = new FormData();
      if (!(this.formValues.image instanceof File)) {
        delete this.formValues.image;
        formData = {...this.formValues};
      } else {
        formData.append("Activity_Name", this.formValues.Activity_Name);
        formData.append("Contents", this.formValues.Contents);
        formData.append("image", this.formValues.image);
        formData.append("slug", this.formValues.slug);
      }

      if (this.formValues.id) {
        this.$axios.$put(`admin/${this.formValues.id}/`,formData )
          .then(async response => {
            this.setNotifyMessage({
              message: 'successfully updated',
              color: "green"
            })
          })
          .catch(() => {
            this.setNotifyMessage({
              message: "something went wrong",
              color: "red"
            })
          })
      } else {
        this.$axios
          .$post("admin/activity/", formData)
          .then(async response => {
            this.setNotifyMessage({
              message: "Successfully Created Activity.",
              color: "green"
            });
            this.$emit("close");
          })
          .catch(() => {
            this.setNotifyMessage({message:"Something went wrong.",color: "red"});
          });
      }
    },
    // updateActivity() {
    //   const dataPost = {
    //     Activity_Name: this.formValues.Activity_Name,
    //     Contents:this.formValues.Contents
    //   }
    //   this.$axios.$put(`admin/${this.formValues.id}/`, dataPost)
    //     .then(async response => {
    //       this.setNotifyMessage({
    //         message: 'successfully updated',
    //         color: "green"
    //       })
    //     })
    //     .catch(() => {
    //       this.setNotifyMessage({
    //         message: "something went wrong",
    //         color: "red"
    //       })
    //     })
    // }
  }
};
</script>
