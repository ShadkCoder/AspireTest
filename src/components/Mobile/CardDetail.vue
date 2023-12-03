<template>
  <div :class="{ frozen: checkFrozen }">
    <div class="cd-showcard">
      <img src="../../assets/eye.svg" />
      Show card number
    </div>
    <div class="cd-inner">
      <div class="aspire-flex cd-logo">
        <img src="../../assets/white-logo.svg" />
      </div>
      <div class="card-name">
        {{ cardInfo.idx.Name }}
      </div>
      <div class="cd-number">
        {{ finalCardNo }}
      </div>
      <div class="aspire-flex cd-expiry">
        <div class="cd-thru">
          <span>thru : </span>
          <span>{{ cardInfo.idx.expiry }}</span>
        </div>
        <div class="cd-cvv">
          <span>CVV : </span>
          <span class="cd-star">***</span>
        </div>
      </div>
      <div class="cd-vendor">
        <img src="../../assets/Visa-Logo.svg" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from "vue";
import { mapGetters, useStore } from "vuex";

const props = defineProps<{
  details?: Object;
}>();

const store = useStore();
const finalCardNo = ref<string>("");
const cardInfo = ref<Object>(props.details);

onMounted(() => {
  let dummyTxt = cardInfo.value.idx.cardNo;
  finalCardNo.value = dummyTxt.replace(/.{4}/g, "$& ");
});

const getFrozen = computed(() => {
  return store.getters.getFrozen;
});

const checkFrozen = computed(() => {
  return getFrozen.value.includes(cardInfo.value.idx.uid);
});
</script>
<style>
.flicking-panel {
  border-radius: 12px;
  box-sizing: border-box;
  display: flex;
  height: 200px;
  justify-content: start;
  margin-bottom: 60px;
  margin-right: 10px;
  padding: 20px;
  position: relative;
  width: 330px;
  background-color: #01d167;
  box-shadow: 0px 2px 6px #00000014;
}
.flicking-viewport {
  padding-top: 25px;
}
.card-name {
  font-weight: 600;
  font-size: 22px;
  text-align: left;
  padding-top: 20px;
  padding-bottom: 18px;
}
.cd-inner {
  width: 100%;
  color: #fff;
}
.cd-logo {
  width: 100%;
  justify-content: flex-end;
}
.cd-number {
  font-size: 14px;
  text-align: left;
  padding-bottom: 11px;
  letter-spacing: 2px;
}
.cd-expiry {
  font-size: 13px;
  letter-spacing: 1px;
}
.cd-thru {
  margin-right: 16px;
}
.cd-vendor {
  text-align: right;
}
.cd-star {
  position: relative;
  top: -1px;
  left: 4px;
  font-size: 20px;
}
.cd-cvv {
  align-items: flex-start;
  display: flex;
}
.flicking-panel.frozen {
  background-color: #cfcfcf;
}
.cd-showcard {
  color: #01d167;
  background-color: #fff;
  font-size: 12px;
  font-weight: 600;
  position: absolute;
  right: 10px;
  top: -23px;
  border-top-left-radius: 4px;
  z-index: 20px;
  border-top-right-radius: 4px;
  padding: 1px 6px 3px;
}
.flicking-panel.frozen > .cd-showcard {
  color: #cfcfcf;
}
.flicking-panel.frozen > .cd-showcard > img {
  opacity: 0.2;
}
.cd-showcard > img {
  position: relative;
  top: 3px;
  margin-right: 2px;
}
</style>
