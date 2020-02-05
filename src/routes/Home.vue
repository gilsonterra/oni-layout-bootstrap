<template>
  <div>
    <Menu :opened="true"/>
    <Bar/>
  </div>
</template>
<script>
import Menu from '../components/Menu'
import Bar from '../components/Bar'
export default {
  name: 'home',
  components: {
    Menu,
    Bar
  }
}
</script>
<style scoped>
</style>