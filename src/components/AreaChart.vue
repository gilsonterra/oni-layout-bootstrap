<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  mounted() {
    this.renderChart(
      {
        labels: [
          "Janeiro",
          "Fevereiro",
          "Março",
          "April",
          "Maio",
          "Junho",
          "Julho",
          "Agosto",
          "Setembro",
          "Outubro",
          "Novembro",
          "Dezembro",
        ],
        datasets: [
          {
            label: "Agendados",
            borderColor: "#00c853",
            pointBackgroundColor: "white",
            borderWidth: 3,
            pointBorderColor: "#00c853",
            backgroundColor: "transparent",
            data: [40, 39, 10, 40, 39, 80, 40, 23, 33, 56, 12, 15]
          },
          {
            label: "Confirmados",
            borderColor: "#6f42c1",
            pointBackgroundColor: "white",
            pointBorderColor: "#6f42c1",
            borderWidth: 3,
            backgroundColor: "transparent",
            data: [25, 15, 5, 30, 21, 60, 28, 15, 20, 40, 5, 8]
          },
          {
            label: "Atendidos",
            borderColor: "#007bff",
            pointBackgroundColor: "white",
            pointBorderColor: "#007bff",
            borderWidth: 3,
            backgroundColor: "transparent",
            data: [15, 20, 2, 20, 15, 50, 20, 10, 15, 30, 2, 3]
          },
          {
            label: "Faltantes",
            borderColor: "#dc3545",
            pointBackgroundColor: "white",
            pointBorderColor: "#dc3545",
            borderWidth: 3,
            backgroundColor: "transparent",
            data: [2, 2, 0, 3, 2, 5, 2, 1, 1, 3, 1, 1]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>
