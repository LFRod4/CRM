<template>
  <div id="app">
    <component class="appLayout" :is="layout"></component>
  </div>
</template>

<script>
// @ is an alias to /src
import PreDashboard from "@/layouts/PreDashboard.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";

export default {
  components: {
    predashboard: PreDashboard,
    dashboardlayout: DashboardLayout
  },
  computed: {
    layout() {
      return this.$route.meta.layout || DashboardLayout;
    }
  }
};
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

$base-color: #2c3e50;

* {
  margin: 0;
  padding: 0;
}

*:focus {
  outline: none;
}

button {
  cursor: pointer;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.brand {
  color: hsl(0, 0%, 96%);
  padding-top: 10px;
  padding-left: 20px;
  font-family: "Lora", serif;
  font-size: 2em;
  font-weight: 600;
}
</style>
