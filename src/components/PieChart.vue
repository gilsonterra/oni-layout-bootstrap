<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  mounted() {
    this.renderChart(
      {
        labels: ["Agendados", "Confirmados", "Atendidos", "Faltantes"],
        datasets: [
          {
            backgroundColor: ["#00c853", "#6f42c1", "#007bff", "#dc3545"],
            data: [45, 40, 15, 3],
          }
        ],
        
      },
      { responsive: true, maintainAspectRatio: false, cutoutPercentage: 90 }
    );
  }
};
</script>