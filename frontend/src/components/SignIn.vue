<template>
  <div class="card">
    <header class="card-header has-background-dark">
      <p class="card-header-title has-text-white">Login</p>
    </header>
    <div class="card-content">
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input class="input" type="email" placeholder="Email" v-model="email" />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-left">
          <input class="input" type="password" placeholder="Password" v-model="password" />
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
    </div>
    <footer class="card-footer has-background-dark">
      <a href="#" class="card-footer-item has-text-white" @click="login()">Submit</a>
      <a href="#" class="card-footer-item has-text-white">Cancel</a>
    </footer>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      Auth.signIn(this.email, this.password)
        .then(user => console.log(user))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="scss" scoped>
</style>