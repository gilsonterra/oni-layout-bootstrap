<template>
  <div class="view">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse">
              <div class="navbar-nav">
                <a class="navbar-brand">Conta a pagar</a>
              </div>
            </div>
            <form class="navbar-form navbar-right">
              <div class="btn-group">
                <button type="button" class="btn btn-danger"><i class="mdi mdi-delete"></i> Deletar</button>
                <button type="button" class="btn btn-primary"><i class="mdi mdi-content-save"></i> Salvar</button>
              </div>
            </form>
          </nav>
          <div class="alert alert-danger" role="alert"><strong>Erro:</strong> Alguns campos obrigatórios precisam ser preenchidos para continuar</div>
        </div>
      </div>
      <div class="row form">
        <div class="col-md-4">
          <form>
            <div class="form-group">
              <label>Pagar a</label>
              <input class="form-control">
            </div>
          </form>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label>Vencimento</label>
            <input class="form-control" type="date">
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label>Nota fiscal</label>
            <input class="form-control" type="number">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 scroll">
          <div class="tableview">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">QNT</th>
                  <th scope="col" style="width: 50%">Nome</th>
                  <th scope="col">Valor</th>
                  <th scope="col">Desc</th>
                  <th scope="col">Total</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in list" :key="index">
                  <th scope="row">{{item.quantidade}}</th>
                  <td>{{item.nome}}</td>
                  <td>{{item.valor / 100}}</td>
                  <td>{{item.desconto}}%</td>
                  <td>{{((item.valor * item.quantidade) * (item.desconto / 100)) / 10 }}</td>
                  <td align="right">
                    <router-link :to="{name: 'contaspagar/123', params: {}}"><i class="mdi mdi-pencil"></i></router-link>
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
  name: "contaspagar",
  components: {
    
  },
  data: () => ({
    list: [
      {
        "quantidade": 1,
        "nome": "Dipirona Sódica",
        "valor": 1099,
        "desconto": 5,
        "acrescimo": 0
      },
      {
        "quantidade": 1,
        "nome": "AS Infantil",
        "valor": 899,
        "desconto": 5,
        "acrescimo": 0
      },
      {
        "quantidade": 5,
        "nome": "Pastilhas Valda",
        "valor": 50,
        "desconto": 5,
        "acrescimo": 0
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
  overflow-y: auto;
  height: calc(100vh);
}
.scroll {
  
  padding: 0px
}
.tableview {
  margin: 15px;
}
.navbar {
  margin: 16px 0px;
}
</style>