<template>
  <div id="app">
    <NavBar class="navBar"></NavBar>
    <div class="wrapper">
      <div class="columns">
        <aside class="column is-2 aside">
          <nav class="menu">
            <ul class="menu-list">
              <li>
                <router-link
                  to="/dashboard"
                  :class="{ 'is-active': activeNav == 'Dashboard' }"
                >
                  Dashboard
                </router-link>
              </li>
              <li>
                <router-link
                  to="/leads"
                  :class="{ 'is-active': activeNav == 'Leads' }"
                >
                  Leads
                </router-link>
              </li>
              <li>
                <router-link
                  to="/"
                  :class="{ 'is-active': activeNav == 'Settings' }"
                >
                  Settings
                </router-link>
              </li>
            </ul>
          </nav>
        </aside>

        <main class="column main has-background-white-bis slot-container">
          <router-view></router-view>
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "DashboardLayout",
  components: {
    NavBar,
  },
  data: function() {
    return {
      active: "dashboard",
    };
  },
  created() {
    this.$store.dispatch("setContacts");
  },
  computed: {
    activeNav() {
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss" scoped>
$base-color: #2c3e50;
$white: hsl(0, 0%, 96%);

.navBar {
  padding-bottom: 10px;
}

.menu-list a {
  font-size: 1.3em;
  color: $white;
}

.is-active {
  font-weight: bold;
  background-color: $white !important;
  color: $base-color !important;
}

.aside {
  background-color: $base-color;
  margin-top: 10px;
  border-radius: 10px;
}

.slot-container {
  padding-right: 40px;
  padding-top: 25px;
  border-radius: 50px;
}
</style>
