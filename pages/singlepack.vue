<template>

  <div>
    <v-img
      class="white--text align-end"
      height="420"
      src="/_nuxt/assets/images/3.jpg"
      alt="Package"
    >
      <h1 class="ts text-uppercase text-center">
        Package name
      </h1>
    </v-img>
    <div style="background: cadetblue">
      <v-breadcrumbs :items="items" class="container">
        <template v-slot:divider>
          <v-icon>mdi-forward</v-icon>
        </template>
      </v-breadcrumbs>
    </div>

      <v-card>
    <v-toolbar flat color="primary" dark>
      <v-toolbar-title>What we offer</v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab>
        <v-icon left>mdi-book-open</v-icon>
        Overview
      </v-tab>
      <v-tab>
        <v-icon left>mdi-watch</v-icon>
       Itinerary
      </v-tab>
      <v-tab>
        <v-icon left>mdi-access-point</v-icon>
       Accommodation
      </v-tab>
         <v-tab>
        <v-icon left>mdi-checkbox-multiple-marked</v-icon>
       Inclusion
      </v-tab>
      <v-tab>
        <v-icon left>mdi-star-circle</v-icon>
       Review
      </v-tab>

<!-- Overview -->
      <v-tab-item>  
        
  <v-card
    class="pa-4"
    flat
    height="400px"
    img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg"
  >
    <v-toolbar
      dense
      floating
    >
      <v-text-field
        hide-details
        prepend-icon="search"
        single-line
      ></v-text-field>

      <v-btn icon>
        <v-icon></v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
   <v-card flat>
          <v-card-text>
            <h2>Three Peak Climb</h2>
            <p>he Everest region is one of the most celebrated regions by travel enthusiasts. Blessed with the raw splendor of mother nature, this region has some unspoiled locations full of huge mountains and peaks.

On this Everest three Peak climbing package - Himalayan Trekkers offers you the opportunity to climb 3 different peaks Lobuche, Phokalde and Island Peak.

To make this trip a memorable one, a program has been created where you start with Pokalde peak climbing, continue to the glory of the Imja Tse or Island Peak and finally climb over the challenging Lobuche Peak.

These are certainly three of the most striking peaks in the region and promise to take you on a fairy-tale-like joyride.

Although Everest itself is everything you can ask for, the surrounding smaller peaks such as Lobuche, Phokalde and Island Peak also have their own glory and climbing history.

Pokalde Peak is the smallest of the three at 5806 m and makes it an easier climb and therefore the first peak to climb.

The island peak stands high at 6189 m, offers a challenging climb for the travelers, but offers amazing views that look like an island surrounded by an enormous sea of ice. Being right in the middle of the Chhukung Valley - the heart of the Everest region - one can expect to be blown away by the beauty of these beautiful mountains.

Finally, the pure elegance of Lobuche reaches 6119 m and the toughest climb between three of them. </p>
          </v-card-text>
            <v-timeline>
    <v-timeline-item>Trip 1</v-timeline-item>
    <v-timeline-item class="text-right">trip 2</v-timeline-item>
    <v-timeline-item>trip 3</v-timeline-item>
     <v-timeline-item class="text-right">trip 4</v-timeline-item>
  </v-timeline>
   </v-card>
        
      </v-tab-item>
<!-- Itinerary -->
      <v-tab-item>
 <v-card flat
    class="mx-auto"
    max-width="300"
    tile
  >
    <v-list disabled>
      <v-subheader>REPORTS</v-subheader>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item
          v-for="(item, i) in itemss"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text1"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
      </v-tab-item>
<!-- Accommodation -->
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
<b>Travel</b> promises to manage the best, most comfortable and preferable accommodation available. 

Generally, in cities like Kathmandu, Lukla, Namche Bazar, and Phakding, we arrange basic three-star facilities. If available, you can opt for a more budget-friendly option or upgrade to a more luxurious hotel by paying a little extra. 

Although all the places might not have all the modern facilities, we will make sure to arrange safe and comfortable accommodation. In general, hygienic and safe tea houses/local lodges/ home-stays with all the basic facilities are arranged. But you can, if possible, personalize according to your preference. 

If your itinerary includes camping or you choose to experience camping during your travel, a proper camping-site will be pre-decided. If required, we also provide the basic equipment which is refundable. Please check the Gear-List and Requirement List for more information.  
          </p>

            <p class="mb-0">
Breakfast is usually included with your B&B Accommodation within the cost that is evident. For other meals in the city, you would have to pay separately. Often in the cities, you can choose from many different cuisines and varied food services. We can always help you find the right place.

In more remote areas, usually, there are not many options. But you can always find hygienic and well-prepared food. Moreover, almost all the meals during the trek are included in the cost. We can help you make changes according to your preference and budget, but only if choices are available!

On top of that, Himalayan Trekkers also organizes Welcome and Farewell Dinners as a symbol of warm greetings. Please go through the detailed itinerary for more information. We are always there to help you travel to your heart’s content.
            </p>
          </v-card-text>
          </v-card>

            <v-row justify="space-around">
               <v-avatar color="black">
              <v-icon dark>mdi-food</v-icon>
              </v-avatar>
              <v-avatar>
              <v-avatar>
              <v-icon dark>mdi-hotel</v-icon>
              </v-avatar>
              </v-avatar>
              <v-avatar color="red">
              <v-icon dark>mdi-food</v-icon>
              </v-avatar>
            </v-row>

      </v-tab-item>
<!-- Inclusion -->
      <v-tab-item>
        <v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Whats Included</th>
          <v-spacer></v-spacer>
          <th class="text-left">Whats Not Included</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in inclusion" :key="item.name">
          <td>{{ item.included }}</td> <v-icon>mdi-check </v-icon>
          <td>{{ item.notincluded }}</td> <v-icon>mdi-close </v-icon>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
    <h2>Gear List</h2>
      </v-tab-item>
      
<!-- Review -->
     <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>

            <p class="mb-0">
              Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
<!-- ------------------------------------------------------- -->
    </v-tabs>
  </v-card>

  </div>
</template>
<script>
  export default {
    data: () => ({
      item: 1,
      itemss: [
        { text1: 'Days', icon: 'mdi-calendar' },
        { text1: 'Arrival and Departure from Kathmandu', icon: 'mdi-airplane' },
        { text1: 'Title', icon: 'mdi-flag' },
      ],
      
        inclusion: [
          {
            included: 'All Arrival/Departure transfer as per itinerary',
            notincluded: 'Nepal Entry Visa Fees',
          },
          {
            included: 'Accommodation with daily breakfast in Kathmandu as per itinerary',
            notincluded: 'International Airfare to/from Kathmandu & Departure Taxes',
          },
        ],
      }
    ),
   
  }
</script>

