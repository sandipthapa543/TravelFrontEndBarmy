<template>
  <!-- view all comment -->
  <v-container>
    <v-form>
      <v-row>
        <v-col cols="10">
          <v-text-field
            v-model="formValues.Comments"
            filled
            clear-icon="mdi-close-circle"
            clearable
            id="people"
            type="text"
            placeholder="Add Comments."
          ></v-text-field>
        </v-col>

        <v-col cols="2">
          <v-btn color="green darken-1" text @click="postComments">
            Submit
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
    <v-list-item
      v-for="(comment, index) in comments"
      :key="index"
      class="mt-2"
      style="border: 1px solid aqua"
    >
    <div class="d-flex flex-column" style="width:100%">
    <div class="d-flex flex-row justify-content-center">
      <v-list-item-avatar color="red" class="my-0"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline" v-if="comment.user">
          {{ comment.user.First_Name + " " + comment.user.Last_Name }}
        </v-list-item-title>
      </v-list-item-content>
      <v-spacer></v-spacer>
      

      <!-- <v-btn color="green darken 2" text>
        Reply
      </v-btn> -->

      <v-icon class="mr-2"> mdi-pencil</v-icon>
      <v-icon>mdi-delete</v-icon>
      </div>
      <p v-text="comment.Comments" class="text-justify"></p>
    </div>
    </v-list-item>
  </v-container>
</template>

<script>
export default {
  props: ["comments", "blogId"],
  data: () => {
    return {
      formValues: {
        Comments: ""
      }
    };
  },
  methods: {
    postComments() {
      if (this.$auth.loggedIn) {
        let formData = {
          Comments: this.formValues.Comments,
          blog_id: this.blogId
        };
        console.log("Commented");
        this.$axios
          .$post(`blog/comment`, formData)
          .then(() => {
            this.setNotifyMessage({
              color: "green",
              message: "Posted Comment"
            });
          })
          .catch(() => {
            this.setNotifyMessage({ color: "red", message: "failed" });
          });
      } else {
        this.setNotifyMessage({ color: "red", message: "Please login first." });
      }
    }
  }
};
</script>
