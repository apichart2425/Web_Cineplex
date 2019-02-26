<template>
    <!--Modal: Login / Register Form-->
<div class="modal fade" id="modalLRForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog cascading-modal" role="document">
    <!--Content-->
    <div class="modal-content">

      <!--Modal cascading tabs-->
      <div class="modal-c-tabs">

        <!-- Nav tabs -->
        <ul class="nav nav-tabs md-tabs tabs-2 light-blue darken-3" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#panel1" role="tab">
              เข้าสู่ระบบ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#panel2" role="tab">
              สมัครสมาชิก</a>
          </li>
        </ul>

        <!-- Tab panels -->
        <div class="tab-content">
          <!--Panel 1-->
          <div class="tab-pane fade in show active" id="panel1" role="tabpanel">

            <!--Body-->
            <div class="modal-body mb-1">
              <div class="md-form form-sm mb-5">
                <!-- <label data-error="wrong" data-success="right" for="modalLRInput1">อีเมล</label> -->
                <input type="email" id="modalLRInput1" class="form-control" required="" placeholder="อีเมล">
              </div>

              <div class="md-form form-sm mb-4">
                <!-- <label data-error="wrong" data-success="right" for="modalLRInput2">รหัสผ่าน</label> -->
                <input type="password" id="modalLRInput2" class="form-control" required="" placeholder="รหัสผ่าน">
              </div>
              <div class="text-center mt-2">
                <button class="btn btn-info ">เข้าสู่ระบบ</button>
              </div>
            </div>
            <!--Footer-->
            <div class="modal-footer">
              <div class="options text-center text-md-right mt-1">
                <p>เป็นสมาชิกหรือไม่?<a href="#" class="blue-text">สมัครสมาชิก</a> ลืม<a href="#" class="blue-text">รหัสผ่าน?</a></p>
              </div>
              <button type="button" class="btn btn-outline-info ml-auto" data-dismiss="modal">ปิด</button>
            </div>

          </div>
          <!--/.Panel 1-->

          <!--Panel 2-->
          <div class="tab-pane fade" id="panel2" role="tabpanel">

            <!--Body-->
            <div class="modal-body">
              <div class="md-form form-sm mb-5">
                <!-- <label data-error="wrong" data-success="right" for="modalLRInput3">อีเมล</label> -->
                <input type="email" id="modalLRInput3" class="form-control" required="" placeholder="อีเมล">
              </div>

              <div class="md-form form-sm mb-5">
                <!-- <label data-error="wrong" data-success="right" for="modalLRInput4">รหัสผ่าน</label> -->
                <input type="password" id="modalLRInput4" class="form-control" required="" placeholder="รหัสผ่าน">
              </div>

              <div class="md-form form-sm mb-4">
                <!-- <label data-error="wrong" data-success="right" for="modalLRInput5">ยืนยันรหัสผ่าน</label> -->
                <input type="password" id="modalLRInput5" class="form-control" required="" placeholder="ยืนยันรหัสผ่าน">
              </div>

              <div class="text-center form-sm mt-2">
                <button class="btn btn-info">สมัครสมาชิก</button>
              </div>

            </div>
            <!--Footer-->
            <div class="modal-footer">
              <div class="options text-right">
                <p class="pt-1">มีบัญชีผู้ใช้แล้ว? <a href="#" class="blue-text">เข้าสู่ระบบ</a></p>
              </div>
              <button type="button" class="btn btn-outline-info ml-auto" data-dismiss="modal">ปิด</button>
            </div>
          </div>
          <!--/.Panel 2-->
        </div>

      </div>
    </div>
    <!--/.Content-->
  </div>
</div>
<!--Modal: Login / Register Form-->

</template>