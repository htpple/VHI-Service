<template>
  <div class="rows-options flex items-center">
    <span class="rows-options-label"
      >{{ $t("pagination.rows_per_page") }}:
    </span>
    <div class="rows-options-variants">
      <button
        type="button"
        v-for="(option, index) in optionsRowsPerPage"
        @click="handleChoice(option)"
        :key="index"
        class="option-button"
        :class="{ 'option-button--active': option === selectedOption }"
      >
        {{ option }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits, watch } from "vue";
import { useRoute } from "vue-router";
const emit = defineEmits(["choiceOption"]);
defineProps(["options"]);

// const route = useRoute();

const optionsRowsPerPage = ref([10, 25, 50]);
const selectedOption = ref(10);

// watch(
//   () => route.query,
//   (newVal, oldVal) => {
//     selectedOption.value = parseInt(newVal.limit) || 10;
//   }
// );
const handleChoice = (option) => {
  selectedOption.value = option;
  emit("choiceOption", option);
};
</script>

<style lang="scss" scoped>
.rows-options {
  column-gap: 8px;
  font-size: 15px;
}
.rows-options-label {
  color: #a0aabc;
  font-weight: 400;
  line-height: 20px;
}
.rows-options-variants {
  display: flex;
  column-gap: 2px;
}
.option-button {
  cursor: pointer;
  border: none;
  background: none;
  padding: 4px 8px;
  border-radius: 8px;
  color: #404f6f;
  transition: 0.3s;
}
.option-button--active {
  background-color: #e3e8f0;
}
</style>
