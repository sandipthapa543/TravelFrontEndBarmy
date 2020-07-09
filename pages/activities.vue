<template>
  <v-layout>
      <v-flex>
        <v-card>
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          > 
            <v-container align-center>
              <v-layout fill-height>
                <v-flex xs12 class="text-sm-center">
                  <span class="headline">Nepal Top Adventure Activites</span>
                </v-flex>
              </v-layout>
            </v-container>
        </v-img>
         <p> Planning a trip with us is the best way to get closer to nature in a way that you would never imagine. We have been covering the broader area of Nepal for trekking and exploring the beautiful nature such as Annapurna Base Camp, Everest Base Camp, Langtang Valley Trek, Gokyo Lake Trek, Peak Climbing and lot more for adventure. But things are not limited to these. Some other major adventure activities that we provide to our guests are rafting, bungee jumping, paragliding, mountain flights, hiking in the near areas of Kathmandu, sightseeing of Kathmandu Valley, Lalitpur and Bhaktapur, visiting the national parks and several others.

Planning a trip to Nepal but wondering what you have in store other than trekking? Well, no need to worry Trekking plus epic journey for an exciting trip that you will never forget. From trekking to mindfulness trips, there’s an endless an epic journey to do in Nepal.</P>
    
     <v-card
    max-width="500"
    class="mx-auto"
  >
    <v-toolbar
      color="teal"
      dark
    >


      <v-toolbar-title>Activities</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>

    <v-list>
      <v-list-group
        v-for="item in itemss"
        :key="item.titles"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.titles"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.itemss"
          :key="subItem.titles"
        >
          <v-list-item-content>
            <v-list-item-title v-text="subItem.titles"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card>

        </v-card>
  </v-flex> 
  


         

    
     </v-layout>
</template>


<script>
export default {
  data() {
    return {
             itemss:[
                  {
            action: 'Day Trips',
            titles: 'Hiking ',
            itemss: [
              { titles: 'Changunarayan Nagarkot Hiking' },
              { titles: 'Dhulikhel Balthali Hiking' },
              { titles: 'Nagarjun Hills Hiking' },
              { titles: 'Budhanilkantha and Ani Gonpa' },
              { titles: 'Kritipur, Bungamati , Khokana and Patan Tour' },],},
               {
            action: 'Trekking and Walking',
            titles: 'Hiking Tours',
            itemss: [
              { titles: 'Changunarayan Nagarkot Hiking' },
              { titles: 'Dhulikhel Balthali Hiking' },
              { titles: 'Nagarjun Hills Hiking' },
              { titles: 'Chisapani Dhulikhel Hiking' },
            ],
          },
          {
            action: 'Peak Circuit',
            titles: 'Trekking',
            itemss: [
              { titles: 'Manaslu Region Trek' },
              { titles: 'Annapurna Region Trek' },
              { titles: 'Everest Region Trek' },
              { titles: 'Langtang Region Trek' },
              { titles: 'Kanchenjanga Region Trek' },
            ],
          },
          {
            action: 'heli Tours',
            titles: 'Family',
            itemss: [
              { titles: 'Pokhara Helicopter Sightseeing' },
              { titles: 'Heli Tour to Everest Base Camp Kala Patthar' },

            ],
          },
          {
            action: 'Jungle Safari',
            titles: 'Health',
            itemss: [
              { titles: 'Chitwan Jungle safari' },

            ],
          },
          {
            action: 'Rafting',
            titles: 'Office',
            itemss: [
              { titles: 'Kaligandaki Rafting' },
              { titles: 'Bhotekosi Rafting' },
              { titles: 'Trishuli Rafting' },

            ],
          },
          {
            action: 'Adventure Sport',
            titles: 'Promotions',
            itemss: [
              { titles: 'Bhote Koshi Bungee Jumping' },
            ],
          },

      ],
    };
  }
};
</script>

