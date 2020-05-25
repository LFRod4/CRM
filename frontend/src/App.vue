<template>
  <div id="app">
    <component class="appLayout" :is="layout"></component>
  </div>
</template>

<script>
// @ is an alias to /src
import { Auth } from "aws-amplify";

import PreDashboard from "@/layouts/PreDashboard.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";

export default {
  components: {
    predashboard: PreDashboard,
    dashboardlayout: DashboardLayout,
  },
  created() {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        this.$store.dispatch("setUser", user);
      })
      .catch((err) => console.log(err));
  },
  computed: {
    layout() {
      return this.$route.meta.layout || DashboardLayout;
    },
  },
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

.pagination-link.is-current {
  background-color: $base_color !important;
  border-color: $base_color !important;
  color: hsl(0, 0%, 96%);
}

.mdi {
  color: $base-color !important;
}
</style>
