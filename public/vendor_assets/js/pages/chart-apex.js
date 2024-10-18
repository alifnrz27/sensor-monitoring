"use strict";
setTimeout(function () {
    for (
        var e = {
                chart: { height: 300, type: "line", zoom: { enabled: !1 } },
                dataLabels: { enabled: !1, width: 2 },
                stroke: { curve: "straight" },
                colors: ["#14176C"],
                series: [
                    {
                        name: "Desktops",
                        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
                    },
                ],
                grid: {
                    row: { colors: ["#f3f6ff", "transparent"], opacity: 0.5 },
                },
                xaxis: {
                    categories: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                    ],
                },
            },
            a = new ApexCharts(document.querySelector("#line-chart-1"), e),
            t = (a.render(), 0),
            n = [],
            r = new Date("11 Feb 2017 GMT").getTime(),
            o = 10,
            i = { min: 10, max: 90 },
            s = 0;
        s < o;

    ) {
        var m = r,
            l = Math.floor(Math.random() * (i.max - i.min + 1)) + i.min;
        n.push({ x: m, y: l }), (t = r), (r += 864e5), s++;
    }
    function d(e) {
        var a = document.querySelectorAll("button");
        Array.prototype.forEach.call(a, function (e) {
            e.classList.remove("active");
        }),
            e.target.classList.add("active");
    }
    var c = {
            chart: {
                height: 300,
                type: "line",
                animations: {
                    enabled: !0,
                    easing: "linear",
                    dynamicAnimation: { speed: 2e3 },
                },
                toolbar: { show: !1 },
                zoom: { enabled: !1 },
            },
            dataLabels: { enabled: !1 },
            stroke: { curve: "smooth" },
            series: [{ data: n }],
            colors: ["#14176C"],
            markers: { size: 0 },
            xaxis: { type: "datetime", range: 7776e5 },
            yaxis: { max: 100 },
            legend: { show: !1 },
        },
        h = new ApexCharts(document.querySelector("#line-chart-2"), c),
        e =
            (h.render(),
            window.setInterval(function () {
                var e, a;
                (e = t),
                    (a = { min: 10, max: 90 }),
                    (t = e += 864e5),
                    n.push({
                        x: e,
                        y:
                            Math.floor(Math.random() * (a.max - a.min + 1)) +
                            a.min,
                    }),
                    h.updateSeries([{ data: n }]);
            }, 2e3),
            window.setInterval(function () {
                (n = n.slice(n.length - 10, n.length)),
                    h.updateSeries([{ data: n }], !1, !0);
            }, 6e4),
            new ApexCharts(document.querySelector("#line-chart-3"), {
                chart: { height: 300, type: "line", zoom: { enabled: !1 } },
                dataLabels: { enabled: !1 },
                stroke: {
                    width: [5, 7, 5],
                    curve: "straight",
                    dashArray: [0, 8, 5],
                },
                colors: ["#2CA87F", "#E58A00", "#DC2626"],
                series: [
                    {
                        name: "Session Duration",
                        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
                    },
                    {
                        name: "Page Views",
                        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
                    },
                    {
                        name: "Total Visits",
                        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
                    },
                ],
                markers: { size: 0, hover: { sizeOffset: 6 } },
                xaxis: {
                    categories: [
                        "01 Jan",
                        "02 Jan",
                        "03 Jan",
                        "04 Jan",
                        "05 Jan",
                        "06 Jan",
                        "07 Jan",
                        "08 Jan",
                        "09 Jan",
                        "10 Jan",
                        "11 Jan",
                        "12 Jan",
                    ],
                },
                tooltip: {
                    y: [
                        {
                            title: {
                                formatter: function (e) {
                                    return e + " (mins)";
                                },
                            },
                        },
                        {
                            title: {
                                formatter: function (e) {
                                    return e + " per session";
                                },
                            },
                        },
                        {
                            title: {
                                formatter: function (e) {
                                    return e;
                                },
                            },
                        },
                    ],
                },
                grid: { borderColor: "#f1f1f1" },
            }).render(),
            new ApexCharts(document.querySelector("#area-chart-1"), {
                chart: { height: 350, type: "area", toolbar: { show: !1 } },
                dataLabels: { enabled: !1 },
                stroke: { curve: "smooth" },
                colors: ["#E58A00", "#DC2626"],
                series: [
                    { name: "series1", data: [31, 40, 28, 51, 42, 109, 100] },
                    { name: "series2", data: [11, 32, 45, 32, 34, 52, 41] },
                ],
                xaxis: {
                    type: "datetime",
                    categories: [
                        "2018-09-19T00:00:00",
                        "2018-09-19T01:30:00",
                        "2018-09-19T02:30:00",
                        "2018-09-19T03:30:00",
                        "2018-09-19T04:30:00",
                        "2018-09-19T05:30:00",
                        "2018-09-19T06:30:00",
                    ],
                },
                tooltip: { x: { format: "dd/MM/yy HH:mm" } },
            }).render(),
            {
                annotations: {
                    yaxis: [
                        {
                            y: 30,
                            borderColor: "#999",
                            label: {
                                show: !0,
                                text: "Support",
                                style: { color: "#fff", background: "#00E396" },
                            },
                        },
                    ],
                    xaxis: [
                        {
                            x: new Date("14 Nov 2012").getTime(),
                            borderColor: "#999",
                            yAxisIndex: 0,
                            label: {
                                show: !0,
                                text: "Rally",
                                style: { color: "#fff", background: "#775DD0" },
                            },
                        },
                    ],
                },
                chart: { type: "area", height: 320, toolbar: { show: !1 } },
                dataLabels: { enabled: !1 },
                series: [
                    {
                        data: [
                            [13273596e5, 30.95],
                            [1327446e6, 31.34],
                            [13275324e5, 31.18],
                            [13276188e5, 31.05],
                            [1327878e6, 31],
                            [13279644e5, 30.95],
                            [13280508e5, 31.24],
                            [13281372e5, 31.29],
                            [13282236e5, 31.85],
                            [13284828e5, 31.86],
                            [13285692e5, 32.28],
                            [13286556e5, 32.1],
                            [1328742e6, 32.65],
                            [13288284e5, 32.21],
                            [13290876e5, 32.35],
                            [1329174e6, 32.44],
                            [13292604e5, 32.46],
                            [13293468e5, 32.86],
                            [13294332e5, 32.75],
                            [13297788e5, 32.54],
                            [13298652e5, 32.33],
                            [13299516e5, 32.97],
                            [1330038e6, 33.41],
                            [13302972e5, 33.27],
                            [13303836e5, 33.27],
                            [133047e7, 32.89],
                            [13305564e5, 33.1],
                            [13306428e5, 33.73],
                            [1330902e6, 33.22],
                            [13309884e5, 31.99],
                            [13310748e5, 32.41],
                            [13311612e5, 33.05],
                            [13312476e5, 33.64],
                            [13315068e5, 33.56],
                            [13315932e5, 34.22],
                            [13316796e5, 33.77],
                            [1331766e6, 34.17],
                            [13318524e5, 33.82],
                            [13321116e5, 34.51],
                            [1332198e6, 33.16],
                            [13322844e5, 33.56],
                            [13323708e5, 33.71],
                            [13324572e5, 33.81],
                            [13327128e5, 34.4],
                            [13327992e5, 34.63],
                            [13328856e5, 34.46],
                            [1332972e6, 34.48],
                            [13330584e5, 34.31],
                            [13333176e5, 34.7],
                            [1333404e6, 34.31],
                            [13334904e5, 33.46],
                            [13335768e5, 33.59],
                            [13339224e5, 33.22],
                            [13340088e5, 32.61],
                            [13340952e5, 33.01],
                            [13341816e5, 33.55],
                            [1334268e6, 33.18],
                            [13345272e5, 32.84],
                            [13346136e5, 33.84],
                            [13347e8, 33.39],
                            [13347864e5, 32.91],
                            [13348728e5, 33.06],
                            [1335132e6, 32.62],
                            [13352184e5, 32.4],
                            [13353048e5, 33.13],
                            [13353912e5, 33.26],
                            [13354776e5, 33.58],
                            [13357368e5, 33.55],
                            [13358232e5, 33.77],
                            [13359096e5, 33.76],
                            [1335996e6, 33.32],
                            [13360824e5, 32.61],
                            [13363416e5, 32.52],
                            [1336428e6, 32.67],
                            [13365144e5, 32.52],
                            [13366008e5, 31.92],
                            [13366872e5, 32.2],
                            [13369464e5, 32.23],
                            [13370328e5, 32.33],
                            [13371192e5, 32.36],
                            [13372056e5, 32.01],
                            [1337292e6, 31.31],
                            [13375512e5, 32.01],
                            [13376376e5, 32.01],
                            [1337724e6, 32.18],
                            [13378104e5, 31.54],
                            [13378968e5, 31.6],
                            [13382424e5, 32.05],
                            [13383288e5, 31.29],
                            [13384152e5, 31.05],
                            [13385016e5, 29.82],
                            [13387608e5, 30.31],
                            [13388472e5, 30.7],
                            [13389336e5, 31.69],
                            [133902e7, 31.32],
                            [13391064e5, 31.65],
                            [13393656e5, 31.13],
                            [1339452e6, 31.77],
                            [13395384e5, 31.79],
                            [13396248e5, 31.67],
                            [13397112e5, 32.39],
                            [13399704e5, 32.63],
                            [13400568e5, 32.89],
                            [13401432e5, 31.99],
                            [13402296e5, 31.23],
                            [1340316e6, 31.57],
                            [13405752e5, 30.84],
                            [13406616e5, 31.07],
                            [1340748e6, 31.41],
                            [13408344e5, 31.17],
                            [13409208e5, 32.37],
                            [134118e7, 32.19],
                            [13412664e5, 32.51],
                            [13414392e5, 32.53],
                            [13415256e5, 31.37],
                            [13417848e5, 30.43],
                            [13418712e5, 30.44],
                            [13419576e5, 30.2],
                            [1342044e6, 30.14],
                            [13421304e5, 30.65],
                            [13423896e5, 30.4],
                            [1342476e6, 30.65],
                            [13425624e5, 31.43],
                            [13426488e5, 31.89],
                            [13427352e5, 31.38],
                            [13429944e5, 30.64],
                            [13430808e5, 30.02],
                            [13431672e5, 30.33],
                            [13432536e5, 30.95],
                            [134334e7, 31.89],
                            [13435992e5, 31.01],
                            [13436856e5, 30.88],
                            [1343772e6, 30.69],
                            [13438584e5, 30.58],
                            [13439448e5, 32.02],
                            [1344204e6, 32.14],
                            [13442904e5, 32.37],
                            [13443768e5, 32.51],
                            [13444632e5, 32.65],
                            [13445496e5, 32.64],
                            [13448088e5, 32.27],
                            [13448952e5, 32.1],
                            [13449816e5, 32.91],
                            [1345068e6, 33.65],
                            [13451544e5, 33.8],
                            [13454136e5, 33.92],
                            [13455e8, 33.75],
                            [13455864e5, 33.84],
                            [13456728e5, 33.5],
                            [13457592e5, 32.26],
                            [13460184e5, 32.32],
                            [13461048e5, 32.06],
                            [13461912e5, 31.96],
                            [13462776e5, 31.46],
                            [1346364e6, 31.27],
                            [13467096e5, 31.43],
                            [1346796e6, 32.26],
                            [13468824e5, 32.79],
                            [13469688e5, 32.46],
                            [1347228e6, 32.13],
                            [13473144e5, 32.43],
                            [13474008e5, 32.42],
                            [13474872e5, 32.81],
                            [13475736e5, 33.34],
                            [13478328e5, 33.41],
                            [13479192e5, 32.57],
                            [13480056e5, 33.12],
                            [1348092e6, 34.53],
                            [13481784e5, 33.83],
                            [13484376e5, 33.41],
                            [1348524e6, 32.9],
                            [13486104e5, 32.53],
                            [13486968e5, 32.8],
                            [13487832e5, 32.44],
                            [13490424e5, 32.62],
                            [13491288e5, 32.57],
                            [13492152e5, 32.6],
                            [13493016e5, 32.68],
                            [1349388e6, 32.47],
                            [13496472e5, 32.23],
                            [13497336e5, 31.68],
                            [134982e7, 31.51],
                            [13499064e5, 31.78],
                            [13499928e5, 31.94],
                            [1350252e6, 32.33],
                            [13503384e5, 33.24],
                            [13504248e5, 33.44],
                            [13505112e5, 33.48],
                            [13505976e5, 33.24],
                            [13508568e5, 33.49],
                            [13509432e5, 33.31],
                            [13510296e5, 33.36],
                            [1351116e6, 33.4],
                            [13512024e5, 34.01],
                            [1351638e6, 34.02],
                            [13517244e5, 34.36],
                            [13518108e5, 34.39],
                            [135207e7, 34.24],
                            [13521564e5, 34.39],
                            [13522428e5, 33.47],
                            [13523292e5, 32.98],
                            [13524156e5, 32.9],
                            [13526748e5, 32.7],
                            [13527612e5, 32.54],
                            [13528476e5, 32.23],
                            [1352934e6, 32.64],
                            [13530204e5, 32.65],
                            [13532796e5, 32.92],
                            [1353366e6, 32.64],
                            [13534524e5, 32.84],
                            [13536252e5, 33.4],
                            [13538844e5, 33.3],
                            [13539708e5, 33.18],
                            [13540572e5, 33.88],
                            [13541436e5, 34.09],
                            [135423e7, 34.61],
                            [13544892e5, 34.7],
                            [13545756e5, 35.3],
                            [1354662e6, 35.4],
                            [13547484e5, 35.14],
                            [13548348e5, 35.48],
                            [1355094e6, 35.75],
                            [13551804e5, 35.54],
                            [13552668e5, 35.96],
                            [13553532e5, 35.53],
                            [13554396e5, 37.56],
                            [13556988e5, 37.42],
                            [13557852e5, 37.49],
                            [13558716e5, 38.09],
                            [1355958e6, 37.87],
                            [13560444e5, 37.71],
                            [13563036e5, 37.53],
                            [13564764e5, 37.55],
                            [13565628e5, 37.3],
                            [13566492e5, 36.9],
                            [13569084e5, 37.68],
                            [13570812e5, 38.34],
                            [13571676e5, 37.75],
                            [1357254e6, 38.13],
                            [13575132e5, 37.94],
                            [13575996e5, 38.14],
                            [1357686e6, 38.66],
                            [13577724e5, 38.62],
                            [13578588e5, 38.09],
                            [1358118e6, 38.16],
                            [13582044e5, 38.15],
                            [13582908e5, 37.88],
                            [13583772e5, 37.73],
                            [13584636e5, 37.98],
                            [13588092e5, 37.95],
                            [13588956e5, 38.25],
                            [1358982e6, 38.1],
                            [13590684e5, 38.32],
                            [13593276e5, 38.24],
                            [1359414e6, 38.52],
                            [13595004e5, 37.94],
                            [13595868e5, 37.83],
                            [13596732e5, 38.34],
                            [13599324e5, 38.1],
                            [13600188e5, 38.51],
                            [13601052e5, 38.4],
                            [13601916e5, 38.07],
                            [1360278e6, 39.12],
                            [13605372e5, 38.64],
                            [13606236e5, 38.89],
                            [136071e7, 38.81],
                            [13607964e5, 38.61],
                            [13608828e5, 38.63],
                            [13612284e5, 38.99],
                            [13613148e5, 38.77],
                            [13614012e5, 38.34],
                            [13614876e5, 38.55],
                            [13617468e5, 38.11],
                            [13618332e5, 38.59],
                            [13619196e5, 39.6],
                        ],
                    },
                ],
                markers: { size: 0, style: "hollow" },
                colors: ["#14176C"],
                xaxis: {
                    type: "datetime",
                    min: new Date("01 Mar 2012").getTime(),
                    tickAmount: 6,
                },
                tooltip: { x: { format: "dd MMM yyyy" } },
                fill: {
                    type: "gradient",
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.7,
                        opacityTo: 0.9,
                        stops: [0, 100],
                    },
                },
            }),
        c =
            ((a = new ApexCharts(
                document.querySelector("#area-chart-2"),
                e
            )).render(),
            document
                .querySelector("#one_month")
                .addEventListener("click", function (e) {
                    d(e),
                        a.updateOptions({
                            xaxis: {
                                min: new Date("28 Jan 2013").getTime(),
                                max: new Date("27 Feb 2013").getTime(),
                            },
                        });
                }),
            document
                .querySelector("#six_months")
                .addEventListener("click", function (e) {
                    d(e),
                        a.updateOptions({
                            xaxis: {
                                min: new Date("27 Sep 2012").getTime(),
                                max: new Date("27 Feb 2013").getTime(),
                            },
                        });
                }),
            document
                .querySelector("#one_year")
                .addEventListener("click", function (e) {
                    d(e),
                        a.updateOptions({
                            xaxis: {
                                min: new Date("27 Feb 2012").getTime(),
                                max: new Date("27 Feb 2013").getTime(),
                            },
                        });
                }),
            document
                .querySelector("#ytd")
                .addEventListener("click", function (e) {
                    d(e),
                        a.updateOptions({
                            xaxis: {
                                min: new Date("01 Jan 2013").getTime(),
                                max: new Date("27 Feb 2013").getTime(),
                            },
                        });
                }),
            document
                .querySelector("#all")
                .addEventListener("click", function (e) {
                    d(e),
                        a.updateOptions({
                            xaxis: { min: void 0, max: void 0 },
                        });
                }),
            document
                .querySelector("#ytd")
                .addEventListener("click", function () {}),
            new ApexCharts(document.querySelector("#bar-chart-1"), {
                chart: { height: 350, type: "bar" },
                plotOptions: {
                    bar: {
                        horizontal: !1,
                        columnWidth: "55%",
                        endingShape: "rounded",
                    },
                },
                dataLabels: { enabled: !1 },
                colors: ["#2CA87F", "#14176C", "#13c2c2"],
                stroke: { show: !0, width: 2, colors: ["transparent"] },
                series: [
                    { name: "Net Profit", data: [44, 55, 57, 56, 61, 58, 63] },
                    { name: "Revenue", data: [76, 85, 101, 98, 87, 105, 91] },
                    {
                        name: "Free Cash Flow",
                        data: [35, 41, 36, 26, 45, 48, 52],
                    },
                ],
                xaxis: {
                    categories: [
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                    ],
                },
                fill: { opacity: 1 },
                tooltip: {
                    y: {
                        formatter: function (e) {
                            return "$ " + e + " thousands";
                        },
                    },
                },
            }).render(),
            new ApexCharts(document.querySelector("#bar-chart-2"), {
                chart: {
                    height: 350,
                    type: "bar",
                    stacked: !0,
                    toolbar: { show: !1 },
                    zoom: { enabled: !0 },
                },
                colors: ["#14176C", "#2CA87F", "#E58A00", "#13c2c2"],
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            legend: {
                                position: "bottom",
                                offsetX: -10,
                                offsetY: 0,
                            },
                        },
                    },
                ],
                plotOptions: { bar: { horizontal: !1 } },
                series: [
                    { name: "PRODUCT A", data: [44, 55, 41, 67, 22, 43] },
                    { name: "PRODUCT B", data: [13, 23, 20, 8, 13, 27] },
                    { name: "PRODUCT C", data: [11, 17, 15, 15, 21, 14] },
                    { name: "PRODUCT D", data: [21, 7, 25, 13, 22, 8] },
                ],
                xaxis: {
                    type: "datetime",
                    categories: [
                        "01/01/2011 GMT",
                        "01/02/2011 GMT",
                        "01/03/2011 GMT",
                        "01/04/2011 GMT",
                        "01/05/2011 GMT",
                        "01/06/2011 GMT",
                    ],
                },
                legend: { position: "bottom" },
                fill: { opacity: 1 },
            }).render(),
            new ApexCharts(document.querySelector("#bar-chart-3"), {
                chart: { height: 350, type: "bar" },
                plotOptions: {
                    bar: { horizontal: !0, dataLabels: { position: "top" } },
                },
                colors: ["#14176C", "#2CA87F"],
                dataLabels: {
                    enabled: !0,
                    offsetX: -6,
                    style: { fontSize: "12px", colors: ["#fff"] },
                },
                stroke: { show: !0, width: 1, colors: ["#fff"] },
                series: [
                    { data: [44, 55, 41, 64, 22, 43, 21] },
                    { data: [53, 32, 33, 52, 13, 44, 32] },
                ],
                xaxis: {
                    categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
                },
            }).render(),
            new ApexCharts(document.querySelector("#bar-chart-4"), {
                chart: {
                    height: 350,
                    type: "bar",
                    stacked: !0,
                    stackType: "100%",
                },
                plotOptions: { bar: { horizontal: !0 } },
                colors: ["#14176C", "#13c2c2", "#2CA87F", "#E58A00", "#DC2626"],
                stroke: { width: 1, colors: ["#fff"] },
                series: [
                    {
                        name: "Marine Sprite",
                        data: [44, 55, 41, 37, 22, 43, 21],
                    },
                    {
                        name: "Striking Calf",
                        data: [53, 32, 33, 52, 13, 43, 32],
                    },
                    { name: "Tank Picture", data: [12, 17, 11, 9, 15, 11, 20] },
                    { name: "Bucket Slope", data: [9, 7, 5, 8, 6, 9, 4] },
                    { name: "Reborn Kid", data: [25, 12, 19, 32, 25, 24, 10] },
                ],
                xaxis: {
                    categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
                },
                tooltip: {
                    y: {
                        formatter: function (e) {
                            return e + "K";
                        },
                    },
                },
                fill: { opacity: 1 },
                legend: {
                    position: "top",
                    horizontalAlign: "left",
                    offsetX: 40,
                },
            }).render(),
            new ApexCharts(document.querySelector("#mixed-chart-1"), {
                chart: { height: 350, type: "line" },
                series: [
                    {
                        name: "Website Blog",
                        type: "column",
                        data: [
                            440, 505, 414, 671, 227, 413, 201, 352, 752, 320,
                            257, 160,
                        ],
                    },
                    {
                        name: "Social Media",
                        type: "line",
                        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
                    },
                ],
                stroke: { width: [0, 4] },
                colors: ["#14176C", "#DC2626"],
                labels: [
                    "01 Jan 2001",
                    "02 Jan 2001",
                    "03 Jan 2001",
                    "04 Jan 2001",
                    "05 Jan 2001",
                    "06 Jan 2001",
                    "07 Jan 2001",
                    "08 Jan 2001",
                    "09 Jan 2001",
                    "10 Jan 2001",
                    "11 Jan 2001",
                    "12 Jan 2001",
                ],
                xaxis: { type: "datetime" },
            }).render(),
            new ApexCharts(document.querySelector("#mixed-chart-2"), {
                chart: { height: 350, type: "line", stacked: !1 },
                stroke: { width: [0, 2, 5], curve: "smooth" },
                plotOptions: { bar: { columnWidth: "50%" } },
                colors: ["#DC2626", "#14176C", "#E58A00"],
                series: [
                    {
                        name: "Facebook",
                        type: "column",
                        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                    },
                    {
                        name: "Vine",
                        type: "area",
                        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                    },
                    {
                        name: "Dribbble",
                        type: "line",
                        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                    },
                ],
                fill: {
                    opacity: [0.85, 0.25, 1],
                    gradient: {
                        inverseColors: !1,
                        shade: "light",
                        type: "vertical",
                        opacityFrom: 0.85,
                        opacityTo: 0.55,
                        stops: [0, 100, 100, 100],
                    },
                },
                labels: [
                    "01/01/2003",
                    "02/01/2003",
                    "03/01/2003",
                    "04/01/2003",
                    "05/01/2003",
                    "06/01/2003",
                    "07/01/2003",
                    "08/01/2003",
                    "09/01/2003",
                    "10/01/2003",
                    "11/01/2003",
                ],
                markers: { size: 0 },
                xaxis: { type: "datetime" },
                yaxis: { min: 0 },
                tooltip: {
                    shared: !0,
                    intersect: !1,
                    y: {
                        formatter: function (e) {
                            return void 0 !== e ? e.toFixed(0) + " views" : e;
                        },
                    },
                },
                legend: {
                    labels: { useSeriesColors: !0 },
                    markers: {
                        customHTML: [
                            function () {
                                return "";
                            },
                            function () {
                                return "";
                            },
                            function () {
                                return "";
                            },
                        ],
                    },
                },
            }).render(),
            {
                chart: { height: 350, type: "candlestick" },
                series: [
                    {
                        data: [
                            {
                                x: new Date(15387786e5),
                                y: [6629.81, 6650.5, 6623.04, 6633.33],
                            },
                            {
                                x: new Date(15387804e5),
                                y: [6632.01, 6643.59, 6620, 6630.11],
                            },
                            {
                                x: new Date(15387822e5),
                                y: [6630.71, 6648.95, 6623.34, 6635.65],
                            },
                            {
                                x: new Date(1538784e6),
                                y: [6635.65, 6651, 6629.67, 6638.24],
                            },
                            {
                                x: new Date(15387858e5),
                                y: [6638.24, 6640, 6620, 6624.47],
                            },
                            {
                                x: new Date(15387876e5),
                                y: [6624.53, 6636.03, 6621.68, 6624.31],
                            },
                            {
                                x: new Date(15387894e5),
                                y: [6624.61, 6632.2, 6617, 6626.02],
                            },
                            {
                                x: new Date(15387912e5),
                                y: [6627, 6627.62, 6584.22, 6603.02],
                            },
                            {
                                x: new Date(1538793e6),
                                y: [6605, 6608.03, 6598.95, 6604.01],
                            },
                            {
                                x: new Date(15387948e5),
                                y: [6604.5, 6614.4, 6602.26, 6608.02],
                            },
                            {
                                x: new Date(15387966e5),
                                y: [6608.02, 6610.68, 6601.99, 6608.91],
                            },
                            {
                                x: new Date(15387984e5),
                                y: [6608.91, 6618.99, 6608.01, 6612],
                            },
                            {
                                x: new Date(15388002e5),
                                y: [6612, 6615.13, 6605.09, 6612],
                            },
                            {
                                x: new Date(1538802e6),
                                y: [6612, 6624.12, 6608.43, 6622.95],
                            },
                            {
                                x: new Date(15388038e5),
                                y: [6623.91, 6623.91, 6615, 6615.67],
                            },
                            {
                                x: new Date(15388056e5),
                                y: [6618.69, 6618.74, 6610, 6610.4],
                            },
                            {
                                x: new Date(15388074e5),
                                y: [6611, 6622.78, 6610.4, 6614.9],
                            },
                            {
                                x: new Date(15388092e5),
                                y: [6614.9, 6626.2, 6613.33, 6623.45],
                            },
                            {
                                x: new Date(1538811e6),
                                y: [6623.48, 6627, 6618.38, 6620.35],
                            },
                            {
                                x: new Date(15388128e5),
                                y: [6619.43, 6620.35, 6610.05, 6615.53],
                            },
                            {
                                x: new Date(15388146e5),
                                y: [6615.53, 6617.93, 6610, 6615.19],
                            },
                            {
                                x: new Date(15388164e5),
                                y: [6615.19, 6621.6, 6608.2, 6620],
                            },
                            {
                                x: new Date(15388182e5),
                                y: [6619.54, 6625.17, 6614.15, 6620],
                            },
                            {
                                x: new Date(153882e7),
                                y: [6620.33, 6634.15, 6617.24, 6624.61],
                            },
                            {
                                x: new Date(15388218e5),
                                y: [6625.95, 6626, 6611.66, 6617.58],
                            },
                            {
                                x: new Date(15388236e5),
                                y: [6619, 6625.97, 6595.27, 6598.86],
                            },
                            {
                                x: new Date(15388254e5),
                                y: [6598.86, 6598.88, 6570, 6587.16],
                            },
                            {
                                x: new Date(15388272e5),
                                y: [6588.86, 6600, 6580, 6593.4],
                            },
                            {
                                x: new Date(1538829e6),
                                y: [6593.99, 6598.89, 6585, 6587.81],
                            },
                            {
                                x: new Date(15388308e5),
                                y: [6587.81, 6592.73, 6567.14, 6578],
                            },
                            {
                                x: new Date(15388326e5),
                                y: [6578.35, 6581.72, 6567.39, 6579],
                            },
                            {
                                x: new Date(15388344e5),
                                y: [6579.38, 6580.92, 6566.77, 6575.96],
                            },
                            {
                                x: new Date(15388362e5),
                                y: [6575.96, 6589, 6571.77, 6588.92],
                            },
                            {
                                x: new Date(1538838e6),
                                y: [6588.92, 6594, 6577.55, 6589.22],
                            },
                            {
                                x: new Date(15388398e5),
                                y: [6589.3, 6598.89, 6589.1, 6596.08],
                            },
                            {
                                x: new Date(15388416e5),
                                y: [6597.5, 6600, 6588.39, 6596.25],
                            },
                            {
                                x: new Date(15388434e5),
                                y: [6598.03, 6600, 6588.73, 6595.97],
                            },
                            {
                                x: new Date(15388452e5),
                                y: [6595.97, 6602.01, 6588.17, 6602],
                            },
                            {
                                x: new Date(1538847e6),
                                y: [6602, 6607, 6596.51, 6599.95],
                            },
                            {
                                x: new Date(15388488e5),
                                y: [6600.63, 6601.21, 6590.39, 6591.02],
                            },
                            {
                                x: new Date(15388506e5),
                                y: [6591.02, 6603.08, 6591, 6591],
                            },
                            {
                                x: new Date(15388524e5),
                                y: [6591, 6601.32, 6585, 6592],
                            },
                            {
                                x: new Date(15388542e5),
                                y: [6593.13, 6596.01, 6590, 6593.34],
                            },
                            {
                                x: new Date(1538856e6),
                                y: [6593.34, 6604.76, 6582.63, 6593.86],
                            },
                            {
                                x: new Date(15388578e5),
                                y: [6593.86, 6604.28, 6586.57, 6600.01],
                            },
                            {
                                x: new Date(15388596e5),
                                y: [6601.81, 6603.21, 6592.78, 6596.25],
                            },
                            {
                                x: new Date(15388614e5),
                                y: [6596.25, 6604.2, 6590, 6602.99],
                            },
                            {
                                x: new Date(15388632e5),
                                y: [6602.99, 6606, 6584.99, 6587.81],
                            },
                            {
                                x: new Date(1538865e6),
                                y: [6587.81, 6595, 6583.27, 6591.96],
                            },
                            {
                                x: new Date(15388668e5),
                                y: [6591.97, 6596.07, 6585, 6588.39],
                            },
                            {
                                x: new Date(15388686e5),
                                y: [6587.6, 6598.21, 6587.6, 6594.27],
                            },
                            {
                                x: new Date(15388704e5),
                                y: [6596.44, 6601, 6590, 6596.55],
                            },
                            {
                                x: new Date(15388722e5),
                                y: [6598.91, 6605, 6596.61, 6600.02],
                            },
                            {
                                x: new Date(1538874e6),
                                y: [6600.55, 6605, 6589.14, 6593.01],
                            },
                            {
                                x: new Date(15388758e5),
                                y: [6593.15, 6605, 6592, 6603.06],
                            },
                            {
                                x: new Date(15388776e5),
                                y: [6603.07, 6604.5, 6599.09, 6603.89],
                            },
                            {
                                x: new Date(15388794e5),
                                y: [6604.44, 6604.44, 6600, 6603.5],
                            },
                            {
                                x: new Date(15388812e5),
                                y: [6603.5, 6603.99, 6597.5, 6603.86],
                            },
                            {
                                x: new Date(1538883e6),
                                y: [6603.85, 6605, 6600, 6604.07],
                            },
                            {
                                x: new Date(15388848e5),
                                y: [6604.98, 6606, 6604.07, 6606],
                            },
                        ],
                    },
                ],
                colors: ["#2CA87F", "#DC2626"],
                fill: { type: "solid" },
                xaxis: { type: "datetime" },
                yaxis: { tooltip: { enabled: !0 } },
            });
    function x(e, a, t) {
        for (var n = 0, r = []; n < a; ) {
            var o = Math.floor(750 * Math.random()) + 1,
                i = Math.floor(Math.random() * (t.max - t.min + 1)) + t.min,
                s = Math.floor(61 * Math.random()) + 15;
            r.push([o, i, s]), n++;
        }
        return r;
    }
    function y(e, a, t) {
        for (var n = 0, r = []; n < a; ) {
            var o = Math.floor(Math.random() * (t.max - t.min + 1)) + t.min,
                i = Math.floor(61 * Math.random()) + 15;
            r.push([e, o, i]), (e += 864e5), n++;
        }
        return r;
    }
    function p(e, a, t) {
        for (var n = 0, r = []; n < a; ) {
            var o = Math.floor(Math.random() * (t.max - t.min + 1)) + t.min;
            r.push([e, o]), (e += 864e5), n++;
        }
        return r;
    }
    function u(e, a) {
        for (var t = 0, n = []; t < e; ) {
            var r = "w" + (t + 1).toString(),
                o = Math.floor(Math.random() * (a.max - a.min + 1)) + a.min;
            n.push({ x: r, y: o }), t++;
        }
        return n;
    }
    function w(e, a) {
        for (var t = 0, n = []; t < e; ) {
            var r = (t + 1).toString(),
                o = Math.floor(Math.random() * (a.max - a.min + 1)) + a.min;
            n.push({ x: r, y: o }), t++;
        }
        return n;
    }
    new ApexCharts(document.querySelector("#candlestick-chart-1"), c).render(),
        (e = {
            chart: { height: 350, type: "bubble" },
            dataLabels: { enabled: !1 },
            series: [
                {
                    name: "Bubble1",
                    data: x(new Date("11 Feb 2017 GMT").getTime(), 20, {
                        min: 10,
                        max: 60,
                    }),
                },
                {
                    name: "Bubble2",
                    data: x(new Date("11 Feb 2017 GMT").getTime(), 20, {
                        min: 10,
                        max: 60,
                    }),
                },
                {
                    name: "Bubble3",
                    data: x(new Date("11 Feb 2017 GMT").getTime(), 20, {
                        min: 10,
                        max: 60,
                    }),
                },
                {
                    name: "Bubble4",
                    data: x(new Date("11 Feb 2017 GMT").getTime(), 20, {
                        min: 10,
                        max: 60,
                    }),
                },
            ],
            colors: ["#14176C", "#2CA87F", "#E58A00", "#DC2626"],
            fill: { opacity: 0.8 },
            xaxis: { tickAmount: 12, type: "category" },
            yaxis: { max: 70 },
        }),
        new ApexCharts(document.querySelector("#bubble-chart-1"), e).render(),
        (c = {
            chart: { height: 350, type: "bubble" },
            dataLabels: { enabled: !1 },
            series: [
                {
                    name: "Product1",
                    data: y(new Date("11 Feb 2017 GMT").getTime(), 20, {
                        min: 10,
                        max: 60,
                    }),
                },
                {
                    name: "Product2",
                    data: y(new Date("11 Feb 2017 GMT").getTime(), 20, {
                        min: 10,
                        max: 60,
                    }),
                },
                {
                    name: "Product3",
                    data: y(new Date("11 Feb 2017 GMT").getTime(), 20, {
                        min: 10,
                        max: 60,
                    }),
                },
                {
                    name: "Product4",
                    data: y(new Date("11 Feb 2017 GMT").getTime(), 20, {
                        min: 10,
                        max: 60,
                    }),
                },
            ],
            fill: { type: "gradient" },
            colors: ["#14176C", "#2CA87F", "#E58A00", "#DC2626"],
            xaxis: { tickAmount: 12, type: "datetime", labels: { rotate: 0 } },
            yaxis: { max: 70 },
            theme: { palette: "palette2" },
        }),
        new ApexCharts(document.querySelector("#bubble-chart-2"), c).render(),
        (e = {
            chart: {
                height: 350,
                type: "scatter",
                zoom: { enabled: !0, type: "xy" },
            },
            colors: ["#14176C", "#2CA87F", "#DC2626", "#E58A00", "#13c2c2"],
            series: [
                {
                    name: "SAMPLE A",
                    data: [
                        [16.4, 5.4],
                        [21.7, 2],
                        [25.4, 3],
                        [19, 2],
                        [10.9, 1],
                        [13.6, 3.2],
                        [10.9, 7.4],
                        [10.9, 0],
                        [10.9, 8.2],
                        [16.4, 0],
                        [16.4, 1.8],
                        [13.6, 0.3],
                        [13.6, 0],
                        [29.9, 0],
                        [27.1, 2.3],
                        [16.4, 0],
                        [13.6, 3.7],
                        [10.9, 5.2],
                        [16.4, 6.5],
                        [10.9, 0],
                        [24.5, 7.1],
                        [10.9, 0],
                        [8.1, 4.7],
                        [19, 0],
                        [21.7, 1.8],
                        [27.1, 0],
                        [24.5, 0],
                        [27.1, 0],
                        [29.9, 1.5],
                        [27.1, 0.8],
                        [22.1, 2],
                    ],
                },
                {
                    name: "SAMPLE B",
                    data: [
                        [36.4, 13.4],
                        [1.7, 11],
                        [5.4, 8],
                        [9, 17],
                        [1.9, 4],
                        [3.6, 12.2],
                        [1.9, 14.4],
                        [1.9, 9],
                        [1.9, 13.2],
                        [1.4, 7],
                        [6.4, 8.8],
                        [3.6, 4.3],
                        [1.6, 10],
                        [9.9, 2],
                        [7.1, 15],
                        [1.4, 0],
                        [3.6, 13.7],
                        [1.9, 15.2],
                        [6.4, 16.5],
                        [0.9, 10],
                        [4.5, 17.1],
                        [10.9, 10],
                        [0.1, 14.7],
                        [9, 10],
                        [12.7, 11.8],
                        [2.1, 10],
                        [2.5, 10],
                        [27.1, 10],
                        [2.9, 11.5],
                        [7.1, 10.8],
                        [2.1, 12],
                    ],
                },
                {
                    name: "SAMPLE C",
                    data: [
                        [21.7, 3],
                        [23.6, 3.5],
                        [24.6, 3],
                        [29.9, 3],
                        [21.7, 20],
                        [23, 2],
                        [10.9, 3],
                        [28, 4],
                        [27.1, 0.3],
                        [16.4, 4],
                        [13.6, 0],
                        [19, 5],
                        [22.4, 3],
                        [24.5, 3],
                        [32.6, 3],
                        [27.1, 4],
                        [29.6, 6],
                        [31.6, 8],
                        [21.6, 5],
                        [20.9, 4],
                        [22.4, 0],
                        [32.6, 10.3],
                        [29.7, 20.8],
                        [24.5, 0.8],
                        [21.4, 0],
                        [21.7, 6.9],
                        [28.6, 7.7],
                        [15.4, 0],
                        [18.1, 0],
                        [33.4, 0],
                        [16.4, 0],
                    ],
                },
            ],
            xaxis: {
                tickAmount: 10,
                labels: {
                    formatter: function (e) {
                        return parseFloat(e).toFixed(1);
                    },
                },
            },
            yaxis: { tickAmount: 7 },
        }),
        new ApexCharts(document.querySelector("#scatter-chart-1"), e).render(),
        (c = {
            chart: { height: 350, type: "scatter", zoom: { type: "xy" } },
            series: [
                {
                    name: "TEAM 1",
                    data: p(new Date("11 Feb 2017 GMT").getTime(), 20, {
                        min: 10,
                        max: 60,
                    }),
                },
                {
                    name: "TEAM 2",
                    data: p(new Date("11 Feb 2017 GMT").getTime(), 20, {
                        min: 10,
                        max: 60,
                    }),
                },
                {
                    name: "TEAM 3",
                    data: p(new Date("11 Feb 2017 GMT").getTime(), 30, {
                        min: 10,
                        max: 60,
                    }),
                },
                {
                    name: "TEAM 4",
                    data: p(new Date("11 Feb 2017 GMT").getTime(), 10, {
                        min: 10,
                        max: 60,
                    }),
                },
                {
                    name: "TEAM 5",
                    data: p(new Date("11 Feb 2017 GMT").getTime(), 30, {
                        min: 10,
                        max: 60,
                    }),
                },
            ],
            dataLabels: { enabled: !1 },
            colors: ["#14176C", "#2CA87F", "#DC2626", "#E58A00", "#13c2c2"],
            grid: { xaxis: { showLines: !0 }, yaxis: { showLines: !0 } },
            legend: { offsetY: 8 },
            xaxis: { type: "datetime" },
            yaxis: { max: 70 },
        }),
        new ApexCharts(document.querySelector("#scatter-chart-2"), c).render(),
        (e = {
            chart: { height: 350, type: "heatmap" },
            dataLabels: { enabled: !1 },
            colors: ["#14176C"],
            series: [
                { name: "Metric1", data: u(12, { min: 0, max: 90 }) },
                { name: "Metric2", data: u(12, { min: 0, max: 90 }) },
                { name: "Metric3", data: u(12, { min: 0, max: 90 }) },
                { name: "Metric4", data: u(12, { min: 0, max: 90 }) },
                { name: "Metric5", data: u(12, { min: 0, max: 90 }) },
                { name: "Metric6", data: u(12, { min: 0, max: 90 }) },
                { name: "Metric7", data: u(12, { min: 0, max: 90 }) },
                { name: "Metric8", data: u(12, { min: 0, max: 90 }) },
                { name: "Metric9", data: u(12, { min: 0, max: 90 }) },
            ],
        }),
        new ApexCharts(document.querySelector("#heatmap-chart-1"), e).render(),
        (c = {
            chart: { height: 350, type: "heatmap" },
            stroke: { width: 0 },
            plotOptions: {
                heatmap: {
                    radius: 30,
                    enableShades: !1,
                    colorScale: {
                        ranges: [
                            { from: 0, to: 50, color: "#E58A00" },
                            { from: 51, to: 100, color: "#DC2626" },
                        ],
                    },
                },
            },
            dataLabels: { enabled: !0, style: { colors: ["#fff"] } },
            series: [
                { name: "Metric1", data: w(15, { min: 0, max: 90 }) },
                { name: "Metric2", data: w(15, { min: 0, max: 90 }) },
                { name: "Metric3", data: w(15, { min: 0, max: 90 }) },
                { name: "Metric4", data: w(15, { min: 0, max: 90 }) },
                { name: "Metric5", data: w(15, { min: 0, max: 90 }) },
                { name: "Metric6", data: w(15, { min: 0, max: 90 }) },
                { name: "Metric7", data: w(15, { min: 0, max: 90 }) },
                { name: "Metric8", data: w(15, { min: 0, max: 90 }) },
                { name: "Metric8", data: w(15, { min: 0, max: 90 }) },
            ],
            colors: ["#14176C", "#13c2c2", "#2CA87F", "#E58A00", "#DC2626"],
            xaxis: { type: "category" },
        }),
        new ApexCharts(document.querySelector("#heatmap-chart-2"), c).render(),
        new ApexCharts(document.querySelector("#pie-chart-1"), {
            chart: { height: 320, type: "pie" },
            labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
            series: [44, 55, 13, 43, 22],
            colors: ["#14176C", "#2CA87F", "#13c2c2", "#E58A00", "#DC2626"],
            legend: { show: !0, position: "bottom" },
            dataLabels: { enabled: !0, dropShadow: { enabled: !1 } },
            responsive: [
                {
                    breakpoint: 480,
                    options: { legend: { position: "bottom" } },
                },
            ],
        }).render(),
        new ApexCharts(document.querySelector("#pie-chart-2"), {
            chart: { height: 320, type: "donut" },
            series: [44, 55, 41, 17, 15],
            colors: ["#14176C", "#2CA87F", "#13c2c2", "#E58A00", "#DC2626"],
            legend: { show: !0, position: "bottom" },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: !0,
                            name: { show: !0 },
                            value: { show: !0 },
                        },
                    },
                },
            },
            dataLabels: { enabled: !0, dropShadow: { enabled: !1 } },
            responsive: [
                {
                    breakpoint: 480,
                    options: { legend: { position: "bottom" } },
                },
            ],
        }).render(),
        new ApexCharts(document.querySelector("#radialBar-chart-1"), {
            chart: { height: 350, type: "radialBar" },
            plotOptions: { radialBar: { hollow: { size: "70%" } } },
            colors: ["#14176C"],
            series: [70],
            labels: ["Cricket"],
        }).render(),
        (e = {
            chart: { height: 350, type: "radialBar" },
            plotOptions: {
                radialBar: {
                    offsetY: -30,
                    startAngle: 0,
                    endAngle: 270,
                    hollow: {
                        margin: 5,
                        size: "30%",
                        background: "transparent",
                        image: void 0,
                    },
                    dataLabels: { name: { show: !1 }, value: { show: !1 } },
                },
            },
            colors: ["#14176C", "#2CA87F", "#E58A00", "#DC2626"],
            series: [76, 67, 61, 90],
            labels: ["Vimeo", "Messenger", "Facebook", "LinkedIn"],
            legend: {
                show: !0,
                floating: !0,
                fontSize: "14px",
                position: "left",
                offsetX: 0,
                offsetY: 0,
                labels: { useSeriesColors: !0 },
                markers: { size: 0 },
                formatter: function (e, a) {
                    return e + ":  " + a.w.globals.series[a.seriesIndex];
                },
                itemMargin: { horizontal: 1 },
            },
            responsive: [
                { breakpoint: 480, options: { legend: { show: !1 } } },
            ],
        }),
        new ApexCharts(
            document.querySelector("#radialBar-chart-2"),
            e
        ).render(),
        new ApexCharts(document.querySelector("#radar-chart-1"), {
            chart: { height: 350, type: "radar" },
            series: [{ name: "Series 1", data: [20, 100, 40, 30, 50, 80, 33] }],
            labels: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ],
            plotOptions: {
                radar: {
                    size: 140,
                    polygons: {
                        strokeColor: "#f3f6ff",
                        fill: { colors: ["#f3f6ff", "#fff"] },
                    },
                },
            },
            colors: ["#DC2626"],
            markers: {
                size: 4,
                colors: ["#fff"],
                strokeColor: "#DC2626",
                strokeWidth: 2,
            },
            tooltip: {
                y: {
                    formatter: function (e) {
                        return e;
                    },
                },
            },
            yaxis: {
                tickAmount: 7,
                labels: {
                    formatter: function (e, a) {
                        return a % 2 == 0 ? e : "";
                    },
                },
            },
        }).render(),
        (c = new ApexCharts(document.querySelector("#radar-chart-2"), {
            chart: {
                height: 350,
                type: "radar",
                dropShadow: { enabled: !0, blur: 1, left: 1, top: 1 },
            },
            series: [
                { name: "Series 1", data: [80, 50, 30, 40, 100, 20] },
                { name: "Series 2", data: [20, 30, 40, 80, 20, 80] },
                { name: "Series 3", data: [44, 76, 78, 13, 43, 10] },
            ],
            colors: ["#14176C", "#2CA87F", "#DC2626"],
            stroke: { width: 0 },
            fill: { opacity: 0.7 },
            markers: { size: 0 },
            labels: ["2011", "2012", "2013", "2014", "2015", "2016"],
        })).render();
}, 700);
