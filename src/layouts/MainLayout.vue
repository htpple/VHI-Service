<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="body-bg bordered">
      <q-toolbar class="q-px-lg q-py-sm">
        <q-space></q-space>
        <div class="right-side">
          <LanguageSwitcher />
          <!-- <div class="balance q-py-xxs q-px-sm">
            <span class="balance-desc">Баланс: </span>
            <span class="balance-amount">190 000 UZS</span>
          </div> -->

          <!-- notification -->
          <!-- <q-btn dense flat :ripple="false" class="btn--no-hover">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.777 18H6.22301C4.39401 18 3.35101 16.16 4.44801 14.872C4.93301 14.302 5.23301 13.625 5.31301 12.915L5.76001 8.975C6.00201 6.851 7.58801 5.107 9.73001 4.374V4.27C9.73001 3.9719 9.78872 3.67672 9.9028 3.40131C10.0169 3.1259 10.1841 2.87566 10.3949 2.66487C10.6057 2.45408 10.8559 2.28687 11.1313 2.17279C11.4067 2.05872 11.7019 2 12 2C12.2981 2 12.5933 2.05872 12.8687 2.17279C13.1441 2.28687 13.3944 2.45408 13.6051 2.66487C13.8159 2.87566 13.9831 3.1259 14.0972 3.40131C14.2113 3.67672 14.27 3.9719 14.27 4.27V4.374C16.412 5.107 17.998 6.851 18.24 8.975L18.687 12.915C18.767 13.625 19.067 14.302 19.552 14.872C20.65 16.161 19.606 18 17.777 18ZM14.972 20.072C14.515 21.198 13.357 22 12 22C10.643 22 9.48501 21.2 9.02801 20.072C9.00394 20.0081 8.99572 19.9392 9.00405 19.8714C9.01238 19.8036 9.037 19.7388 9.07582 19.6826C9.11464 19.6264 9.1665 19.5804 9.22696 19.5486C9.28742 19.5168 9.35469 19.5001 9.42301 19.5H14.577C14.6453 19.5001 14.7126 19.5168 14.7731 19.5486C14.8335 19.5804 14.8854 19.6264 14.9242 19.6826C14.963 19.7388 14.9876 19.8036 14.996 19.8714C15.0043 19.9392 14.9961 20.0081 14.972 20.072Z"
                fill="#7A88A6"
              />
            </svg>
            <q-badge color="negative" floating rounded>4</q-badge>
          </q-btn> -->
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      :width="250"
      show-if-above
      class="nav-bg q-pt-md q-pb-sm flex column"
    >
      <div class="flex flex-center q-pb-xxl">
        <img alt="Logo Neo Insurance" src="~assets/logo-neo.svg" />
      </div>
      <div class="flex column justify-between nav-grow">
        <q-list>
          <RouteLink
            :caption="$t('nav.appeals')"
            :routeTo="Trans.i18nRoute({ name: 'appeals-page' })"
          >
            <template v-slot:icon>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.66675 3.75C1.66675 3.58585 1.69908 3.4233 1.7619 3.27165C1.82472 3.11999 1.91679 2.98219 2.03286 2.86612C2.14894 2.75004 2.28674 2.65797 2.43839 2.59515C2.59005 2.53233 2.7526 2.5 2.91675 2.5C3.0809 2.5 3.24345 2.53233 3.3951 2.59515C3.54676 2.65797 3.68456 2.75004 3.80063 2.86612C3.9167 2.98219 4.00878 3.11999 4.0716 3.27165C4.13442 3.4233 4.16675 3.58585 4.16675 3.75V5.20833H1.66675V3.75ZM1.66675 14.6158V6.45833H4.16675V14.6158C4.16673 15.274 3.97188 15.9174 3.60675 16.465L3.26341 16.98C3.22536 17.0371 3.17381 17.0839 3.11334 17.1162C3.05286 17.1486 2.98534 17.1655 2.91675 17.1655C2.84816 17.1655 2.78063 17.1486 2.72016 17.1162C2.65968 17.0839 2.60813 17.0371 2.57008 16.98L2.22675 16.465C1.86146 15.9172 1.6666 15.2743 1.66675 14.6158ZM6.66675 5C6.66675 4.33696 6.93014 3.70107 7.39898 3.23223C7.86782 2.76339 8.50371 2.5 9.16675 2.5H15.8334C16.4965 2.5 17.1323 2.76339 17.6012 3.23223C18.07 3.70107 18.3334 4.33696 18.3334 5V15C18.3334 15.663 18.07 16.2989 17.6012 16.7678C17.1323 17.2366 16.4965 17.5 15.8334 17.5H9.16675C8.50371 17.5 7.86782 17.2366 7.39898 16.7678C6.93014 16.2989 6.66675 15.663 6.66675 15V5ZM9.37508 6.66667C9.37508 6.50091 9.44093 6.34193 9.55814 6.22472C9.67535 6.10751 9.83432 6.04167 10.0001 6.04167H15.0001C15.1658 6.04167 15.3248 6.10751 15.442 6.22472C15.5592 6.34193 15.6251 6.50091 15.6251 6.66667C15.6251 6.83243 15.5592 6.9914 15.442 7.10861C15.3248 7.22582 15.1658 7.29167 15.0001 7.29167H10.0001C9.83432 7.29167 9.67535 7.22582 9.55814 7.10861C9.44093 6.9914 9.37508 6.83243 9.37508 6.66667ZM10.0001 9.375C9.83432 9.375 9.67535 9.44085 9.55814 9.55806C9.44093 9.67527 9.37508 9.83424 9.37508 10C9.37508 10.1658 9.44093 10.3247 9.55814 10.4419C9.67535 10.5592 9.83432 10.625 10.0001 10.625H15.0001C15.1658 10.625 15.3248 10.5592 15.442 10.4419C15.5592 10.3247 15.6251 10.1658 15.6251 10C15.6251 9.83424 15.5592 9.67527 15.442 9.55806C15.3248 9.44085 15.1658 9.375 15.0001 9.375H10.0001ZM9.37508 13.3333C9.37508 13.1676 9.44093 13.0086 9.55814 12.8914C9.67535 12.7742 9.83432 12.7083 10.0001 12.7083H12.5001C12.6658 12.7083 12.8248 12.7742 12.942 12.8914C13.0592 13.0086 13.1251 13.1676 13.1251 13.3333C13.1251 13.4991 13.0592 13.6581 12.942 13.7753C12.8248 13.8925 12.6658 13.9583 12.5001 13.9583H10.0001C9.83432 13.9583 9.67535 13.8925 9.55814 13.7753C9.44093 13.6581 9.37508 13.4991 9.37508 13.3333Z"
                  fill="#7A88A6"
                />
              </svg>
            </template>
          </RouteLink>
          <!-- <RouteLink
            :caption="$t('nav.clients')"
            :routeTo="Trans.i18nRoute({ name: 'clients' })"
            disabled
          >
            <template v-slot:icon>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.5001 1.66669H4.16675C3.50371 1.66669 2.86782 1.93008 2.39898 2.39892C1.93014 2.86776 1.66675 3.50365 1.66675 4.16669V15.8334C1.66675 16.4964 1.93014 17.1323 2.39898 17.6011C2.86782 18.07 3.50371 18.3334 4.16675 18.3334H16.6667C16.2247 18.3334 15.8008 18.1578 15.4882 17.8452C15.1757 17.5326 15.0001 17.1087 15.0001 16.6667V4.16669C15.0001 3.50365 14.7367 2.86776 14.2678 2.39892C13.799 1.93008 13.1631 1.66669 12.5001 1.66669ZM4.37508 5.83335C4.37508 5.66759 4.44093 5.50862 4.55814 5.39141C4.67535 5.2742 4.83432 5.20835 5.00008 5.20835H11.6667C11.8325 5.20835 11.9915 5.2742 12.1087 5.39141C12.2259 5.50862 12.2917 5.66759 12.2917 5.83335C12.2917 5.99911 12.2259 6.15809 12.1087 6.2753C11.9915 6.39251 11.8325 6.45835 11.6667 6.45835H5.00008C4.83432 6.45835 4.67535 6.39251 4.55814 6.2753C4.44093 6.15809 4.37508 5.99911 4.37508 5.83335ZM5.00008 9.37502C4.83432 9.37502 4.67535 9.44087 4.55814 9.55808C4.44093 9.67529 4.37508 9.83426 4.37508 10C4.37508 10.1658 4.44093 10.3248 4.55814 10.442C4.67535 10.5592 4.83432 10.625 5.00008 10.625H11.6667C11.8325 10.625 11.9915 10.5592 12.1087 10.442C12.2259 10.3248 12.2917 10.1658 12.2917 10C12.2917 9.83426 12.2259 9.67529 12.1087 9.55808C11.9915 9.44087 11.8325 9.37502 11.6667 9.37502H5.00008ZM4.37508 14.1667C4.37508 14.0009 4.44093 13.842 4.55814 13.7247C4.67535 13.6075 4.83432 13.5417 5.00008 13.5417H8.33341C8.49917 13.5417 8.65815 13.6075 8.77536 13.7247C8.89257 13.842 8.95841 14.0009 8.95841 14.1667C8.95841 14.3324 8.89257 14.4914 8.77536 14.6086C8.65815 14.7258 8.49917 14.7917 8.33341 14.7917H5.00008C4.83432 14.7917 4.67535 14.7258 4.55814 14.6086C4.44093 14.4914 4.37508 14.3324 4.37508 14.1667ZM18.3334 16.0417V8.33335C18.3334 7.89133 18.1578 7.4674 17.8453 7.15484C17.5327 6.84228 17.1088 6.66669 16.6667 6.66669H16.2501V16.0417C16.2501 16.318 16.3598 16.5829 16.5552 16.7783C16.7505 16.9736 17.0155 17.0834 17.2917 17.0834C17.568 17.0834 17.833 16.9736 18.0283 16.7783C18.2237 16.5829 18.3334 16.318 18.3334 16.0417Z"
                  fill="#7A88A6"
                />
              </svg>
            </template>
          </RouteLink> -->
        </q-list>
        <div class="q-px-sm">
          <q-item class="q-pa-xs user justify-between">
            <q-item-section avatar class="q-pr-xs">
              <q-avatar size="47px">
                <img
                  :src="`https://api.neoinsurance.uz/${authStore.user.avatar}`"
                />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="user-name">
                {{ authStore.user.lastname }}
                {{ authStore.user.name[0] }}.</q-item-label
              >
              <q-item-label class="user-id" lines="1"
                >Agent ID: {{ authStore.user.agent_id }}</q-item-label
              >
            </q-item-section>
            <q-item-section side>
              <div class="user-settings">
                <DropdownSettings>
                  <template v-slot:icon>
                    <q-icon size="20px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M10 10.8333C10.221 10.8333 10.433 10.7455 10.5893 10.5892C10.7456 10.433 10.8334 10.221 10.8334 9.99998C10.8334 9.77897 10.7456 9.567 10.5893 9.41072C10.433 9.25444 10.221 9.16665 10 9.16665C9.77901 9.16665 9.56704 9.25444 9.41076 9.41072C9.25448 9.56701 9.16669 9.77897 9.16669 9.99998C9.16669 10.221 9.25448 10.433 9.41076 10.5892C9.56704 10.7455 9.77901 10.8333 10 10.8333Z"
                          fill="#404F6F"
                          stroke="#404F6F"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.8333 10.8333C16.0543 10.8333 16.2663 10.7455 16.4226 10.5892C16.5789 10.433 16.6667 10.221 16.6667 9.99998C16.6667 9.77897 16.5789 9.567 16.4226 9.41072C16.2663 9.25444 16.0543 9.16665 15.8333 9.16665C15.6123 9.16665 15.4004 9.25444 15.2441 9.41072C15.0878 9.56701 15 9.77897 15 9.99998C15 10.221 15.0878 10.433 15.2441 10.5892C15.4004 10.7455 15.6123 10.8333 15.8333 10.8333Z"
                          stroke="#404F6F"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.16665 10.8333C4.38766 10.8333 4.59962 10.7455 4.7559 10.5892C4.91218 10.433 4.99998 10.221 4.99998 9.99998C4.99998 9.77897 4.91218 9.567 4.7559 9.41072C4.59962 9.25444 4.38766 9.16665 4.16665 9.16665C3.94563 9.16665 3.73367 9.25444 3.57739 9.41072C3.42111 9.56701 3.33331 9.77897 3.33331 9.99998C3.33331 10.221 3.42111 10.433 3.57739 10.5892C3.73367 10.7455 3.94563 10.8333 4.16665 10.8333Z"
                          stroke="#404F6F"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </q-icon>
                  </template>
                  <template v-slot:options>
                    <q-item
                      clickable
                      v-close-popup
                      class="item--no-hover settings-item"
                      @click="handleLogout"
                    >
                      <q-icon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.8492 1.06414C11.0281 0.885194 11.2405 0.743241 11.4743 0.646392C11.708 0.549543 11.9586 0.499695 12.2117 0.499695C12.4647 0.499695 12.7153 0.549543 12.9491 0.646392C13.1828 0.743241 13.3953 0.885194 13.5742 1.06414L14.9358 2.42664C15.297 2.78794 15.4999 3.27788 15.4999 3.78873C15.4999 4.29958 15.297 4.78951 14.9358 5.15081L13.7275 6.35914C13.6277 6.30954 13.5285 6.2587 13.43 6.20664C12.7342 5.83998 11.9075 5.32581 11.2908 4.70914C10.6742 4.09248 10.16 3.26581 9.79333 2.56998C9.74155 2.47116 9.69099 2.37171 9.64167 2.27164L10.8492 1.06414ZM10.4075 5.59248C11.1367 6.32248 12.065 6.89664 12.7992 7.28664L8.05 12.0366C7.7552 12.3315 7.37273 12.5227 6.96 12.5816L4.1 12.99C3.95193 13.0112 3.80097 12.9976 3.65906 12.9503C3.51716 12.903 3.38822 12.8233 3.28245 12.7175C3.17669 12.6118 3.097 12.4828 3.04971 12.3409C3.00242 12.199 2.98883 12.048 3.01 11.9L3.41833 9.03998C3.4775 8.62748 3.66833 8.24498 3.96333 7.94998L8.71333 3.19998C9.10333 3.93498 9.6775 4.86331 10.4075 5.59248ZM1.125 14.25C0.95924 14.25 0.800268 14.3158 0.683058 14.433C0.565848 14.5502 0.5 14.7092 0.5 14.875C0.5 15.0407 0.565848 15.1997 0.683058 15.3169C0.800268 15.4341 0.95924 15.5 1.125 15.5H14.875C15.0408 15.5 15.1997 15.4341 15.3169 15.3169C15.4342 15.1997 15.5 15.0407 15.5 14.875C15.5 14.7092 15.4342 14.5502 15.3169 14.433C15.1997 14.3158 15.0408 14.25 14.875 14.25H1.125Z"
                            fill="#E3E8F0"
                          />
                        </svg>
                      </q-icon>
                      <span class="option-text">Выйти</span>
                    </q-item>
                  </template>
                </DropdownSettings>
              </div>
            </q-item-section>
          </q-item>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import LanguageSwitcher from "src/components/LanguageSwitcher.vue";
