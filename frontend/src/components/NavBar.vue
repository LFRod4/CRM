<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <div class="is-size-1 has-text-dark">Bradynce</div>
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div" style="padding-right: 30px;">
        <div class="buttons">
          <a class="button is-primary" @click="signOut()">
            <strong>Sign out</strong>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
// import { Auth } from "aws-amplify";

export default {
  name: "NavBar",
  methods: {
    // signOut() {
    //   Auth.signOut()
    //     .then(data => {
    //       console.log("signedout");
    //       this.$store.commit("CHANGESIGNEDIN", false);
    //       this.$store.commit("RESETUSER");
    //       this.$router.push("/");
    //     })
    //     .catch(err => console.log(err));
    // }
  }
};
</script>
