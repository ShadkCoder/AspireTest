<template>
  <div class="bb-parent aspire-flex">
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
      <div class="bb-text">Profile</div>
    </div>
  </div>
</template>

<script></script>
<style>
.bb-parent.aspire-flex {
  position: fixed;
  bottom: 0px;
  z-index: 5;
  background-color: #fff;
  box-shadow: 0px -2px 6px #00000014;
  width: 100%;
  justify-content: space-evenly;
  padding: 8px 0px;
  align-items: center;
}
.bb-text {
  font-size: 9px;
  color: #dddddd;
}
.bb-cell > img {
  height: 25px;
}
.bb-cell.active > .bb-text {
  color: #01d167;
}
</style>
