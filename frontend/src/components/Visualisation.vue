<template>
  <chart class="chart" :chart-data="datacollection"></chart>
</template>
<script>
import Chart from "./../Chart.js";
export default {
  components: {
    Chart
  },
  data() {
    return {
      datacollection: null
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        // labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: "GitHub Commits",
            backgroundColor: "#f87979",
            data: [70, 20, 12, 39, 100, 40, 95, 80, 80, 20, 12, 101]
          },
          {
            label: "Monthly incomes",
            backgroundColor: "#A5CC82",
            data: [205, 208, 188, 190, 58, 206, 190, 202, 164, 254, 200, 201]
          }
        ]
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  }
};
</script>

<style>
.chart {
  max-height: 200px;
}
</style>
