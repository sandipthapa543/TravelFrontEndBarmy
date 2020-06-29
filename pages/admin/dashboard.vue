<template>
  <v-container
  >
    <v-card flat>
      <v-card-title>
        <div>
          <div class="blue-grey--text">
            Welcome to Admin Panel.
          </div>
          <span class="green--text headline font-weight-bold">
          Mr. {{ $auth.user.First_Name + ' ' + $auth.user.Last_Name }}
        </span>
          <span class="grey--text body-2">
            We collected some information for you.
          </span>
        </div>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="8">
            <v-row>
              <v-col v-for="(item, index)  in Object.keys(statusBlock)" :key="index" cols="6">
                <v-card outlined class="px-2">
                  <v-row align="center">
                    <v-col cols="auto" class="pr-0">
                      <v-avatar color="blue-grey">
                        <v-icon
                          size="30"
                          color="white"
                          v-text="statusBlock[item].icon"
                        ></v-icon>
                      </v-avatar>
                    </v-col>
                    <v-col>
                      <div class="blue-grey--text font-weight-bold title">
                        {{statusBlock[item].text}}
                      </div>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-col>

        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>

  export default {
    layout: 'admin',
    data () {
      return {
        headers: [
          {text: 'Product Name'},
          {text: 'Category'},
          {text: 'Sub Categoies'},
          {text: 'Views'}
        ],
        userCount: 0,
        salesCount: 0,
        loading: false,
        statusBlock: {
          Activities: {
            icon: 'mdi-account-cash',
            value: 0,
            text: 'Activities',
            sub: 'Today'
          },
          salesToday: {
            icon: 'mdi-cart-arrow-right',
            value: 0,
            text: 'Packages',
            sub: 'Today'
          },
          userCount: {
            icon: 'mdi-account-group',
            value: '',
            text: 'Blog',
            sub: 'Till Now'
          },
          productStock: {
            icon: 'mdi-cart',
            value: '',
            text: 'Booking',
            sub: 'Out of stock'
          }
        },

      }
    }
  }
</script>
