<template>
  <div class="view">
    <div class="container-fluid scroll" style="flex: 1; display: flex; align-items: center; justify-content: center">
      <h1 style="color: #CCC">Dashboard</h1>
    </div>
  </div>
</template>
<script>

export default {
  name: 'home',
  
}
</script>
<style scoped>
  .view {
    padding-top: 60px;
    height: 100vh;
    background-color: #EDEDED
  }
  .scroll {
    overflow-y: auto;
    height: calc(100vh - 60px);
  }
</style>