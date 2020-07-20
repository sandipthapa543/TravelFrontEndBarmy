<template>
  <section class="container">
    <v-row>
      <v-col cols="8">
        <v-card max-width="800" max-height="auto" class="mx-auto">
          <v-card-title>
            <h1 class="mx-auto">{{ blogs.Title }}</h1>
          </v-card-title>
          <v-card-subtitle class="pb-0 d-flex" v-if="blogs.user">
            <span
              >By:
              {{ blogs.user.First_Name + " " + blogs.user.Last_Name }}
            </span>
            <v-spacer></v-spacer>
            <span>{{ blogs.createdAt.substring(0, 10) }}</span>
          </v-card-subtitle>

          <v-img
            v-if="blogs.Image"
            :src="`http://localhost:8080/uploads/blogs/${blogs.Image}`"
            height="300"
          ></v-img>

          <v-card-text>
            Visit ten places on our planet that are undergoing the biggest
            changes today.
          </v-card-text>

          <v-card-actions>
            <v-btn text color="red lighten-2" @click.stop="dialog = true">
              {{comment.length}} {{comment.length === 1 ? "Comment" : "Comments"}}
            </v-btn>

            <!-- <v-dialog v-model="dialog" max-width="500">
              <v-card>
                <v-card-title class="headline">Feel free</v-card-title>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" text @click="dialog = false">
                    Cancel
                  </v-btn>

                  <v-btn
                    color="green darken-1"
                    text
                    @click.native="postComments"
                  >
                    Submit
                  </v-btn>
                </v-card-actions>
                <v-spacer></v-spacer>
              </v-card>
            </v-dialog> -->

            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
          <!-- </v-card>
  <v-card> -->
    <v-divider></v-divider>
          <comment :comments="comment" :blogId="blogs.id"></comment>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>
<script></script>

<style>
.v-breadcrumbs__item {
  color: black !important;
}
</style>

<script>
import Package from "../../components/homepage/PackageList";
// import AddBlog from "../../components/Blog/AddBlog";
import Comment from "../../components/Blog/Comment";
export default {
  components: { Package, Comment },
  data: () => ({
    show: false,
    dialog: false,
    blogs: {},
    blogId: null,
    allBlogs: [],
    addBlog: false,
    message: "",
    comment: [],

    items: [
      {
        text: "Home",
        disabled: false,
        to: "/"
      },
      {
        text: "Blogs",
        disabled: false,
        to: "/blog"
      }
    ]
  }),

async fetch() {
      this.blogs = await this.$axios.$get(`blog/${this.$route.params.slug}`)
      this.comment = await this.$axios.$get(`blog/comment/${this.blogs.id}`)
},

  created() {
    // this.getSingleBlog();

    if (this.blogId !== null) {
      this.getComments();
    }

    //   this.getBlogs();
  },
  methods: {
    getSingleBlog() {
      this.$axios.$get(`blog/${this.$route.params.slug}`).then(response => {
        this.blogs = response;
        this.blogId = response.blog_id;
      });
    },
    getBlogs() {
      this.$axios.$get("blog/all").then(response => {
        this.allBlogs = response;
      });
    },
    getComments() {
      this.$axios.$get(`blog/comment/${this.blogId}`).then(response => {
        this.comment = response;
      });
    },
  }
};
</script>

<style></style>
