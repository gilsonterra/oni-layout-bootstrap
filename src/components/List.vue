<template>
  <div class="list">
    <div class="search">
      <input type="text" placeholder="Busca" />
    </div>
    <perfect-scrollbar class="list">
      <a @click="$emit('on-selected', item)" class="list-item" v-bind:class="item.active ? 'active' : ''" v-for="(item, index) in list" :key="index">
        <!--<i class="mdi mdi-pencil"></i>-->
        <div>
          <p>{{item.name}}</p>
          <small>{{item.url}}</small>
        </div>
      </a>
    </perfect-scrollbar>
    <div class="filters">
      <div class="dropdown">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {{filter}}
        </a>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
export default {
  name: 'Menu',
  components: {
    PerfectScrollbar
  },
  props: {
    list: Array,
    filter: String
  },
}
</script>

<style scoped>
.list {
  height: calc(100vh - 206px);
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
  background-color: #868e96;
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
.filters {
  padding: 16px;
}
.filters .mdi {
  font-size: 1.4em
}
</style>
<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css"/>