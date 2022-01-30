<template>
  <div class="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-gray-200">
    <header class="px-5 py-4 border-b border-gray-100">
      <h2 class="font-semibold text-gray-800">Sessions By Age</h2>
    </header>
    <!-- Chart built with Chart.js 3 -->
    <!-- Change the height attribute to adjust the chart height -->
    <DoughnutChart :data="chartData" width="389" height="260" />
  </div>
</template>

<script>
import { ref } from 'vue'
import DoughnutChart from '../../charts/DoughnutChart.vue'
import EditMenu from '../../components/DropdownEditMenu.vue'

// Import utilities
import { tailwindConfig } from '../../utils/Utils'

export default {
  name: 'AnalyticsCard09',
  components: {
    DoughnutChart,
    EditMenu,
  },
  setup() {
    const chartData = ref({
      labels: ['<18', '18-24', '24-36', '>35'],
      datasets: [
        {
          label: 'Visit By Age Category',
          data: [
            30, 50, 5, 15,
          ],
          backgroundColor: [
            tailwindConfig().theme.colors.indigo[500],
            tailwindConfig().theme.colors['light-blue'][400],
            tailwindConfig().theme.colors.red[500],
            tailwindConfig().theme.colors.green[500],
          ],
          hoverBackgroundColor: [
            tailwindConfig().theme.colors.indigo[600],
            tailwindConfig().theme.colors['light-blue'][500],
            tailwindConfig().theme.colors.red[600],
            tailwindConfig().theme.colors.green[600],
          ],
          hoverBorderColor: tailwindConfig().theme.colors.white,
        },
      ],
    })

    return {
      chartData,
    } 
  }
}
</script>