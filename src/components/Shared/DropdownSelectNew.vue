<template>
  <div class="dropdown" id="dropdown">
    <div class="dropdown-label">
      <div class="dropdown-label-wrapper">
        <span class="dropdown-label-text">{{ label }}</span>
      </div>

      <div class="dropdown-button" ref="button" role="button">
        <button
          class="dropdown-button-btn"
          :disabled="disableChoise"
          @click.once="handleRequest"
          @click="handleDropdown"
        >
          <span
            class="dropdown-button-btn-text"
            v-if="
              (checkMultiOptions && !selectedOptions?.length) ||
              selectedOptions === null
            "
          >
            <slot name="placeholder"></slot>
          </span>
          <span
            class="dropdown-button-btn-text-selected"
            v-else-if="!checkMultiOptions || selectedOptions?.length === 1"
          >
            <slot name="selected-options-once" :option="oneOption"></slot>
          </span>

          <span class="dropdown-button-btn-text-selected" v-else>
            <slot
              name="selected-options-length"
              :length="selectedOptions.length"
            ></slot>
          </span>
        </button>
        <q-icon size="20px" v-if="!disableChoise">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="#7A88A6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </q-icon>
      </div>
    </div>

    <Transition name="fade">
      <div
        v-click-out-side="closeModal"
        key="dropdown-select"
        class="dropdown-select"
        ref="dropdownSelect"
        v-if="showDropdown"
        :style="dropDownStyle"
      >
        <div
          class="dropdown-select-scroll"
          id="virtual-scroll-target"
          style="max-height: 324px"
        >
          <div class="dropdown-select-search">
            <label class="dropdown-select-search-label">
              <input
                type="text"
                :placeholder="$t('search')"
                class="dropdown-select-search__field"
                v-model="searchValue"
                ref="filterSearch"
              />
              <q-icon size="20px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M9.16683 15C12.3885 15 15.0002 12.3884 15.0002 9.16671C15.0002 5.94505 12.3885 3.33337 9.16683 3.33337C5.94517 3.33337 3.3335 5.94505 3.3335 9.16671C3.3335 12.3884 5.94517 15 9.16683 15Z"
                    stroke="#A0AABC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.6668 16.6667L13.3335 13.3334"
                    stroke="#A0AABC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </q-icon>
            </label>
          </div>

          <div class="dropdown-loading flex flex-center" v-if="loading">
            <q-spinner-tail color="teal" size="20px" />
          </div>
          <div
            class="dropdown-select-error-message flex items-center"
            v-else-if="filteredOptions.length === 0"
          >
            <q-icon size="20px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10ZM6.641 6.641C6.71065 6.5713 6.79335 6.51602 6.88438 6.4783C6.9754 6.44058 7.07297 6.42116 7.1715 6.42116C7.27003 6.42116 7.3676 6.44058 7.45862 6.4783C7.54965 6.51602 7.63235 6.5713 7.702 6.641L10 8.94L12.298 6.642C12.4395 6.50545 12.629 6.42994 12.8257 6.43174C13.0223 6.43354 13.2104 6.51251 13.3494 6.65163C13.4884 6.79075 13.5671 6.9789 13.5688 7.17555C13.5704 7.3722 13.4947 7.56161 13.358 7.703L11.062 10L13.36 12.298C13.4337 12.3667 13.4928 12.4495 13.5338 12.5415C13.5748 12.6335 13.5968 12.7328 13.5986 12.8335C13.6004 12.9342 13.5818 13.0342 13.5441 13.1276C13.5064 13.221 13.4503 13.3058 13.379 13.377C13.3078 13.4483 13.223 13.5044 13.1296 13.5421C13.0362 13.5798 12.9362 13.5984 12.8355 13.5966C12.7348 13.5948 12.6355 13.5728 12.5435 13.5318C12.4515 13.4908 12.3687 13.4317 12.3 13.358L10 11.062L7.702 13.36C7.55982 13.4925 7.37178 13.5646 7.17748 13.5612C6.98318 13.5577 6.79779 13.479 6.66038 13.3416C6.52297 13.2042 6.44425 13.0188 6.44083 12.8245C6.4374 12.6302 6.50952 12.4422 6.642 12.3L8.938 10L6.641 7.702C6.50055 7.56137 6.42166 7.37075 6.42166 7.172C6.42166 6.97325 6.50055 6.78263 6.641 6.642V6.641Z"
                  fill="#CB3333"
                />
              </svg>
            </q-icon>
            <span> Не удалось найти </span>
          </div>
          <!-- <div class="dropdown-select-list" ref="dropdownListRef" v-else> -->
          <q-virtual-scroll
            v-else
            scroll-target="#virtual-scroll-target"
            class="dropdown-select-list-virtual-scroll"
            :items="filteredOptions"
            v-slot="{ item, index }"
          >
            <div
              class="dropdown-select-list-item"
              :key="index"
              @click="selectOption(item)"
            >
              <div class="dropdown-select-list-item-text">
                <slot name="option-content" :option="item"></slot>
              </div>
            </div>
          </q-virtual-scroll>
          <!-- </div> -->
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import { onMounted, watch } from "vue";
import { ref } from "vue";
import clickOutSide from "@mahdikhashan/vue3-click-outside";

