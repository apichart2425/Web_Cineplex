<template>
  <div class="theater">
    <div class="row">
      <div class="col-md-4" style="margin-left: 13%">
        <div class="card-deck">
          <div class="card my-2" style="border: none;">
            <img :src="movies[0].poster" class="size_img_card card-img-top mx-auto">
            <div class="card-body">
              <h4 class="card-title">{{movies[0].name.en}}</h4>
              <h5 class="card-title">{{movies[0].name.th}}</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6" style="margin-left: 3%">
        <table>
          <tbody>
            <td style="height: 30px; width: 30px;"></td>
            <td colspan="20">
              <div class="screen-image" style="margin-bottom: 20px">
                <img src="../assets/img/screen.svg" alt>
              </div>
            </td>
            <td style="height: 30px; width: 30px;"></td>
            <tr>
              <td style="text-align: center; padding: 0 0 0 0;">
                <label for="F">F</label>
              </td>
              <td style="height: 30px; width: 30px;"></td>
              <td v-for="seat in seats1">
                <input type="checkbox" :id="seat.id" :value="seat" v-model="seatselect">
                <label :for="seat.id"></label>
              </td>
              <td style="height: 30px; width: 30px;"></td>
              <td style="text-align: center; padding: 0 0 0 0;">
                <label for="F">F</label>
              </td>
            </tr>
            <tr>
              <td style="text-align: center; padding: 0 0 0 0;">
                <label for="F">E</label>
              </td>
              <td style="height: 30px; width: 30px;"></td>
              <td v-for="seat2 in seats2">
                <input type="checkbox" :id="seat2.id" :value="seat2" v-model="seatselect">
                <label :for="seat2.id"></label>
              </td>
              <td style="height: 30px; width: 30px;"></td>
              <td style="text-align: center; padding: 0 0 0 0;">
                <label for="F">E</label>
              </td>
            </tr>
            <tr>
              <td style="text-align: center; padding: 0 0 0 0;">
                <label for="F">D</label>
              </td>
              <td style="height: 30px; width: 30px;"></td>
              <td v-for="seat3 in seats3">
                <input type="checkbox" :id="seat3.id" :value="seat3" v-model="seatselect">
                <label :for="seat3.id"></label>
              </td>
              <td style="height: 30px; width: 30px;"></td>
              <td style="text-align: center; padding: 0 0 0 0;">
                <label for="F">D</label>
              </td>
            </tr>

            <tr>
              <td style="text-align: center; padding: 0 0 0 0;">
                <label for="F">C</label>
              </td>
              <td style="height: 30px; width: 30px;"></td>
              <td v-for="seat4 in seats4">
                <input type="checkbox" :id="seat4.id" :value="seat4" v-model="seatselect">
                <label :for="seat4.id"></label>
                <td style="height: 30px; width: 30px;"></td>
              <td style="text-align: center; padding: 0 0 0 0;">
                <label for="F">C</label>
              </td>
              </td>
            </tr>
            <tr>
              <td style="text-align: center; padding: 0 0 0 0;">
                <label for="F">B</label>
              </td>
              <td style="height: 30px; width: 30px;"></td>
              <td v-for="seat5 in seats5">
                <input type="checkbox" :id="seat5.id" :value="seat5" v-model="seatselect">
                <label :for="seat5.id"></label>
                 <td style="height: 30px; width: 30px;"></td>
              <td style="text-align: center; padding: 0 0 0 0;">
                <label for="F">B</label>
              </td>
              </td>
            </tr>
            <tr>
              <td style="text-align: center; padding: 0 0 0 0;">
                <label for="F">A</label>
              </td>
              <td style="height: 30px; width: 30px;"></td>
              <td v-for="seat6 in seats6">
                <input type="checkbox" :id="seat6.id" :value="seat6" v-model="seatselect">
                <label :for="seat6.id"></label>
                <td style="height: 30px; width: 30px;"></td>
              <td style="text-align: center; padding: 0 0 0 0;">
                <label for="F">A</label>
              </td>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div
      class="row mb-5"
      style="margin-left: 20%;margin-right: 20%; background-color: rgb(200, 225, 233); padding: 1%; border-radius: 20px;margin-top: 2%;"
    >
      <div class="col-12">
        <div class="logo" style="margin-bottom: 2%;">
          <img src="../assets/img/logotext.png" style="width:13%;">"
        </div>
      </div>

      <div class="col-4">
        <b>ที่นั่งที่เลือก</b>
      </div>
      <div class="col-4">
        <b>ประเภท</b>
      </div>
      <div class="col-4">
        <b>ราคา</b>
      </div>
      <template v-for="(seat_s) in seatselect">
        <div class="col-4">{{seat_s.id}}</div>
        <div class="col-4">
          <select v-model="seat_s.cos">
            <option selected :value="seat_s.type[0]">Adult</option>
            <option :value="seat_s.type[1]">Child</option>
          </select>
        </div>
        <div class="col-4">{{seat_s.cos}}</div>
      </template>
      <div class="col-12" style="text-align: center; margin-top: 2%">
        <b>ราคารวม : {{total}} บาท</b>
      </div>
      <div class="col-12">
        <button
          v-if="seatselect!=''"
          type="button"
          class="btn btn-outline-primary"
          style="width: 100%; margin-top: 2%"
        >ดำเนินการต่อ</button>
      </div>
    </div>
  </div>
