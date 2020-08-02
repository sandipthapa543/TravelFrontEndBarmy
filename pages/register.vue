<template>
  <v-card class="container mx-auto my-5" elevation="6" width="90%">
    <v-card-title>
      <h1 class="mx-auto font-weight-bold">Signup</h1>
    </v-card-title>
    <v-form>
      <v-row>
        <v-col cols="12" md="4" sm="6">
          <v-text-field
            v-model="formValues.first_name"
            label="First Name"
            name="fname"
            outlined
            dense
            prepend-inner-icon="mdi-account-box"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4" sm="6">
          <v-text-field
            v-model="formValues.last_name"
            label="Last Name"
            name="lname"
            outlined
            dense
            prepend-inner-icon="mdi-account"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4" sm="6">
          <v-select
            outlined
            dense
            :items="countries"
            name="country"
            item-text="text"
            item-value="value"
            required
            v-model="formValues.country"
            label="Country"
          ></v-select>
        </v-col>
        <v-col cols="12" md="4" sm="6">
          <v-text-field
            v-model="formValues.email"
            type="email"
            label="Email"
            name="email"
            outlined
            dense
            prepend-inner-icon="mdi-email"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4" sm="6">
          <v-text-field
            v-model="formValues.password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show1 = !show1"
            :type="show1 ? 'text' : 'password'"
            outlined
            dense
            label="Password"
            name="password"
            prepend-inner-icon="mdi-lock"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4" sm="6">
          <v-text-field
            v-model="formValues.contact"
            label="Phone"
            name="phone"
            outlined
            dense
            prepend-inner-icon="mdi-phone"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4" sm="6">
          <v-text-field
            v-model="formValues.city"
            label="Address"
            name="address"
            outlined
            dense
            prepend-inner-icon="mdi-home"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12" md="6">
          <v-btn
            color="success"
            depressed block
            class="white--text text-capitalize px-12"
            md="inline"
            @click="signup"
          >
            Sign Up
          </v-btn>
        </v-col>
        <v-col cols="12" md="6" class="text-center">
          <span>
            Already have account ?
            <span
              class="blue--text mx-2 pointer"
              @click="$router.push('/login')"
            >
              Login</span
            >
          </span>
        </v-col>
      </v-row>

      <v-divider></v-divider>
      <p class="text--secondary text-center">
        OR <br />
        Signup using
      </p>
      <div class="text-center">
        <v-icon color="#db3236" x-large>mdi-google</v-icon>
        <v-icon color="blue" x-large>mdi-facebook</v-icon>
      </div>
    </v-form>
  </v-card>
