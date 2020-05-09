<template>
  <div id="app">
    <NavBar class="navBar"></NavBar>
    <div class="wrapper">
      <div class="columns">
        <aside class="column is-2 aside">
          <nav class="menu">
            <ul class="menu-list">
              <li>
                <a
                  :class="{ 'is-active': sideNav.dashboard }"
                  href="dashboard"
                  @click="activeSideNav('dashboard')"
                >
                  <span class="icon is-small">
                    <i class="fa fa-tachometer"></i>
                  </span>
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  :class="{ 'is-active': sideNav.admin }"
                  href="#"
                  @click="activeSideNav('admin')"
                >
                  <span class="icon is-small">
                    <i class="fa fa-tachometer"></i>
                  </span>
                  Admin
                </a>
              </li>
              <li>
                <a
                  :class="{ 'is-active': sideNav.leads }"
                  href="leads"
                  @click="activeSideNav('leads')"
                >
                  <span class="icon is-small">
                    <i class="fa fa-tachometer"></i>
                  </span>
                  Leads
                </a>
              </li>
              <li>
                <a
                  :class="{ 'is-active': sideNav.settings }"
                  href="#"
                  @click="activeSideNav('settings')"
                >
                  <span class="icon is-small">
                    <i class="fa fa-tachometer"></i>
                  </span>
                  Settings
                </a>
              </li>
            </ul>
          </nav>
          <div class="subtitle side-nav-bar">bar</div>
        </aside>

        <main
          class="column main has-background-white-bis"
          style="padding-right: 40px;"
        >
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar
  },
  data: function() {
    return {
      sideNav: {
        dashboard: true,
        admin: false,
        settings: false,
        leads: false
      }
    };
  },
  methods: {
    activeSideNav(option) {
      for (var key in this.sideNav) {
        this.sideNav[key] = false;
      }
      this.sideNav[option] = true;
      this.$router.push({ name: option });
    }
  }
};
</script>

<style scoped>
.navBar {
  padding-bottom: 10px;
}
</style>
