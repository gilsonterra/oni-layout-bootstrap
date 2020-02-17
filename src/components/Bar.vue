<template>
  <nav>
    <ul class="">
      <li class="link" @click="$emit('change-menu')">
        <i class="mdi mdi-menu"></i>
      </li>
      <router-link :to="{ name: 'home', params: {}}">
        <li>
          <img src="../assets/logo.png" class="logo"/>
        </li>
      </router-link>
      <li class="flex">
        <i class="mdi mdi-magnify"></i>
        <input class="flex" type="text" placeholder="Busca no sistema"/>
      </li>
      <li class="link sub" data-toggle="tooltip" data-placement="bottom" title="Trocar unidade">
        <i class="mdi mdi-map-marker"></i>
      </li>
      <li class="link sub" data-toggle="tooltip" data-placement="bottom" title="Suporte">
        <i class="mdi mdi-phone-classic"></i>
      </li>
      <li class="link sub" >
        <div class="dropdown">
          <a class="btn btn-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="mdi mdi-bell"></i>
          </a>

          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </li>
      <li>
        <i class="avatar" style="background-image: url(https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png)"></i>
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
    z-index: 100;
  }
  nav .container {
    margin: 0 auto;
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
  .mdi-magnify {
    color: #CCC
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
  .avatar {
    background-size: cover;
    background-color: #CCC;
    width: 40px;
    height: 40px;
    border-radius: 50%
  }
  
</style>
