<template>
  <div class="form-container">
    <div>
      <div class="field">
        <div class="control">
          <label class="checkbox">
            <h1 class="title is-size-5">Google Ads Account</h1>
          </label>
        </div>
      </div>
      <div class="field">
        <h1 class="is-pulled-left space">CID</h1>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input"
            type="password"
            placeholder="Password"
            v-model="password"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardLayout from "@/layouts/DashboardLayout.vue";

export default {
  name: "Admin",
  created() {
    this.$emit(`update:layout`, DashboardLayout);
  }
};
</script>

<style scoped>
.input {
  max-width: 150px;
}
</style>
