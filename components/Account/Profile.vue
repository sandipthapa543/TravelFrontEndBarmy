<template>
  <v-container>
    <v-card
      outlined
      justify="center">
      <v-card-title>
        {{ `${userDetail.First_Name}  ${userDetail.Last_Name}`}}
        <v-icon left v-text="'mdi-pencil'" @click="openProfileEditForm = true" />

      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col >
            <v-col class="font-weight-bold subtitle py-0 blue-grey--text">
              <v-icon left v-text="'mdi-account'" />
              Personal Details
            </v-col>
            <v-row>
              <v-col cols="6" md="4">
                <v-row align="center">
                  <v-col cols="auto">
                    <v-icon v-text="'mdi-phone'" />
                  </v-col>
                  <v-col cols="auto">
                    <div class="grey--text">
                      Phone
                    </div>
                    <div class="blue-grey--text">
                      {{ userDetail.Contact_No }}
                    </div>
                  </v-col>
                  <v-col />
                </v-row>
              </v-col>
              <v-col cols="6"  md="4">
                <v-row align="center">
                  <v-col cols="auto">
                    <v-icon v-text="'mdi-message'" />
                  </v-col>
                  <v-col cols="auto">
                    <div class="grey--text">
                      Email
                    </div>
                    <div class="blue-grey--text">
                      {{ userDetail.Email }}
                    </div>
                  </v-col>
                  <v-col />
                </v-row>
              </v-col>
              <v-col cols="6"  md="4">
                <v-row align="center">
                  <v-col cols="auto">
                    <v-icon v-text="'mdi-map'" />
                  </v-col>
                  <v-col cols="auto">
                    <div class="grey--text">
                      Address
                    </div>
                    <div class="blue-grey--text">
                      {{ userDetail.City }}
                    </div>
                  </v-col>
                  <v-col />
                </v-row>
              </v-col>
              <v-col cols="12"  md="4">
                <v-row align="center">
                  <v-col cols="auto">
                    <v-icon v-text="'mdi-map'" />
                  </v-col>
                  <v-col cols="auto">
                    <div class="grey--text">
                      Country
                    </div>
                    <div class="blue-grey--text">
                      {{ userDetail.Country }}
                    </div>
                  </v-col>
                  <v-col />
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
      <v-dialog
        v-model="openProfileEditForm"
        width="960"
        scrollable
        persistent
        @keypress.esc="openProfileEditForm = false"
      >
        <update
          :title="'Update Your Details'"
          @close="openProfileEditForm = false, getUserDetail()"
        ></update>
      </v-dialog>
    </v-card>
  </v-container>
</template>
<script>
  import  Update from "./Update";
  export default {
    components: {Update},
    data() {
      return {
        openProfileEditForm: false,
        userDetail: {}
      }
    },
    created() {
      this.getUserDetail()
    },
    methods: {
      getUserDetail() {
        this.$axios.$get(`/user/me/`)
          .then((response)=> {
            this.userDetail = response
          })
      }
    }
  }
</script>
