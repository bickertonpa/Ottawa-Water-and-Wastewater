var wms_layers = [];


        var lyr_Positronnolabels_0 = new ol.layer.Tile({
            'title': 'Positron [no labels]',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });

        var lyr_DarkMatternolabels_1 = new ol.layer.Tile({
            'title': 'Dark Matter [no labels]',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png'
            })
        });
var format_place_neighbourhood_2 = new ol.format.GeoJSON();
var features_place_neighbourhood_2 = format_place_neighbourhood_2.readFeatures(json_place_neighbourhood_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_place_neighbourhood_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_place_neighbourhood_2.addFeatures(features_place_neighbourhood_2);
var lyr_place_neighbourhood_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_place_neighbourhood_2, 
                style: style_place_neighbourhood_2,
                popuplayertitle: 'place_neighbourhood',
                interactive: false,
                title: 'place_neighbourhood'
            });
var format_Simple_Reduced_WaterMainsLocal_3 = new ol.format.GeoJSON();
var features_Simple_Reduced_WaterMainsLocal_3 = format_Simple_Reduced_WaterMainsLocal_3.readFeatures(json_Simple_Reduced_WaterMainsLocal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Simple_Reduced_WaterMainsLocal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Simple_Reduced_WaterMainsLocal_3.addFeatures(features_Simple_Reduced_WaterMainsLocal_3);
var lyr_Simple_Reduced_WaterMainsLocal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Simple_Reduced_WaterMainsLocal_3, 
                style: style_Simple_Reduced_WaterMainsLocal_3,
                popuplayertitle: 'Water Mains (Local)',
                interactive: true,
    title: 'Water Mains (Local)<br />\
    <img src="styles/legend/Simple_Reduced_WaterMainsLocal_3_0.png" /> Before 1930<br />\
    <img src="styles/legend/Simple_Reduced_WaterMainsLocal_3_1.png" /> 1930 - 1940<br />\
    <img src="styles/legend/Simple_Reduced_WaterMainsLocal_3_2.png" /> 1940 - 1950<br />\
    <img src="styles/legend/Simple_Reduced_WaterMainsLocal_3_3.png" /> 1950 - 1960<br />\
    <img src="styles/legend/Simple_Reduced_WaterMainsLocal_3_4.png" /> 1960 - 1970<br />\
    <img src="styles/legend/Simple_Reduced_WaterMainsLocal_3_5.png" /> 1970 - 1980<br />\
    <img src="styles/legend/Simple_Reduced_WaterMainsLocal_3_6.png" /> 1980 - 1990<br />\
    <img src="styles/legend/Simple_Reduced_WaterMainsLocal_3_7.png" /> 1990 - 2000<br />\
    <img src="styles/legend/Simple_Reduced_WaterMainsLocal_3_8.png" /> 2000 - 2010<br />\
    <img src="styles/legend/Simple_Reduced_WaterMainsLocal_3_9.png" /> 2010 - 2020<br />\
    <img src="styles/legend/Simple_Reduced_WaterMainsLocal_3_10.png" /> 2020 - 2023<br />' });
var format_Simple_Reduced_StormPipesLocal_4 = new ol.format.GeoJSON();
var features_Simple_Reduced_StormPipesLocal_4 = format_Simple_Reduced_StormPipesLocal_4.readFeatures(json_Simple_Reduced_StormPipesLocal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Simple_Reduced_StormPipesLocal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Simple_Reduced_StormPipesLocal_4.addFeatures(features_Simple_Reduced_StormPipesLocal_4);
var lyr_Simple_Reduced_StormPipesLocal_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Simple_Reduced_StormPipesLocal_4, 
                style: style_Simple_Reduced_StormPipesLocal_4,
                popuplayertitle: 'Storm Pipes (Local)',
                interactive: true,
    title: 'Storm Pipes (Local)<br />\
    <img src="styles/legend/Simple_Reduced_StormPipesLocal_4_0.png" /> Before 1930<br />\
    <img src="styles/legend/Simple_Reduced_StormPipesLocal_4_1.png" /> 1930 - 1940<br />\
    <img src="styles/legend/Simple_Reduced_StormPipesLocal_4_2.png" /> 1940 - 1950<br />\
    <img src="styles/legend/Simple_Reduced_StormPipesLocal_4_3.png" /> 1950 - 1960<br />\
    <img src="styles/legend/Simple_Reduced_StormPipesLocal_4_4.png" /> 1960 - 1970<br />\
    <img src="styles/legend/Simple_Reduced_StormPipesLocal_4_5.png" /> 1970 - 1980<br />\
    <img src="styles/legend/Simple_Reduced_StormPipesLocal_4_6.png" /> 1980 - 1990<br />\
    <img src="styles/legend/Simple_Reduced_StormPipesLocal_4_7.png" /> 1990 - 2000<br />\
    <img src="styles/legend/Simple_Reduced_StormPipesLocal_4_8.png" /> 2000 - 2010<br />\
    <img src="styles/legend/Simple_Reduced_StormPipesLocal_4_9.png" /> 2010 - 2020<br />\
    <img src="styles/legend/Simple_Reduced_StormPipesLocal_4_10.png" /> 2020 - 2023<br />' });
