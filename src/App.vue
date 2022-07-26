<template>
  <div id="app">
    <h1>Icon</h1>
    <svg class="icon-user"><use xlink:href="#user" /></svg>
  </div>
</template>

<script>
import '../src/assets/icons/user.svg'

export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.icon-user {
  width: 50px;
  height: 50px;
  color: red;
}
</style>
