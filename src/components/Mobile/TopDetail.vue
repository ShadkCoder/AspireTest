<template>
  <div class="td-parent aspire-flex">
    <div class="td-left">
      <div class="tdl-title">Account balance</div>
      <div class="aspire-flex tdl-inner">
        <div class="tdl-box">SS</div>
        <div class="tdl-amount">3,000</div>
      </div>
    </div>
    <div class="td-right">
      <div class="tdr-box">
        <img src="../../assets/Logo.svg" class="td-logo" />
      </div>
      <div class="aspire-flex td-add" @click="addNew">
        <img src="../../assets/add.svg" class="ta-mobile" />
        <img src="../../assets/plus-white.svg" class="ta-desktop" />
        <span class="td-new">New card</span>
      </div>
    </div>
  </div>
  <div class="td-menu">
    <div class="tdm-tab tab-active">My debit cards</div>
    <div class="tdm-tab">All company cards</div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const addNew = () => {
  store.commit("toggleAddModal", true);
};
</script>
<style>
.td-parent {
  padding: 31px 24px 20px 24px;
  color: #fff;
  justify-content: space-between;
}
.tdl-title {
  font-size: 14px;
}
.tdl-box {
  background-color: #01d167;
  padding: 3px 13px;
  font-size: 12px;
  border-radius: 4px;
  margin-right: 10px;
}
.tdl-amount {
  font-size: 24px;
  font-weight: 600;
}
.tdl-inner {
  margin-top: 8px;
  align-items: center;
}
.td-new {
  color: #23cefd;
  font-size: 13px;
  margin-left: 6px;
}
.td-add {
  margin-top: 4px;
}
.tdr-box {
  position: relative;
  height: 30px;
}
.td-logo {
  position: absolute;
  top: -17px;
  right: -2px;
}
.td-menu {
  font-size: 13px;
  color: #fff;
  display: flex;
  margin: 0px 5px 20px 24px;
}
.tdm-tab {
  margin-right: 12px;
  opacity: 0.5;
}
.tdm-tab.tab-active {
  font-weight: 600;
  border-bottom: 2px solid #23cefd;
  padding-bottom: 4px;
  opacity: 1;
}
.ta-desktop {
  display: none;
}
</style>
