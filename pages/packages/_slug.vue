<template>
  <div>
    <v-img
      v-if="packs.Image"
      class="white--text align-end"
      height="480"
      :src="`http://localhost:8080/uploads/packages/${packs.Image}`"
      alt="Package"
    >
      <h1 class="ts text-uppercase text-center">
        {{ packs.Package_Name }}
      </h1>
    </v-img>
    <div style="background: cadetblue">
      <v-breadcrumbs :items="items" class="container">
        <template v-slot:divider>
          <v-icon>mdi-forward</v-icon>
        </template>
      </v-breadcrumbs>
    </div>

    <v-card flat>
      <v-container>
        <v-row class="align-center">
          <v-col cols="4">
            <div class="d-flex justify-center align-center ratings">
              <!-- <span class="display-1 mr-2" color="primary">80%</span> -->
              <div class="d-flex flex-column">
                <v-rating
                  :value="aggregate.average"
                  :length="Math.ceil(aggregate.average)"
                  color="#5F9800"
                  dense
                  half-increments
                  readonly
                  size="25"
                  :hover="true"
                  :title="`Rating: ${aggregate.average}`"
                  class="d-inline ml-2"
                ></v-rating>
                <span>based on {{ aggregate.total }} reviews</span>
                <!-- <p>{{reviews}}</p> -->
              </div>
            </div>
          </v-col>
          <v-col cols="4">
            <div>
              <img
                v-if="packs.Difficulty_level"
                :src="
                  `https://himalayantrekkers.com/images/tripgrade/` +
                    packs.Difficulty_level +
                    `.svg`
                "
                alt="tripgrade"
                width="90px"
                class="d-block mx-auto"
              />
              <v-card-subtitle
                class="pa-0 ma-1 d-block text-center text--primary"
              >
                <span v-if="packs.Difficulty_level === 1">Easy</span>
                <span v-else-if="packs.Difficulty_level === 2">Moderate</span>
                <span v-else-if="packs.Difficulty_level === 3">Sternous</span>
                <span v-else-if="packs.Difficulty_level === 4">Difficult</span>
                <span v-else>Challenging</span>
              </v-card-subtitle>
            </div>
          </v-col>
          <v-col cols="4">
            <ul>
              <li>
                <v-icon left color="success">
                  mdi-checkbox-marked-circle-outline
                </v-icon>
                Best price guaranteed
              </li>
              <li>
                <v-icon left color="success">
                  mdi-checkbox-marked-circle-outline
                </v-icon>
                No booking fees
              </li>
              <li>
                <v-icon left color="success">
                  mdi-checkbox-marked-circle-outline
                </v-icon>
                Free booking cancelation
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-row>
      <v-col cols="12" md="9">
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
            <v-card flat>
              <v-card-title>Overview</v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="4">
                    <div class="fact-item" color="primary">
                      <v-icon dark class="icon-own">mdi-currency-usd</v-icon>
                      <span class="py-3 mx-auto"
                        ><b>Price</b><br />$
                        {{ formatPrice(packs.Price) }}</span
                      >
                    </div>
                  </v-col>
                  <v-col cols="4">
                    <div class="fact-item" color="primary">
                      <v-icon dark class="icon-own">mdi-calendar-check</v-icon>
                      <span class="py-3 mx-auto"
                        ><b>Duration</b><br />{{ packs.Days }} days</span
                      >
                    </div>
                  </v-col>
                  <v-col cols="4">
                    <div class="fact-item" color="primary">
                      <v-icon dark class="icon-own">mdi-flag</v-icon>
                      <span class="py-3 mx-auto"
                        ><b>Country</b><br />{{ packs.Country }}</span
                      >
                    </div>
                  </v-col>
                  <v-col cols="4">
                    <div class="fact-item" color="primary">
                      <v-icon dark class="icon-own">mdi-elevation-rise</v-icon>
                      <span class="py-3 mx-auto"
                        ><b>Max Altitude</b><br />{{
                          packs.Highest_point
                        }}</span
                      >
                    </div>
                  </v-col>
                  <v-col cols="4">
                    <div class="fact-item" color="primary">
                      <v-icon dark class="icon-own">mdi-clock</v-icon>
                      <span class="py-3 mx-auto"
                        ><b>Best Season</b><br />{{ packs.Best_season }}</span
                      >
                    </div>
                  </v-col>
                  <v-col cols="4">
                    <div class="fact-item" color="primary">
                      <v-icon dark class="icon-own">mdi-earth</v-icon>
                      <span class="py-3 mx-auto"
                        ><b>Starting Point</b><br />{{
                          packs.Starting_point
                        }}</span
                      >
                    </div>
                  </v-col>
                </v-row>

                <p class="text-justify mt-3" v-text="packs.Package_Name"></p>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <!-- Itinerary -->
          <v-tab-item>
            <v-card flat>
              <v-card-title>Itinerary</v-card-title>
              <v-card-text>
                <p v-text="packs.Itinerary" class="mb-0"></p>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <!-- Accommodation -->
          <v-tab-item>
            <v-card flat>
              <v-card-title>Accomodation</v-card-title>
              <v-card-text>
                <p v-text="packs.Accomodation" class="mb-0"></p>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <!-- Inclusion -->
          <v-tab-item>
            <v-card flat>
              <v-row>
                <v-col cols="6" class="pt-0">
                  <v-card-title>Included</v-card-title>
                  <v-card-text>
                    <p v-text="packs.Includes" class="mb-0"></p>
                  </v-card-text>
                </v-col>
                <v-col cols="6" class="pt-0">
                  <v-card-title>Excluded</v-card-title>
                  <v-card-text>
                    <p v-text="packs.Excludes" class="mb-0"></p>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
            <!-- <v-simple-table class="mb-4">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Whats Included</th>
                  <v-spacer></v-spacer>
                  <th class="text-left">Whats Not Included</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ packs.Includes }}</td>
                  <v-icon>mdi-check </v-icon>
                  <td>{{ packs.Excludes }}</td>
                  <v-icon>mdi-close </v-icon>
                </tr>
              </tbody>
            </template>
          </v-simple-table> -->
            <v-card flat>
              <v-card-title>Gear Lists</v-card-title>
              <v-card-text>
                <p v-text="packs.Gears_required" class="mb-0"></p>
              </v-card-text>
            </v-card>
          </v-tab-item>

          <!-- Review -->
          <v-tab-item>
            <v-card flat>
              <v-card-title>Customer Reviews</v-card-title>
              <v-card-text>
                <div class="d-flex align-center">
                  <v-rating
                    :value="aggregate.average"
                    :length="Math.ceil(aggregate.average)"
                    color="#5F9800"
                    dense
                    half-increments
                    readonly
                    size="26"
                    :hover="true"
                    :title="`Rating:${aggregate.average}`"
                    class="d-inline"
                  ></v-rating>
                  <span style="color:#000; font-weight: 700; font-size: 22px"
                    >Based on {{ aggregate.total }} reviews</span
                  >
                </div>
                <p class="text--primary mt-2">
                  These full and frank reviews are from the travellers who have
                  travelled with Ace the Himalaya previously. They are not
                  edited by us; find the real story, from real travellers below.
                </p>
                <a
                  class="pointer py-2 bg-success"
                  @click.stop="reviewDialog = true"
                  >Share your story with us.</a
                >
              </v-card-text>
              <v-list-item
                v-for="(review, index) in reviews"
                :key="index"
                class="mt-2"
                style="border: 1px solid aqua"
              >
                <div class="d-flex" style="width:100%">
                  <v-list-item-avatar class="my-0" height="100" width="100">
                    <v-icon size="100">mdi-account-circle</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="headline" v-if="review.user">
                      {{ review.user.First_Name + " " + review.user.Last_Name }}
                    </v-list-item-title>
                    <v-rating
                      :value="review.rating"
                      :length="review.rating"
                      color="#FFAB52"
                      dense
                      half-increments
                      readonly
                      size="20"
                      :hover="true"
                      :title="`Rating: ${review.rating}`"
                    ></v-rating>
                    <p v-text="review.review" class="text-justify ma-0"></p>
                  </v-list-item-content>
                </div>
              </v-list-item>
            </v-card>
          </v-tab-item>
          <!-- </v-tabs> -->
        </v-tabs>
      </v-col>
      <v-col cols="12" md="3">
        <div class="pa-8" style="background: #0072bb; color:#fff">
          <div class="ribbon">
            <h3 v-if="packs.activity">
              <router-link
                :to="`/activities/${packs.activity.Slug}`"
                class="no-underline"
                >{{ packs.activity.Activity_Name }}</router-link
              >
            </h3>
          </div>
          <p>All Inclusive Price:</p>
          <span class="price"
            ><sup>$</sup>{{ formatPrice(packs.Price) }} <small>USD</small></span
          >

          <v-btn
            block
            color="warning"
            class="mt-4"
            tile
            @click.stop="dialog = true"
          >
            Enquire Now
            <v-icon size="20" right>mdi-arrow-right</v-icon>
          </v-btn>

          <v-btn
            block
            color="success"
            class="mt-4"
            tile
            @click="openBooking = true"
          >
            Book this trip
            <v-icon size="20" right>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <!-- review modal -->
    <v-dialog v-model="reviewDialog" max-width="768">
      <v-card>
        <v-card-title class="headline"
          >Review Package ({{ packs.Package_Name }})</v-card-title
        >

        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12"> </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="formValues.rating"
                  label="Rating"
                  outlined
                  dense
                  min="1"
                  max="5"
                  id="rating"
                  name="rating"
                  type="number"
                />
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="formValues.review"
                  label="Review Contents"
                  outlined
                  dense
                  id="review"
                  name="review"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-form>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            Cancel
          </v-btn>

          <v-btn color="green darken-1" text @click="postReviews">
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- review modal ends -->
    <!-- Dialog box (MODAL) STARTS -->
    <v-dialog v-model="dialog" max-width="500" v-if="$auth.loggedIn">
      <v-card>
        <v-card-title class="headline">Package Enquiry</v-card-title>

        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12">
                <p v-text="packs.Package_Name" class="text-center"></p>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="formValues.People"
                  label="No. of People"
                  outlined
                  dense
                  id="people"
                  name="people"
                  type="number"
                />
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="formValues.Message"
                  label="Message"
                  outlined
                  dense
                  id="message"
                  name="message"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-form>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            Cancel
          </v-btn>

          <v-btn color="green darken-1" text @click="postInquiry">
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="openBooking"
      width="500"
      v-if="$auth.loggedIn"
      height="300"
      scrollable
      persistent
    >
      <booking-post
        @close="openBooking = false"
        :packageId="packs.id"
      ></booking-post>
    </v-dialog>
  </div>
