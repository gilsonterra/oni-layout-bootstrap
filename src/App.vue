<template>
  <div id="app">
    <Menu :opened="menu" @change-menu="menu = !menu"/>
    <Bar @change-menu="menu = !menu"/>
    <router-view/>
  </div>
</template>
<script>
import Menu from './components/Menu'
import Bar from './components/Bar'
export default {
  name: 'App',
  components: {
    Menu,
    Bar
  },
  data: () => ({
    menu: false
  })
}
</script>
<style>

</style>