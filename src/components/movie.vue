<template>
  <div class="theater">
    <div class="row">
      <div class="col-lg-9">
        <table>
          <tbody>
            <tr>
              <td v-for="seat in seats1">
                <input type="checkbox" :id="seat.num" :value="seat" v-model="seatselect">
                <label :for="seat.num"></label>
              </td>
            </tr>
            <tr>
              <td v-for="seat2 in seats2">
                <input type="checkbox" :id="seat2.num" :value="seat2" v-model="seatselect">
                <label :for="seat2.num"></label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-lg-3">
        <div v-for="(seat_s) in seatselect">
          <div class="row">
            <div class="col-4">
              {{seat_s.num}}
            </div>
            <div class="col-8">
              <select v-model="seat_s.cos">
                <option selected :value="seat_s.type[0]">Adult</option>
                <option :value="seat_s.type[1]">Child</option>
              </select>
            </div>
          </div>
        </div>
        <h4 style="right: 38px;position: absolute;">Total : {{sum_cost}} ฿</h4>
      </div>
    </div>
    <!-- <div class="row" style="margin-left: 10%; margin-right: 10%">
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
                  <h5 style="text-align: left" v-for="seatDetail, index in seatName">
                    <div class="row">
                      <div class="col-4">
                        <h4>{{seatDetail}}</h4>
                      </div>
                      <div class="col-8">

                        <select style="width: 100%" v-model="form.parent_id[seatName[index]]">
                          <option value="200">Child</option>
                          <option value="360">Adult</option>
                        </select>
                      </div>
                    </div>
                  </h5>
                </div>
              </div>
              <div class="total-price">
                <template v-for="(value, key) in form.parent_id">
                  {{ key }}: {{ value }}
                  <template v-for="seat in seatName" v-if="key == seat">{{value}}</template>
                  <template></template>
                </template>
                <h3 style="margin-top: 5%; text-align: center"></h3>

                <h3 style="margin-top: 5%; text-align: center">ราคารวม</h3>
                <h2 style="text-align: center"><b>{{total}}</b></h2>
                {{seatName}}
              </div>
              <div class="button" style="text-align: center; margin-top: 10%">
                <button type="button" class="btn btn-primary" style="width: 50%; height: 100%;">Success</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
  export default {
    computed: {
      sum_cost: function () {
        this.num = this.seatselect.reduce(
          (acc, item) => acc + parseInt(item.cos),
          0
        );
        return this.num;
      }
      // total: function () {
      //   let sum = 0;
      // if (seatName[i] == form.parent_id) {
      //   sum += (parseInt(Object.value(form.parent_id)[i]));
      // }
      // sum += (parseInt(form.parent_id.seatName.C13));

      //   return sum;
      // }
    },
    data() {
      return {
        seats1: [{
            num: "F1",
            type: ["180", "90"],
            cos: "180"
          },
          {
            num: "F2",
            type: ["180", "90"],
            cos: "180"
          },
          {
            num: "F3",
            type: ["180", "90"],
            cos: "180"
          },
          {
            num: "F4",
            type: ["180", "90"],
            cos: "180"
          },
          {
            num: "F5",
            type: ["180", "90"],
            cos: "180"
          },
          {
            num: "F6",
            type: ["180", "90"],
            cos: "180"
          },
          {
            num: "F7",
            type: ["180", "90"],
            cos: "180"
          },
          {
            num: "F8",
            type: ["180", "90"],
            cos: "180"
          },
          {
            num: "F9",
            type: ["180", "90"],
            cos: "180"
          },
          {
            num: "F10",
            type: ["180", "90"],
            cos: "180"
          },
        ],
        seats2: [{
            num: "E1",
            type: ["180", "90"],
            cos: "180"
          },
          {
            num: "E2",
            type: ["180", "90"],
            cos: "180"
          },
          {
            num: "E3",
            type: ["180", "90"],
            cos: "180"
          },
          {
            num: "E4",
            type: ["180", "90"],
            cos: "180"
          },
          {
            num: "E5",
            type: ["180", "90"],
            cos: "180"
          },
          {
            num: "E6",
            type: ["180", "90"],
            cos: "180"
          },
          {
            num: "E7",
            type: ["180", "90"],
            cos: "180"
          },
          {
            num: "E8",
            type: ["180", "90"],
            cos: "180"
          },
          {
            num: "E9",
            type: ["180", "90"],
            cos: "180"
          },
          {
            num: "E10",
            type: ["180", "90"],
            cos: "180"
          },
        ],
        seatselect: [],
        // length: [],
        // form: {
        //   parent_id: {},
        // },
        // price: [],
        // seatName: [],
        movies: movies,
        categories: categories,
        // seat: seats,
        // selectseat: selectseat
      }
    },
    method: {
      greet: function (event) {
        // `this` inside methods points to the Vue instance
        alert('Hello ' + this.name + '!')
        // `event` is the native DOM event
        if (event) {
          alert(event.target.tagName)
        }
      }
    },

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
    width: 4vh;
    height: 5vh;
    padding: 0 0 0 0;
  }

  input[type=checkbox]:checked+label {
    background: url(http://www.majorcineplex.com/assets/front/images/booking2/seatsuccessSym.png) no-repeat center top transparent;
    height: 4vh;
    width: 5vh;
    display: inline-block;
    padding: 0 0 0 0;
  }

</style>
