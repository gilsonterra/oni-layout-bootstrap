<template>
  <div class="view">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse">
              <div class="navbar-nav">
                <a class="navbar-brand">Contas a receber</a>
              </div>
            </div>
            <form class="navbar-form navbar-right">
              <div class="btn-group">
                <button type="button" class="btn btn-primary"><i class="mdi mdi-plus"></i> Novo</button>
              </div>
            </form>
          </nav>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="tableview">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col" style="width: 50%">Nome</th>
                  <th scope="col">Vencimento</th>
                  <th scope="col">Total</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in list" :key="index">
                  <td>{{item.nome}}</td>
                  <td>{{item.vencimento}}</td>
                  <td>{{item.total}}</td>
                  <td align="right">
                    <router-link :to="{name: 'contasreceber/123', params: {}}"><i class="mdi mdi-pencil"></i></router-link>
                    <a ahref="#" class="iconlink"><i class="mdi mdi-delete"></i></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "contasreceber",
  components: {
    
  },
  data: () => ({
    list: [
      {
        "nome": "Marcus Felix",
        "vencimento": "20/02/2020",
        "total": 1099,
      },
      {
        "nome": "Genghis Khan",
        "vencimento": "12/08/2020",
        "total": 15487,
      },
      {
        "nome": "Tutankhamon",
        "vencimento": "02/04/2020",
        "total": 25789,
      },
      {
        "nome": "Alex Murphy",
        "vencimento": "02/04/2020",
        "total": 94785,
      },
    ]
  }),
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
.tableview {
  margin: 15px;
}
.tableview a {
  color: black
}
.navbar {
  margin: 16px 0px;
}
</style>