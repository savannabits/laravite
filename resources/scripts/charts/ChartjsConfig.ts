// Import Chart.js
import { Chart, Tooltip } from 'chart.js'
// Import Tailwind config
import { tailwindConfig } from '@/utils/Utils'

Chart.register(Tooltip)

// Define Chart.js default settings
Chart.defaults.font.family = '"Inter", sans-serif'
Chart.defaults.font.weight = '500'
Chart.defaults.color = (tailwindConfig() as any).theme.colors.gray[400]
Chart.defaults.scale.grid.color = (tailwindConfig() as any).theme.colors.gray[100]
Chart.defaults.plugins.tooltip.titleColor = (tailwindConfig() as any).theme.colors.gray[800]
Chart.defaults.plugins.tooltip.bodyColor = (tailwindConfig() as any).theme.colors.gray[800]
Chart.defaults.plugins.tooltip.backgroundColor = (tailwindConfig() as any).theme.colors.white
Chart.defaults.plugins.tooltip.borderWidth = 1
Chart.defaults.plugins.tooltip.borderColor = (tailwindConfig() as any).theme.colors.gray[200]
Chart.defaults.plugins.tooltip.displayColors = false
Chart.defaults.plugins.tooltip.mode = 'nearest'
Chart.defaults.plugins.tooltip.intersect = false
Chart.defaults.plugins.tooltip.position = 'nearest'
Chart.defaults.plugins.tooltip.caretSize = 0
Chart.defaults.plugins.tooltip.caretPadding = 20
Chart.defaults.plugins.tooltip.cornerRadius = 4
Chart.defaults.plugins.tooltip.padding = 8

// Register Chart.js plugin to add a bg option for chart area
Chart.register({
  id: 'chartAreaPlugin',
  // eslint-disable-next-line object-shorthand
  beforeDraw: (chart: Chart|any) => {
    // @ts-ignore
      if (chart.config.options.chartArea && chart.config.options.chartArea.backgroundColor) {
      const ctx = chart.canvas.getContext('2d') as any
      const { chartArea } = chart
      ctx.save()
      ctx.fillStyle = chart.config.options.chartArea.backgroundColor
      // eslint-disable-next-line max-len
      ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top)
      ctx.restore()
    }
  },
})
