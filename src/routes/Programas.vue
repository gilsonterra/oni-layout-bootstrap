<template>
  <div class="view">
    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-4 list scroll">
          <a href="#" class="list-item active">
            <p>Nome da tela</p>
            <small>Subtitle</small>
          </a>
        </nav>
        <div class="col-md-8">2</div>
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
  padding-top: 16px;
  padding-bottom: 16px;
}
.list-item {
  display: block;

}
.list-item p {
  margin: 0;
  font-size: 1em;
  font-weight: 600
}
</style>