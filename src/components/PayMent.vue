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
          <ul class="nav nav-tabs md-tabs tabs-3 light-blue darken-3" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="tab" href="#Cash" role="tab">เงินสด</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#credit" role="tab">บัตรเครดิต</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#promplay" role="tab">พร้อมเพย์</a>
            </li>
          </ul>

          <!-- Tab panels -->
          <div class="tab-content">


            <!--Cash-->
            <div class="tab-pane fade in show active" id="Cash" role="tabpanel">
              <!--Body-->
              <div class="modal-body mb-1">
                <div class="md-form form-sm mb-5">
                  <i class="fas fa-envelope prefix"></i>
                  <label data-error="wrong" data-success="right" for="modalLRInput6">อีเมล</label>
                  <input
                    type="email"
                    id="modalLRInput6"
                    class="form-control form-control-sm validate"
                  >
                </div>

                <div class="md-form form-sm mb-4">
                  <i class="fas fa-lock prefix"></i>
                  <label data-error="wrong" data-success="right" for="modalLRInput7">ชื่อ-นามสกุล</label>
                  <input
                    type="text"
                    id="modalLRInput7"
                    class="form-control form-control-sm validate"
                  >
                </div>
              </div>
              <!--Footer-->
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-outline-info waves-effect ml-auto"
                  data-dismiss="modal"
                >ยืนยัน</button>
              </div>
            </div>
            <!--/.Cash-->




            <!--Credit -->
            <div class="tab-pane fade" id="credit" role="tabpanel">
              <!--Body-->
              <div class="modal-body">
                <div class="md-form form-sm mb-3">
                  <i class="fas fa-envelope prefix"></i>
                  <input
                    type="text"
                    id="modalLRInput8"
                    class="form-control form-control-sm validate"
                  >
                  <label data-error="wrong" data-success="right" for="modalLRInput8">ชื่อผู้ถือบัตร</label>
                </div>

                <div class="md-form form-sm mb-3">
                  <i class="fas fa-lock prefix"></i>
                  <input
                    type="text"
                    id="modalLRInput9"
                    class="form-control form-control-sm validate"
                  >
                  <label data-error="wrong" data-success="right" for="modalLRInput9">หมายเลขบัตร</label>
                </div>

                <div class="md-form form-sm mb-3 ">
                  <i class="fas fa-lock prefix"></i>
                  <input
                    type="text"
                    id="modalLRInput10"
                    class="form-control form-control-sm validate"
                  >
                  <label data-error="wrong" data-success="right" for="modalLRInput10">ดด/ปปปป</label>
                </div>

                <div class="md-form form-sm mb-3 ">
                  <i class="fas fa-lock prefix"></i>
                  <input
                    type="text"
                    id="modalLRInput11"
                    class="form-control form-control-sm validate"
                  >
                  <label data-error="wrong" data-success="right" for="modalLRInput11">CVV</label>
                </div>
              </div>
              <!--Footer-->
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-outline-info waves-effect ml-auto"
                  data-dismiss="modal"
                >ยืนยัน</button>
              </div>
            </div>
            <!--/.Credit-->


            <!--Promplay 3-->
            <div class="tab-pane fade" id="promplay" role="tabpanel">
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
              </div>
              <!--Footer-->
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-outline-info waves-effect ml-auto"
                  data-dismiss="modal"
                >ยืนยัน</button>
              </div>
            </div>
            <!--/.Promplay-->


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
</script>


