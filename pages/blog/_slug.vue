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

          <v-img v-if="blogs.Image"
            :src="`http://localhost:8080/uploads/blogs/${blogs.Image}`"
            height="300"
          ></v-img>

          <v-card-text>
            Visit ten places on our planet that are undergoing the biggest
            changes today.
          </v-card-text>

          <v-card-actions>
            <v-btn text color="red lighten-2" @click.stop="dialog = true">
              Comment
            </v-btn>

            <v-dialog v-model="dialog" max-width="500">
              <v-card>
                <v-card-title class="headline">Feel free</v-card-title>

                <v-form ref="form">
                  <v-container>
                    <v-row>
                      <v-col cols="12">

                    <v-list-item>
                      <v-list-item-avatar color="grey"></v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="headline">User name</v-list-item-title>
                        <!-- <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle> -->
                      </v-list-item-content>
                    </v-list-item>
                        <v-text-field
                          v-model="formValues.Comments"
                          filled
                          clear-icon="mdi-close-circle"
                          clearable
                          type="text"
                          @click:append-outer="sendMessage"
                          @click:clear="clearMessage"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" text @click="dialog = false">
                    Cancel
                  </v-btn>

                  <v-btn color="green darken-1" text @click.native="postComments">
                    Submit
                  </v-btn>
                </v-card-actions>
<v-spacer></v-spacer>
<comment></comment>
              </v-card>
            </v-dialog>

            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>

      </v-col>
    </v-row>
<!--    <v-dialog v-model="addBlog"  width="960" persistent  v-if="this.$auth.loggedIn">-->
<!--      <add-blog v-if="addBlog"  :action-data="blogs"  @close="addBlog =false, getSingleBlog()"></add-blog>-->
<!--    </v-dialog>-->
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
    allBlogs: [],
    addBlog:false,
    message: "",
    formValues:{
      Comments:"",
      blog_id:""
    },
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
    ],
    blogOne:{},
  }),
  created() {
    this.getSingleBlog();
    this.getBlogs();
    this.getOneBlog();
  },
  methods: {
    getSingleBlog() {
      this.$axios.$get(`blog/${this.$route.params.slug}`).then(response => {
        this.blogs = response;
      });
    },
    getOneBlog() {
      this.$axios.$get(`blog/${this.$route.params.id}`).then(response => {
        this.blogOne = response.result;
      });
    },
    getBlogs() {
      this.$axios.$get("blog/all").then(response => {
        this.allBlogs = response;
      });
    },
    postComments(){
      if(this.$auth.loggedIn){
        this.dialog = false
        let formData={
          Comments:this.formValues.Comments,
          blog_id:this.blogs.id,

        };
        this.$axios.$post(`blog/comment`,formData).then(()=>{
          this.setNotifyMessage({color:'green',message:'Posted Comment'})
        }).catch(()=>{
          this.setNotifyMessage({color:'red',message:'failed'})
        })

      }
    },

    sendMessage() {
      this.resetIcon();
      this.clearMessage();
    },
    clearMessage() {
      this.formValues.message = "";
    }
  }
};
</script>

<style></style>


