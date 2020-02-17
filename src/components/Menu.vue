<template>
  <div v-bind:class="opened ? 'opened' : ''" class="canvas">
    <div class="overlay" @click="$emit('change-menu')"></div>
    <perfect-scrollbar class="nav">
      <ul>
        <li v-for="(item, index) in menu" :key="index">
          <router-link :to="{ name: item.route, params: {}}">
            <div @click="item.active = !item.active">
              <i class="mdi" v-bind:class="item.icon"></i>
              <p>{{item.name}}</p>
              <i v-if="item.sub != null" class="mdi" v-bind:class="item.active ? 'mdi-chevron-up' : 'mdi-chevron-down'"></i>
            </div>
          </router-link>
          <ul v-bind:class="item.active ? '' : 'v-hidden'" >
            <li v-for="(subitem, index) in item.sub" :key="index">
              <router-link :to="{ name: subitem.route, params: {}}">
                <div @click="subitem.active = !subitem.active">
                  <i class="mdi" v-bind:class="subitem.sub != null ? 'mdi-plus' : 'mdi-square-small'"></i>
                  <p>{{subitem.name}}</p>
                  <i v-if="subitem.sub != null" class="mdi" v-bind:class="subitem.active ? 'mdi-chevron-up' : 'mdi-chevron-down'"></i>
                </div>
              </router-link>
              <ul v-bind:class="subitem.active ? '' : 'v-hidden'">
                <li v-for="(subsubitem, index) in subitem.sub" :key="index">
                  <router-link :to="{ name: subsubitem.route, params: {}}">
                    <div>
                      <i class="mdi mdi-square-small"></i>
                      <p>{{subsubitem.name}}</p>
                    </div>
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </perfect-scrollbar>
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
    opened: Boolean
  },
  data: () => ({
    menu: [
      {
        "name": "Atendimento",
        "icon": "mdi-pencil",
        "active": false,
        "sub": [
          {
            "name": "Sistema",
            "active": false,
            "sub": [
              {
                "name": "Programas",
                "route": "programas"
              },
              {
                "name": "Agenda Online",
                "route": ""
              },
              {
                "name": "Domínios",
                "route": ""
              },
            ]
          },
          {
            "name": "Operadora",
            "route": ""
          },
          {
            "name": "Autorizador",
            "route": ""
          }
        ]
      },
      {
        "name": "Configurações",
        "icon": "mdi-folder",
        "route": ""
      },
      {
        "name": "Atendimento",
        "icon": "mdi-account",
        "route": ""
      },
      {
        "name": "Financeiro",
        "icon": "mdi-cash-usd",
        "active": false,
        "sub": [
          {
            "name": "Resumo",
            "route": "financeiroresumo"
          },
          {
            "name": "Contas a pagar",
            "route": "contaspagar"
          },
          {
            "name": "Contas a receber",
            "route": "contasreceber"
          },
        ]
      },
      {
        "name": "Relatórios",
        "icon": "mdi-chart-pie",
        "route": ""
      },
      {
        "name": "Auditoria",
        "icon": "mdi-shield-alert",
        "route": ""
      },
      {
        "name": "Integração",
        "icon": "mdi-merge",
        "route": ""
      },
      {
        "name": "Recados",
        "icon": "mdi-message",
        "route": ""
      },
      {
        "name": "Venda",
        "icon": "mdi-folder",
        "route": ""
      }
    ]
  })
}
</script>
<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css"/>
<style scoped>
  .overlay {
    background-color: rgba(0,0,0,0.3);
    position: fixed;
    z-index: 10;
    top: 60px;
    left: -330px;
    bottom: 0;
    opacity: 0;
    transition: opacity 400ms ease-in-out;
  }
  .opened .overlay {
    right: 0;
    left: 0;
    opacity: 1;
  }
  .nav {
    width: 270px;
    position: fixed;
    z-index: 11;
    top: 60px;
    left: -330px;
    bottom: 0;
    background-color: #003300;
    color: #dcedc8;
    overflow: hidden;
    padding: 16px 0px 0px 0px;
    transition: left 150ms ease-in-out;
  }
  .opened .nav {
    left: 0
  }
  ul {
    width: 270px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    max-height: 1000px;
    transition: max-height 600ms ease-in-out;
  }
  ul.v-hidden {
    max-height: 0px;
    transition: max-height 600ms ease-in-out;
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
  ul li a {
    color: inherit;
  }
  ul li div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 16px;
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
    margin: 0px 16px;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .head {
    font-size: 1.1em;
    font-weight: 700
  }
  .mdi {
    font-size: 1.6em
  }
  ul li ul li .mdi {
    opacity: 0.3;
  }
  .footer {
    font-size: 0.9em;
    margin-top: 42px;
    padding: 8px 8px 8px 32px;
    background-color: #233646;
    border-top: 1px solid #4a4f58
  }
</style>
