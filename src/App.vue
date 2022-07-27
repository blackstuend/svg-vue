<template>
  <div id="app">
    <h1>Icon</h1>
  <Icon icon="mdi-light:home" class="icon-home" />
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2'

export default {
  name: 'App',
  components: {
    Icon
  }
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

.icon-home {
  color: red;
  width: 20px;
  height: 20px;
}
</style>
