<template>
  <v-card
    max-width="800"
    max-height="auto"
    class="mx-auto"
  >
    <v-list-item>
      <v-list-item-avatar color="grey"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
        <v-list-item-subtitle>by User Name</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
      height="300"
    ></v-img>

    <v-card-text>
      Visit ten places on our planet that are undergoing the biggest changes today.
    </v-card-text>

    <v-card-actions>
      <!-- <v-btn
        text
        color="deep-purple accent-4"
      >
        Read
      </v-btn> -->

      <v-btn
        text
        color="red lighten-2"
         @click.stop="dialog = true"
      >
        Comment
      </v-btn>

        <v-dialog
            v-model="dialog"
            max-width="500"
            >
            <v-card>
                <v-card-title class="headline">Feel free</v-card-title>

                 <v-form>
                        <v-container>
                        <v-row>

                            <v-col cols="12">
                            <v-text-field
                                v-model="message"
                                :prepend-icon="icon"
                                filled
                                clear-icon="mdi-close-circle"
                                clearable
                                type="text"
                                @click:append-outer="sendMessage"
                                @click:clear="clearMessage"
                            ></v-text-field>
                            </v-col>

                        </v-row>
                        </v-container>
                    </v-form>

                <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                    color="green darken-1"
                    text
                    @click="dialog = false"
                >
                    Cancel
                </v-btn>

                <v-btn
                    color="green darken-1"
                    text
                    @click="dialog = false"
                >
                    Submit
                </v-btn>
                </v-card-actions>
            </v-card>
         </v-dialog>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      show: false,
      dialog:false,
    }),
        methods: {
      sendMessage () {
        this.resetIcon()
        this.clearMessage()
      },
      clearMessage () {
        this.message = ''
      },
  }
  }
</script>