

<template>
  <!--Modal: Login / Register Form-->
  <div
    class="modal fade"
    id="paymentForm"
    tabindex="-1"
    role="dialog"
    aria-labelledby="myModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog cascading-modal" role="document">
      <!--Content-->
      <div class="modal-content">
        <!--Modal cascading tabs-->
        <div class="modal-c-tabs">
          <!-- Nav tabs -->
          <ul class="nav nav-tabs md-tabs tabs-2 light-blue darken-3" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="pill" href="#cash" role="tab">Cash</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#card" role="tab">Credit Card</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#prom" role="tab">Prompay</a>
            </li>
          </ul>

          <!-- Tab panels -->
          <div class="tab-content">
            <!--Panel 1-->
            <div class="tab-pane fade in show active" id="cash" role="tabpanel">
              <!--Body-->
              <div class="modal-body mb-1">
                <div class="md-form form-sm mb-5">
                  <i class="fas fa-envelope prefix"></i>
                  <label data-error="wrong" data-success="right" for="modalLRInput6">อีเมล</label>
                  <input
                    type="email"
                    id="modalLRInput6"
                    class="form-control form-control-sm validate"
                    v-model="email"
                  >
                  <a style="color: red">{{errorEmail}}</a>
                </div>

                <div class="md-form form-sm mb-4">
                  <i class="fas fa-lock prefix"></i>
                  <label data-error="wrong" data-success="right" for="modalLRInput7">ชื่อ-นามสกุล</label>
                  <input
                    type="text"
                    id="modalLRInput7"
                    class="form-control form-control-sm validate"
                    v-model="name1"
                  >
                  <a style="color: red">{{errorName1}}</a>
                </div>
              </div>
              <!--Footer-->
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-outline-info waves-effect ml-auto"
                  @click="checkFormCash"
                >ยืนยัน</button>
              </div>
            </div>
            <!--/.Panel 1-->
            <!--Panel 2-->
            <div class="tab-pane fade" id="card" role="tabpanel">
              <!--Body-->
              <div class="modal-body">
                <div class="md-form form-sm mb-5">
                  <label data-error="wrong" data-success="right" for="modalLRInput8">ชื่อผู้ถือบัตร</label>
                  <input
                    type="text"
                    id="modalLRInput8"
                    class="form-control form-control-sm validate"
                    v-model="name2"
                  >
                  <a style="color: red">{{errorName2}}</a>
                </div>

                <div class="md-form form-sm mb-5">
                  <label data-error="wrong" data-success="right" for="modalLRInput9">หมายเลขบัตร</label>
                  <input
                    type="text"
                    id="modalLRInput9"
                    class="form-control form-control-sm validate"
                    v-model="cardnum"
                  >
                  <a style="color: red">{{errorCardnum}}</a>
                </div>

                <div class="md-form form-sm mb-4">
                  <label data-error="wrong" data-success="right" for="modalLRInput10">MONTH/YEAR</label>
                  <input
                    type="text"
                    id="modalLRInput10"
                    class="form-control form-control-sm validate"
                    v-model="enddate"
                  >
                  <a style="color: red">{{errorEnddate}}</a>
                </div>

                <div class="md-form form-sm mb-4">
                  <label data-error="wrong" data-success="right" for="modalLRInput11">CVV</label>
                  <input
                    type="text"
                    id="modalLRInput11"
                    class="form-control form-control-sm validate"
                    v-model="cvv"
                  >
                  <a style="color: red">{{errorCvv}}</a>
                </div>
              </div>
              <!--Footer-->
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-outline-info waves-effect ml-auto"
                  @click="checkFormCard"
                >ยืนยัน</button>
              </div>
            </div>
            <!--/.Panel 2-->
            <!--Panel 3-->
            <div class="tab-pane fade" id="prom" role="tabpanel">
              <!--Body-->
              <div class="modal-body">
                <p>รายละเอียด</p>
                <dl class="param">
                  <dt>ชื่อบัญชี:</dt>
                  <dd>รักน้าา</dd>
                </dl>
                <dl class="param">
                  <dt>เลขพร้อมเพย์:</dt>
                  <dd>0123456789</dd>
                </dl>
                <div class="md-form form-sm mb-4">
                  <i class="fas fa-lock prefix"></i>
                  <input
                    type="text"
                    id="modalLRInput11"
                    class="form-control form-control-sm validate"
                    v-model="prompay"
                    placeholder="Serial Code Number"
                  >
                  <label data-error="wrong" data-success="right" for="modalLRInput11"></label>
                  <a style="color: red"></a>
                </div>
              </div>

              <!--Footer-->
              <div class="modal-footer">
                <!-- <button type="button"
                  class="btn btn-outline-info waves-effect ml-auto"
                   v-if="statePay == true" @click="confirm">ยืนยัน</button>
                <button v-else @click="checkPrompay">ยืนยันการชำระเงิน</button>-->
                <button
                  type="button"
                  class="btn btn-outline-info waves-effect ml-auto"
                  @click="checkPrompay"
                >ยืนยัน</button>
              </div>
            </div>
            <!--/.Panel 3-->
          </div>
        </div>
      </div>
      <!--/.Content-->
    </div>
  </div>
  <!--Modal: Login / Register Form-->
</template>


<style>
.form-login,
.form-regis {
  background-color: #fafafa;
  padding: 18px 32px;
  border-radius: 5px;
  width: 420px;
}
</style>

<script>
export default {
  name: "payment",
  data() {
    return {
      email: "",
      name1: "",
      name2: "",
      cardnum: "",
      enddate: "",
      cvv: "",
      errorText: "",
      errorName1: "",
      errorEmail: "",
      errorName2: "",
      errorCardnum: "",
      errorEnddate: "",
      errorCvv: "",
      prompay: ""
    };
  },
  methods: {
    checkFormCash: function() {
      if (this.email == "") {
        this.errorEmail = "Please insert email";
      } else {
        this.errorEmail = "";
      }
      if (this.name1 == "") {
        this.errorName1 = "Please insert name";
      } else {
        this.errorName1 = "";
      }
      if (this.email != "" && this.name1 != "") {
        alert("ทำการจองที่นั่งเสร็จสิ้น");
        $("#paymentForm").modal("hide");
        this.$router.push("/CashTicket");
      }
    },
    checkFormCard: function() {
      if (this.name2 == "") {
        this.errorName2 = "โปรดกรอกข้อมูลให้ครบถ้วน";
      } else {
        this.errorName2 = "";
      }
      if (this.cardnum == "") {
        this.errorCardnum = "Please insert card";
      } else {
        this.errorCardnum = "";
      }
      if (this.enddate == "") {
        this.errorEnddate = "Please insert date";
      } else {
        this.errorEnddate = "";
      }
      if (this.cvv == "") {
        this.errorCvv = "Please insert cvv";
      } else {
        this.errorCvv = "";
      }
      if (
        this.name2 != "" &&
        this.cardnum != "" &&
        this.enddate != "" &&
        this.cvv != ""
      ) {
        alert("ชำระเงินเสร็จสิ้น");
        $("#paymentForm").modal("hide");
        this.$router.push("/Ticket");
      }
    },
    checkPrompay: function() {
      alert("กำลังตรวจสอบรายการชำระเงิน")
      if (this.prompay === "") {
        alert("กรุณากรอกเลขยืนยันการโอนเงิน")
      } else {
        alert("ระบบยืนยันการโอนเงิน")
        this.$router.push("/PPTicket")
        $("#paymentForm").modal("hide");
      }
    },
    confirm() {
      this.$router.push("/PPTicket");
    }
  }
};
</script>