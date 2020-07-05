<template>
  <div class="d-flex space-between">
    <v-autocomplete
      :id="id"
      v-model="selectedData"
      :items="items"
      :item-text="itemText"
      :item-value="itemValue"
      :loading="isLoading"
      :search-input.sync="search"
      :multiple="multiple"
      :small-chips="multiple || chips"
      :deletable-chips="multiple"
      :disabled="disabled"
      :label="label"
      :error="errorMessages.length > 0"
      :error-messages="errorMessages"
      :prepend-inner-icon="prependInnerIcon"
      :clearable="clearable"
      :hint="hint"
      :persistent-hint="persistentHint"
      :chips="chips"
      :hide-details="hideDetails"
      hide-selected
      hide-no-data
      @keyup.13="populateInitialData(search)"
      @focus="populateInitialData(search)"
      @change="$emit('change')"
      @blur="$emit('blur')"
    >
      <template slot="item" slot-scope="data">
        <v-list-item-content>
          <v-list-item-title>
            {{ data.item[itemText] | truncate(40) }}
          </v-list-item-title>
        </v-list-item-content>
      </template>
    </v-autocomplete>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: {
      value: {
        type: [Number, String, Array, Object],
        default: undefined
      },
      id: {
        type: String,
        default: ""
      },
      label: {
        type: String,
        default: ""
      },
      disabled: {
        type: Boolean,
        default: false
      },
      errorMessages: {
        type: [String, Array],
        default() {
          return [];
        }
      },
      endpoint: {
        type: String,
        default: ""
      },
      itemText: {
        type: String,
        required: true
      },
      itemValue: {
        type: String,
        required: true
      },
      default: {
        type: [Object, Array, String],
        required: false,
        default: null
      },
      hint: {
        type: String,
        default: undefined
      },
      persistentHint: {
        type: Boolean,
        required: false,
        default: false
      },
      multiple: {
        type: Boolean,
        required: false,
        default: false
      },
      clearable: {
        type: Boolean,
        default: true
      },
      hideDetails: {
        type: Boolean,
        default: false
      },
      chips: {
        type: Boolean,
        default: false
      },
      params: {
        type: Object,
        required: false,
        default() {
          return {};
        }
      },
      prependInnerIcon: {
        type: String,
        default: undefined
      },
      itemsToExclude: {
        type: [Array, Number],
        default: null
      }
    },
    data() {
      return {
        isLoading: false,
        items: [],
        selectedData: "",
        search: "",
        isRequestBusy: false
      };
    },
    watch: {
      value: {
        handler: function(val) {
          if (val) {
            this.populateInitialData(val);
          }
        },
        immediate: true
      },
      search(val) {
        if (val && val.length > 0 && !this.isRequestBusy) {
          this.isRequestBusy = true;
          setTimeout(() => {
            this.fetchData(val);
          }, 1000);
        }
      },
      selectedData(val) {
        this.syncSelectedData(val);
        this.$emit("input", val);
      }
    },
    mounted() {
      if (this.value) {
        this.populateInitialData(this.value);
      }
    },
    methods: {
      populateInitialData(val) {
        this.fetchData(val);
        if (Array.isArray(val)) {
          if (typeof this.value[0] === "object") {
            this.selectedData = this.value.map(el => el[this.itemValue]);
          } else {
            this.selectedData = this.value;
          }
        } else if (typeof this.value === "object") {
          this.selectedData = this.value[this.itemValue];
        } else {
          this.selectedData = this.value;
        }
        this.$emit("input", this.selectedData);
      },
      remove(item) {
        if (this.selectedData instanceof Object) {
          const index = this.selectedData.indexOf(item.id);
          if (index >= 0) this.selectedData.splice(index, 1);
        } else {
          this.selectedData = null;
        }
      },
      fetchData(initialData) {
        this.isLoading = true;
        let searchData =
          typeof initialData === "string" ? initialData : this.search;
        this.$axios
          .$get(this.endpoint, {
            params: { ...this.params, search: searchData }
          })
          .then(response => {
            if (this.itemsToExclude) {
              this.excludeRecord(response);
            }
            this.items = response.results;
          })
          .finally(() => {
            this.isLoading = false;
            this.isRequestBusy = false;
          });
      },
      syncSelectedData(val) {
        if (val instanceof Array) {
          const syncData = [];
          val.forEach(key => {
            syncData.unshift(
              this.items.find(data => data[this.itemValue] === key)
            );
          });
          this.$emit("update:selected", syncData);
        } else {
          const syncData = this.items.find(data => data[this.itemValue] === val);
          const selectedFullData = this.items.filter(x => x.slug === val);
          this.$emit("update:selected", syncData);
          this.$emit("update:selectedFullData", selectedFullData[0]);
        }
      },
      // Excludes the selected records from the list if value exists in prop itemsToExclude
      excludeRecord(response) {
        let excludedItem = [];
        if (typeof this.itemsToExclude === "number") {
          excludedItem.push(this.itemsToExclude);
        } else {
          excludedItem = this.itemsToExclude;
        }
        response.results = response.results.filter(item => {
          if (item.id) {
            return !excludedItem.includes(item.id);
          } else if (item.slug) {
            return !excludedItem.includes(item.slug);
          }
        });
      }
    }
  };
</script>
