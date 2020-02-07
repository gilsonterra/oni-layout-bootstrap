<template>
  <nav>
    <ul>
      <li class="link" @click="$emit('change-menu')">
        <i class="mdi mdi-menu"></i>
      </li>
      <router-link :to="{ name: 'home', params: {}}">
        <li>
          <img src="../assets/logo.png" class="logo"/>
        </li>
      </router-link>
      <li class="flex">
        <input class="flex" type="text" placeholder="Busca no sistema"/>
      </li>
      <li class="link sub">
        <i class="mdi mdi-map-marker"></i>
      </li>
      <li class="link sub">
        <i class="mdi mdi-phone-classic"></i>
      </li>
      <li class="link sub">
        <i class="mdi mdi-bell"></i>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Bar',
}
</script>

<style scoped>
  nav {
    height: 60px;
    background-color: #FFFFFF;
    border-bottom: 1px solid #DDD;
    padding: 0px 15px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .logo {
    opacity: 1;
  }
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
  }
  ul li {
    margin: 0;
    padding: 0px 15px;
    list-style: none;
    height: 60px;
    display: flex;
    align-items: center;
  }
  ul li.link {
    cursor: pointer;
  }
  ul li.link.sub {
    color: #999999
  }
  .mdi {
    font-size: 1.4em
  }
  .mdi-menu {
    font-size: 1.8em
  }
  .flex {
    display: flex;
    flex: 1
  }
  input {
    padding: 15px;
    font-size: 1em;
    border: none
  }
  
</style>
