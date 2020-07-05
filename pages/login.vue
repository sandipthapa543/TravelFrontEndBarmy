<template>
<v-container>
  <v-card max-width="400px" class="my-5 mx-auto" elevation="6">
    <v-card-title>
      <h1 class="mx-auto font-weight-bold">Login</h1>
    </v-card-title>
    <v-card-text>
      <v-form v-model="valid" ref="form">
        <v-text-field
          v-model="Email"
          label="Email"
          outlined
          dense
          id="email"
          prepend-inner-icon="mdi-account-circle"
          name="email"
          :rules="emailRules"
        />

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
        />
      </v-form>
      <div class="d-flex">
        <div>
          New member?
          <span
            class="blue--text pointer"
            @click="$router.push('/register')"
            >Sign up</span
          >
        </div>

        <v-spacer></v-spacer>
        <span class="blue--text pointer" @click="$router.push('/register')">
          Forget Password ?
        </span>
      </div>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn
        block
        color="success"
        depressed
        class="white--text text-capitalize"
        @click="login()"
      >
        Login
      </v-btn>
    </v-card-actions>
    <v-divider></v-divider>
    <p class="text--secondary text-center">
      OR <br />
      Login using
    </p>
    <div class="text-center">
      <v-icon color="#db3236" x-large>mdi-google</v-icon>
      <v-icon color="blue" x-large>mdi-facebook</v-icon>
    </div>
  </v-card>
  </v-container>
</template>
<style>
  .pointer {
    cursor: pointer;
  }
</style>
<script>
export default {
  data() {
    return {
      Email: "",
      Password: "",
      valid: true,
      show: false,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [v => !!v || "Password is required"],
      photo: [
        {
          src: "image.jpg"
        },
        {
          src: "banner.jpg"
        },
        { src: "bannerslider.png" }
      ]
    };
  },
  methods: {
    login() {
      const dataToPost = {
        Email: this.Email,
        Password: this.Password
      };
      if (this.$refs.form.validate()) {
        this.$auth
          .loginWith("local", { data: dataToPost })
          .then(() => {
            this.setNotifyMessage({
              message: "Successfully Login. Enjoy Shopping.",
              color: "green"
            });
            this.$router.push("/");
          })
          .catch(error => {
            this.setNotifyMessage({
              message: "Username or Password doesnot match.",
              color: "red"
            });
          });
      }
    }
  }
};
</script>
