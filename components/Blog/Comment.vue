<template>
 <!-- view all comment -->
 
   <v-container>
     <v-col cols="12" md="13">
    <v-textarea
      background-color="light-blue"
      color="black"
      label="Comment"
      outlined
      auto-grow
      rows="3"
      row-height="15"
      shaped
    ></v-textarea>
  <v-list-item>
                      <v-list-item-avatar color="red"></v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="headline">user name</v-list-item-title>
                        <!-- <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle> -->                       
                      </v-list-item-content>
                      <v-spacer></v-spacer>
                           <v-btn color="green darken 2" text>
                                Reply
                            </v-btn>
                      
                      <v-icon> mdi-tooltip-edit</v-icon> 
                        <v-icon>mdi-delete</v-icon>
                    </v-list-item>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "Comment",
  data() {
    return {
     
    };
  }
};
</script>