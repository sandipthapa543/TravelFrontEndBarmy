<template>
  <v-row  class="mt-12" >
    <v-col class="text-center "  >

      <v-row justify="center">
        <v-col cols="12"
               class="py-2 title">
          <v-icon
            left
            v-text="'mdi-account'"
          ></v-icon>
          Login
          <v-spacer></v-spacer>
          <div class="body-2">
            New member ?  <span class="blue--text mx-2 pointer" @click="$router.push('/signup')">Sign up</span>
          </div>
        </v-col>
      </v-row>


      <v-form
        v-model="valid"
        ref="form">
        <v-row justify="center">
          <v-col cols="12" md="4" sm="6"  >
            <v-text-field
              v-model="Email"
              label="Email"
              id="email"
              name="email"
              :rules="emailRules"
              outlined
              dense
              prepend-inner-icon="mdi-account"
            ></v-text-field>

            <v-text-field
              v-model="Password"
              :type="show ? 'text' : 'password'"
              outlined
              dense
              :rules="passwordRules"
              label="Password"
              id="password"
              name="password"
              prepend-inner-icon="mdi-lock"
              :append-icon="show ? 'mdi-eye-off' : 'mdi-eye'"
              @click:append="show = !show"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12" md="4" sm="6">
            <v-btn
              block
              color="red darken-3"
              depressed
              class="white--text text-capitalize"
              @click="login()"
            >
              Login
            </v-btn>
            <v-btn
              block
              text
              color="blue darken-3"
              depressed
              class="white--text text-capitalize"
            >
              Forget Password ?
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
      <v-divider ></v-divider>
      <p class="text--secondary font-italic">or login using</p>
      <v-row justify="center">
        <v-col cols="12" md="1" sm="1">
          <v-icon color="#db3236" x-large >mdi-google</v-icon>
          <v-icon color="blue" x-large >mdi-facebook</v-icon>
        </v-col>
      </v-row>

    </v-col>
  </v-row>






</template>
<script>
  export default {
    data() {
      return {
        Email: '',
        Password: '',
        valid: true,
        show: false,
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        passwordRules: [
          v => !!v || 'Password is required'
        ],
        photo: [
          {
            src: 'image.jpg'},
          {
            src: 'banner.jpg'},
          {src:
              'bannerslider.png'},


        ],


      }
    },
    methods: {
      login() {
        const dataToPost = {
          Email: this.Email,
          Password: this.Password
        }
        if (this.$refs.form.validate()) {
          this.$auth.loginWith('local', {data: dataToPost})
            .then(() => {
              this.setNotifyMessage({message: "Successfully Login. Enjoy Shopping.", color: 'green'})
              this.$router.push('/')
            })
            .catch((error) => {
              this.setNotifyMessage({message: 'Username or Password doesnot match.', color: 'red'})
            })
        }
      }
    }
  }
</script>
