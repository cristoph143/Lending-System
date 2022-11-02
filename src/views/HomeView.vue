<template>
  <div class="home">
    <h1>Loan Calculator</h1>
    <!-- create 4 boxes for each category -->
    <div class="box scrollables">
      <h1>Diminishing Interest</h1>
      <!-- go to button with icon and router -->
      <router-link to="/diminishing">
        <button class="goToButton btn">
          <i class="fas fa-arrow-right">Calculate Now</i>
        </button>
      </router-link>
    </div>
    <div class="box">
      <h1>Fixed Interest</h1>
      <!-- go to button with icon and router -->
      <router-link to="/fixed">
        <button class="goToButton btn">
          <i class="fas fa-arrow-right">Calculate Now</i>
        </button>
      </router-link>
    </div>
    <div class="box">
      <h1>Lump Sum Payment</h1>
      <!-- go to button with icon and router -->
      <router-link to="/lumpsum">
        <button class="goToButton btn">
          <i class="fas fa-arrow-right">Calculate Now</i>
        </button>
      </router-link>
    </div>
    <div class="box">
      <h1>Penalty Calculator</h1>
      <!-- go to button with icon and router -->
      <router-link to="/penalty">
        <button class="goToButton btn">
          <i class="fas fa-arrow-right">Calculate Now</i>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class HomeView extends Vue {}
</script>

<style>
.home {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* make the outline of the boxes 2 at the top and 2 at the bottom */
.box {
  display: inline-block;
  width: 200px;
  height: 200px;
  margin: 20px;
  border: 1px solid black;
}

.btn {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
