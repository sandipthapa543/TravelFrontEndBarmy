<template>
  <v-card >
    <v-card-title>
      Confirm Booking<v-spacer></v-spacer>
      <v-btn icon @click="$emit('close')">
        <v-icon v-text="'mdi-close-circle'"></v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>
    <v-form
      ref="form"
      lazy-validation
    >
      <v-row>
        <v-col cols="12">
      <v-text-field
        label="Number People"
        id="People"
        name="People"
        required
        prepend-inner-icon="mdi-account"
        outlined
        dense
        persistent-hint
        v-model="formValues.People"
      ></v-text-field>
      <v-menu
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="formValues.departure_dates"
            label="Departure Date"
            outlined
            id="departure"
            name="departure"
            dense
            persistent-hint
            v-on="on"
            prepend-inner-icon="mdi-calendar"
          ></v-text-field>
        </template>
        <v-date-picker v-model="formValues.departure_dates" no-title @input="menu1 = false"></v-date-picker>
      </v-menu>
        </v-col>
      </v-row>
    </v-form>
    </v-card-text>
    <v-card-actions>
      <v-col class="text-right">
        <v-btn text color="grey" class="text-capitalize"  @click="$emit('close')">Cancel</v-btn>
    <v-btn
        color="primary"
        @click="postBooking"
      >
        Confirmed
      </v-btn>
      </v-col>
    </v-card-actions>

  </v-card>
</template>
<script>
  export default {
    props:['packageId'],
    data() {
      return {
        formValues: {},
        menu1: false,
      }

    },

    created() {
      this.formValues = this.actionData || {}

    },
    methods: {
      postBooking() {
        if (this.$auth.loggedIn) {
          let dataPost = {
            People: this.formValues.People,
            departure_dates: this.formValues.departure_dates,
            package_id: this.packageId,
            user_id:this.$auth.user.id,
          }
          this.$axios.$post(`booking/`, dataPost).then((response) => {
            this.setNotifyMessage({message: 'Booking is Successful', color: 'green'})
          }).catch(() => {
            this.setNotifyMessage({message:'Something went wrong.', color:'red'})
          })
        }
      }

    }
  }
</script>
