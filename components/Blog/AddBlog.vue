<template>
  <v-card>
    <v-card-title>
      Create Blog
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
              v-model="formValues.title"
              id="title"
              label="Blog Title"
              name="title"
              prepend-inner-icon="mdi-file"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-file-input
              v-model="formValues.image"
              id="image"
              label="Product Image"
              name="image"
              :rules="nameRules"
              prepend-inner-icon="mdi-file"
            ></v-file-input>
          </v-col>
          <v-col cols="6">
            <v-textarea
              v-model="formValues.contents"
              id="content"
              label="Content"
               name="content"
              prepend-inner-icon="mdi-link"
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
        @click="createBlog"
      >
        Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    props:{
      actionData:Object,
    },
    data () {
      return {
        valid: true,
        updatePost: {
          text: "",
          newImages: { names: [], files: [] },
          deletedImages: []
        },
        nameRules: [
          v => !!v ||  'This field is required.'
        ],
        formValues: {
          "name": "",
          "contents": "",
          "image": null,
          "likes":null,
          user:this.$auth.user.id,
          blog:this.$route.params.id
        },
        blogPost:{}
      }
    },
    created() {
      this.formValues = this.actionData || {}
    },
    methods: {
      createBlog () {
        if(this.$auth.loggedIn) {
          this.blogPost.user=this.$auth.user.id
          let formData = new FormData()
          if (!(this.formValues.image instanceof File)) {
            delete this.formValues.image
            formData = {...this.formValues}
          } else {
            formData.append('title', this.formValues.title)
            formData.append('contents', this.formValues.contents)
            formData.append('image', this.formValues.image)
          }
        if(this.formValues.id){
          this.updateBlog();

        }
        else
          {
            this.$axios.$post('blog/add/', formData)
              .then(async (response) => {
                this.setNotifyMessage({message: 'Successfully Created Blog.', color: 'green'})
                this.$emit('close')
              })
              .catch(() => {
                this.setNotifyMessage({message:'Something went wrong.', color:'red'})
              })
          }
        }
      },
      updateBlog(){

        let dataPost={
          Title:this.formValues.title,
          Contents:this.formValues.contents
        }
        this.$axios.$put(`blog/edit/${this.formValues.id}/`,dataPost)
        .then(async (response)=>{
          this.setNotifyMessage({message:'Successfully updated Blog',color:'green'})
          this.$emit('close')
        })
        .catch(()=>{
          this.setNotifyMessage('Something went wrong','red')
        })
      }

    }
  }
</script>
