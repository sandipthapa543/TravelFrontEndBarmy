<template>
  <div class="block latestBlogBlock">       
    <v-container>
      <h2 class="text-center">Latest Blog</h2>
      <v-row>
        <v-col v-for="item in items" :key="item.id" cols="12" md="4">
          <v-card outlined class="mx-auto">
            <v-img
              class="white--text align-end"
              height="200px"
              :src="item.src"
            >
            <v-card-text class="white--text">
              <span>{{ new Date().getFullYear() }} <br/>
               <strong>Travel</strong> </span>
            </v-card-text>

              <v-card-title>{{ item.title }}</v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">{{ item.subtitle }}</v-card-subtitle>
        

            <v-btn
                icon
                @click="show = !show"
            >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>

            <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>

                    <v-card-text class="text--primary">
              <div>{{ item.description }}</div> 
            </v-card-text>
            </div>
            </v-expand-transition>

         
            <v-card-actions>
              <v-btn color="primary">View more</v-btn>
                </v-card-actions>
          </v-card>
        </v-col>
       
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "LatestPost",
  data: () => ({
    show: false,
    items: [
      {
        id: 1,
        title: "Top road trips",
        subtitle: "Hidden kingdom of Nepal",
        description: "To trek in Upper Mustang is a rare privilege. Here you will experience a way of life of true mountain people, who for hundreds of years, had very little contact with the rest of Nepal and retained their rich cultural heritage. Until recent times their king was officially recognized by the Government of Nepal..",
        src: require("../assets/images/1.jpg")
      },
      {
        id: 2,
        title: "Rani Mahal palpa",
        subtitle: "Also known as the Taj Mahal of Nepal",
        description: "Rani Mahal was built as the symbol of love for the beloved late wife of General Khadga Shumsher Jung Bahadur Rana. The palace was built in the 19th century at the banks of the Kali Gandaki River, between Syangja and Palpa. Situated at the distance of 13 km from Tansen, the palace looks attractive sitting on a massive rock.",
        src: require("../assets/images/2.jpg")
      },
      {
        id: 3,
        title: "the hidden Tibetan Kingdom in Nepal",
        subtitle: "a walled city of Upper Mustang",
        description: "Lo-manthang culturally rich as Tibetan origin. The area is mostly held by ethnic group Lhobas, which cultures are similar as Tibetan. About twelve caves discovered near Lo Manthang village which is ancient Buddhist paintings and set in sheer cliffs at 14,000 feet. Silver and gold painting contains in Tibetan script shows dates of the 13th century.",
        src: require("../assets/images/3.jpg")
      }
    ]
  })
};
</script>