<template>
  <div>
    <section class="hero has-background-white-ter">
      <div class="hero-head">
        <div class="brand">Bradynce CRM</div>
      </div>
      <div class="hero-body">
        <div class="slot">
          <slot />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "LoginSignup",
  data: function() {
    return {
      email: "",
      password: ""
    };
  }
};
</script>

<style scoped>
.card-content {
  margin: 0 auto;
  height: 200px;
}

.hero-head {
  background-color: #2c3e50;
}

.img-column {
  background-color: #2c3e50;
}

.slot {
  padding-top: 100px;
}

.right-page-column {
  background-color: #2c3e50;
}

.hero-body {
  display: flex;
  justify-content: center;
}

.columns {
  width: 100vw;
}

.navbar-brand {
  padding-top: 10px;
}

.navbar-end a {
  color: white;
}

.hero {
  height: 100vh;
}

.brand {
  text-align: left;
  padding-bottom: 10px;
}
</style>
