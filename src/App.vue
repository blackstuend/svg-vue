<template>
  <div id="app">
    <h1>Icon</h1>
      <img src="@/assets/icons/user.svg" class="icon-user">
  </div>
</template>

<script>

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
  filter: invert(55%) sepia(31%) saturate(4362%) hue-rotate(158deg) brightness(90%) contrast(101%);

  &:hover {
    filter: invert(0%) sepia(0%) saturate(7489%) hue-rotate(297deg) brightness(96%) contrast(104%);
  }
}
</style>
