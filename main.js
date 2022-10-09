var vg_map = "map.json";
var vg_bump = "bump.json";
vegaEmbed("#map_chart", vg_map).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#bump_chart", vg_bump).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);