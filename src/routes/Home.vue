<template>
  <div class="view">
    <div class="container-fluid scroll">
      <div class="row">
        <div class="col-lg-3">
          <div class="block text green">
            <h5>Pacientes</h5>
            <h3>Agendados</h3>
            <div class="number">
              <big>45</big>
              <small class="text-primary">+25%</small>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="block text purple">
            <h5>Pacientes</h5>
            <h3>Confirmados</h3>
            <div class="number">
              <big>40</big>
              <small class="text-danger">-10%</small>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="block text blue">
            <h5>Pacientes</h5>
            <h3>Atendidos</h3>
            <div class="number">
              <big>15</big>
              <small class="text-danger">-10%</small>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="block text red">
            <h5>Pacientes</h5>
            <h3>Faltantes</h3>
            <div class="number">
              <big>3</big>
              <small class="text-primary">2%</small>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="block">
            <PieChart/>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="block">
            <AreaChart/>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="block">
            <div>
              <h3>Agendamentos para hoje</h3>
            </div>

            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col" width="45px">Paciente</th>
                  <th scope="col" width="50%"></th>
                  <th scope="col">Médico</th>
                  <th scope="col">Hora</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in list" :key="index">
                  <th scope="row">
                    <div class="avatar" :style="'background-image: url(' + item.photo + ');'"></div>
                  </th>
                  <td style="vertical-align: middle;">{{item.name}}</td>
                  <td style="vertical-align: middle;">{{item.doctor}}</td>
                  <td style="vertical-align: middle;">{{item.time}}</td>
                  <td style="vertical-align: middle;">
                    <span class="badge" v-bind:class="item.status == 'Confirmado' ? 'badge-primary' : item.status == 'Faltante' ? 'badge-danger' : 'badge-secondary'">{{item.status.toUpperCase()}}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row">
        <br/>
      </div>
    </div>
  </div>
</template>
<script>
import PieChart from "../components/PieChart.vue";
import AreaChart from "../components/AreaChart.vue";
export default {
  name: 'home',
  components: {
    PieChart,
    AreaChart
  },
  data: () => ({
    list: [
      {
        "photo": "https://lh3.googleusercontent.com/proxy/nl3kuku29MfMKDCsaqCK5iIoF7vlYIyNAB3D-oICQVHZ9eH-eaq8zgQ3LrmaQxDdz7F3PSLsaL1idGSEnhwKvApClsQZj4ndy9yiuOPMg8qpNXQ",
        "name": "Alex Murphy",
        "doctor": "Badan Palhares",
        "time": "14:15",
        "status": "Confirmado",
      },
      {
        "photo": "https://pbs.twimg.com/profile_images/708429627304206336/bOJqWIUL_400x400.jpg",
        "name": "Genghis Khan",
        "doctor": "Badan Palhares",
        "time": "12:00",
        "status": "Pendente",
      },
      {
        "photo": "https://pbs.twimg.com/profile_images/3532733618/816131e8d4d420da11217a6b59826811.jpeg",
        "name": "Tutankhamon",
        "doctor": "Badan Palhares",
        "time": "08:00",
        "status": "Faltante",
      },
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
  }
  h3 {
    margin: 0px;
    color: #00000080;
  }
  .block {
    background-color: #FFF;
    padding: 30px;
    border: 1px solid #00000020;
    border-radius: 6px
  }
  .text {
    padding: 30px 20px 5px 30px
  }
  .block big {
    font-size: 4em;
    font-weight: 900;
    margin-right: 15px;
    color: #0000009e;
  }
  .block .number {
    display: flex;
    flex-direction: row;
    align-items: center
  }
  .block .number small {
    font-size: 1.3em;
  }
  .table {
    margin-top: 30px;
    margin-bottom: 30px
  }
</style>