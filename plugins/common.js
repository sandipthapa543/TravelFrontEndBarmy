import Vue from 'vue'
import { mapMutations } from 'vuex'
Vue.mixin({
  BASE_URL: 'http://localhost:8080/static',
  methods: {
    ...mapMutations({
      setNotifyMessage: 'setNotifyMessage'
    })
  }
})
