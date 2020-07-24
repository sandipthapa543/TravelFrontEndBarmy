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
        <v-icon large>mdi-home</v-icon>
      </v-btn>
      <v-menu>
        <template v-slot:activator="{ on }"  >
          <v-btn v-on="on" text class="text-capitalize " >
            <v-badge
              :content="inquiryDetail.length"
              color="green"
              overlap
            >
            <v-icon large>mdi-email</v-icon>

            </v-badge>
          </v-btn>
        </template>
        <inquiry-list  :inquiry-detail="inquiryDetail || []"></inquiry-list>
      </v-menu>
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
    <v-footer
      :fixed="fixed"
      dark
      padless
      justify="center"
    >
      <v-card
        flat
        tile
        class="grey darken-3 lighten-1 white--text text-center"
        width="100%"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>
        <v-divider/>
        <v-card-text class="white--text">
          <span>&copy; {{ new Date().getFullYear() }} — <strong>Travel</strong> </span>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>

  import VueSnackbar from "~/components/Common/VueSnackbar";
  import InquiryList from "../components/Packages/InquiryList";
  export default {
    components: {

      VueSnackbar,InquiryList
    },
    data() {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        inquiryDetail:[],
        selectedIndex: null,
        icons: [
          'mdi-facebook',
          'mdi-twitter',
          'mdi-linkedin',
          'mdi-instagram',
        ],
        items: [
          {
            icon: 'mdi-apps',
            title: 'Dashboard',
            to: '/'
          },
          {
            icon: 'mdi-chart-line',
            title: 'Packages',
            to: '/admin/packages'
          },
          {
            icon: 'mdi-account-group',
            title: 'Activities',
            to: '/admin/Activity'
          },
          {
            icon: 'mdi-account-book',
            title: 'Blog',
            to: '/admin/addBlogs'
          }
        ],


      }
    },
    created() {
      this.getInquiry();
    },
    methods:{
      getInquiry(){
        this.$axios.get(`user/inquiry/all?sort=id&order=ASC`)
          .then((response)=>{
         this.inquiryDetail=response.data

        })

      }
    }
  }
</script>
