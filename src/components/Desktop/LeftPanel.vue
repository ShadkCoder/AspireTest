<template>
  <div class="lp-base">
    <div class="lp-title aspire-flex">
      <div class="lp-icon">
        <img src="../../assets/logo.svg" />
      </div>
      <div>aspire</div>
    </div>
    <div class="lp-sub">
      Trusted way of banking for 3,000+ SMEs and startups in Singapore
    </div>
    <div class="lp-list">
      <div class="bb-cell">
        <img src="../../assets/Logo-grey.svg" />
        <div class="bb-text">Home</div>
      </div>
      <div class="bb-cell active">
        <img src="../../assets/pay.svg" />
        <div class="bb-text">Cards</div>
      </div>
      <div class="bb-cell">
        <img src="../../assets/Payments.svg" />
        <div class="bb-text">Payments</div>
      </div>
      <div class="bb-cell">
        <img src="../../assets/Credit.svg" />
        <div class="bb-text">Credit</div>
      </div>
      <div class="bb-cell">
        <img src="../../assets/Account.svg" />
        <div class="bb-text">Settings</div>
      </div>
    </div>
  </div>
</template>

<script></script>
<style scoped>
.lp-base {
  background-color: #0c365a;
  width: 23%;
}
.lp-title {
  color: #01d167;
  font-size: 35px;
  font-weight: 600;
  margin-top: 40px;
  margin-left: 48px;
}
.lp-icon {
  margin-right: 8px;
  margin-top: 3px;
}
.lp-sub {
  color: #fff;
  margin: 0px 60px 0px 48px;
  opacity: 0.3;
  margin-top: 6px;
  width: 245px;
  font-size: 16px;
  line-height: 21px;
  text-align: left;
}
.lp-list {
  margin-top: 80px;
  margin-left: 48px;
}
.lp-list > .bb-cell {
  display: flex;
  margin-bottom: 60px;
}
.lp-list .bb-text {
  font-size: 18px;
  margin-left: 16px;
}
</style>
