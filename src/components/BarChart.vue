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
          "Particular",
          "Outros"
        ],
        datasets: [
          {
            label: "Exames",
            backgroundColor: "#00c853",
            data: [15, 8, 5, 12, 5]
          },
          {
            label: "Retornos",
            backgroundColor: "#17a2b8",
            data: [3, 3, 3, 5, 2]
          },
          {
            label: "Consultas",
            backgroundColor: "#20c997",
            data: [90, 44, 13, 30, 20]
          },
          {
            label: "Total",
            backgroundColor: "#6610f2",
            data: [40, 39, 10, 30, 15]
          },
          
        ]
      },
      { responsive: true, maintainAspectRatio: false, legend: { display: false }  }
    );
  }
};
</script>
