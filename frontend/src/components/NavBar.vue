<template>
  <b-navbar class="nav-bar">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/dashboard' }">
        <div class="is-size-1 has-text-white-ter">Bradynce</div>
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div" style="padding-right: 30px;">
        <div class="buttons">
          <a class="button signout-button" @click="signOut()">
            <strong class>Sign out</strong>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { Auth } from "aws-amplify";

export default {
  name: "NavBar",
  methods: {
    signOut() {
      Auth.signOut()
        .then((data) => {
          console.log(data);
          this.$store.dispatch("signOut");
          this.$router.push("/signup");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.signout-button {
  color: #2c3e50;
  background-color: hsl(0, 0%, 96%);
}

.brand {
  color: hsl(0, 0%, 96%);
}

.nav-bar {
  background-color: #2c3e50;
}
</style>
