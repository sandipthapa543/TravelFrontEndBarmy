<template>
  <div class="block latestBlogBlock">
    <v-container>
      <h2 class="text-center">Latest Blog</h2>
      <v-row>
        <v-col v-for="(item, index) in blogLists" :key="index" cols="12" md="4">
          <v-card outlined class="mx-auto">
            <v-card-title>{{ item.Title }}</v-card-title>
            <v-img
              class="white--text align-end"
              height="200px"
              :src="'http://localhost:8080/uploads/blogs/' + `${item.Image}`"
            >
            </v-img>
            <v-card-subtitle class="pb-0 d-flex">
              <span>By: {{item.user_id}}</span>
              <v-spacer></v-spacer>
              <span>{{ item.createdAt.substring(0,10)}} </span>
            </v-card-subtitle>

            <v-divider></v-divider>

            <v-card-text class="text--primary">
              <div>{{ item.Contents }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary">View more</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="this.$auth.loggedIn">
      <add-blog></add-blog>
    </v-container>
  </div>
</template>

<script>
import AddBlog from "../components/Blog/AddBlog";
export default {
  components: { AddBlog },
  name: "LatestPost",
  data: () => ({
    show: false,
    blogLists: []
  }),
  created() {
    this.getBlog();
  },

  methods: {
    getBlog() {
      this.$axios.$get("blog/all").then(response => {
        this.blogLists = response;
      });
    }
  }
};
</script>
