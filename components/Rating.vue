<template>
  <v-row>
    <v-col
      v-for="(review, index) in reviews"
      :key="index"
      cols="12"
      sm="6"
      md="4"
    >
      <v-card class="mx-auto" max-width="400" justify="center" align="center">
        <div class="d-flex px-3 align-center">
          <v-list-item-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-img>
          </v-list-item-avatar>
          <span style="font-size: 18px; font-weight: 500">
            {{ review.user.First_Name }} {{ review.user.Last_Name }}
          </span>
          <v-spacer></v-spacer>
          <span class=""
            >{{ review.user.City }}, {{ review.user.Country }}</span
          >
        </div>
        <div class="d-flex align-center justify-space-between px-3">
            <span>
              <router-link
                :to="`/packages/${review.package.Slug}`"
                class="no-underline"
              >
                {{ review.package.Package_Name }}
              </router-link>
            </span>
            <v-rating
              :value="review.rating"
              color="yellow darken-3"
              background-color="grey darken-1"
              empty-icon="$ratingFull"
              readonly
              dense
              half-increments
              hover
              size="18"
            ></v-rating>
          </div>
        <v-divider></v-divider>
        <v-card-text>
          <p v-text="review.review" class="text-justify mb-0" style="min-height: 110px"></p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: ["reviews"]
};
</script>