var format_Simple_Reduced_SanitaryPipesLocal_5 = new ol.format.GeoJSON();
var features_Simple_Reduced_SanitaryPipesLocal_5 = format_Simple_Reduced_SanitaryPipesLocal_5.readFeatures(json_Simple_Reduced_SanitaryPipesLocal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Simple_Reduced_SanitaryPipesLocal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Simple_Reduced_SanitaryPipesLocal_5.addFeatures(features_Simple_Reduced_SanitaryPipesLocal_5);
var lyr_Simple_Reduced_SanitaryPipesLocal_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Simple_Reduced_SanitaryPipesLocal_5, 
                style: style_Simple_Reduced_SanitaryPipesLocal_5,
                popuplayertitle: 'Sanitary Pipes (Local)',
                interactive: true,
    title: 'Sanitary Pipes (Local)<br />\
    <img src="styles/legend/Simple_Reduced_SanitaryPipesLocal_5_0.png" /> Before 1930<br />\
    <img src="styles/legend/Simple_Reduced_SanitaryPipesLocal_5_1.png" /> 1930 - 1940<br />\
    <img src="styles/legend/Simple_Reduced_SanitaryPipesLocal_5_2.png" /> 1940 - 1950<br />\
    <img src="styles/legend/Simple_Reduced_SanitaryPipesLocal_5_3.png" /> 1950 - 1960<br />\
    <img src="styles/legend/Simple_Reduced_SanitaryPipesLocal_5_4.png" /> 1960 - 1970<br />\
    <img src="styles/legend/Simple_Reduced_SanitaryPipesLocal_5_5.png" /> 1970 - 1980<br />\
    <img src="styles/legend/Simple_Reduced_SanitaryPipesLocal_5_6.png" /> 1980 - 1990<br />\
    <img src="styles/legend/Simple_Reduced_SanitaryPipesLocal_5_7.png" /> 1990 - 2000<br />\
    <img src="styles/legend/Simple_Reduced_SanitaryPipesLocal_5_8.png" /> 2000 - 2010<br />\
    <img src="styles/legend/Simple_Reduced_SanitaryPipesLocal_5_9.png" /> 2010 - 2020<br />\
    <img src="styles/legend/Simple_Reduced_SanitaryPipesLocal_5_10.png" /> 2020 - 2023<br />' });
var format_Simple_Reduced_CombinedPipesLocal_6 = new ol.format.GeoJSON();
var features_Simple_Reduced_CombinedPipesLocal_6 = format_Simple_Reduced_CombinedPipesLocal_6.readFeatures(json_Simple_Reduced_CombinedPipesLocal_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Simple_Reduced_CombinedPipesLocal_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Simple_Reduced_CombinedPipesLocal_6.addFeatures(features_Simple_Reduced_CombinedPipesLocal_6);
var lyr_Simple_Reduced_CombinedPipesLocal_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Simple_Reduced_CombinedPipesLocal_6, 
                style: style_Simple_Reduced_CombinedPipesLocal_6,
                popuplayertitle: 'Combined Pipes (Local)',
                interactive: true,
    title: 'Combined Pipes (Local)<br />\
    <img src="styles/legend/Simple_Reduced_CombinedPipesLocal_6_0.png" /> Before 1930<br />\
    <img src="styles/legend/Simple_Reduced_CombinedPipesLocal_6_1.png" /> 1930 - 1940<br />\
    <img src="styles/legend/Simple_Reduced_CombinedPipesLocal_6_2.png" /> 1940 - 1950<br />\
    <img src="styles/legend/Simple_Reduced_CombinedPipesLocal_6_3.png" /> 1950 - 1960<br />\
    <img src="styles/legend/Simple_Reduced_CombinedPipesLocal_6_4.png" /> 1960 - 1970<br />\
    <img src="styles/legend/Simple_Reduced_CombinedPipesLocal_6_5.png" /> 1970 - 1980<br />\
    <img src="styles/legend/Simple_Reduced_CombinedPipesLocal_6_6.png" /> 1980 - 1990<br />\
    <img src="styles/legend/Simple_Reduced_CombinedPipesLocal_6_7.png" /> 1990 - 2000<br />\
    <img src="styles/legend/Simple_Reduced_CombinedPipesLocal_6_8.png" /> 2000 - 2010<br />\
    <img src="styles/legend/Simple_Reduced_CombinedPipesLocal_6_9.png" /> 2010 - 2020<br />\
    <img src="styles/legend/Simple_Reduced_CombinedPipesLocal_6_10.png" /> 2020 - 2023<br />' });

