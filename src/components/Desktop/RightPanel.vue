<template>
  <div class="rp-base">
    <TopDetail />
    <div class="rp-shadowContainer aspire-flex">
      <div class="rp-alpha">
        <Flicking
          :options="{ renderOnlyVisible: true, circular: true }"
          ref="flicking"
          @changed="flickChange"
          @panelChange="resetFlick"
        >
          <CardDetail
            :details="{ idx }"
            class="flicking-panel"
            v-for="idx in getList"
            :key="idx"
          />
        </Flicking>
      </div>
      <div class="rp-beta">
        <MoveMenu />
      </div>
    </div>
    <AddModal v-if="getModalStatus" />
    <CancelModal v-if="getCancelStatus" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from "vue";

import TopDetail from "../Mobile/TopDetail.vue";
import Flicking from "@egjs/vue3-flicking";
import CardDetail from "../Mobile/CardDetail.vue";
import MoveMenu from "../Mobile/MoveMenu.vue";
import AddModal from "../Mobile/AddModal.vue";
import CancelModal from "../Mobile/CancelModal.vue";
import { mapGetters, useStore } from "vuex";

const store = useStore();
const flicking = ref(null);

const getList = computed(() => {
  return store.getters.getList;
});
const getFrozen = computed(() => {
  return store.getters.getFrozen;
});
const getModalStatus = computed(() => {
  return store.getters.getModalStatus;
});
const getCancelStatus = computed(() => {
  return store.getters.getCancelStatus;
});

onMounted(() => {
  store.commit("updatePanel", flicking.value.currentPanel);
});

const flickChange = () => {
  store.commit("updatePanel", flicking.value.currentPanel);
  let checkFreeze = getFrozen.value.includes(flicking.value.currentPanel.index);
  store.commit("toggleFreeze", !checkFreeze);
};

const resetFlick = () => {
  let panelTarget = flicking.value.panelCount - 1;
  flicking.value.moveTo(panelTarget);
};
</script>
<style>
.rp-base {
  width: 77%;
  padding: 0px 60px;
}
.rp-base .tdr-box {
  display: none;
}
.rp-base .tdl-title {
  color: #000;
  position: relative;
  left: -4px;
}
.rp-base .tdl-amount {
  color: #000;
}
.rp-base .td-menu {
  color: #000;
  margin: 0px 0px 20px 0px;
}
.rp-base .td-parent {
  padding: 60px 0px 20px 0px;
  align-items: center;
}
.rp-base .td-add {
  margin-top: 30px;
  background-color: #0c365a;
  padding: 7px 17px;
  border-radius: 4px;
}
.rp-base .td-new {
  color: #fff;
}
.rp-base .ta-desktop {
  display: inline-block;
  width: 15px;
  position: relative;
  top: 1px;
}
.rp-base .ta-mobile {
  display: none;
}
.rp-shadowContainer {
  box-shadow: 0px 2px 12px 0px #00000014;
  padding: 30px 40px;
  border-radius: 8px;
  justify-content: space-evenly;
  position: relative;
  min-height: 70vh;
}
.rp-base .move-parent {
  position: static;
  min-width: 380px;
}
.rp-base .mp-widget {
  height: auto;
}
.rp-base .flicking-viewport {
  width: 370px;
  padding-left: 11px;
}
.rp-base .flicking-panel {
  min-width: 355px;
  height: 210px;
}
.rp-base .card-name {
  font-size: 24px;
}
.rp-base .mp-topmenu {
  position: absolute;
  left: 123px;
  top: 320px;
  background-color: #edf3ff;
  border-radius: 16px;
  min-width: 360px;
}
.rp-base .cardname {
  display: block;
}
.rp-base .addbtn,
.rp-base .cancelbtn {
  width: 100px;
  height: 40px;
}
.rp-base .cm-parent {
  font-size: 20px;
  width: 35%;
}
</style>