export default {
  name: "dropdownSelect",
  emits: ["selectOption", "request", "requestBySelect"],
  directives: {
    clickOutSide,
  },
  props: {
    disableChoise: Boolean,
    loading: Boolean,
    label: String,
    options: Array,
    selectedOptions: {
      required: true,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      error: null,
      showDropdown: false,
      dropdownActive: false,
      searchField: false,
      searchValue: "",
    };
  },
  setup() {
    const scrollTarget = ref(null);
    const virtualListScrollTargetRef = ref(null);
    onMounted(() => {
      scrollTarget.value = virtualListScrollTargetRef.value;
    });
    return {
      virtualListScrollTargetRef,
      scrollTarget,
    };
  },

  methods: {
    closeModal(event) {
      if (this.dropdownActive) {
        return;
      }
      this.showDropdown = false;
    },

    handleDropdown() {
      this.showDropdown = !this.showDropdown;
      this.dropdownActive = true;
      if (!this.showDropdown) {
        this.searchValue = "";
      }
      setTimeout(() => {
        this.dropdownActive = false;
      }, 50);
    },
    handleRequest() {
      this.$emit("request");
    },
    selectOption(option) {
      this.$emit("selectOption", option);
      this.$emit("requestBySelect");
      if (!this.multiple) {
        this.showDropdown = false;
        this.searchValue = "";
      }
    },
  },

  computed: {
    checkMultiOptions() {
      return Array.isArray(this.selectedOptions);
    },
    oneOption() {
      return this.checkMultiOptions
        ? this.selectedOptions.at(0)
        : this.selectedOptions;
    },
    dropDownStyle() {
      if (this.showDropdown) {
        const buttonRect = this.$refs.button.getBoundingClientRect();

        return {
          position: "fixed",
          left: `${buttonRect.left}px`,
          top: `${buttonRect.bottom + 4}px`,
          width: `${buttonRect.width}px`,
          "z-index": "100000",
        };
      }
      return {};
    },
    filteredOptions() {
      const regex = new RegExp(this.searchValue, "i");
      return this.options.filter((option) => regex.test(option.name));
    },
  },

  mounted() {
    // watch(
    //   () => this.showDropdown,
    //   async (newVal) => {
    //     await this.$nextTick();
    //     if (newVal) {
    //       this.$refs["filterSearch"].focus();
    //     }
    //   }
    // );
    // watch(
    //   [() => this.options, () => this.showDropdown, this.error],
    //   async ([newOptions, newDropdown]) => {
    //     await this.$nextTick();
    //     if (!this.showDropdown || this.error) return;
    //     console.log(`-------`, this.options);
    //     document.addEventListener("load", () => {
    //       const dropdownItems = document.querySelectorAll(
    //         ".dropdown-select-list-item"
    //       );
    //       console.log(dropdownItems);
    //     });
    //     const dropdownSelectListItemElements =
    //       this.$refs.dropdownListRef?.children ?? [];
    //     const totalHeight = Array.from(dropdownSelectListItemElements)
    //       .slice(0, 6)
    //       .reduce((acc, elem) => {
    //         const elemHeight = elem.getBoundingClientRect().height;
    //         return acc + elemHeight;
    //       }, 0);
    //     this.$refs.dropdownListRef.style.height = `${totalHeight}px`;
    //   }
    // );
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  width: 100%;
  position: relative;
}
.dropdown-select {
  position: absolute;
  top: calc(100% + 4px);
  width: 100%;
  z-index: 10;
  border-radius: 16px;
  padding: 0 4px 0 4px;
  background-color: #fff;
  box-shadow: 0px 0px 8px 0px #cfd9ea;
}
.dropdown-select-scroll {
  padding: 0 4px 0 4px;
  overflow-y: scroll;
}
.dropdown-select-scroll::-webkit-scrollbar {
  width: 8px;
}
.dropdown-select-scroll::-webkit-scrollbar-track {
  border-radius: 50px;
  background-color: #f2f5fa;
  margin: 8px;
}
.dropdown-select-scroll::-webkit-scrollbar-thumb {
  border-radius: 50px;
  background-color: #e3e8f0;
}
.dropdown-label {
}
.dropdown-button {
  padding: 12px 16px;
  display: flex;
  background-color: #f2f5fa;
  border-radius: 16px;
  cursor: pointer;
}
.dropdown-button-btn {
  width: 100%;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  color: #7a88a6;
  padding: 0;
  cursor: pointer;
}

.dropdown-select-search {
  padding-left: 12px;
  padding-right: 12px;
  height: 40px;
  background-color: #fff;
  position: sticky;
  z-index: 9999;
  top: 0;
}
.dropdown-select-search-label {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #f2f5fa;
  position: relative;
}

.dropdown-select-search {
  &__field {
    width: 100%;
    border: none;
    background: none;
    outline: none;
    color: #404f6f;
    &::placeholder {
      color: #7a88a6;
    }
  }
}
// .dropdown-select-list {
//   max-height: 285px;
// }
.dropdown-select-list-item {
  padding: 4px 0;
}
.dropdown-select-list-item-text {
  padding: 12px 12px;
  font-size: 15px;
  display: flex;
  align-items: center;
  column-gap: 8px;
  border-radius: 8px;
  color: #404f6f;

  transition: 0.3s;

  &--active {
    background-color: #edf0f7;
  }
}
.dropdown-select-list-item-text:hover:not(:has(.disabled-option)) {
  background-color: #edf0f7;
}
.dropdown-select-list-item:hover:not(:has(.disabled-option)) {
  cursor: pointer;
}
.dropdown-select-list-item:hover:has(.disabled-option) {
  cursor: not-allowed;
}

.dropdown-button-btn-text-selected {
  color: #404f6f;
}

.dropdown-select-error-message {
  font-size: 15px;
  padding: 12px 12px;
  color: $negative;
  column-gap: 8px;
}

.dropdown-label-wrapper {
  margin-bottom: 8px;
}
.dropdown-label-text {
  color: #404f6f;
  font-size: 15px;
  line-height: 20px;
}
.dropdown-loading {
  padding: 20px 0;
}
</style>
