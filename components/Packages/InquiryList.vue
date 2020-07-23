<template>
  <v-card
    max-width="500"
    class="mx-auto"
  >
    <v-toolbar
      color="primary"
      dark
    >
      <v-toolbar-title>Inquiry</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-checkbox-marked-circle</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list two-line>
      <v-list-item-group
        v-model="selected"
        multiple
        active-class="pink--text"
      >
        <template v-for="(item, index) in inquiryDetail">
          <v-list-item :key="item.Email">
            <template v-slot:default="{ active, toggle }">
              <v-list-item-content>
                <v-list-item-title v-text="item.user.Email"></v-list-item-title>
                <v-list-item-subtitle v-text="item.Message"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text v-text="item.createdAt.substring(0, 10)"></v-list-item-action-text>
                <v-icon
                  v-if="!active"
                  color="grey lighten-1"
                >
                  mdi-star
                </v-icon>
                <v-icon
                  v-else
                  color="yellow"
                >
                  mdi-star
                </v-icon>
              </v-list-item-action>

            </template>
          </v-list-item>

          <v-divider
            v-if="index + 1 < item.length"
            :key="index"
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props:['inquiryDetail'],
  data: () => ({
    selected:0,

  }),
}
</script>

