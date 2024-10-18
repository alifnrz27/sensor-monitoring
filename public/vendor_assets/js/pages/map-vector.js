"use strict";
new jsVectorMap({
    selector: "#world-map-markers",
    map: "world",
    markersSelectable: !0,
    markers: [
        { coords: [-14.235, -51.9253] },
        { coords: [35.8617, 104.1954] },
        { coords: [61, 105] },
        { coords: [26.8206, 30.8025] },
    ],
    markerStyle: { initial: { fill: "#3f4d67" }, hover: { fill: "#14176C" } },
    markerLabelStyle: {
        initial: {
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            fontWeight: 500,
            fill: "#3f4d67",
        },
    },
}),
    new jsVectorMap({ selector: "#world-merc", map: "world_merc" }),
    new jsVectorMap({ selector: "#canada", map: "canada" }),
    new jsVectorMap({ selector: "#iraq", map: "iraq" }),
    new jsVectorMap({ selector: "#italy", map: "italy" }),
    new jsVectorMap({ selector: "#russia", map: "russia" }),
    new jsVectorMap({ selector: "#spain", map: "spain" }),
    new jsVectorMap({ selector: "#us-aea-en", map: "us_aea_en" }),
    new jsVectorMap({ selector: "#us-lcc-en", map: "us_lcc_en" }),
    new jsVectorMap({ selector: "#us-merc-en", map: "us_merc_en" }),
    new jsVectorMap({ selector: "#us-mill-en", map: "us_mill_en" });
