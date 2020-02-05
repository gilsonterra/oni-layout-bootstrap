<template>
  <nav class="canvas" v-bind:class="opened ? 'opened' : ''">
    <ul>
      <li>
        <div>
          <i><i class="avatar"></i></i>
          <p class="head">Marcus Felix</p>
        </div>
      </li>
      <li><br/></li>
      <li>
        <div>
          <i class="mdi mdi-pencil"></i>
          <p>Administrativo</p>
          <i class="mdi mdi-chevron-down"></i>
        </div>
        <ul>
          <li>
            <div>
              <i class="mdi mdi-square-small"></i>
              <p>Sistema</p>
              <i class="mdi mdi-chevron-up"></i>
            </div>
            <ul>
              <li>
                <div>
                  <i class="mdi mdi-square-small"></i>
                  <p>Programas</p>
                </div>
              </li>
              <li>
                <div>
                  <i class="mdi mdi-square-small"></i>
                  <p>Agenda Online</p>
                </div>
              </li>
              <li>
                <div>
                  <i class="mdi mdi-square-small"></i>
                  <p>Domínios</p>
                </div>
              </li>
            </ul>
            <div>
              <i class="mdi mdi-square-small"></i>
              <p>Operadora</p>
              <i class="mdi mdi-chevron-down"></i>
            </div>
            <div>
              <i class="mdi mdi-square-small"></i>
              <p>Autorizador</p>
              <i class="mdi mdi-chevron-down"></i>
            </div>
          </li>
        </ul>
        
      </li>
      <li>
        <div>
          <i class="mdi mdi-folder"></i>
          <p>Configurações</p>
          <i class="mdi mdi-chevron-down"></i>
        </div>
      </li>
      <li>
        <div>
          <i class="mdi mdi-account"></i>
          <p>Atendimento</p>
          <i class="mdi mdi-chevron-down"></i>
        </div>
      </li>
      <li>
        <div>
          <i class="mdi mdi-cash-usd"></i>
          <p>Faturamento</p>
          <i class="mdi mdi-chevron-down"></i>
        </div>
      </li>
      <li>
        <div>
          <i class="mdi mdi-chart-pie"></i>
          <p>Relatórios</p>
          <i class="mdi mdi-chevron-down"></i>
        </div>
      </li>
      <li>
        <div>
          <i class="mdi mdi-shield-alert"></i>
          <p>Auditoria</p>
          <i class="mdi mdi-chevron-down"></i>
        </div>
      </li>
      <li>
        <div>
          <i class="mdi mdi-merge"></i>
          <p>Integração</p>
          <i class="mdi mdi-chevron-down"></i>
        </div>
      </li>
      <li>
        <div>
          <i class="mdi mdi-message"></i>
          <p>Recados</p>
          <i class="mdi mdi-chevron-down"></i>
        </div>
      </li>
      <li>
        <div>
          <i class="mdi mdi-folder"></i>
          <p>Venda</p>
          <i class="mdi mdi-chevron-down"></i>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    opened: Boolean
  }
}
</script>

<style scoped>
  nav {
    position: fixed;
    z-index: 1;
    top: 0;
    left: -330px;
    bottom: 0;
    background-color: #233646;
    color: #a7b1c2;
    overflow: hidden;
    padding: 15px 0;
    overflow-y: auto 
  }
  nav.opened {
    left: 0
  }
  ul {
    width: 300px;
    margin: 0;
    padding: 0
  }
  ul li {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0px;
    cursor: pointer;
  }
  ul li div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 15px;
  }
  ul li div:hover {
    color: #FFF;
  }
  ul li i {
    height: 60px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center
  }
  ul li ul {
    padding: 0;
    background-color: rgba(0,0,0,0.2)
  }
  .avatar {
    background-image: url();
    background-size: cover;
    background-color: #FFF;
    width: 50px;
    height: 50px;
    border-radius: 25px
  }
  li p {
    margin: 0px 15px;
    flex: 1
  }
  .head {
    font-size: 1.1em;
    font-weight: 700
  }
  .mdi {
    font-size: 1.4em
  }
  .mdi-square-small {
    opacity: 0.3;
  }
</style>
