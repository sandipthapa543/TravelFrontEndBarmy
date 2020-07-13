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
              v-model="formValues.name"
              label="Package Name"
              prepend-inner-icon="mdi-file"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-select
              v-model="formValues.activity_id"
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
              v-model="formValues.days"
              label="Days"
              prepend-inner-icon="mdi-file"
            ></v-text-field>
          </v-col>
          <v-col sm="12" md="6" cols="6">
            <v-text-field
              v-model="formValues.price"
              label="Price"
              prepend-inner-icon="mdi-cash"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="formValues.includes"
              prepend-inner-icon="mdi-flag"
              label="includes"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="formValues.excludes"
              prepend-inner-icon="mdi-cash"
              label="Excludes"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="formValues.country"
              prepend-inner-icon="mdi-flag"
              label="Country"

            ></v-text-field>
          </v-col>

          <v-col cols="6">
            <v-select
              v-model="formValues.difficulty_level"
              label="Difficulty_level"
              prepend-inner-icon="mdi-file"
              :items="[1,2,3,4,5]"
            ></v-select>
          </v-col>

          <v-col cols="6">
            <v-text-field
              v-model="formValues.best_season"
              label="Best Season"
              prepend-inner-icon="mdi-file"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="formValues.accomodation"
              label="Accomodation"
              prepend-inner-icon="mdi-file"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="formValues.starting_point"
              label="Starting Point"
              prepend-inner-icon="mdi-file"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="formValues.highest_point"
              label="Highest Point"
              prepend-inner-icon="mdi-file"
            ></v-text-field>
          </v-col>

          <v-col cols="6">
            <v-text-field
              v-model="formValues.gears_required"
              label="Gears Required"
              prepend-inner-icon="mdi-file"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-textarea
              v-model="formValues.itinerary"
              label="Itinerary"
              prepend-inner-icon="mdi-file"
            ></v-textarea>
          </v-col>
          <v-col cols="6">
            <v-textarea
              v-model="formValues.description"
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
          "name": "",
          "description": "",
          "image": null,
          "price": null,
          "days":"",
          "includes":"",
          "excludes":"",
          "itinerary":"",
          "difficulty_level":"",
          "best_season":"",
          "accomodation":"",
          "highest_point":"",
          "starting_point":"",
          "gears_required":"",
          "country":""
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
          formData.append('name', this.formValues.name)
          formData.append('activity_id', this.formValues.activity_id)
          formData.append('days', this.formValues.days)
          formData.append('includes', this.formValues.includes)
          formData.append('price', this.formValues.price)
          formData.append('itinerary', this.formValues.itinerary)
          formData.append('excludes', this.formValues.excludes)
          formData.append('difficulty_level', this.formValues.difficulty_level)
          formData.append('image', this.formValues.image)
          formData.append('best_season', this.formValues.best_season)
          formData.append('accomodation', this.formValues.accomodation)
          formData.append('highest_point', this.formValues.highest_point)
          formData.append('starting_point', this.formValues.starting_point)
          formData.append('gears_required', this.formValues.gears_required)
          formData.append('description', this.formValues.description)
          formData.append('country', this.formValues.country)
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
          Package_Name:this.formValues.name,
          Days:this.formValues.days,
          Price:this.formValues.price,
          Includes:this.formValues.includes,
          Excludes:this.formValues.excludes,
          Itinerary:this.formValues.itinerary,
          Difficulty_level:this.formValues.difficulty_level,
          Description:this.formValues.description,
          Country:this.formValues.country,
          Best_season:this.formValues.best_season,
          Accomodation:this.formValues.accomodation,
          Highest_point:this.formValues.highest_point,
          Starting_point:this.formValues.starting_point,
          Gears_required:this.formValues.gears_required,
          activityId:this.formValues.activity_id,

        }
        this.$axios.$put(`admin/packages/${this.formValues.id}`, dataPost)
          .then(async (response) => {
            this.setNotifyMessage({message: 'successfully Updated', color: 'green'})
            this.$emit('close')
          })
          .catch(() => {
            this.setNotifyMessage('Something went wrong', red)
          })
      }
    }
  }
</script>
