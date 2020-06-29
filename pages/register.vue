<template>
  <v-row justify="center"  align="center">
    <v-col class="text-center ">
      <v-row justify="center">
        <v-col cols="10">
          <v-card-title class="py-2 title">
            <v-icon
              left
              v-text="'mdi-account-plus'"
            ></v-icon>
            Create Your Account
            <v-spacer></v-spacer>
            <div class="body-2">
              Already have account ?  <span class="blue--text mx-2 pointer" @click="$router.push('/login')"> Login</span>
            </div>
          </v-card-title>
  <v-form>
    <v-card>
      <v-container>
        <v-row >
          <v-col cols="12" md="4" sm="6" >
            <v-text-field
              v-model="formValues.first_name"
              label="First Name"
              outlined
              dense
              prepend-inner-icon="mdi-account-box"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4" sm="6">
            <v-text-field
              v-model="formValues.last_name"
              label="Last Name"
              outlined
              dense
              prepend-inner-icon="mdi-account"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4" sm="6">
            <v-select  outlined dense :items="countries" item-text="text" item-value="value" required v-model="formValues.country"
                       label="Country" ></v-select>
          </v-col>
          <v-col cols="12" md="4" sm="6">
            <v-text-field
              v-model="formValues.email"
              type="email"
              label="Email"
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
              :type="show1 ? 'text':'password'"
              outlined
              dense
              label="Password"
              prepend-inner-icon="mdi-lock"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4" sm="6">
            <v-text-field
              v-model="formValues.contact"
              label="Phone"
              outlined
              dense
              prepend-inner-icon="mdi-phone"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4" sm="6">
            <v-text-field
              v-model="formValues.city"
              label="Address"
              outlined
              dense
              prepend-inner-icon="mdi-home"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" md="4" sm="6">
            <v-btn  block color="blue-grey" class="white--text" @click="signup">
              Sign Up
            </v-btn>
          </v-col>
        </v-row>

        <v-divider ></v-divider>
        <p class="text--secondary font-italic">or sign up using</p>
        <v-row justify="center">
          <v-col cols="12">
            <v-icon color="#db3236" x-large>mdi-google</v-icon>
            <v-icon color="blue" x-large >mdi-facebook</v-icon>

          </v-col>
        </v-row>
      </v-container>

    </v-card>
  </v-form>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>


  export default {
    props: ['actionData'],

    data() {
      return {
        menu1: false,
        show1: false,
        formValues: {},
        countries: [
          {
            text: 'Afghanistan',
            value: 'Afg',
            countryCode: '+93'
          },
          {
            text: 'Albania',
            value: 'Al',
            countryCode: '+355'
          },
          {
            text: 'Algeria',
            value: 'Alg',
            countryCode: '+213'
          },
          {
            text: 'Argentina',
            value: 'Ag',
            countryCode: '+54'
          }, {
            text: 'Australia',
            value: 'aus',
            countryCode: '+61'
          },
          {
            text: 'Austria',
            value: 'at',
            countryCode: '+43'
          },
          {
            text: 'Bahrain',
            value: 'Bh',
            countryCode: '+973'
          },
          {
            text: 'Bangladesh',
            value: 'Bg',
            countryCode: '+880'
          },
          {
            text: 'Belgium',
            value: 'Bel',
            countryCode: '+32'
          },
          {
            text: 'Bhutan',
            value: 'BHU',
            countryCode: '+975'
          },
          {
            text: 'Brazil',
            value: 'bra',
            countryCode: '+55'
          },
          {
            text: 'Chile',
            value: 'chi',
            countryCode: '+56'
          },
          {
            text: 'China',
            value: 'ch',
            countryCode: '+86'
          },
          {
            text: 'Cyprus',
            value: 'cy',
            countryCode: '+357'
          },
          {
            text: 'Czech Republic',
            value: 'cz',
            countryCode: '+420'
          },
          {
            text: 'Denmark',
            value: 'Den',
            countryCode: '+45'
          },
          {
            text: 'Egypt',
            value: 'eg',
            countryCode: '+20'
          },
          {
            text: 'Estonia',
            value: 'es',
            countryCode: '+372'
          },
          {
            text: 'Fiji',
            value: 'fi',
            countryCode: '+679'
          },
          {
            text: 'Finland',
            value: 'fin',
            countryCode: '+358'
          },
          {
            text: 'France',
            value: 'fra',
            countryCode: '+33'
          },
          {
            text: 'Germany',
            value: 'ger',
            countryCode: '+49'
          },
          {
            text: 'Greece',
            value: 'gre',
            countryCode: '+30'
          },
          {
            text: 'Hong Kong',
            value: 'hk',
            countryCode: '+852'
          },
          {
            text: 'Hungary',
            value: 'hu',
            countryCode: '+36'
          },
          {
            text: 'Iceland',
            value: 'ice',
            countryCode: '+354'
          },
          {
            text: 'India',
            value: 'in',
            countryCode: '+91'
          },
          {
            text: 'Indonesia',
            value: 'ind',
            countryCode: '+62'
          },
          {
            text: 'Ireland',
            value: 'ire',
            countryCode: '+353'
          },
          {
            text: 'Israel',
            value: 'is',
            countryCode: '+927'
          },
          {
            text: 'Japan',
            value: 'jp',
            countryCode: '+81'
          },
          {
            text: 'Jordan',
            value: 'jor',
            countryCode: '+962'
          },
          {
            text: 'Kuwait',
            value: 'kuw',
            countryCode: '+965'
          },
          {
            text: 'Latvia',
            value: 'lat',
            countryCode: '+371'
          },
          {
            text: 'Laos',
            value: 'las',
            countryCode: '+856'
          },
          {
            text: 'Lebanon',
            value: 'leb',
            countryCode: '+961'
          },
          {
            text: 'Lithuania',
            value: 'lit',
            countryCode: '+370'
          },
          {
            text: 'Luxemborg',
            value: 'lux',
            countryCode: '+352'
          },
          {
            text: 'Macau',
            value: 'mau',
            countryCode: '+853'
          },
          {
            text: 'Malaysia',
            value: 'mala',
            countryCode: '+60'
          },
          {
            text: 'Maldives',
            value: 'mald',
            countryCode: '+960'
          },
          {
            text: 'Malta',
            value: 'malt',
            countryCode: '+356'
          },
          {
            text: 'Mexico',
            value: 'mex',
            countryCode: '+52'
          },
          {
            text: 'Monaco',
            value: 'mon',
            countryCode: '+377'
          },
          {
            text: 'Mongolia',
            value: 'mg',
            countryCode: '+976'
          },
          {
            text: 'Morocco',
            value: 'mor',
            countryCode: '+212'
          },
          {
            text: 'Myanmar',
            value: 'my',
            countryCode: '+95'
          },
          {
            text: 'Namibia',
            value: 'nam',
            countryCode: '+264'
          },
          {
            text: 'Nepal',
            value: 'NP',
            countryCode: '+977'
          },
          {
            text: 'Netherlands',
            value: 'nth',
            countryCode: '+31'
          },
          {
            text: 'New Zealand',
            value: 'nz',
            countryCode: '+64'
          },
          {
            text: 'Norway',
            value: 'nw',
            countryCode: '+47'
          },
          {
            text: 'Oman',
            value: 'om',
            countryCode: '+968'
          },
          {
            text: 'Pakistan',
            value: 'pak',
            countryCode: '+92'
          },
          {
            text: 'Philippines',
            value: 'pe',
            countryCode: '+63'
          },
          {
            text: 'Poland',
            value: 'pod',
            countryCode: '+48'
          },
          {
            text: 'Portugal',
            value: 'port',
            countryCode: '+351'
          },
          {
            text: 'Qatar',
            value: 'qt',
            countryCode: '+974'
          },
          {
            text: 'Romania',
            value: 'romo',
            countryCode: '+40'
          },
          {
            text: 'Russia',
            value: 'rs',
            countryCode: '+7'
          },
          {
            text: 'Saudi Arabia',
            value: 'sar',
            countryCode: '+966'
          },
          {
            text: 'Singapore',
            value: 'spo',
            countryCode: '+65'
          },
          {
            text: 'South Korea',
            value: 'sk',
            countryCode: '+82'
          },
          {
            text: 'Spain',
            value: 'spin',
            countryCode: '+34'
          },
          {
            text: 'Sri Lanka',
            value: 'sril',
            countryCode: '+94'
          },
          {
            text: 'Sweden',
            value: 'sdn',
            countryCode: '+46'
          },
          {
            text: 'Switzerland',
            value: 'swt',
            countryCode: '+41'
          },
          {
            text: 'Taiwan',
            value: 'twn',
            countryCode: '+886'
          },
          {
            text: 'Thailand',
            value: 'thl',
            countryCode: '+66'
          },
          {
            text: 'Turkey',
            value: 'tr',
            countryCode: '+90'
          },
          {
            text: 'Ukraine',
            value: 'Ues',
            countryCode: '+380'
          },
          {
            text: 'United Arab Emirates',
            value: 'UAE',
            countryCode: '+971'
          },
          {
            text: 'United Kingdom',
            value: 'UK',
            countryCode: '+44'
          },
          {
            text: 'Vaticn',
            value: 'vat',
            countryCode: '+379'
          },
          {
            text: 'Vietnam',
            value: 'vnam',
            countryCode: '+84'
          },
          {
            text: 'Zimbabwe',
            value: 'zim',
            countryCode: '+263'
          },

          {
            text: 'United States',
            value: 'USA',
            countryCode: '+1'
          },
          {
            text: 'Canada',
            value: 'CAN',
            countryCode: '+124'
          }
        ],


      }
    },
    created() {
      this.formValues = this.actionData || {}
    },

    methods: {
      signup() {
        this.$axios.$post('user/register', this.formValues)
          .then(() => {
            this.setNotifyMessage({message: "Successfully Register. Enjoy Please Login.", color: 'green'})
            this.$router.push('/login')
          })
          .catch((error) => {
            this.setNotifyMessage({message: 'Please review your fields.', color: 'red'})
          })
      }
    }
  }




</script>
