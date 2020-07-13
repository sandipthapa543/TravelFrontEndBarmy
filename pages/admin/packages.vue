<template>
  <v-container>
    <v-card class="mt-5">
      <v-card-title>
        <v-icon v-text="'mdi-file'"></v-icon>
        <div>Package List</div>
        <v-spacer></v-spacer>
        <v-btn color="info" class="white--text" depressed @click="addPackages = true">
          Create New
        </v-btn>
      </v-card-title>
      <v-divider></v-divider>
      <v-data-table
        :items="getPack"
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
                  :src="'http://localhost:8080/uploads/packages/'+ `${props.item.Image}`"
                  height="100"
                  width="100"
                ></v-img>
              </v-col>
            </v-row>
            </td>
            <td>{{ props.item.Package_Name }}</td>
            <td>{{ props.item.Days }}</td>
            <td>{{ props.item.Price }}</td>
            <td>{{ props.item.Includes}}</td>
            <td>{{ props.item.Excludes}}</td>
            <td>{{ props.item.Itinerary}}</td>
            <td>{{ props.item.Difficulty_level}}</td>
            <td>{{ props.item.Description}}</td>
            <td>{{ props.item.Country}}</td>
            <td>{{ props.item.Best_season}}</td>
            <td>{{ props.item.Accomodation}}</td>
            <td>{{ props.item.Highest_point}}</td>
            <td>{{ props.item.Starting_point}}</td>
            <td>{{ props.item.Gears_required}}</td>
            <td>{{ props.item.activity.Activity_Name}}</td>
            <td>
              <v-btn @click="deleteId = props.item.id, deleteForm = true" icon>
                <v-icon color="red" v-text="'mdi-close-circle'"></v-icon>
              </v-btn>
            </td>
            <td>
              <v-btn @click="packDetail=props.item, addPackages=true" icon>
                <v-icon color ="grey" v-text ="'mdi-pencil'"></v-icon>
              </v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
    <v-dialog v-model="addPackages" width="960" persistent>
      <add-packages v-if="addPackages" :action-data="packDetail"  @close="addPackages = false,getPackages(), packDetail={}"></add-packages>
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
            <v-btn class="white--text text-capitalize" color="red"  @click="deletePackages">
              Confirm
            </v-btn>
          </v-col>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
  import AddPackages from "../../components/Packages/AddPackages";
  export  default {
    components: {AddPackages},
    layout:'admin',
    data() {
      return {
        packDetail:{},
        addPackages:false,
        getPack:[],
        deleteId:'',
        deleteForm: false,
        headers: [
          {text: 'Image', value: 'name', sortable: false},
          {text: 'Name', value: 'name', sortable: false},
          {text: 'Days', value: 'name', sortable: false},
          {text: 'Price', value: 'name', sortable: false},
          {text: 'Includes', value: 'name', sortable: false},
          {text: 'Excludes', value: 'name', sortable: false},
          {text: 'Itinerary', value: 'name', sortable: false},
          {text: 'Difficulty level', value: 'name', sortable: false},
          {text: 'Description', value: 'name', sortable: false},
          {text: 'Country', value: 'name', sortable: false},
          {text: 'Best_Season', value: 'name', sortable: false},
          {text: 'Accomodation', value: 'name', sortable: false},
          {text: 'Highest Point', value: 'name', sortable: false},
          {text: 'Starting Point', value: 'name', sortable: false},
          {text: 'Gears', value: 'name', sortable: false},
          {text: 'Activity Name', value: 'name', sortable: false},
          {text: 'Actions', value: 'name', sortable: false},
        ]

      }
    },
    created() {
      this.getPackages()
    },
    methods:{
      getPackages(){
        this.$axios.$get('/package/show').then((response)=>{
          this.getPack = response
        })
      },
      deletePackages(){
        this.$axios.$delete(`/admin/packages/${this.deleteId}`).then(() => {
          this.setNotifyMessage({message: "Successfully Deleted Product ", color: "green"})
          this.getPackages()
        })
      }
    }
  }
</script>
