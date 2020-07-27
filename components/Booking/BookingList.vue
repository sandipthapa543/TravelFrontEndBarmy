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
          <template>
            <v-list-item-content>
              <v-list-item-title v-text="item.user.Email"></v-list-item-title>
              <v-list-item-subtitle class="text--primary" v-text="item.package.Package_Name"></v-list-item-subtitle>
              <v-list-item-subtitle v-text="item.Message"></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-list-item-action-text v-text="item.createdAt.substring(0, 10)"></v-list-item-action-text>
              <v-btn     outlined large fab   >
                <v-icon
                  v-if="item.Status ==='unread'"
                  color="grey lighten-1"
                >
                  mdi-email
                </v-icon>
                <v-icon
                  v-else
                  color="black"
                  @click="getRead"

                >
                  mdi-email-open
                </v-icon>
              </v-btn>

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
    props:{
      inquiryDetail:{
        type:Array,

        required:true}
    },
    data: () => ({
      selected:0,

    }),
    created() {
      this.getRead();
    },
    methods:{
      getRead(){
        this.inquiryDetail.forEach(x=>{
          this.$axios.$patch(`user/inquiry/${x.id}`,{Status:'read'}).then((response)=>{
            this.inquiryDetail.length = this.inquiryDetail.length-1
          })
        })
      }
    }
  }
</script>
