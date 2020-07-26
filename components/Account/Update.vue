<template>
  <v-card class="pa-3">
    <v-card-title>
      Update Your Details
    </v-card-title>
    <v-card-text>
      <v-text-field
        v-model="formValues.first_name"
        label="First Name"
        flat
        prepend-inner-icon="mdi-account-box"
      ></v-text-field>
      <v-text-field
        v-model="formValues.last_name"
        label="Last Name"
        flat
        prepend-inner-icon="mdi-account"
      ></v-text-field>

      <v-text-field
        v-model="formValues.email"
        type="email"
        label="Email"
        flat
        prepend-inner-icon="mdi-email"
      ></v-text-field>
      <v-text-field
        v-model="formValues.phone"
        single-line
        label="phone"
        flat
        prepend-inner-icon="mdi-phone"
      ></v-text-field>
      <v-text-field
        v-model="formValues.permanent_address"
        label="Address"
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
          first_name: this.formValues.first_name,
          last_name:this.formValues.last_name,
          email: this.formValues.email,
          phone:this.formValues.phone,
          address:this.formValues.address
        }
        this.$axios.$put(`users/edit/${this.$auth.user.id}`,  dataPost )
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
