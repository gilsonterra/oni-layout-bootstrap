<template>
  <div class="view">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-4 col-lg-3 list scroll">
          <List :list="list" @on-selected="onSelected"/>
        </div>
        <div class="col-sm-8 col-lg-9 scroll">
          <div v-if="selected != null">1</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import List from '../components/List'
export default {
  name: "home",
  components: {
    List
  },
  data: () => ({
    selected: null,
    list: [
      {
        "name": "Acesso a dados da base externa",
        "url": "/dadosbaseexterna/",
        "active": false
      },
      {
        "name": "Acesso de usuário a profissionais",
        "url": "/usuarioprof/",
        "active": false
      }
    ]
  }),
  methods: {
    onSelected: (value) => {
      window.console.log(value)
      this.selected = value;
      this.list.map((i) => {
        if(i.url == value.url){
          i.active = true;
        } else {
          i.active = false;
        }
      })
    }
  }
};
</script>
<style scoped>
.view {
  padding-top: 60px;
  height: 100vh;
  background-color: #ededed;
}
.scroll {
  overflow-y: auto;
  height: calc(100vh - 60px);
  padding: 0px
}


</style>