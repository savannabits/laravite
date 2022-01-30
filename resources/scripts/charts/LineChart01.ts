import { Line } from 'vue-chartjs'
// Import utilities
import { tailwindConfig, formatValue } from '@/utils/Utils'

export default {
  extends: Line,
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted() {
    // @ts-ignore
      this.renderChart(this.chartdata, {
      chartArea: {
        backgroundColor: (tailwindConfig() as any).theme.colors.gray[50],
      },
      layout: {
        padding: {
          top: 20,
          bottom: 20,
          left: 20,
          right: 20,
        },
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [{
          display: false,
          ticks: {
            beginAtZero: true,
          },
        }],
        xAxes: [{
          type: 'time',
          time: {
            parser: 'MM-DD-YYYY',
            unit: 'month',
          },
          display: false,
        }],
      },
      tooltips: {
        mode: 'nearest',
        intersect: false,
        position: 'nearest',
        caretSize: 0,
        caretPadding: 20,
        cornerRadius: 4,
        xPadding: 8,
        yPadding: 8,
        backgroundColor: (tailwindConfig() as any).theme.colors.white,
        borderWidth: 1,
        borderColor: (tailwindConfig() as any).theme.colors.gray[200],
        bodyFontStyle: '500',
        bodyFontColor: (tailwindConfig() as any).theme.colors.gray[800],
        displayColors: false,
        callbacks: {
          title: () => false, // Disable tooltip title
          label: (tooltipItem) => formatValue(tooltipItem.yLabel),
        },
      },
      hover: {
        animationDuration: 0,
        mode: 'nearest',
        intersect: false,
      },
      maintainAspectRatio: false,
    })
  }
}
