<template>
  <nav>
    <ul>
      <li>
        <i class="mdi mdi-menu"></i>
      </li>
      <li>
        <img src="../assets/logo-black.png" class="logo"/>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  nav {
    height: 60px;
    border-bottom: 1px solid #DDD;
    padding: 0px 15px
  }
  .logo {
    opacity: 0.5;
  }
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
  }
  ul li {
    margin: 0;
    padding: 0;
    list-style: none;
    height: 60px;
    display: flex;
    align-items: center;
    margin: 0px 15px
  }
  .mdi {
    font-size: 1.4em
  }
  
</style>