</template>

<script>
import Theater from "@/components/Theater";
export default {
  components: { Theater },
  computed: {
    total: function() {
      this.id = this.seatselect.reduce(
        (acc, item) => acc + parseInt(item.cos),
        0
      );
      return this.id;
    }
  },
  data() {
    return {
      movies: movies,
      seats:seats,
      seats1: [
        {
          id: "F1",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "F2",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "F3",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "F4",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "F5",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "F6",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "F7",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "F8",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "F9",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "F10",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "F11",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "F12",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "F13",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "F14",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "F15",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "F16",
          type: ["360", "120"],
          cos: "360"
        }
      ],
      seats2: [
        {
          id: "E1",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "E2",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "E3",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "E4",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "E5",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "E6",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "E7",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "E8",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "E9",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "E10",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "E11",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "E12",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "E13",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "E14",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "E15",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "E16",
          type: ["360", "120"],
          cos: "360"
        }
      ],
      seats3: [
        {
          id: "D1",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "D2",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "D3",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "D4",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "D5",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "D6",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "D7",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "D8",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "D9",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "D10",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "D11",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "D12",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "D13",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "D14",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "D15",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "D16",
          type: ["360", "120"],
          cos: "360"
        }
      ],
      seats4: [
        {
          id: "C1",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "C2",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "C3",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "C4",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "C5",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "C6",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "C7",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "C8",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "C9",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "C10",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "C11",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "C12",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "C13",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "C14",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "C15",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "C16",
          type: ["360", "120"],
          cos: "360"
        }
      ],
      seats5: [
        {
          id: "B1",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "B2",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "B3",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "B4",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "B5",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "B6",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "B7",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "B8",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "B9",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "B10",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "B11",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "B12",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "B13",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "B14",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "B15",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "B16",
          type: ["360", "120"],
          cos: "360"
        }
      ],
      seats6: [
        {
          id: "A1",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "A2",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "A3",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "A4",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "A5",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "A6",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "A7",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "A8",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "A9",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "A10",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "A11",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "A12",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "A13",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "A14",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "A15",
          type: ["360", "120"],
          cos: "360"
        },
        {
          id: "A16",
          type: ["360", "120"],
          cos: "360"
        }
      ],
      seatselect: [],
      movies: movies,
      categories: categories
    };
  },
  method: {}
};
</script>

<style scoped>
.btn-size {
  min-width: 1vh;
}
.size_img_card {
  width: 40vh;
  height: 55vh;
}
.card-body {
  padding: 0;
}
input[type="checkbox"] {
  display: none;
}

input[type="checkbox"] + label {
  display: inline-block;
  background: url(http://www.majorcineplex.com/assets/front/images/booking2/seat-4.png)
    no-repeat center top transparent;
  background-size: contain;
  width: 4vh;
  height: 5vh;
  padding: 0 0 0 0;
}

input[type="checkbox"]:checked + label {
  background: url(http://www.majorcineplex.com/assets/front/images/booking2/seatsuccessSym.png)
    no-repeat center top transparent;
  width: 4vh;
  height: 5vh;
  display: inline-block;
  padding: 0 0 0 0;
}
</style>
