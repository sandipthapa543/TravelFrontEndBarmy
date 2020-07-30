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

    <v-tabs-items v-model="tabs" >
      <v-tab-item >
        <v-container>
        <v-card v-for="(item, index) in bookings"  :key ="index" v-if="item.Status==='pending'" >
        <v-list two-line>
          <v-list-item-group
            v-model="selected"
            multiple
            active-class="pink--text"
          >
            <template >
              <v-list-item :key="item">
                <template>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.user.Email"></v-list-item-title>

                    <v-list-item-title class="font-weight-bold" >Booked Package</v-list-item-title>
                    <v-list-item-subtitle class="text--primary" v-text="item.package.Package_Name"></v-list-item-subtitle>
                    <v-list-item-title  class="font-weight-bold">Arrival Date</v-list-item-title>
                    <v-list-item-subtitle class="text--primary"  v-text="item.departure_dates.substring(0,10)">Departure Date
                    </v-list-item-subtitle>
                    <v-list-item-title class="font-weight-bold" >Total Number of People</v-list-item-title>
                    <v-list-item-subtitle class="text--primary"  v-text="item.People"></v-list-item-subtitle>
                    <v-list-item-title class="font-weight-bold" >Contact No</v-list-item-title>
                    <v-list-item-subtitle class="text--primary"  v-text="item.user.Contact_No"></v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-content>
                    <v-list-item-subtitle v-text="item.Status"></v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-list-item-action-text v-text="item.createdAt.substring(0, 10)"></v-list-item-action-text>
                    <v-row>
                    <v-btn  class="ma-1"   outlined large color="success"  @click="updateBooking(item.id)" >
                      Accept
                    </v-btn>
                      <v-spacer></v-spacer>
                      <v-btn  class="ma-1"   outlined large color="red" @click="updateBookings(item.id)" >
                        Cancel
                      </v-btn>
                    </v-row>

                  </v-list-item-action>

                </template>
              </v-list-item>

              <v-divider
              ></v-divider>
            </template>
          </v-list-item-group>
        </v-list>
        </v-card>
        </v-container>
      </v-tab-item>
      <v-tab-item  >
        <v-container>
          <v-card  v-for="(item,index) in bookings" :key="index" v-if="item.Status==='booked'" >
            <v-list two-line>
              <v-list-item-group
                v-model="selected"
                multiple
                active-class="pink--text"
              >
                <template >
                  <v-list-item >
                    <template>
                      <v-list-item-content>
                        <v-list-item-title v-text="item.user.Email"></v-list-item-title>

                        <v-list-item-title class="font-weight-bold" >Booked Package</v-list-item-title>
                        <v-list-item-subtitle class="text--primary" v-text="item.package.Package_Name"></v-list-item-subtitle>
                        <v-list-item-title  class="font-weight-bold">Arrival Date</v-list-item-title>
                        <v-list-item-subtitle class="text--primary"  v-text="item.departure_dates.substring(0,10)">Departure Date
                        </v-list-item-subtitle>
                        <v-list-item-title class="font-weight-bold" >Total Number of People</v-list-item-title>
                        <v-list-item-subtitle class="text--primary"  v-text="item.People"></v-list-item-subtitle>
                        <v-list-item-title class="font-weight-bold" >Contact No</v-list-item-title>
                        <v-list-item-subtitle class="text--primary"  v-text="item.user.Contact_No"></v-list-item-subtitle>
                      </v-list-item-content>
                      <v-list-item-content>
                        <v-list-item-subtitle v-text="item.Status"></v-list-item-subtitle>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-list-item-action-text v-text="item.createdAt.substring(0, 10)"></v-list-item-action-text>
                        <v-row>
                          <v-btn  class="ma-1"   outlined large color="red" @click="updateBookings(item.id)" >
                            Cancel
                          </v-btn>
                        </v-row>

                      </v-list-item-action>

                    </template>
                  </v-list-item>

                  <v-divider
                  ></v-divider>
                </template>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-container>
      </v-tab-item>
      <v-tab-item>
        <v-container>
          <v-card  v-for="(item,index) in bookings"  :key="item" v-if="item.Status==='cancel'" >
            <v-list two-line>
                <template >
                  <v-list-item >
                    <template>
                      <v-list-item-content>
                        <v-list-item-title v-text="item.user.Email"></v-list-item-title>

                        <v-list-item-title class="font-weight-bold" >Booked Package</v-list-item-title>
                        <v-list-item-subtitle class="text--primary" v-text="item.package.Package_Name"></v-list-item-subtitle>
                        <v-list-item-title  class="font-weight-bold">Arrival Date</v-list-item-title>
                        <v-list-item-subtitle class="text--primary"  v-text="item.departure_dates.substring(0,10)">Departure Date
                        </v-list-item-subtitle>
                        <v-list-item-title class="font-weight-bold" >Total Number of People</v-list-item-title>
                        <v-list-item-subtitle class="text--primary"  v-text="item.People"></v-list-item-subtitle>
                        <v-list-item-title class="font-weight-bold" >Contact No</v-list-item-title>
                        <v-list-item-subtitle class="text--primary"  v-text="item.user.Contact_No"></v-list-item-subtitle>
                      </v-list-item-content>
                      <v-list-item-content>
                        <v-list-item-subtitle v-text="item.Status"></v-list-item-subtitle>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-list-item-action-text v-text="item.createdAt.substring(0, 10)"></v-list-item-action-text>
                        <v-row>
                          <v-btn  class="ma-1"   outlined large color="success"  @click="updateBooking(item.id)" >
                            Accept
                          </v-btn>
                        </v-row>

                      </v-list-item-action>

                    </template>
                  </v-list-item>

                  <v-divider
                  ></v-divider>
                </template>
            </v-list>
          </v-card>
        </v-container>
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
            title: 'Pending',

          },
          {
          title: 'Confirmed'},
          {
            title: 'Cancelled',
          },
        ],
        bookings:[],
        bookId:[],
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
      },
      updateBooking(itemId){

          this.$axios.$patch(`booking/${itemId}`, {Status: 'booked'}).then((response) => {
            this.setNotifyMessage({message: 'Confirmed booking', color: 'green'})
            this.getBooking()
          })
      },
      updateBookings(id){
          this.$axios.$patch(`booking/${id}`, {Status: 'cancel'}).then(() => {
            this.setNotifyMessage({message: 'booking cancelled', color: 'green'})
            this.getBooking()
          })
      }
    }
  }
</script>