</template>
<script>
// import { AddInquiry } from "../../components/Packages/Inquiry";
// import { Review } from "../../components/Packages/Review";
import BookingPost from "../../components/Booking/BookingPost";

export default {
  // name: "Package",
  components: { BookingPost },
  data() {
    return {
      dialog: false,
      reviewDialog: false,
      openBooking: false,
      packs: {},
      packageId: null,
      items: [
        {
          text: "Home",
          disabled: false,
          to: "/"
        },
        {
          text: "Packages",
          disabled: false,
          href: "/packages"
        }
      ],
      formValues: [],
      reviews: [],
      aggregate: {
        total: null,
        average: null
      }
    };
  },

  created() {
    this.getPackage();

    setTimeout(this.getReviews, 1000);
  },
  methods: {
    getPackage() {
      this.$axios
        .$get("package/single/" + this.$route.params.slug)
        .then(response => {
          this.packs = response;
          this.packageId = response.package_id;
          this.items.push({
            text: response.activity.Activity_Name,
            to: response.activity.Slug,
            disabled: false
          });
          this.items.push({
            text: response.Package_Name,
            disabled: true
          });
        });
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(0);
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    postInquiry() {
      if (this.$auth.loggedIn) {
        let inqData = {
          People: this.formValues.People,
          Message: this.formValues.Message,
          package_id: this.packs.id
        };
        this.$axios
          .$post("user/inquiry", inqData)
          .then(async response => {
            this.setNotifyMessage({
              message: "Inquiry completed.",
              color: "green"
            });
            this.$emit("close");
          })
          .catch(() => {
            this.setNotifyMessage({
              message: "Something went wrong.",
              color: "red"
            });
          });
      } else {
        this.setNotifyMessage({
          message: "Please login first.",
          color: "red"
        });
      }
    },

    getReviews() {
      this.$axios.$get(`package/review/${this.packs.id}`).then(response => {
        this.reviews = response.reviews;
        this.aggregate.total = response.total;
        this.aggregate.average = response.average;
      });
    },

    postReviews() {
      if (this.$auth.loggedIn) {
        let inqData = {
          rating: this.formValues.rating,
          review: this.formValues.review
        };
        this.$axios
          .$post(`package/review/${this.packs.id}`, inqData)
          .then(async response => {
            this.setNotifyMessage({
              message: "Package reviewed successfully.",
              color: "green"
            });
            this.$emit("close");
          })
          .catch(() => {
            this.setNotifyMessage({
              message: "Something went wrong.",
              color: "red"
            });
          });
      } else {
        this.setNotifyMessage({
          message: "Please login first.",
          color: "red"
        });
      }
    }
  }
};
</script>

<style>
.fact-item {
  border: 2px solid #0072bb;
  display: flex;
  font-size: 14px;
  overflow: hidden;
}
.icon-own {
  background-color: #0072bb;
  transform: skew(-25deg);
  padding-left: 50px;
  margin-left: -25px;
  display: flex;
  padding-right: 20px;
}
.icon-own::before {
  transform: skew(25deg);
}
.ribbon {
  position: relative;
  box-sizing: content-box;
  width: 220px;
  height: 0;
  border: 19px solid #fff;
  border-right: 25px solid #0072bb;
  margin-left: -34px;
  font: normal 100% / normal Arial, Helvetica, sans-serif;
  text-overflow: clip;
  margin-bottom: 25px;
}
.ribbon h3 {
  position: absolute;
  font-family: playfair display, sans-serif;
  font-weight: 700;
  color: #0072bb;
  font-size: 20px;
  top: -10px;
  left: 10px;
}
.price {
  font-size: 40px;
  font-weight: 900;
}
.price sup {
  font-size: 20px;
  top: -10px;
}
.price small {
  font-size: 20px;
  font-weight: 700;
}
</style>
