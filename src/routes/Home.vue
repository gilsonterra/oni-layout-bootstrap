<template>
  <div class="view">
    <div class="container-fluid scroll">
      <div class="row">
        <div class="col-lg-3">
          <div class="block info text green">
            <h5>Agendamentos</h5>
            <h3>Agendados</h3>
            <div class="rows">
              <div class="cols">
                <div class="number">
                  <big>47</big>
                </div>
              </div>
              <div class="cols">
                <div>
                  <p>23 Agendados</p>
                  <p>2 Encaixes</p>
                  <p>1 Transferência</p>
                  <p>11 Retornos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="block info text blue">
            <h5>Pacientes</h5>
            <h3>Atendidos</h3>
            <div class="number">
              <big>45</big>
              <small class="text-primary">+15%</small>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="block info text purple">
            <h5>Pacientes</h5>
            <h3>Cancelados</h3>
            <div class="number">
              <big>40</big>
              <small class="text-danger">-15%</small>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="block info text red">
            <h5>Pacientes</h5>
            <h3>Bloqueados</h3>
            <div class="number">
              <big>15</big>
              <small class="text-danger">-15%</small>
            </div>
          </div>
        </div>
      </div>
      
      <div class="row">
        <div class="col-lg-4">
          <div class="block cal">
            <!--<PieChart/>-->
            <vue-cal selected-date="2018-11-19"
              default-view="month" 
              xsmall
              hide-view-selector
              class="vuecal--green-theme vuecal--rounded-theme"
              locale="pt-br"
              :events="events">
            </vue-cal>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="block">
            <div>
              <div class="switch">
                <small>TABLELA</small>
                <Switches v-model="graph" color="green" theme="bulma"></Switches>
                <small>GRÁFICO</small>
              </div>
              <h3>Convênios</h3>
            </div>
            <table class="table table-plans table-borderless" style="height: 280px" v-if="!graph">
              <thead>
                <tr>
                  <th scope="col">Convênio</th>
                  <th scope="col" class="text-center"><i class="mdi mdi-checkbox-blank-circle" style="color: #20c997"></i> Consulta</th>
                  <th scope="col" class="text-center"><i class="mdi mdi-checkbox-blank-circle" style="color: #17a2b8"></i> Retorno</th>
                  <th scope="col" class="text-center"><i class="mdi mdi-checkbox-blank-circle" style="color: #00c853"></i> Exame</th>
                  <th scope="col" class="text-center"><i class="mdi mdi-checkbox-blank-circle" style="color: #6610f2"></i> Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Unimed</th>
                  <td class="text-center">90</td>
                  <td class="text-center">3</td>
                  <td class="text-center">15</td>
                  <td class="text-center">108</td>
                </tr>
                <tr>
                  <th scope="row"> Amil Planos</th>
                  <td class="text-center">44</td>
                  <td class="text-center">3</td>
                  <td class="text-center">8</td>
                  <td class="text-center">55</td>
                </tr>
                <tr>
                  <th scope="row"> IPASGO</th>
                  <td class="text-center">13</td>
                  <td class="text-center">3</td>
                  <td class="text-center">5</td>
                  <td class="text-center">23</td>
                </tr>
                <tr>
                  <th scope="row"> Particular</th>
                  <td class="text-center">13</td>
                  <td class="text-center">3</td>
                  <td class="text-center">5</td>
                  <td class="text-center">23</td>
                </tr>
                <tr>
                  <th scope="row"> Outros</th>
                  <td class="text-center">13</td>
                  <td class="text-center">3</td>
                  <td class="text-center">5</td>
                  <td class="text-center">23</td>
                </tr>
              </tbody>
            </table>
            <div style="padding-top: 15px" v-if="graph">
              <BarChart :height="280"/>
            </div>
          </div>
        </div>
      </div>
      <div class="row"></div>
    </div>
  </div>
</template>
<script>
//import PieChart from "../components/PieChart.vue";
import Switches from 'vue-switches';
import BarChart from "../components/BarChart.vue";
import VueCal from 'vue-cal'
import '../../public/css/vuecal-custom.css'
import 'vue-cal/dist/i18n/pt-br.js'
export default {
  name: 'home',
  components: {
    //PieChart,
    Switches,
    BarChart,
    VueCal
  },
  data: () => ({
    graph: false,
    events: [
      {
        start: '2018-11-21',
        end: '2018-11-21',
        title: 'Need to go shopping',
        content: '<i class="v-icon material-icons">shopping_cart</i>',
        class: 'leisure'
      },
      {
        start: '2018-11-21',
        end: '2018-11-21',
        title: 'Golf with John',
        content: '<i class="v-icon material-icons">golf_course</i>',
        class: 'sport'
      },
      {
        start: '2018-11-22',
        end: '2018-11-22',
        title: 'Dad\'s birthday!',
        content: '<i class="v-icon material-icons">cake</i>',
        class: 'sport'
      }
    ]
  })
}
</script>
<style scoped>
  .view {
    padding-top: 60px;
    height: 100vh;
    background-color: #EDEDED
  }
  .scroll {
    overflow-y: auto;
    height: calc(100vh - 60px);
  }
  .row {
    margin-top: 30px;
    padding: 0px 15px;
  }
  h5 {
    font-weight: 300;
    text-transform: uppercase;
    font-size: 0.9em;
    color: #00000080;
    margin-bottom: 10px;
  }
  h3 {
    margin: 0px;
    font-size: 1.5em;
    color: #00000080;
  }
  .block {
    background-color: #FFF;
    padding: 30px;
    border: 1px solid #00000020;
    border-radius: 6px
  }
  .block.info {
    height: 160px;
  }
  .block .rows {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 6px
  }
  .text {
    padding: 20px 15px 0px 20px
  }
  .block big {
    font-size: 3em;
    font-weight: 900;
    margin-right: 15px;
    color: #0000009e;
  }
  .block .number {
    display: flex;
    flex-direction: row;
    align-items: center
  }
  .block .cols p {
    margin-bottom: -3px;
    font-size: 0.8em;
    text-transform: uppercase;
    color: #0000009e;
  }
  .block .number small {
    font-size: 1.3em;
  }
  .table {
    margin-top: 30px;
    margin-bottom: 30px
  }
  .cal {
    height: 414px;
    padding: 15px
  }
  .table-plans {
    margin-bottom: 15px;
    margin-top: 15px
  }
  .table tr td, .table tr th {
    vertical-align: middle;
  }
  .red {
    background-color: #dc354523
  }
  .blue {
    background-color: #007bff2e
  }
  .purple {
    background-color: #6f42c12e
  }
  .green {
    background-color: #00c8532e
  }
  .grey {
    background-color: #DDD
  }
  .switch {
    float: right;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .switch small {
    color: #999999;
    padding: 0px 15px;
    position: relative;
    top: -3px;
  }
</style>