<template>
  <q-dialog no-backdrop-dismiss ref="filterDialogRef">
    <div class="modal-container">
      <div class="modal-header">
        <h4 class="page-title q-my-none">Фильтры</h4>
        <button type="button" class="btn-close" @click="hideModal">
          <q-icon size="20px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M11 1L1 11"
                stroke="#D0D8E6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 1L11 11"
                stroke="#D0D8E6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </q-icon>
        </button>
      </div>

      <div class="modal-body">
        <div class="filter-item">
          <SimpleInput
            label="Клиент"
            placeholder="Введите фамилию и имя клиента"
          ></SimpleInput>
        </div>
        <div class="filter-item">
          <SimpleInput
            label="Дата обращения"
            placeholder="01.01.1990"
          ></SimpleInput>
        </div>
        <div class="filter-item">
          <DropdownSelectLocal
            label="Статус"
            placeholder="Выберите статус"
            id-key="statusName"
            :multiple="false"
            :initialOptions="[
              { id: 1, statusName: 'Новое' },
              { id: 2, statusName: 'В работе' },
              { id: 3, statusName: 'Завершено' },
            ]"
          >
            <template #option-content="{ option }">
              <div class="option-content">
                <span>
                  {{ option.statusName }}
                </span>
              </div>
            </template>
          </DropdownSelectLocal>
        </div>
        <div class="filter-item">
          <DropdownSelect
            label="Клиника"
            placeholder="Выберете клинику"
          ></DropdownSelect>
        </div>
        <div class="filter-item">
          <DropdownSelect
            label="Врач"
            placeholder="Выберете врача"
          ></DropdownSelect>
        </div>
        <div class="filter-item">
          <DropdownSelect
            label="Сервис"
            placeholder="Выберете сервис"
          ></DropdownSelect>
        </div>
      </div>

      <div class="modal-footer">
        <SimpleButton
          label="Отмена"
          custom-class="btn-cancel"
          @click="hideModal"
        />
        <SimpleButton label="Найти" custom-class="btn-action"></SimpleButton>
      </div>
    </div>
  </q-dialog>
</template>

<script setup>
import { ref } from "vue";
import SimpleInput from "../Shared/SimpleInput.vue";
import DropdownSelect from "../Shared/DropdownSelect.vue";
import DropdownSelectLocal from "../Shared/DropdownSelectLocal.vue";
import SimpleButton from "../Shared/SimpleButton.vue";

const filterDialogRef = ref(null);

const hideModal = () => {
  filterDialogRef.value.hide();
};
</script>

<style scoped lang="scss">
.filter-container {
  width: 440px;
  background-color: #fff;
  padding-right: 8px;
  border-radius: 24px;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 12px;
    background-color: #f2f5fa;
    margin-top: 60px;
    margin-bottom: 24px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: #e3e8f0;
  }
}

.filter-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: #fff;
  padding: 20px 8px 16px 20px;
}

.filter-body {
  padding: 8px 8px 0px 20px;
}

.filter-footer {
  padding: 16px 8px 20px 8px;
  position: sticky;
  bottom: 0;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 8px;
}
.filter-container-scroll::-webkit-scrollbar {
  width: 8px;
}
.filter-container-scroll::-webkit-scrollbar-track {
  border-radius: 50px;
  background-color: #f2f5fa;
  margin-bottom: 20px;
}
.filter-container-scroll::-webkit-scrollbar-thumb {
  border-radius: 50px;
  background-color: #e3e8f0;
}

.label-text {
  font-size: 15px;
  color: #404f6f;
  line-height: 20px;
  margin: 0 0 8px;
}
.filter-item {
  // margin: 0 0 20px;
  padding-bottom: 20px;
}
.search-input {
  background-color: #f2f5fa;
  border-radius: 50px;
  font-size: 15px;
  color: #7a88a6;
}
</style>
