<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div class="card-title mb-3">
        <h3 class="fw-medium fs-18 mb-0">Bar and Line Chart Mix</h3>
      </div>

      <div ref="barAndLineChartMix" style="width: 100%; height: 500px"></div>
    </div>
  </div>
</template>

<script>
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export default {
  name: "BarAndLineChartMixChart",
  mounted() {
    // Create root element
    let root = am5.Root.new(this.$refs.barAndLineChartMix, {});

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: root.verticalLayout,
      })
    );

    // Add legend
    let legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
      })
    );

    // Set data
    let data = [
      {
        year: "2005",
        income: 23.5,
        expenses: 18.1,
      },
      {
        year: "2006",
        income: 26.2,
        expenses: 22.8,
      },
      {
        year: "2007",
        income: 30.1,
        expenses: 23.9,
      },
      {
        year: "2008",
        income: 29.5,
        expenses: 25.1,
      },
      {
        year: "2009",
        income: 24.6,
        expenses: 25,
      },
    ];

    // Create axes
    let yRenderer = am5xy.AxisRendererY.new(root, {
      cellStartLocation: 0.1,
      cellEndLocation: 0.9,
    });

    yRenderer.grid.template.set("location", 1);

    let yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "year",
        renderer: yRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    yAxis.data.setAll(data);

    let xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        min: 0,
        renderer: am5xy.AxisRendererX.new(root, { strokeOpacity: 0.1 }),
      })
    );

    // Create series
    let series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Income",
        xAxis: xAxis,
        yAxis: yAxis,
        valueXField: "income",
        categoryYField: "year",
        sequencedInterpolation: true,
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "horizontal",
          labelText: "[bold]{name}[/]\n{categoryY}: {valueX}",
        }),
      })
    );

    series.columns.template.setAll({
      height: am5.percent(70),
    });

    let series1 = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Expenses",
        xAxis: xAxis,
        yAxis: yAxis,
        valueXField: "expenses",
        categoryYField: "year",
        sequencedInterpolation: true,
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "horizontal",
          labelText: "[bold]{name}[/]\n{categoryY}: {valueX}",
        }),
      })
    );

    series1.strokes.template.setAll({
      strokeWidth: 2,
    });

    series1.bullets.push(function () {
      return am5.Bullet.new(root, {
        locationY: 0.5,
        sprite: am5.Circle.new(root, {
          radius: 5,
          stroke: series.get("stroke"),
          strokeWidth: 2,
          fill: root.interfaceColors.get("background"),
        }),
      });
    });

    yAxis.data.setAll(data);
    xAxis.data.setAll(data);
    series.data.setAll(data);
    series1.data.setAll(data);

    legend.data.setAll([series, series1]);

    // Add cursor
    const cursor = chart.set(
      "cursor",
      am5xy.XYCursor.new(root, { behavior: "zoomY" })
    );
    cursor.lineY.set("visible", false);
    chart.set("cursor", cursor);

    series.appear(1000);
    series1.appear(1000);
    chart.appear(1000, 100);

    this.root = root;
  },

  beforeUnmount() {
    if (this.root) {
      this.root.dispose();
    }
  },
};
</script>