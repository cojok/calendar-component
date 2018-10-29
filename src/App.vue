<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!--<Day/>-->
    <!--<Week/>-->
    <Month/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Day from './components/day/Day.vue'
import Week from './components/week/Week.vue'
import Month from './components/month/Month.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
    Day,
    Week,
    Month
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
