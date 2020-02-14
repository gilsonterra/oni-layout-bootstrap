<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  mounted() {
    this.renderChart(
      {
        labels: [
          "Unimed",
          "Amil",
          "IPASGO",
        ],
        datasets: [
          {
            label: "Exames",
            backgroundColor: "#00c853",
            data: [15, 8, 5]
          },
          {
            label: "Retornos",
            backgroundColor: "#17a2b8",
            data: [3, 3, 3]
          },
          {
            label: "Consultas",
            backgroundColor: "#6f42c1",
            data: [90, 44, 13]
          },
          {
            label: "Total",
            backgroundColor: "#6610f2",
            data: [40, 39, 10]
          },
          
        ]
      },
      { responsive: true, maintainAspectRatio: false, legend: { display: false }  }
    );
  }
};
</script>
