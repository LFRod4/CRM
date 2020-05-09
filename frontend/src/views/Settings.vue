<template>
  <div>
    <h1>Settings</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardLayout from "@/layouts/DashboardLayout.vue";

export default {
  name: "Settings",
  created() {
    this.$emit(`update:layout`, DashboardLayout);
  }
};
</script>

<style lang="scss" scoped></style>
