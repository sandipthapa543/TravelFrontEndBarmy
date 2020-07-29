<template>
  <v-card>
    <v-toolbar flat >
      <v-toolbar-title >Booking Notification</v-toolbar-title>


    <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-tabs
          v-model="tabs"
          fixed-tabs
        >
          <v-tabs-slider></v-tabs-slider>
          <v-tab
            v-for="item in items"
            :key="item"
          >
            {{item.title}}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <v-container>
        <v-card >
        <v-list two-line>
          <v-list-item-group
            v-model="selected"
            multiple
            active-class="pink--text"
          >
            <template v-for="(item, index) in bookings">
              <v-list-item :key="item">
                <template>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.user.Email"></v-list-item-title>
                    <v-divider></v-divider>
                    <v-list-item-title >Booked Package</v-list-item-title>
                    <v-list-item-subtitle class="text--primary" v-text="item.package.Package_Name"></v-list-item-subtitle>
                    <v-divider></v-divider>
                    <v-list-item-title >Arrival Date</v-list-item-title>
                    <v-list-item-subtitle class="text--primary"  v-text="item.departure_dates.substring(0,10)">Departure Date
                    </v-list-item-subtitle>
                    <v-divider></v-divider>
                    <v-list-item-title >Total Number of People</v-list-item-title>
                    <v-list-item-subtitle class="text--primary"  v-text="item.People"></v-list-item-subtitle>
                    <v-divider></v-divider>
                  </v-list-item-content>
                  <v-list-item-content>
                    <v-list-item-subtitle v-text="item.Status"></v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-list-item-action-text v-text="item.createdAt.substring(0, 10)"></v-list-item-action-text>
                    <v-row>
                    <v-btn  class="ma-1"   outlined large color="success"  >
                      Accept
                    </v-btn>
                      <v-spacer></v-spacer>
                      <v-btn  class="ma-1"   outlined large color="red"  >
                        Cancel
                      </v-btn>
                    </v-row>

                  </v-list-item-action>

                </template>
              </v-list-item>

              <v-divider
                v-if="index + 1 < item.length"
                :key="index"
              ></v-divider>
            </template>
          </v-list-item-group>
        </v-list>
        </v-card>
        </v-container>
      </v-tab-item>
      <v-tab-item>
      </v-tab-item>
      <v-tab-item>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
  export default {
    components: {},
    layout:'admin',

    data(){
      return {
        tabs: null,
        items: [
          {
            icon: 'mdi-notification',
            title: 'Pending',

          },
          {
          title: 'Confirmed'},
          {
            title: 'Cancelled',
          },
        ],
        bookings:{}
      }

    },
    created() {
      this.getBooking();
    },
    methods:{
      getBooking(){
        this.$axios.$get(`booking/?sort=id&order=DSC`).then((response)=> {
          this.bookings = response
        })
      }
    }
  }
</script>
