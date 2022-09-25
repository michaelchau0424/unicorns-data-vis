var vg_map = "map.json";
vegaEmbed("#map_chart", vg_map).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);