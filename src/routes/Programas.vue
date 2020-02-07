<template>
  <div class="view">
    <div class="container-fluid">
      <div class="row">
        <nav class="col-sm-4 col-lg-3 list scroll">
          <div class="search">
            <input type="text" placeholder="Busca"/>
          </div>
          <a href="#" class="list-item">
            <!--<i class="mdi mdi-pencil"></i>-->
            <div>
              <p>Nome da tela</p>
              <small>Subtitle</small>
            </div>
          </a>
        </nav>
        <div class="col-sm-8 col-lg-9">
          <ul class="nav nav-tabs">
            <li role="presentation" class="active"><a href="#">Informações</a></li>
            <li role="presentation"><a href="#">Permissões</a></li>
          </ul>
          <div class="tab">
            <form class="">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="exampleInputEmail1">Módulo</label>
                  <select class="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Diretório</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Descrição</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                
                <div class="actions">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </div>
            </form>
            <p style="clear: both"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "home"
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
}
.list {
  padding: 0px;
}
.list-item {
  display: flex;
  color: inherit;
  padding: 8px 16px;
  min-height: 50px;
  flex-direction: row;
  align-items: center
}
.list-item .mdi{
  padding-right: 16px; 
  font-size: 18px
}
.list-item div {
  flex: 1
}
.list-item .mdi.trailing {
  padding: 0px
}
.list-item:hover, .list-item.active {
  background-color: rgba(0,0,0,.1)
}
.list-item p {
  margin: 0;
  font-size: 1em;
  font-weight: 400;
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
.nav {
  margin-top: 16px;
}
.tab {
  background-color: #FFF;
  padding: 16px 0px;
  border-bottom: 1px solid #dddddd;
  border-left: 1px solid #dddddd;
  border-right: 1px solid #dddddd;
}
.tab .actions {
  margin-top: 42px
}
</style>