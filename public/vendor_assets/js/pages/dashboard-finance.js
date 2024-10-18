"use strict";
function floatchart() {
    new ApexCharts(document.querySelector("#total-line-1-chart"), {
        chart: { type: "line", height: 60, sparkline: { enabled: !0 } },
        dataLabels: { enabled: !1 },
        colors: ["#2ca87f"],
        stroke: { curve: "straight", lineCap: "round", width: 3 },
        series: [{ name: "series1", data: [20, 10, 18, 12, 25, 10, 20] }],
        yaxis: { min: 0, max: 30 },
        tooltip: {
            theme: "dark",
            fixed: { enabled: !1 },
            x: { show: !1 },
            y: {
                title: {
                    formatter: function (e) {
                        return "";
                    },
                },
            },
            marker: { show: !1 },
        },
    }).render(),
        new ApexCharts(document.querySelector("#total-line-2-chart"), {
            chart: { type: "line", height: 60, sparkline: { enabled: !0 } },
            dataLabels: { enabled: !1 },
            colors: ["#2ca87f"],
            stroke: { curve: "straight", lineCap: "round", width: 3 },
            series: [{ name: "series1", data: [20, 10, 18, 12, 25, 10, 20] }],
            yaxis: { min: 0, max: 30 },
            tooltip: {
                theme: "dark",
                fixed: { enabled: !1 },
                x: { show: !1 },
                y: {
                    title: {
                        formatter: function (e) {
                            return "";
                        },
                    },
                },
                marker: { show: !1 },
            },
        }).render(),
        new ApexCharts(document.querySelector("#total-line-3-chart"), {
            chart: { type: "line", height: 60, sparkline: { enabled: !0 } },
            dataLabels: { enabled: !1 },
            colors: ["#dc2626"],
            stroke: { curve: "straight", lineCap: "round", width: 3 },
            series: [{ name: "series1", data: [20, 10, 18, 12, 25, 10, 20] }],
            yaxis: { min: 0, max: 30 },
            tooltip: {
                theme: "dark",
                fixed: { enabled: !1 },
                x: { show: !1 },
                y: {
                    title: {
                        formatter: function (e) {
                            return "";
                        },
                    },
                },
                marker: { show: !1 },
            },
        }).render();
    var e = {
        chart: { type: "bar", height: 210, toolbar: { show: !1 } },
        plotOptions: { bar: { columnWidth: "70%", borderRadius: 2 } },
        fill: { opacity: [1, 0.4] },
        stroke: { show: !0, width: 3, colors: ["transparent"] },
        dataLabels: { enabled: !1 },
        legend: {
            position: "top",
            horizontalAlign: "right",
            show: !0,
            fontFamily: "'Public Sans', sans-serif",
            offsetX: 10,
            offsetY: 10,
            labels: { useSeriesColors: !1 },
            markers: {
                width: 10,
                height: 10,
                radius: "50%",
                offsexX: 2,
                offsexY: 2,
            },
            itemMargin: { horizontal: 15, vertical: 5 },
        },
        colors: ["#14176C", "#14176C"],
        series: [
            {
                name: "Income",
                data: [
                    180, 90, 135, 114, 120, 145, 180, 90, 135, 114, 120, 145,
                ],
            },
            {
                name: "Expends",
                data: [120, 45, 78, 150, 168, 99, 120, 45, 78, 150, 168, 99],
            },
        ],
        grid: { borderColor: "#00000010" },
        yaxis: { show: !1 },
    };
    new ApexCharts(document.querySelector("#cashflow-bar-chart"), e).render(),
        new ApexCharts(document.querySelector("#category-donut-chart"), {
            chart: { height: 300, type: "donut" },
            dataLabels: { enabled: !1 },
            legend: { show: !0, position: "bottom" },
            plotOptions: { pie: { donut: { size: "65%" } } },
            labels: ["Saving", "Spend", "Income"],
            series: [25, 50, 25],
            colors: ["#212529", "#14176C", "#2ca87f"],
        }).render();
}
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        floatchart();
    }, 100);
});
