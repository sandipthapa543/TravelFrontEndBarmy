<template>
  <v-card class="pa-3">
    <v-card-title>
      Update Your Details
    </v-card-title>
    <v-card-text>
      <v-text-field
        v-model="formValues.First_Name"
        label="First Name"
        id="fn"
        flat
        prepend-inner-icon="mdi-account-box"
      ></v-text-field>
      <v-text-field
        v-model="formValues.Last_Name"
        label="Last Name"
        id="ln"
        flat
        prepend-inner-icon="mdi-account"
      ></v-text-field>

      <v-text-field
        v-model="formValues.Email"
        type="email"
        label="Email"
        id="em"
        flat
        prepend-inner-icon="mdi-email"
      ></v-text-field>
      <v-text-field
        v-model="formValues.Contact_No"
        single-line
        label="phone"
        id="ph"
        flat
        prepend-inner-icon="mdi-phone"
      ></v-text-field>
      <v-text-field
        v-model="formValues.City"
        label="City"
        id="ct"
        flat
        prepend-inner-icon="mdi-home"
      ></v-text-field>
      <v-text-field
        v-model="formValues.Country"
        label="Country"
        id="con"
        flat
        prepend-inner-icon="mdi-home"
      ></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-col class="text-right">
        <v-btn text color="grey" class="text-capitalize"  @click="$emit('close')">Cancel</v-btn>
        <v-btn color="primary" depressed class="text-capitalize" @click="updateUser">
          Update
        </v-btn>
      </v-col>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    props:['userDetail'],
    data () {
      return {
        formValues: {
          first_name: '',
          last_name:'',
          email:'',
          phone:'',
          address:''
        }
      }
    },
    created() {
      this.formValues = {...this.$auth.user}
    },
    methods: {
      updateUser () {
        const dataPost = {
          First_Name: this.formValues.First_Name,
          Last_Name: this.formValues.Last_Name,
          Email: this.formValues.Email,
          Contact_No: this.formValues.Contact_No,
          City: this.formValues.City,
          Country: this.formValues.Country,
        }
        this.$axios.$patch(`user/update/${this.$auth.user.id}`,  dataPost )
          .then(()=> {
            this.$emit('close')
            this.setNotifyMessage({message: "Successfully Updated Details.", color: "green"})
          })
          .catch((error)=> {
            this.setNotifyMessage(error.response.data.message, 'red')
          })
      }
    }
  }
</script>
