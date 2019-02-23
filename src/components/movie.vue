<template>
  <div class="theater">
    <div class="container">
      <div class="row">
        <div class="col-sm-9">
          <div class="seat">
            <table class="table-seat" style="width: 100%; position: relative;">
              <tbody>
                <tr>
                  <td style="height: 30px; width: 30px;"></td>
                  <td colspan="20">
                      <div class="screen-image" style="margin-bottom: 20px"><img src="../assets/img/screen.svg" alt=""></div>
                  </td>
                </tr>
                <tr v-for="chair in seat">
                  <td style="text-align: center; padding: 0 0 0 0;">{{chair.id}}</td>
                  <td style="height: 30px; width: 30px;"></td>
                  <td v-for="chair_no in chair.seat_no" :class="chair_no" style="margin-bottom: 0; padding: 6px 0 0 0;">
                    <input type='checkbox' :name='chair_no' value='valuable' :id="chair_no" /><label :for="chair_no"
                      style="margin-bottom: 0;"></label>
                  </td>
                  <td style="height: 30px; width: 30px;"></td>
                  <td style="text-align: center; padding: 0 0 0 0;">{{chair.id}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-sm-3">
          <p>{{seat[0].seat_no}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        seat: seats,
      }
    }
  }

  function addSeat(seat_id) {

  }
</script>

<style scoped>
  input[type=checkbox] {
    display: none;
  }

  input[type=checkbox]+label {
    display: inline-block;
    background: url(http://www.majorcineplex.com/assets/front/images/booking2/seat-2.png) no-repeat center top transparent;
    background-size: contain;
    width: 35px;
    height: 35px;
    padding: 0 0 0 0;
  }

  input[type=checkbox]:checked+label {
    background: url(http://www.majorcineplex.com/assets/front/images/booking2/seatsuccessSym.png) no-repeat center top transparent;
    height: 35px;
    width: 35px;
    display: inline-block;
    padding: 0 0 0 0;
  }
  
</style>