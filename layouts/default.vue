<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item v-if="!$auth.loggedIn" @click="$router.push('/login')">
          <v-list-item-icon><v-icon>mdi-account</v-icon></v-list-item-icon>
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item>

        <v-list-item v-if="!$auth.loggedIn" @click="$router.push('/register')">
          <v-list-item-icon><v-icon>mdi-map</v-icon></v-list-item-icon>
          <v-list-item-title>Register</v-list-item-title>
        </v-list-item>

        <v-list-item v-if="$auth.loggedIn" >
          <v-list-item-icon><v-icon>mdi-account</v-icon></v-list-item-icon>
          <v-list-item-title>{{$auth.user.First_Name + ''+ $auth.user.Last_Name}}</v-list-item-title>
        </v-list-item>
<!--        <v-list-item v-if="$auth.loggedIn" @click="$router.push('my/profile')">-->
<!--          <v-list-item-icon><v-icon>mdi-lock</v-icon></v-list-item-icon>-->
<!--          <v-list-item-title>My Profile</v-list-item-title>-->
<!--        </v-list-item>-->
        <v-list-item  v-if="$auth.loggedIn"  @click="logout">
          <v-list-item-icon><v-icon>mdi-lock</v-icon></v-list-item-icon>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
      </v-btn> -->
      <v-toolbar-title v-text="title" />
      <v-spacer />
            <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>


       <v-btn
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
          router
      >

        <v-text>{{ link.title }}</v-text>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
       <vue-snackbar></vue-snackbar>
      </v-container>
    </v-content>
      <v-footer
     :fixed="fixed"
    dark
    padless
     justify="center"
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
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
  import VueSnackbar from "../components/Common/VueSnackbar";
  import { mapGetters, mapMutations } from "vuex"
export default {
  components: {VueSnackbar},
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
       icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      items: [
        {
          icon: 'mdi-apps',
          title: 'Login',
          to: '/login'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Register',
          to: '/register'
        }
      ], links: [
         {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/'
        }, {
          icon: 'mdi-apps',
          title: 'About Us',
          to: '/about'
        }, {
          icon: 'mdi-apps',
          title:'Services',
          to: '/services'
        }, {
          icon: 'mdi-apps',
          title: 'Blog',
          to: '/blog'
        },
         {
          icon: 'mdi-apps',
          title: 'Packages',
          to: '/packages'
        },
          {
          icon: 'mdi-apps',
          title: 'Contact',
          to: '/contact'
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Travel'
    }
  },
  created() {
    if(this.$auth.loggedIn) {

    }
  },
  methods: {
    logout () {
      this.$auth.logout();
      this.setNotifyMessage("Successfully Logout.")
    }
  }
}
</script>
