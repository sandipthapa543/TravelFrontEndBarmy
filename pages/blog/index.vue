<template>
  <div class="block latestBlogBlock" >
    <v-btn color="info" class="white--text"  v-if="this.$auth.loggedIn" depressed @click="addBlog = true" @refersh="getBlog">
      Create New
    </v-btn>
    <v-container>
      <h2 class="text-center">Latest Blog</h2>
      <v-row>
        <v-col v-for="(item, index) in blogLists" :key="index" cols="12" md="4" >
          <v-card outlined class="mx-auto">
            <v-card-title v-if="item.Title">{{ item.Title.length> 30 ? item.Title.substring(0,30) + "..": item.Title }}</v-card-title>
            <v-img
              class="white--text align-end"
              height="200px"
              :src="`http://localhost:8080/uploads/blogs/${item.Image}`"
            >
            </v-img>
            <v-card-subtitle class="pb-0 d-flex">
              <span>By: {{item.user.First_Name + " " + item.user.Last_Name}}</span>
              <v-spacer></v-spacer>
              <span>{{ item.createdAt.substring(0,10)}} </span>
            </v-card-subtitle>

            <v-divider></v-divider>

            <v-card-text class="text--primary">
              <p class="text-justify mb-0" style="min-height: 88px" v-if="item.Contents">{{ item.Contents.length > 200 ? item.Contents.substring(0,200)+"..." : item.Contents }}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" :to="`/blog/${item.Slug}`" class="mx-auto">View more</v-btn>

              <v-spacer></v-spacer>
              <v-btn color="primary"  v-if=" $auth.loggedIn && $auth.user.id === item.user.id "  @click="blogs=item , addBlog=true" fab small dark>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn color="primary"  v-if=" $auth.loggedIn && $auth.user.id === item.user.id "  @click="deleteId=item.id,deleteForm = true" fab small dark>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="addBlog"  width="960" persistent v-if="this.$auth.loggedIn">
      <add-blog v-if="addBlog"  :action-data="blogs"  @close="addBlog = false, getBlog() ,blogs={}"></add-blog>
    </v-dialog>
    <v-dialog
      v-model="deleteForm"
      width="500"
      persistent
    >
      <v-card>
        <v-card-title>
          Confirm Delete
        </v-card-title>
        <v-card-text>
          You are about to delete this product.
        </v-card-text>
        <v-card-actions>
          <v-col class="text-right">
            <v-btn class="text-capitalize" text color="grey" @click="deleteForm = false,getBlog">
              Cancel
            </v-btn>
            <v-btn class="white--text text-capitalize" color="red"  @click="deleteBlog">
              Confirm
            </v-btn>
          </v-col>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import AddBlog from "../../components/Blog/AddBlog";
export default {
  components: { AddBlog },
  name: "LatestPost",
  data(){
    return{
    show: false,
      deleteForm: false,
      deleteId:'',
      blogLists: [],
    addBlog:false,
    blogs:{}
  }
  },
  created() {
    this.getBlog();
    this.getSingleBlog();
  },

  methods: {
    getBlog() {
      this.$axios.$get("blog/all").then(response => {
        this.blogLists = response;
      });
    },
    getSingleBlog() {
      this.$axios.$get(`blog/${this.$route.params.slug}`).then(response => {
        this.blogs = response;
      });
    },
    deleteBlog(){
      this.$axios.$delete(`blog/${this.deleteId}`)
        .then(() => {
        this.setNotifyMessage({message: "Successfully Deleted Product ", color: "green"})
        this.getBlog();
      });
    }
  }
};
</script>
