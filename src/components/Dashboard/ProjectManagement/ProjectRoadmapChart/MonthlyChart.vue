<template>
  <apexchart
    type="bar"
    height="316"
    :options="projectRoadmap"
    :series="project"
  ></apexchart>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MonthlyChart",
  data: function () {
    return {
      project: [
        {
          name: "Actual",
          data: [
            {
              x: "Planning",
              y: 10,
            },
            {
              x: "Research",
              y: 20,
            },
            {
              x: "Design",
              y: 30,
            },
            {
              x: "Reviewe",
              y: 40,
            },
            {
              x: "Develop",
              y: 50,
            },
            {
              x: "Testing",
              y: 60,
            },
          ],
        },
      ],
      projectRoadmap: {
        chart: {
          height: 316,
          type: "bar",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        colors: ["#3f46ff"],
        dataLabels: {
          formatter: function (
            val: unknown,
            opt: {
              w: {
                config: {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  [x: string]: any;
                  project: {
                    [x: string]: { data: { [x: string]: { goals: unknown } } };
                  };
                };
              };
              seriesIndex: string | number;
              dataPointIndex: string | number;
            }
          ) {
            const goals =
              opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
                .goals;

            if (goals && goals.length) {
              return `${val} / ${goals[0].value}`;
            }
            return val;
          },
        },
        legend: {
          show: true,
          showForSingleSeries: true,
          customLegendItems: ["Actual", "Expected"],
          fontSize: "14px",
          labels: {
            colors: ["#919AA3"],
          },
          markers: {
            fillColors: ["#5C61F2", "#EFEFFE"],
          },
        },
        xaxis: {
          labels: {
            style: {
              colors: [
                "#919AA3",
                "#919AA3",
                "#919AA3",
                "#919AA3",
                "#919AA3",
                "#919AA3",
                "#919AA3",
                "#919AA3",
                "#919AA3",
                "#919AA3",
                "#919AA3",
                "#919AA3",
              ],
            },
          },
        },

        yaxis: {
          labels: {
            style: {
              colors: [
                "#A9A9C8",
                "#A9A9C8",
                "#A9A9C8",
                "#A9A9C8",
                "#A9A9C8",
                "#A9A9C8",
                "#A9A9C8",
                "#A9A9C8",
                "#A9A9C8",
                "#A9A9C8",
                "#A9A9C8",
                "#A9A9C8",
              ],
            },
          },
        },
        grid: {
          borderColor: "#F4F6FA",
        },
      },
    };
  },
});
</script>