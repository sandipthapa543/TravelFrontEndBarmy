<template>
  <div>
    <v-snackbar
      v-model="getNotifyMessage.display"
      :color="getNotifyMessage.color"
    >
      {{ getNotifyMessage.message }}

      <v-icon v-text="'mdi-close-circle'" @click="getNotifyMessage.display = false">
      </v-icon>
    </v-snackbar>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        getNotifyMessage: 'getNotifyMessage'
      })
    }

  }
</script>