import { defineComponent, onMounted } from "vue";
import RouteLink from "components/RouteLink/RouteLink.vue";
import Trans from "src/i18n/translation";
import { useAuthStore } from "src/stores/authStore";
import { useRouter } from "vue-router";
import DropdownSettings from "src/components/Shared/DropdownSettings.vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    RouteLink,
    LanguageSwitcher,
    DropdownSettings,
  },

  setup() {
    const router = useRouter();
    const authStore = useAuthStore();

    const handleLogout = () => {
      authStore.logout();
      router.replace({ name: "Login" });
    };
    onMounted(() => {
      console.log(authStore.user);
    });
    return { Trans, authStore, handleLogout };
  },
});
</script>

<style lang="scss" scoped>
.search-input {
  background-color: $lightgray;
  border-radius: 50px;
  width: 300px;
  font-size: 15px;
  color: #7a88a6;
}
.q-field__native {
  padding: 0;
}
.search-input::placeholder {
  font-size: 15px;
  color: #7a88a6;
}
.nav-bg {
  background-color: $nav-bg;
}
.nav-grow {
  flex-grow: 1;
}
.bordered {
  border-bottom: 1px solid #e3e8f0;
}

.right-side {
  display: flex;
  column-gap: 20px;
  align-items: center;
}

.balance {
  border-radius: 50px;
  background-color: #fff;
  color: $primary;
  display: flex;
  align-items: baseline;
  user-select: none;

  &-amount {
    margin-left: 8px;
    font-size: 17px;
    font-weight: 600;
  }
}

.user {
  color: $primary;
  background-color: #edf0f5;
  border-radius: 12px;
  &-name {
    font-size: 15px;
    font-weight: 500;
    line-height: 20px !important;
  }
  &-id {
    font-size: 13px;
    line-height: 17px !important;
    margin-top: 2px;
  }
}

.user-settings-btn {
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
}

.settings-item.q-item {
  background-color: transparent;
  min-height: 0;
  padding: 8px;
  column-gap: 8px;
  align-items: center;
  border-radius: 8px;
  &:hover {
    background-color: #596787;
  }
}

.option-text {
  font-size: 15px;
  line-height: 20px;
  color: #f2f5fa;
}
</style>
