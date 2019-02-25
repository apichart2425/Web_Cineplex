<template>
  <!-- <div class="row">
      <div class="col-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore alias tenetur beatae fugit
        pariatur, delectus odit ducimus accusantium suscipit blanditiis sit cum expedita. Soluta facere ducimus possimus
        deserunt nesciunt suscipit.</div>
      <div class="col-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem maiores odit ipsa explicabo
        dolorum qui? Velit, iste! Hic eum exercitationem non, ducimus esse molestias ea nobis, voluptatum doloremque
        repellat quis.</div>
    </div> -->
  <div class="theater">
    <!-- <div class="container"> -->
    <div class="row" style="margin-left: 10%; margin-right: 10%">
      <div class="col-lg-9">
        <div class="seat">
          <table class="table-seat" style="width: 100%; position: relative;">
            <tbody>
              <td style="height: 30px; width: 60px;"></td>
              <td colspan="20">
                <div class="screen-image" style="margin-bottom: 20px"><img src="../assets/img/screen.svg" alt=""></div>
              </td>
              </tr>
              <tr v-for="chair in seat">
                <td style="text-align: center; padding: 0 0 0 0;">{{chair.id}}</td>
                <td style="height: 30px; width: 30px;"></td>
                <td v-for="chair_no in chair.seat_no" :class="chair_no" style="margin-bottom: 0; padding: 6px 0 0 0;">
                  <input type="checkbox" :id="chair_no" :value="chair_no" v-model="seatName">
                  <label :for="chair_no"></label>
                </td>
                <td style="height: 30px; width: 60px;"></td>
                <td style="text-align: center; padding: 0 0 0 0;">{{chair.id}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="book-seat">
          <div class="logo">
            <img src="../assets/img/logotext.png" alt="" style="width: 100%">
          </div>
          <div class="movie-detail">
            <h3 class="movie-name"><b>{{movies[0].name.en}}</b></h3>
            <h5 style="padding-top: 2%">&nbsp;&nbsp;&nbsp;<b>6 March 2019</b></h5>
          </div>
          <div class="summary">
            <div class="price">
              <div class="select" style="text-align: center">
                <h3>ที่นั่งที่เลือก</h3>
                <div class="selected-seat">
                  <h5 style="text-align: left"  v-for="seatDetail, index in seatName">
                    <div class="row">
                      <div class="col-4">
                        <h4>{{seatDetail}}</h4>
                      </div>
                      <div class="col-8">
                        <select style="width: 100%" v-model="form.parent_id[index]">
                            <option value="1">Child</option>
                            <option value="2">Adult</option>
                          </select>
                        </div>
                    </div>
                  </h5>
                </div>
              </div>
              <div class="total-price">
                <h3 style="margin-top: 5%; text-align: center">ราคารวม{{form.parent_id}}</h3>
                <h2 style="text-align: center"><b>{{ seatName.length*120 }}</b></h2>
              </div>
              <div class="button" style="text-align: center; margin-top: 10%">
                <button type="button" class="btn btn-primary" style="width: 50%; height: 100%;">Success</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>

  export default {
    data() {
      return {
        form: {
          parent_id: []
        },
        seatName: [],
        movies: movies,
        categories: categories,
        seat: seats,
        selectseat: selectseat
      }
    }
  }

  function addSeat(seat_id) {

  }
</script>

<style scoped>
  .summary {
    margin-top: 20%;
    background-color: #fff;
    padding: 20px;
  }

  .book-seat {
    background-color: #f5f7fb;
    padding: 30px;
    text-align: left
  }

  .movie-name {
    margin-top: 40px;
  }

  input[type=checkbox] {
    display: none;
  }

  input[type=checkbox]+label {
    display: inline-block;
    background: url(http://www.majorcineplex.com/assets/front/images/booking2/seat-4.png) no-repeat center top transparent;
    background-size: contain;
    width: 50px;
    height: 45px;
    padding: 0 0 0 0;
  }

  input[type=checkbox]:checked+label {
    background: url(http://www.majorcineplex.com/assets/front/images/booking2/seatsuccessSym.png) no-repeat center top transparent;
    height: 45px;
    width: 50px;
    display: inline-block;
    padding: 0 0 0 0;
  }
</style>