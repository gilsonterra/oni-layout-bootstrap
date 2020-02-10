<template>
  <nav>
    <div class="search">
      <input type="text" placeholder="Busca" />
    </div>
    <a @click="$emit('on-selected', item)" class="list-item" v-bind:class="item.active ? 'active' : ''" v-for="(item, index) in list" :key="index">
      <!--<i class="mdi mdi-pencil"></i>-->
      <div>
        <p>{{item.name}}</p>
        <small>{{item.url}}</small>
      </div>
    </a>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    list: Array
  },
}
</script>

<style scoped>
.list {
  padding: 0px;
}
.list-item {
  display: flex;
  color: inherit;
  padding: 8px 16px;
  margin: 4px 16px;
  min-height: 50px;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
}
.list-item .mdi{
  padding-right: 16px; 
  font-size: 18px
}
.list-item div {
  width: 100%;
}
.list-item .mdi.trailing {
  padding: 0px
}
.list-item:hover {
  background-color: rgba(0,0,0,.05)
}
.list-item.active {
  background-color: #00c853;
  color: #FFF !important
}
.list-item p {
  margin: 0;
  font-size: 1em;
  font-weight: 400;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.list-item small {
  opacity: 0.7;
}
.search {
  padding: 16px;
}
.search input {
  padding: 8px 16px;
  width: 100%;
  border-radius: 21px;
  border: none;
  background-color: rgba(0,0,0,.1)
}
</style>