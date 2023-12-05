<template>
  <div class="am-overlay">
    <div class="cm-parent">
      <div>Are you sure you want to cancel the card?</div>
      <div class="aspire-flex">
        <button class="addbtn" @click="cancelCard">Yes</button>
        <button class="cancelbtn" @click="closeModal">No</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const getUids = computed(() => {
  return store.getters.getUids;
});

const cancelCard = () => {
  store.commit("cancelCard");
  store.commit("toggleCancel", false);
};
const closeModal = () => {
  store.commit("toggleCancel", false);
};
</script>
<style>
.am-overlay {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0px;
  left: 0px;
  z-index: 10;
}
.cm-parent {
  position: fixed;
  background-color: #fff;
  box-shadow: 5px 10px 8px 10px rgb(79 79 79 / 50%);
  z-index: 11;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  padding: 30px 15px;
  width: 70%;
}
.cm-parent > .aspire-flex {
  width: 100%;
  justify-content: center;
}
.addbtn {
  width: 80px;
  height: 30px;
  cursor: pointer;
  background-color: #0c365a;
  outline: none;
  color: #fff;
  font-weight: 600;
  border: 0px;
  margin-top: 25px;
  border-radius: 6px;
}
.cancelbtn {
  width: 80px;
  height: 30px;
  cursor: pointer;
  background-color: red;
  outline: none;
  color: #fff;
  font-weight: 600;
  border: 0px;
  margin-top: 25px;
  border-radius: 6px;
  margin-left: 8px;
}
</style>
