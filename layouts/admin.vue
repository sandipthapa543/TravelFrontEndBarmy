<template>
  <v-app light>
    <v-app-bar
      color="red darken-4"
      dark
      fixed
      app
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" ></v-app-bar-nav-icon>
      <div class="font-weight-bold title">Travel Admin</div>
      <v-spacer></v-spacer>
      <v-btn @click="$router.push('/')"  text class="text-capitalize">
        Home
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      left
      fixed
      app
      clipped
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-icon
              v-text="'mdi-account'"
            ></v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{$auth.user.First_Name + '' + $auth.user.Last_Name }}</v-list-item-title>
            <v-list-item-subtitle>Admin</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>
      <v-list dense nav>
        <!-- Navigation Single Item -->
        <template v-for="item in items">
          <v-list-item
            v-if="!item.hasOwnProperty('children')"
            :key="item.title"
            :to="item.to"
            link
          >
            <v-list-item-icon>
              <v-icon size="20">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- ENDS: Navigation Single Item -->
          <!-- ENDS: Navigation for Groups -->
          <template v-else>
            <v-list-group
              :key="item.title"
              v-model="item.active"
            >
              <v-icon slot="prependIcon" size="20" v-text="item.icon"></v-icon>
              <template v-slot:activator>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </template>
              <template v-for="(children, index) in item.children">
                <v-list-item
                  :key="index"
                  :to="children.to"
                  link
                  class="ml-2"
                  active-class="active-nav-item blue--text"
                >
                  <v-list-item-icon class="ml-6">
                    <v-icon size="20" v-text="children.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ children.title }}</v-list-item-title>
                  </v-list-item-content>
                  <!-- TODO: counts for task, keep here. -->
                </v-list-item>
              </template>
            </v-list-group>
          </template>
          <!-- ENDS: Navigation for Groups -->
        </template>
      </v-list>
    </v-navigation-drawer>
    <div class="mt-4">
      <v-content>
        <nuxt />
        <vue-snackbar></vue-snackbar>
      </v-content>
    </div>
    <v-footer  class="grey darken-3">
      <v-row class="white--text">
        <v-col sm="12" md="3">
          <div>Privacy</div>
          <div>Contact Us</div>
          <div>SignUp</div>
        </v-col>
        <v-col sm="12" md="3">
          <div>Privacy</div>
          <div>Contact Us</div>
          <div>SignUp</div>
        </v-col>
        <v-col sm="12" md="3">
          <div>Privacy</div>
          <div>Contact Us</div>
          <div>SignUp</div>
        </v-col>
        <v-col class="grey--text" sm="12" md="3">
          <div class="white--text font-weight-bold title">MelaCart</div>
          <div>Find Us</div>
          <div>
            Head Office: Macchaphkare, Kathmandu Nepal
          </div>
          <v-row>
            <v-col
              v-for="(icon, index) in socialMedia"
              :key="index"
              class="pr-0"
              cols="auto"
            >
              <v-hover
                v-slot="{ hover }"
              >
                <v-icon
                  v-text="icon"
                  class="px-0"
                  :color="hover ? 'red' : 'white'"
                ></v-icon>
              </v-hover>
            </v-col>
          </v-row>
          <div>
            &copy; copyright 2020 MelaCart.
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>

  import VueSnackbar from "~/components/Common/VueSnackbar";
  export default {
    components: {

      VueSnackbar
    },
    data() {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        selectedIndex: null,
        socialMedia: [
          'mdi-facebook',
          'mdi-instagram'
        ],
        items: [
          {
            icon: 'mdi-apps',
            title: 'Dashboard',
            to: '/'
          },
          {
            icon: 'mdi-notebook-multiple',
            title: 'Products',
            children: [
              {
                icon: 'mdi-chart-bubble',
                title: 'Products',
                to: '/admin/product'
              },
              {
                icon: 'mdi-chart-bubble',
                title: 'Categories',
                to: '/admin/category'
              },
              {
                icon: 'mdi-chart-bubble',
                title: 'Sub Categories',
                to: '/admin/sub-category'
              },
              {
                icon: 'mdi-cash',
                title: 'Voucher',
                to: '/admin/voucher'
              }
            ]
          },
          {
            icon: 'mdi-chart-line',
            title: 'Orders',
            to: '/admin/orders'
          },
          {
            icon: 'mdi-account-group',
            title: 'Users',
            to: '/admin/users'
          }
        ],

      }
    }
  }
</script>