lyr_Positronnolabels_0.setVisible(true);lyr_DarkMatternolabels_1.setVisible(true);lyr_place_neighbourhood_2.setVisible(true);lyr_Simple_Reduced_WaterMainsLocal_3.setVisible(true);lyr_Simple_Reduced_StormPipesLocal_4.setVisible(true);lyr_Simple_Reduced_SanitaryPipesLocal_5.setVisible(true);lyr_Simple_Reduced_CombinedPipesLocal_6.setVisible(true);
var layersList = [lyr_Positronnolabels_0,lyr_DarkMatternolabels_1,lyr_place_neighbourhood_2,lyr_Simple_Reduced_WaterMainsLocal_3,lyr_Simple_Reduced_StormPipesLocal_4,lyr_Simple_Reduced_SanitaryPipesLocal_5,lyr_Simple_Reduced_CombinedPipesLocal_6];
lyr_place_neighbourhood_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'place': 'place', 'barrier': 'barrier', 'power': 'power', 'direction': 'direction', 'traffic_signals:sound': 'traffic_signals:sound', 'crossing:markings': 'crossing:markings', 'survey:date': 'survey:date', 'species:en': 'species:en', 'species': 'species', 'natural': 'natural', 'leaf_type': 'leaf_type', 'leaf_cycle': 'leaf_cycle', 'genus:en': 'genus:en', 'genus': 'genus', 'circumference': 'circumference', 'alt_name': 'alt_name', 'name:en': 'name:en', 'ref': 'ref', 'public_transport': 'public_transport', 'operator': 'operator', 'network': 'network', 'bus': 'bus', 'bicycle': 'bicycle', 'name:fr': 'name:fr', 'crossing:island': 'crossing:island', 'is_in': 'is_in', 'noref': 'noref', 'highway': 'highway', 'crossing': 'crossing', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'name': 'name', });
lyr_Simple_Reduced_WaterMainsLocal_3.set('fieldAliases', {'fid': 'fid', 'INSTALL_YEAR': 'INSTALL_YEAR', 'MATERIAL': 'MATERIAL', 'WIDTH': 'WIDTH', });
lyr_Simple_Reduced_StormPipesLocal_4.set('fieldAliases', {'fid': 'fid', 'INSTALL_YEAR': 'INSTALL_YEAR', 'WIDTH': 'WIDTH', 'MATERIAL': 'MATERIAL', });
lyr_Simple_Reduced_SanitaryPipesLocal_5.set('fieldAliases', {'fid': 'fid', 'INSTALL_YEAR': 'INSTALL_YEAR', 'WIDTH': 'WIDTH', 'MATERIAL': 'MATERIAL', });
lyr_Simple_Reduced_CombinedPipesLocal_6.set('fieldAliases', {'fid': 'fid', 'INSTALL_YEAR': 'INSTALL_YEAR', 'WIDTH': 'WIDTH', 'MATERIAL': 'MATERIAL', });
lyr_place_neighbourhood_2.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'place': 'TextEdit', 'barrier': 'TextEdit', 'power': 'TextEdit', 'direction': 'TextEdit', 'traffic_signals:sound': 'TextEdit', 'crossing:markings': 'TextEdit', 'survey:date': 'TextEdit', 'species:en': 'TextEdit', 'species': 'TextEdit', 'natural': 'TextEdit', 'leaf_type': 'TextEdit', 'leaf_cycle': 'TextEdit', 'genus:en': 'TextEdit', 'genus': 'TextEdit', 'circumference': 'TextEdit', 'alt_name': 'TextEdit', 'name:en': 'TextEdit', 'ref': 'TextEdit', 'public_transport': 'TextEdit', 'operator': 'TextEdit', 'network': 'TextEdit', 'bus': 'TextEdit', 'bicycle': 'TextEdit', 'name:fr': 'TextEdit', 'crossing:island': 'TextEdit', 'is_in': 'TextEdit', 'noref': 'TextEdit', 'highway': 'TextEdit', 'crossing': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'name': 'TextEdit', });
lyr_Simple_Reduced_WaterMainsLocal_3.set('fieldImages', {'fid': 'TextEdit', 'INSTALL_YEAR': 'Range', 'MATERIAL': 'TextEdit', 'WIDTH': 'Range', });
lyr_Simple_Reduced_StormPipesLocal_4.set('fieldImages', {'fid': 'TextEdit', 'INSTALL_YEAR': 'Range', 'WIDTH': 'Range', 'MATERIAL': 'TextEdit', });
lyr_Simple_Reduced_SanitaryPipesLocal_5.set('fieldImages', {'fid': 'TextEdit', 'INSTALL_YEAR': 'Range', 'WIDTH': 'Range', 'MATERIAL': 'TextEdit', });
lyr_Simple_Reduced_CombinedPipesLocal_6.set('fieldImages', {'fid': 'TextEdit', 'INSTALL_YEAR': 'Range', 'WIDTH': 'Range', 'MATERIAL': 'TextEdit', });
lyr_place_neighbourhood_2.set('fieldLabels', {'full_id': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'osm_type': 'inline label - always visible', 'place': 'inline label - always visible', 'barrier': 'inline label - always visible', 'power': 'inline label - always visible', 'direction': 'inline label - always visible', 'traffic_signals:sound': 'inline label - always visible', 'crossing:markings': 'inline label - always visible', 'survey:date': 'inline label - always visible', 'species:en': 'inline label - always visible', 'species': 'inline label - always visible', 'natural': 'inline label - always visible', 'leaf_type': 'inline label - always visible', 'leaf_cycle': 'inline label - always visible', 'genus:en': 'inline label - always visible', 'genus': 'inline label - always visible', 'circumference': 'inline label - always visible', 'alt_name': 'inline label - always visible', 'name:en': 'inline label - always visible', 'ref': 'inline label - always visible', 'public_transport': 'inline label - always visible', 'operator': 'inline label - always visible', 'network': 'inline label - always visible', 'bus': 'inline label - always visible', 'bicycle': 'inline label - always visible', 'name:fr': 'inline label - always visible', 'crossing:island': 'inline label - always visible', 'is_in': 'inline label - always visible', 'noref': 'inline label - always visible', 'highway': 'inline label - always visible', 'crossing': 'inline label - always visible', 'wikipedia': 'inline label - always visible', 'wikidata': 'inline label - always visible', 'name': 'inline label - always visible', });
lyr_Simple_Reduced_WaterMainsLocal_3.set('fieldLabels', {'fid': 'hidden field', 'INSTALL_YEAR': 'inline label - always visible', 'MATERIAL': 'inline label - always visible', 'WIDTH': 'inline label - always visible', });
lyr_Simple_Reduced_StormPipesLocal_4.set('fieldLabels', {'fid': 'hidden field', 'INSTALL_YEAR': 'inline label - always visible', 'WIDTH': 'inline label - always visible', 'MATERIAL': 'inline label - always visible', });
lyr_Simple_Reduced_SanitaryPipesLocal_5.set('fieldLabels', {'fid': 'hidden field', 'INSTALL_YEAR': 'inline label - always visible', 'WIDTH': 'inline label - always visible', 'MATERIAL': 'inline label - always visible', });
lyr_Simple_Reduced_CombinedPipesLocal_6.set('fieldLabels', {'fid': 'hidden field', 'INSTALL_YEAR': 'inline label - always visible', 'WIDTH': 'inline label - always visible', 'MATERIAL': 'inline label - always visible', });
lyr_Simple_Reduced_CombinedPipesLocal_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});