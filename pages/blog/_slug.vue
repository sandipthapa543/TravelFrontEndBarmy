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
            <p v-text="blogs.Contents"></p>
          </v-card-text>

          <v-card-actions>
            <v-btn text color="red lighten-2" @click.stop="dialog = true">
              {{ comment.length }}
              {{ comment.length === 1 ? "Comment" : "Comments" }}
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
      <v-col cols="4">
        <h2 primary-title class="text-center">
          Featured Blogs
        </h2>
        <v-card class="d-flex mt-2 align-top" v-for="(blog,index) in allBlogs" :key="index">
            <v-img
              max-width="100"
              :lazy-src="`http://localhost:8080/uploads/blogs/${blog.Image}`"
              :src="`http://localhost:8080/uploads/blogs/${blog.Image}`"
              eager
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <v-card-title class="py-0">{{ blog.Title }}</v-card-title>
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
    this.blogs = await this.$axios.$get(`blog/${this.$route.params.slug}`);
    this.comment = await this.$axios.$get(`blog/comment/${this.blogs.id}`);
  },

  created() {
    // this.getSingleBlog();

    if (this.blogId !== null) {
      this.getComments();
    }

    this.getBlogs();
  },
  methods: {
    getBlogs() {
      this.$axios.$get("blog/all").then(response => {
        this.allBlogs = response;
      });
    },
    getComments() {
      this.$axios.$get(`blog/comment/${this.blogId}`).then(response => {
        this.comment = response;
      });
    }
  }
};
</script>

<style></style>
