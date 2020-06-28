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
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
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
export default {
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
  }
}
</script>
