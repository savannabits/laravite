<template>
  <div class="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-gray-200">
      <div class="px-5 pt-5">
          <header class="flex justify-between items-start mb-2">
              <!-- Icon -->
              <img :src="require('@/images/icon-01.svg')" width="32" height="32" alt="Icon 01" />
              <!-- Menu button -->
              <div class="relative inline-flex" x-data="{ open: false }">
                  <button
                      class="text-gray-400 hover:text-gray-500 rounded-full"
                      :class="{ 'bg-gray-100 text-gray-500': menuOpen }"
                      aria-haspopup="true"
                      @click.prevent="menuOpen = !menuOpen"
                      :aria-expanded={menuOpen}
                  >
                      <span class="sr-only">Menu</span>
                      <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32">
                          <circle cx="16" cy="16" r="2" />
                          <circle cx="10" cy="16" r="2" />
                          <circle cx="22" cy="16" r="2" />
                      </svg>
                  </button>
                  <transition
                    enter-active-class="transition ease-out duration-200 transform"
                    enter-class="opacity-0 -translate-y-2"
                    enter-to-class="opacity-100 translate-y-0"
                    leave-active-class="transition ease-out duration-200"
                    leave-class="opacity-100"
                    leave-to-class="opacity-0"
                  >
                    <div
                        class="origin-top-right z-10 absolute top-full right-0 min-w-36 bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
                        v-click-away="(e) => {return console.log(e)}"
                        v-show="menuOpen"
                    >
                        <ul>
                            <li>
                                <a class="font-medium text-sm text-gray-600 hover:text-gray-800 flex py-1 px-3" href="#0">Option 1</a>
                            </li>
                            <li>
                                <a class="font-medium text-sm text-gray-600 hover:text-gray-800 flex py-1 px-3" href="#0">Option 2</a>
                            </li>
                            <li>
                                <a class="font-medium text-sm text-red-500 hover:text-red-600 flex py-1 px-3" href="#0">Remove</a>
                            </li>
                        </ul>
                    </div>
                  </transition>
              </div>
          </header>
          <h2 class="text-lg font-semibold text-gray-800 mb-2">Acme Plus</h2>
          <div class="text-xs font-semibold text-gray-400 uppercase mb-1">Sales</div>
          <div class="flex items-start">
              <div class="text-3xl font-bold text-gray-800 mr-2">$24,780</div>
              <div class="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">+49%</div>
          </div>
      </div>
      <!-- Chart built with vue-chartjs -->
      <div class="flex-grow">
          <!-- Change the height attribute to adjust the chart height -->
          <LineChart :chartdata="chartData" :width="389" :height="128"></LineChart>
      </div>
  </div>
</template>

<script>
import LineChart from '@/charts/LineChart01'
// Import utilities
import { tailwindConfig, hexToRGB } from '@/utils/Utils'

export default {
  components: {
    LineChart
  },
  data () {
    return {
      menuOpen: false,
      chartData: {
        labels: [
          '12-01-2020', '01-01-2021', '02-01-2021',
          '03-01-2021', '04-01-2021', '05-01-2021',
          '06-01-2021', '07-01-2021', '08-01-2021',
          '09-01-2021', '10-01-2021', '11-01-2021',
          '12-01-2021', '01-01-2022', '02-01-2022',
          '03-01-2022', '04-01-2022', '05-01-2022',
          '06-01-2022', '07-01-2022', '08-01-2022',
          '09-01-2022', '10-01-2022', '11-01-2022',
          '12-01-2022', '01-01-2023',
        ],
        datasets: [
          // Indigo line
          {
            data: [
              732, 610, 610, 504, 504, 504, 349,
              349, 504, 342, 504, 610, 391, 192,
              154, 273, 191, 191, 126, 263, 349,
              252, 423, 622, 470, 532,
            ],
            backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
            borderColor: tailwindConfig().theme.colors.indigo[500],
            borderWidth: 2,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
          },
          // Gray line
          {
            data: [
              532, 532, 532, 404, 404, 314, 314,
              314, 314, 314, 234, 314, 234, 234,
              314, 314, 314, 388, 314, 202, 202,
              202, 202, 314, 720, 642,
            ],
            borderColor: tailwindConfig().theme.colors.gray[300],
            fill: false,
            borderWidth: 2,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: tailwindConfig().theme.colors.gray[300],
          },
        ],
      }
    }
  },
}
</script>
