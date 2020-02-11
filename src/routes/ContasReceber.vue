<template>
  <div class="view">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-4 col-lg-3 list scroll">
          <List :list="list" @on-selected="onSelected"/>
        </div>
        <div class="col-sm-8 col-lg-9 scroll">
          <div class="container-fluid" v-if="selected != null">
            <div class="row">
              <div class="col-md-12">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <div class="collapse navbar-collapse">
                    <div class="navbar-nav">
                      <a class="nav-item nav-link" @click="mode = 'dados'" v-bind:class="mode == 'dados' ? 'active' : ''" href="javascript: void()">Dados</a>
                      <a class="nav-item nav-link" @click="mode = 'perfil'" v-bind:class="mode == 'perfil' ? 'active' : ''" href="javascript: void()">Perfil</a>
                    </div>
                  </div>
                  <form class="navbar-form navbar-right">
                    <div class="btn-group" role="group" aria-label="...">
                      <button type="button" class="btn btn-secondary">Limpar</button>
                      <button type="button" class="btn btn-primary">Salvar</button>
                    </div>
                  </form>
                </nav>
                <div class="alert alert-danger" role="alert"><strong>Erro:</strong> Alguns campos obrigatórios precisam ser preenchidos para continuar</div>
              </div>
            </div>
            <div class="row form" v-if="mode == 'dados'">
              <div class="col-md-6">
                <form>
                  <div class="form-group">
                    <label>Modulo</label>
                    <select class="form-control"></select>
                  </div>
                  <div class="form-group">
                    <label>Diretório</label>
                    <input class="form-control">
                  </div>
                  <div class="form-group">
                    <label>Descrição</label>
                    <textarea class="form-control is-invalid" rows="5"></textarea>
                    <span class="invalid-feedback">Campo obrigatório</span>
                  </div>
                </form>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Tipo de View</label>
                  <select class="form-control">
                    <option>jQuery</option>
                    <option>Dojo</option>
                    <option>Vue</option>
                  </select>
                </div>
                <div class="form-group">
                  <div class="form-group">
                    <label>Ícone</label>
                    <input class="form-control">
                  </div>
                </div>
                <div class="form-group">
                  <label>Opções</label>
                  <div class="checkbox">
                    <i class="mdi mdi-checkbox-marked-outline active"></i>
                    <span>Mesclar perfil</span>
                  </div>
                  <div class="checkbox">
                    <i class="mdi mdi-checkbox-blank-outline"></i>
                    <span>Auditoria específica</span>
                  </div>
                  <div class="checkbox">
                    <i class="mdi mdi-checkbox-blank-outline"></i>
                    <span>Ícone no desktop</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row form" v-if="mode == 'perfil'">
              <div class="col-md-6">
                <div class="list-group">
                  <li class="list-group-item list-group-item-primary">Adminstrativo <span class="float-right"><i class="mdi mdi-check-bold"></i></span></li>
                  <li class="list-group-item">Prestador</li>
                  <li class="list-group-item">Operadora </li>
                </div>
              </div>
              <div class="col-md-6">
                <div class="help">Selecione ao lado os perfis autorizados a acessarem este programa</div>
              </div>
            </div>
          </div>
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
    mode: "dados",
    selected: {},
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
    onSelected(value) {
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
.form {
  padding: 16px 0px
}
.navbar {
  margin: 16px 0px;
}
</style>