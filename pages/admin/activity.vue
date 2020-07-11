<template>
  <v-container>
    <v-card class="mt-5">
      <v-card-title>
        <v-icon v-text="'mdi-file'"></v-icon>
        <div>Activity List</div>
        <v-spacer></v-spacer>
        <v-btn color="info" class="white--text" depressed @click="addActivity = true">
          Create New
        </v-btn>
      </v-card-title>
      <v-divider></v-divider>
      <v-data-table
        :items="activityList"
        :headers="headers"
      >
        <template
          slot="item"
          slot-scope="props"
        >
          <tr>
            <td>  <v-row align="center">
              <v-col>
                <v-img
                  contain
                  :src="'http://localhost:8080/uploads/activities/'+ `${props.item.Image}`"
                  height="100"
                  width="100"
                ></v-img>
              </v-col>
            </v-row>
            </td>
            <td>{{ props.item.Activity_Name }}</td>
            <td>{{ props.item.Contents }}</td>
            <td>
              <v-btn @click="deleteId = props.item.id, deleteForm = true" icon>
                <v-icon color="red" v-text="'mdi-close-circle'"></v-icon>
              </v-btn>
            </td>
            <td>
              <v-btn @click="activity=props.item, addActivity=true" icon>
              <v-icon color ="grey" v-text ="'mdi-pencil'"></v-icon>
              </v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
    <v-dialog v-model="addActivity" width="960" persistent>
      <add-activity v-if="addActivity" :action-data="activity"  @close="addActivity = false, getActivity(), activity={}"></add-activity>
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
            <v-btn class="text-capitalize" text color="grey" @click="deleteForm = false">
              Cancel
            </v-btn>
            <v-btn class="white--text text-capitalize" color="red"  @click="deleteActivity">
              Confirm
            </v-btn>
          </v-col>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
  import AddActivity from "../../components/Activity/AddActivity";
  export  default {
    components: {AddActivity},
    layout: 'admin',
    data() {
      return {
        choices: [],
        addActivity: false,
        deleteId: '',
        deleteForm: false,
        activity:{},
        activityList:[],


        headers: [
          {text: 'Image', value: 'name', sortable: false},
          {text: 'Name', value: 'name', sortable: false},
          {text: 'Description', value: 'name', sortable: false},
          {text: 'Actions', value: 'name', sortable: false},
        ]
      }
    },
    created() {
      this.getActivity()

    },

    methods: {
      getActivity() {
        this.$axios.$get('package/activity')
          .then((response) => {
            this.activityList = response
          })
      },
      deleteActivity() {
        this.$axios.$delete(`admin/${this.deleteId}`)
          .then(() => {
            this.setNotifyMessage({message: "Successfully Deleted Product ", color: "green"})
            this.getActivity()


          })
      },


  }
  }





</script>
