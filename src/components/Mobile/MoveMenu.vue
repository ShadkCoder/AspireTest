<template>
  <div class="move-parent">
    <div class="mp-topmenu aspire-flex">
      <div class="mp-block" @click="freezeClick">
        <div class="mpb-img">
          <img src="../../../assets/Freeze-card.svg" />
        </div>
        <div class="mpb-txt" v-if="getFreezeStatus">Freeze Card</div>
        <div class="mpb-txt" v-else>Unfreeze card</div>
      </div>
      <div class="mp-block">
        <div class="mpb-img">
          <img src="../../../assets/Set-spend-limit.svg" />
        </div>
        <div class="mpb-txt">Set spend limit</div>
      </div>
      <div class="mp-block">
        <div class="mpb-img">
          <img src="../../../assets/GPay.svg" />
        </div>
        <div class="mpb-txt">Add to GPay</div>
      </div>
      <div class="mp-block">
        <div class="mpb-img">
          <img src="../../../assets/Replace-card.svg" />
        </div>
        <div class="mpb-txt">Replace card</div>
      </div>
      <div class="mp-block" @click="toggleCancelModal">
        <div class="mpb-img">
          <img src="../../../assets/Deactivate-card.svg" />
        </div>
        <div class="mpb-txt">Cancel card</div>
      </div>
    </div>
    <div class="mp-widget">
      <div class="mp-tab aspire-flex">
        <div class="aspire-flex">
          <img src="../../../assets/card-detail.svg" />
          <div class="mpt-txt">Card details</div>
        </div>
        <img src="../../../assets/down-arrow.svg" />
      </div>
      <div class="mp-tab aspire-flex">
        <div class="aspire-flex">
          <img src="../../../assets/recent-transactions.svg" />
          <div class="mpt-txt">Recent transactions</div>
        </div>
        <img src="../../../assets/down-arrow.svg" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { mapGetters } from "vuex";

export default {
  name: "MoveMenu",
  const freezeClick = () => {
    if (!this.getFreezeStatus) {
        this.$store.commit("removeFrozen", this.getPanel.index);
      } else {
        this.$store.commit("updateFrozen", this.getPanel.index);
      }
      this.$store.commit("toggleFreeze", !this.getFreezeStatus);
  }
  const toggleCancelModal = () => {
    this.$store.commit("toggleCancel", true);
  }
  computed: {
    ...mapGetters({
      getPanel: "getPanel",
      getFreezeStatus: "getFreezeStatus",
    }),
  },
};
</script>
<style>
.move-parent {
  z-index: 2;
  position: relative;
  top: 420px;
  background-color: #edf3ff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.mpb-txt {
  font-size: 13px;
  padding-top: 2px;
  font-weight: 600;
}
.mp-topmenu {
  padding: 20px 0px;
}
.mp-block {
  padding-left: 6px;
}
.mp-widget {
  background-color: #fff;
  height: 750px;
  padding-top: 24px;
}
.mp-tab {
  font-weight: 600;
  background-color: #fafcff;
  padding: 24px 20px;
  border: 1px solid #f5f5f5;
  margin: 0px 24px 24px;
  border-radius: 10px;
  justify-content: space-between;
}
.mp-tab > .aspire-flex {
  align-items: center;
}
.mpt-txt {
  margin-left: 5px;
}
</style>
