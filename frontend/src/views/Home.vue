<template>
  <section class="hero is-fullheight">
    <div class="brand">Bradynce CRM</div>
    <div class="top-half">
      <div class="headline-container">
        <div class="main-text has-text-white-bis">Empower Your Business</div>
        <div class="sub-text">Better &amp; Smarter</div>
      </div>
      <div class="steps-container level">
        <div class="level-item has-text-centered">
          <div>
            <p class="has-text-white-bis">Collect Leads</p>
          </div>
        </div>
        <span class="icon is-large has-text-white-bis">
          <i class="fas fa-arrow-right"></i>
        </span>
        <div class="level-item has-text-centered">
          <div>
            <p class="has-text-white-bis">Close Sales</p>
          </div>
        </div>
        <span class="icon is-medium has-text-white-bis">
          <i class="fas fa-arrow-right"></i>
        </span>
        <div class="level-item has-text-centered">
          <div>
            <p class="has-text-white-bis">Track Revenue</p>
          </div>
        </div>
      </div>
      <div class>
        <button class="demo-button" @click="signIn()">Sign In</button>
      </div>
    </div>
    <div class="has-background-white-ter">
      <img class="img-container" src="@/assets/svg/home.svg" />
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  methods: {
    signIn() {
      this.$router.push("/signup");
    }
  }
};
</script>

<style scoped>
.hero-head {
  height: 50px;
}

.brand {
  color: hsl(0, 0%, 96%);
  padding-top: 10px;
  padding-left: 20px;
  font-family: "Lora", serif;
  font-size: 2em;
  font-weight: 600;
  text-align: left;
}

.hero {
  min-height: 100vh;
  background: #2c3e50;
  background: -webkit-linear-gradient(90deg, #486684, #2c3e50);
  background: linear-gradient(90eg, #486684, #2c3e50);
}

.top-half {
}

.headline-container {
  padding-bottom: 50px;
}

.img-container {
  padding-top: 30px;
  height: 300px;
}

.main-text {
  color: hsl(0, 0%, 96%);
  font-size: 3.5em;
  font-weight: 300;
  font-family: "gilroy";
  line-height: 1.3;
  letter-spacing: -1px;
  margin-top: 0px;
  padding-top: 0px;
}

.sub-text {
  color: hsl(0, 0%, 96%);
  font-size: 3em;
  font-weight: 700;
  font-family: "gilroy";
  line-height: 1.3;
  letter-spacing: -1px;
}

.steps-container {
  width: 50vw;
  margin: 0 auto;
}

.steps-container p {
  color: hsl(0, 0%, 96%);
  font-size: 2em;
  font-weight: 500;
  font-family: "gilroy";
  line-height: 1.3;
  letter-spacing: -1px;
}

.demo-button {
  border-radius: 20px;
  border: 1px solid hsl(0, 0%, 96%);
  background-color: hsl(0, 0%, 96%);
  width: 250px;
  margin: 15px 0;
  color: #2c3e50;
  font-size: 1em;
  padding: 10px;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

.demo-button:active {
  transform: scale(0.95);
}

.demo-button:focus {
  outline: none;
}
</style>
