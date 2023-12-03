<template>
  <div class="am-overlay">
    <div class="am-parent">
      <input
        v-model="cardname"
        placeholder="Card Name"
        :class="{ cardname: true, errorname: errorname }"
      />
      <button class="addbtn" @click="addCard">Add Card</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const cardname = ref<string>("");
const errorname = ref<boolean>(false);

const getList = computed(() => {
  return store.getters.getList;
});

const addCard = () => {
  if (cardname.value != "") {
    store.commit("toggleAddModal", false);
    let pushCard = {};
    pushCard.Name = cardname.value;
    pushCard.cardNo = Math.random().toFixed(16).split(".")[1].toString();
    pushCard.cvv = Math.random().toFixed(3).split(".")[1];
    pushCard.uid = getList.value.length;
    store.commit("updateUids", pushCard.uid);
    pushCard.expiry = "12/27";
    store.commit("updateList", pushCard);
  } else {
    errorname.value = true;
  }
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
.am-parent {
  position: fixed;
  background-color: #fff;
  box-shadow: 5px 10px 8px 10px rgba(0, 0, 0, 0.5);
  z-index: 11;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  padding: 30px;
}
.cardname {
  border-width: 0px 0px 1px 0px;
  font-size: 20px;
  outline: none;
}
.cardname:focus {
  border-color: goldenrod;
}
.addbtn {
  width: 120px;
  height: 40px;
  cursor: pointer;
  background-color: #0c365a;
  outline: none;
  color: #fff;
  font-weight: 600;
  border: 0px;
  margin-top: 25px;
  border-radius: 6px;
}
.cardname.errorname {
  border-color: red;
}
</style>
