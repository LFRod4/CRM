<template>
  <div id="app">
    <component class="appLayout" :is="layout">
      <router-view :layout.sync="layout" />
    </component>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "app",
  data: function() {
    return {
      layout: `div`
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

*:focus {
  outline: none;
}

button {
  cursor: pointer;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.brand {
  color: hsl(0, 0%, 96%);
  padding-top: 10px;
  padding-left: 20px;
  font-family: "Lora", serif;
  font-size: 2em;
  font-weight: 600;
}
</style>
