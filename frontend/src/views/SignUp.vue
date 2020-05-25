<template>
  <div>
    <div class="brand">Bradynce CRM</div>
    <div
      class="container main-container"
      :class="{ 'right-panel-active': rightPanel }"
      id="container"
    >
      <div class="form-container sign-up-container">
        <form>
          <h1>Create Account</h1>
          <input type="text" v-model="firstName" placeholder="First Name" />
          <input type="text" v-model="lastName" placeholder="Last Name" />
          <input type="email" v-model="emailUp" placeholder="Email" />
          <input type="password" v-model="passwordUp" placeholder="Password" />
          <input
            type="number"
            v-if="emailSent"
            v-model="code"
            placeholder="Confirmation Code"
          />
          <button @click="signUp()">Sign Up</button>
        </form>
      </div>
      <div
        class="form-container sign-in-container"
        :class="{ 'is-invisible': rightPanel == true }"
      >
        <div class="signin-form">
          <h1>Sign in</h1>
          <input type="email" v-model="emailIn" placeholder="Email" />
          <input type="password" v-model="passwordIn" placeholder="Password" />
          <br />
          <div class="is-pulled-left is-size-7">
            <span class="has-text-weight-bold"> Email:</span>
            test@gmail.com<br />
            <span class="has-text-weight-bold">Password:</span>
            Testaccount1
          </div>
          <br />
          <button @click="signIn()">Sign In</button>
        </div>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button class="ghost" id="signIn" @click="rightPanel = false">
              Sign In
            </button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button class="ghost" id="signUp" @click="rightPanel = true">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";

export default {
  data() {
    return {
      rightPanel: false,
      firstName: "",
      lastName: "",
      emailIn: "",
      passwordIn: "",
      emailUp: "",
      passwordUp: "",
      code: "",
      emailSent: false,
    };
  },
  methods: {
    signUp() {
      if (!this.emailSent) {
        Auth.signUp({
          username: this.emailUp,
          password: this.passwordUp,
          attributes: {
            email: this.emailUp,
          },
        })
          .then((data) => {
            this.emailSent = true;
            console.log(data);
          })
          .catch((err) => console.log(err));
      } else {
        this.confirm();
      }
    },
    confirm() {
      Auth.confirmSignUp(this.emailUp, this.code, {})
        .then((data) => {
          console.log(data);
          this.rightPanel = false;
        })
        .catch((err) => console.log(err));
    },
    signIn() {
      let username = this.emailIn;
      let password = this.passwordIn;
      Auth.signIn(username, password)
        .then((user) => {
          this.$store.commit("SETLAYOUT", "dashboardlayout");
          this.home();
          this.$store.commit("SETUSER", user);
          this.$store.commit("CHANGESIGNEDIN", true);
        })
        .catch((err) => console.log(err));
    },
    home() {
      this.$router.push("/dashboard");
    },
  },
};
</script>

<style scoped>
h1 {
  font-weight: bold;
  margin: 0;
}

h2 {
  text-align: center;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

button {
  border-radius: 20px;
  border: 1px solid #2c3e50;
  background-color: #2c3e50;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #ffffff;
}

.signin-form {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  border-radius: 5px;
}

.brand {
  color: hsl(0, 0%, 96%);
  padding-top: 10px;
  padding-left: 20px;
  font-family: "Lora", serif;
  font-size: 2em;
  font-weight: 600;
  text-align: left;
  background-color: #2c3e50;
  padding-bottom: 10px;
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  margin-top: 10vh;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.overlay {
  background: #2c3e50;
  background: -webkit-linear-gradient(to right, #486684, #2c3e50);
  background: linear-gradient(to right, #486684, #2c3e50);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #dddddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}

footer {
  background-color: #222;
  color: #fff;
  font-size: 14px;
  bottom: 0;
  position: fixed;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 999;
}

footer p {
  margin: 10px 0;
}

footer i {
  color: #2c3e50;
}

footer a {
  color: #3c97bf;
  text-decoration: none;
}
</style>
