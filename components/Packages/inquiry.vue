<template>
  <v-dialog v-model="dialog" max-width="500">
              <v-card>
                <v-card-title class="headline">Feel free</v-card-title>

                <v-form>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          v-model="message"
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

                  <v-btn color="green darken-1" text @click="dialog = false">
                    Cancel
                  </v-btn>

                  <v-btn color="green darken-1" text @click="dialog = false">
                    Submit
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
</template>

<script>
export default {
    
}
</script>

<style>

</style>