</template>
<script>
export default {
  props: ["actionData"],

  data() {
    return {
      menu1: false,
      show1: false,
      formValues: {},
      countries: [
        {
          text: "Afghanistan",
          value: "Afghanistan",
          countryCode: "+93"
        },
        {
          text: "Albania",
          value: "Albania",
          countryCode: "+355"
        },
        {
          text: "Algeria",
          value: "Algeria",
          countryCode: "+213"
        },
        {
          text: "Argentina",
          value: "Argentina",
          countryCode: "+54"
        },
        {
          text: "Australia",
          value: "Australia",
          countryCode: "+61"
        },
        {
          text: "Austria",
          value: "Austria",
          countryCode: "+43"
        },
        {
          text: "Bahrain",
          value: "Bahrain",
          countryCode: "+973"
        },
        {
          text: "Bangladesh",
          value: "Bangladesh",
          countryCode: "+880"
        },
        {
          text: "Belgium",
          value: "Belgium",
          countryCode: "+32"
        },
        {
          text: "Bhutan",
          value: "Bhutan",
          countryCode: "+975"
        },
        {
          text: "Brazil",
          value: "Brazil",
          countryCode: "+55"
        },
        {
          text: "Chile",
          value: "Chile",
          countryCode: "+56"
        },
        {
          text: "China",
          value: "China",
          countryCode: "+86"
        },
        {
          text: "Cyprus",
          value: "Cyprus",
          countryCode: "+357"
        },
        {
          text: "Czech Republic",
          value: "Czech Republic",
          countryCode: "+420"
        },
        {
          text: "Denmark",
          value: "Denmark",
          countryCode: "+45"
        },
        {
          text: "Egypt",
          value: "Egypt",
          countryCode: "+20"
        },
        {
          text: "Estonia",
          value: "Estonia",
          countryCode: "+372"
        },
        {
          text: "Fiji",
          value: "Fiji",
          countryCode: "+679"
        },
        {
          text: "Finland",
          value: "Finland",
          countryCode: "+358"
        },
        {
          text: "France",
          value: "France",
          countryCode: "+33"
        },
        {
          text: "Germany",
          value: "Germany",
          countryCode: "+49"
        },
        {
          text: "Greece",
          value: "Greece",
          countryCode: "+30"
        },
        {
          text: "Hong Kong",
          value: "Hong Kong",
          countryCode: "+852"
        },
        {
          text: "Hungary",
          value: "Hungary",
          countryCode: "+36"
        },
        {
          text: "Iceland",
          value: "Iceland",
          countryCode: "+354"
        },
        {
          text: "India",
          value: "India",
          countryCode: "+91"
        },
        {
          text: "Indonesia",
          value: "Indonesia",
          countryCode: "+62"
        },
        {
          text: "Ireland",
          value: "Ireland",
          countryCode: "+353"
        },
        {
          text: "Israel",
          value: "Israel",
          countryCode: "+927"
        },
        {
          text: "Japan",
          value: "Japan",
          countryCode: "+81"
        },
        {
          text: "Jordan",
          value: "Jordan",
          countryCode: "+962"
        },
        {
          text: "Kuwait",
          value: "Kuwait",
          countryCode: "+965"
        },
        {
          text: "Latvia",
          value: "Latvia",
          countryCode: "+371"
        },
        {
          text: "Laos",
          value: "Laos",
          countryCode: "+856"
        },
        {
          text: "Lebanon",
          value: "Lebanon",
          countryCode: "+961"
        },
        {
          text: "Lithuania",
          value: "Lithuania",
          countryCode: "+370"
        },
        {
          text: "Luxemborg",
          value: "Luxemborg",
          countryCode: "+352"
        },
        {
          text: "Macau",
          value: "Macau",
          countryCode: "+853"
        },
        {
          text: "Malaysia",
          value: "Malaysia",
          countryCode: "+60"
        },
        {
          text: "Maldives",
          value: "Maldives",
          countryCode: "+960"
        },
        {
          text: "Malta",
          value: "Malta",
          countryCode: "+356"
        },
        {
          text: "Mexico",
          value: "Mexico",
          countryCode: "+52"
        },
        {
          text: "Monaco",
          value: "Monaco",
          countryCode: "+377"
        },
        {
          text: "Mongolia",
          value: "Mongolia",
          countryCode: "+976"
        },
        {
          text: "Morocco",
          value: "Morocco",
          countryCode: "+212"
        },
        {
          text: "Myanmar",
          value: "Myanmar",
          countryCode: "+95"
        },
        {
          text: "Namibia",
          value: "Namibia",
          countryCode: "+264"
        },
        {
          text: "Nepal",
          value: "Nepal",
          countryCode: "+977"
        },
        {
          text: "Netherlands",
          value: "Netherlands",
          countryCode: "+31"
        },
        {
          text: "New Zealand",
          value: "New Zealand",
          countryCode: "+64"
        },
        {
          text: "Norway",
          value: "Norway",
          countryCode: "+47"
        },
        {
          text: "Oman",
          value: "Oman",
          countryCode: "+968"
        },
        {
          text: "Pakistan",
          value: "Pakistan",
          countryCode: "+92"
        },
        {
          text: "Philippines",
          value: "Philippines",
          countryCode: "+63"
        },
        {
          text: "Poland",
          value: "Poland",
          countryCode: "+48"
        },
        {
          text: "Portugal",
          value: "Portugal",
          countryCode: "+351"
        },
        {
          text: "Qatar",
          value: "Qatar",
          countryCode: "+974"
        },
        {
          text: "Romania",
          value: "Romania",
          countryCode: "+40"
        },
        {
          text: "Russia",
          value: "Russia",
          countryCode: "+7"
        },
        {
          text: "Saudi Arabia",
          value: "Saudi Arabia",
          countryCode: "+966"
        },
        {
          text: "Singapore",
          value: "Singapore",
          countryCode: "+65"
        },
        {
          text: "South Korea",
          value: "South Korea",
          countryCode: "+82"
        },
        {
          text: "Spain",
          value: "Spain",
          countryCode: "+34"
        },
        {
          text: "Sri Lanka",
          value: "Sri Lanka",
          countryCode: "+94"
        },
        {
          text: "Sweden",
          value: "Sweden",
          countryCode: "+46"
        },
        {
          text: "Switzerland",
          value: "Switzerland",
          countryCode: "+41"
        },
        {
          text: "Taiwan",
          value: "Taiwan",
          countryCode: "+886"
        },
        {
          text: "Thailand",
          value: "Thailand",
          countryCode: "+66"
        },
        {
          text: "Turkey",
          value: "Turkey",
          countryCode: "+90"
        },
        {
          text: "Ukraine",
          value: "Ukraine",
          countryCode: "+380"
        },
        {
          text: "United Arab Emirates",
          value: "United Arab Emirates",
          countryCode: "+971"
        },
        {
          text: "United Kingdom",
          value: "United Kingdom",
          countryCode: "+44"
        },
        {
          text: "Vaticn",
          value: "Vaticn",
          countryCode: "+379"
        },
        {
          text: "Vietnam",
          value: "Vietnam",
          countryCode: "+84"
        },
        {
          text: "Zimbabwe",
          value: "Zimbabwe",
          countryCode: "+263"
        },

        {
          text: "United States",
          value: "United States",
          countryCode: "+1"
        },
        {
          text: "Canada",
          value: "Canada",
          countryCode: "+124"
        }
      ]
    };
  },
  created() {
    this.formValues = this.actionData || {};
  },

  methods: {
    signup() {
      this.$axios
        .$post("user/register", this.formValues)
        .then(() => {
          this.setNotifyMessage({
            message: "Successfully Register. Enjoy Please Login.",
            color: "green"
          });
          this.$router.push("/login");
        })
        .catch(error => {
          this.setNotifyMessage({
            message: "Please review your fields.",
            color: "red"
          });
        });
    }
  }
};
</script>
