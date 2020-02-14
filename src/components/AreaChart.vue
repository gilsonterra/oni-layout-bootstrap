<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
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
            label: "Agendados",
            borderColor: "#00c853",
            pointBackgroundColor: "white",
            borderWidth: 3,
            pointBorderColor: "#00c853",
            backgroundColor: "transparent",
            data: [40, 39, 10]
          },
          
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>
