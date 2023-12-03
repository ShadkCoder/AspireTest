<template>
  <div class="base-container">
    <TopDetail />
    <Flicking
      :options="{ renderOnlyVisible: true }"
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
  <MoveMenu />
  <AddModal v-if="getModalStatus" />
  <CancelModal v-if="getCancelStatus" />
  <BottomBand />
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from "vue";

import TopDetail from "./Mobile/TopDetail.vue";
import Flicking from "@egjs/vue3-flicking";
import CardDetail from "./Mobile/CardDetail.vue";
import MoveMenu from "./Mobile/MoveMenu.vue";
import AddModal from "./Mobile/AddModal.vue";
import CancelModal from "./Mobile/CancelModal.vue";
import BottomBand from "./Mobile/BottomBand.vue";

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

/* computed: {
    ...mapGetters({
      getList: "getList",
      getFrozen: "getFrozen",
      getModalStatus: "getModalStatus",
      getCancelStatus: "getCancelStatus",
    }),
  }, */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("../../node_modules/@egjs/vue3-flicking/dist/flicking.css");

ul {
  list-style-type: none;
  padding: 0;
}
.base-container {
  background-color: #0c365a;
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0px;
  left: 0px;
}
.aspire-flex {
  display: flex;
}
</style>
