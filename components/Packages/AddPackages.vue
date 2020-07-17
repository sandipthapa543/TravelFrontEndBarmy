<template>
  <v-card>
    <v-card-title>
      Create Packages
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
              v-model="formValues.Package_Name"
              label="Package Name"
              prepend-inner-icon="mdi-file"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-select
              v-model="formValues.activityId"
              label="Activity"
              :rules="nameRules"
              :items="choices"
              item-text="Activity_Name"
              item-value="id"
              prepend-inner-icon="mdi-file"
            ></v-select>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="formValues.Days"
              label="Days"
              prepend-inner-icon="mdi-file"
            ></v-text-field>
          </v-col>
          <v-col sm="12" md="6" cols="6">
            <v-text-field
              v-model="formValues.Price"
              label="Price"
              prepend-inner-icon="mdi-cash"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="formValues.Includes"
              prepend-inner-icon="mdi-flag"
              label="includes"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="formValues.Excludes"
              prepend-inner-icon="mdi-cash"
              label="Excludes"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="formValues.Country"
              prepend-inner-icon="mdi-flag"
              label="Country"

            ></v-text-field>
          </v-col>

          <v-col cols="6">
            <v-select
              v-model="formValues.Difficulty_level"
              label="Difficulty_level"
              prepend-inner-icon="mdi-file"
              :items="[1,2,3,4,5]"
            ></v-select>
          </v-col>

          <v-col cols="6">
            <v-text-field
              v-model="formValues.Best_season"
              label="Best Season"
              prepend-inner-icon="mdi-file"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="formValues.Accomodation"
              label="Accomodation"
              prepend-inner-icon="mdi-file"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="formValues.Starting_point"
              label="Starting Point"
              prepend-inner-icon="mdi-file"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="formValues.Highest_point"
              label="Highest Point"
              prepend-inner-icon="mdi-file"
            ></v-text-field>
          </v-col>

          <v-col cols="6">
            <v-text-field
              v-model="formValues.Gears_required"
              label="Gears Required"
              prepend-inner-icon="mdi-file"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-textarea
              v-model="formValues.Itinerary"
              label="Itinerary"
              prepend-inner-icon="mdi-file"
            ></v-textarea>
          </v-col>
          <v-col cols="6">
            <v-textarea
              v-model="formValues.Description"
              label="Description"
              prepend-inner-icon="mdi-file"
            ></v-textarea>
          </v-col>

          <v-col cols="6">
            <v-file-input
              v-model="formValues.image"
              label="Package Image"
              :rules="nameRules"
              prepend-inner-icon="mdi-file"
            ></v-file-input>
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
        @click="createProduct"
      >
        Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

  export default {
    props: {
      actionData: Object,
    },

    data () {
      return {
        brand: {},
        valid: true,
        updatePost: {
          text: "",
          newImages: { names: [], files: [] },
          deletedImages: []
        },
        nameRules: [
          v => !!v ||  'This field is required.'
        ],
        choices:[],

        formValues: {
          "Package_Name": "",
          "Description": "",
          "image": null,
          "Price": null,
          "Days":"",
          "Includes":"",
          "Excludes":"",
          "Itinerary":"",
          "Difficulty_level":"",
          "Best_season":"",
          "Accomodation":"",
          "Highest_point":"",
          "Starting_point":"",
          "Gears_required":"",
          "Country":""
        }
      }
    },
    created() {
      this.formValues = this.actionData || {}
      this.getActivity()
    },
    methods: {
      createProduct() {
        let formData = new FormData()
        if (!(this.formValues.image instanceof File)) {
          delete this.formValues.image
          formData = {...this.formValues}
        } else {
          formData.append('Package_Name', this.formValues.Package_Name)
          formData.append('activityId', this.formValues.activityId)
          formData.append('Days', this.formValues.Days)
          formData.append('Includes', this.formValues.Includes)
          formData.append('Price', this.formValues.Price)
          formData.append('Itinerary', this.formValues.Itinerary)
          formData.append('Excludes', this.formValues.Excludes)
          formData.append('Difficulty_level', this.formValues.Difficulty_level)
          formData.append('image', this.formValues.image)
          formData.append('Best_season', this.formValues.Best_season)
          formData.append('Accomodation', this.formValues.Accomodation)
          formData.append('Highest_point', this.formValues.Highest_point)
          formData.append('Starting_point', this.formValues.Starting_point)
          formData.append('Gears_required', this.formValues.Gears_required)
          formData.append('Description', this.formValues.Description)
          formData.append('Country', this.formValues.Country)
        }
        if (this.formValues.id) {
          this.updatePackages();
        } else {
          this.$axios.$post('admin/package/', formData)
            .then(async (response) => {
              this.setNotifyMessage({message: 'Successfully Created Product.', color: 'green'})
              this.$emit('close')

            })
            .catch(() => {
              this.setNotifyMessage('Something went wrong.', 'red')
            })
        }

      },
      getActivity() {
        this.$axios.$get('package/activity')
          .then((response) => {
            this.choices = response
          })
      },
      updatePackages() {
        let dataPost={
          Package_Name:this.formValues.Package_Name,
          Days:this.formValues.Days,
          Price:this.formValues.Price,
          Includes:this.formValues.Includes,
          Excludes:this.formValues.Excludes,
          Itinerary:this.formValues.Itinerary,
          Difficulty_level:this.formValues.Difficulty_level,
          Description:this.formValues.Description,
          Country:this.formValues.Country,
          Best_season:this.formValues.Best_season,
          Accomodation:this.formValues.Accomodation,
          Highest_point:this.formValues.Highest_point,
          Starting_point:this.formValues.Starting_point,
          Gears_required:this.formValues.Gears_required,
          activityId:this.formValues.activityId,

        }
        this.$axios.$put(`admin/packages/${this.formValues.id}`, dataPost)
          .then(async (response) => {
            this.setNotifyMessage({message: 'successfully Updated', color: 'green'})
            this.$emit('close')
          })
          .catch(() => {
            this.setNotifyMessage({message:'Something went wrong', color:'red'})
          })
      }
    }
  }
</script>
