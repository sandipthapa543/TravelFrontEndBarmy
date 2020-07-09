<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      dark
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

        <v-list-item v-if="$auth.loggedIn">
          <v-list-item-icon><v-icon>mdi-account</v-icon></v-list-item-icon>
          <v-list-item-title>{{
            $auth.user.First_Name + " " + $auth.user.Last_Name
          }}</v-list-item-title>
        </v-list-item>

        <v-list-item v-if="$auth.loggedIn">
          <v-list-item-icon><v-icon>mdi-lock</v-icon></v-list-item-icon>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>

        <v-list-item v-if="$auth.loggedIn" to="/admin/dashboard">
          <v-list-item-icon><v-icon>mdi-admin</v-icon></v-list-item-icon>
          <v-list-item-title>Admin Dashboard</v-list-item-title>
        </v-list-item>

        <v-list-item v-if="$auth.loggedIn" to="/admin/dashboard">
          <v-list-item-icon><v-icon>mdi-account</v-icon></v-list-item-icon>
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app dark class="dark">
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

      <v-btn v-for="link in links" :key="link.title" :to="link.to" router>
        {{ link.title }}
      </v-btn>
    </v-app-bar>
    <v-content class="grey lighten-2">
      <nuxt />
      <vue-snackbar></vue-snackbar>
    </v-content>
    <!-- body closed -->

    <!-- Footer -->
    <footer>
      <v-card dark width="100%" class="v-sheet--tile">
        <v-card-text class="text-center">
          <h2 class="white--text">Associated with</h2>
          <div>
            <figure class="mx-2 pa-2 d-inline-block">
              <img
                src="http://localhost:3000/assoc.PNG"
                alt="Logo"
                width="100%"
              />
            </figure>
            <!-- <figure class="mx-2 pa-2 d-inline-block" v-for="assoc in associated" :key="assoc">
              <img
                :src="assoc.image"
                :alt="assoc.name"
                width="100%"
              />
            </figure> -->
          </div>
        </v-card-text>
        <v-container>
          <v-row>
            <v-col cols="6" md="3">
              <h4>Inside Website</h4>
              <ul class="pl-0">
                <li
                  v-for="link in links"
                  :key="link.id"
                  @click="$router.push(link.to)"
                  class="pointer my-1"
                >
                  <!-- <a :to="link.to" class="anchor" router>{{link.title}}</a> -->
                  {{ link.title }}
                </li>
              </ul>
            </v-col>
            <v-col cols="6" md="3">
              <h4>Company Info</h4>
              <ul class="pl-0">
                <li
                  v-for="link in links"
                  :key="link.id"
                  @click="$router.push(link.to)"
                  class="pointer my-1"
                >
                  <!-- <a :to="link.to" class="anchor" router>{{link.title}}</a> -->
                  {{ link.title }}
                </li>
              </ul>
            </v-col>
            <v-col cols="6" md="3">
              <h4>New Links</h4>
              <ul class="pl-0">
                <li
                  v-for="link in links"
                  :key="link.id"
                  @click="$router.push(link.to)"
                  class="pointer my-1"
                >
                  <!-- <a :to="link.to" class="anchor" router>{{link.title}}</a> -->
                  {{ link.title }}
                </li>
              </ul>
            </v-col>
            <v-col cols="6" md="3" class="text-center">
              <h4>Visit us at</h4>
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="ma-4 white--text"
                icon
              >
                <v-icon size="24px">{{ icon }}</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
        <v-divider />
        <v-card-text class="white--text mx-auto text-center">
          <span>
            Copyright &copy; {{ new Date().getFullYear() }} —
            <strong>Travel and Tourism</strong></span
          >
        </v-card-text>
      </v-card>
    </footer>
  </v-app>
</template>

<style>
ul {
  list-style: none;
}
.anchor {
  text-decoration: none;
  color: white !important;
}
.pointer {
  cursor: pointer !important;
}
.ts {
  text-shadow: 2px 2px #000;
  background: linear-gradient(180deg, transparent 0, rgba(0, 0, 0, 1));
}
</style>

<script>
import VueSnackbar from "../components/Common/VueSnackbar";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: { VueSnackbar },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      items: [
        {
          icon: "mdi-apps",
          title: "Login",
          to: "/login"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Register",
          to: "/register"
        }
      ],
      links: [
        {
          icon: "mdi-apps",
          title: "Home",
          to: "/"
        },
        {
          icon: "mdi-apps",
          title: "About Us",
          to: "/about"
        },
        {
          icon: "mdi-apps",
          title: "Activities",
          to: "/activities"
        },
        {
          icon: "mdi-apps",
          title: "Blog",
          to: "/blog"
        },
        {
          icon: "mdi-apps",
          title: "Packages",
          to: "/packages"
        },
        {
          icon: "mdi-apps",
          title: "Contact",
          to: "/contact"
        }
      ],
      associated: [
        {
          id: 1,
          name: "TAAN",
          image:
            "https://static.acethehimalaya.com/uploads/2019/07/TAAN-Logo.png",
          link: "http://taan.com"
        },
        {
          id: 1,
          name: "PATA",
          image:
            "https://static.acethehimalaya.com/uploads/2019/07/pata-Logo.png",
          link: "http://pata.com"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Travel"
    };
  },
  created() {
    if (this.$auth.loggedIn) {
    }
  },
  methods: {
    logout() {
      this.$auth.logout();
      this.setNotifyMessage("Successfully Logout.");
    }
  }
};
</script>
