var wms_layers = [];


        var lyr_Positronnolabels_0 = new ol.layer.Tile({
            'title': 'Positron [no labels]',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });
var format_place_neighbourhood_1 = new ol.format.GeoJSON();
var features_place_neighbourhood_1 = format_place_neighbourhood_1.readFeatures(json_place_neighbourhood_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_place_neighbourhood_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_place_neighbourhood_1.addFeatures(features_place_neighbourhood_1);
var lyr_place_neighbourhood_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_place_neighbourhood_1, 
                style: style_place_neighbourhood_1,
                popuplayertitle: 'place_neighbourhood',
                interactive: false,
                title: 'place_neighbourhood'
            });
var format_WaterMainsLocal_2 = new ol.format.GeoJSON();
var features_WaterMainsLocal_2 = format_WaterMainsLocal_2.readFeatures(json_WaterMainsLocal_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterMainsLocal_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterMainsLocal_2.addFeatures(features_WaterMainsLocal_2);
var lyr_WaterMainsLocal_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterMainsLocal_2, 
                style: style_WaterMainsLocal_2,
                popuplayertitle: 'Water Mains (Local)',
                interactive: true,
    title: 'Water Mains (Local)<br />\
    <img src="styles/legend/WaterMainsLocal_2_0.png" /> Before 1930<br />\
    <img src="styles/legend/WaterMainsLocal_2_1.png" /> 1930 - 1940<br />\
    <img src="styles/legend/WaterMainsLocal_2_2.png" /> 1940 - 1950<br />\
    <img src="styles/legend/WaterMainsLocal_2_3.png" /> 1950 - 1960<br />\
    <img src="styles/legend/WaterMainsLocal_2_4.png" /> 1960 - 1970<br />\
    <img src="styles/legend/WaterMainsLocal_2_5.png" /> 1970 - 1980<br />\
    <img src="styles/legend/WaterMainsLocal_2_6.png" /> 1980 - 1990<br />\
    <img src="styles/legend/WaterMainsLocal_2_7.png" /> 1990 - 2000<br />\
    <img src="styles/legend/WaterMainsLocal_2_8.png" /> 2000 - 2010<br />\
    <img src="styles/legend/WaterMainsLocal_2_9.png" /> 2010 - 2020<br />\
    <img src="styles/legend/WaterMainsLocal_2_10.png" /> 2020 - 2023<br />' });
var format_StormPipesLocal_3 = new ol.format.GeoJSON();
var features_StormPipesLocal_3 = format_StormPipesLocal_3.readFeatures(json_StormPipesLocal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StormPipesLocal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StormPipesLocal_3.addFeatures(features_StormPipesLocal_3);
var lyr_StormPipesLocal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StormPipesLocal_3, 
                style: style_StormPipesLocal_3,
                popuplayertitle: 'Storm Pipes (Local)',
                interactive: true,
    title: 'Storm Pipes (Local)<br />\
    <img src="styles/legend/StormPipesLocal_3_0.png" /> Before 1930<br />\
    <img src="styles/legend/StormPipesLocal_3_1.png" /> 1930 - 1940<br />\
    <img src="styles/legend/StormPipesLocal_3_2.png" /> 1940 - 1950<br />\
    <img src="styles/legend/StormPipesLocal_3_3.png" /> 1950 - 1960<br />\
    <img src="styles/legend/StormPipesLocal_3_4.png" /> 1960 - 1970<br />\
    <img src="styles/legend/StormPipesLocal_3_5.png" /> 1970 - 1980<br />\
    <img src="styles/legend/StormPipesLocal_3_6.png" /> 1980 - 1990<br />\
    <img src="styles/legend/StormPipesLocal_3_7.png" /> 1990 - 2000<br />\
    <img src="styles/legend/StormPipesLocal_3_8.png" /> 2000 - 2010<br />\
    <img src="styles/legend/StormPipesLocal_3_9.png" /> 2010 - 2020<br />\
    <img src="styles/legend/StormPipesLocal_3_10.png" /> 2020 - 2023<br />' });
var format_SanitaryPipesLocal_4 = new ol.format.GeoJSON();
var features_SanitaryPipesLocal_4 = format_SanitaryPipesLocal_4.readFeatures(json_SanitaryPipesLocal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SanitaryPipesLocal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SanitaryPipesLocal_4.addFeatures(features_SanitaryPipesLocal_4);
var lyr_SanitaryPipesLocal_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SanitaryPipesLocal_4, 
                style: style_SanitaryPipesLocal_4,
                popuplayertitle: 'Sanitary Pipes (Local)',
                interactive: true,
    title: 'Sanitary Pipes (Local)<br />\
    <img src="styles/legend/SanitaryPipesLocal_4_0.png" /> Before 1930<br />\
    <img src="styles/legend/SanitaryPipesLocal_4_1.png" /> 1930 - 1940<br />\
    <img src="styles/legend/SanitaryPipesLocal_4_2.png" /> 1940 - 1950<br />\
    <img src="styles/legend/SanitaryPipesLocal_4_3.png" /> 1950 - 1960<br />\
    <img src="styles/legend/SanitaryPipesLocal_4_4.png" /> 1960 - 1970<br />\
    <img src="styles/legend/SanitaryPipesLocal_4_5.png" /> 1970 - 1980<br />\
    <img src="styles/legend/SanitaryPipesLocal_4_6.png" /> 1980 - 1990<br />\
    <img src="styles/legend/SanitaryPipesLocal_4_7.png" /> 1990 - 2000<br />\
    <img src="styles/legend/SanitaryPipesLocal_4_8.png" /> 2000 - 2010<br />\
    <img src="styles/legend/SanitaryPipesLocal_4_9.png" /> 2010 - 2020<br />\
    <img src="styles/legend/SanitaryPipesLocal_4_10.png" /> 2020 - 2023<br />' });
var format_CombinedPipesLocal_5 = new ol.format.GeoJSON();
var features_CombinedPipesLocal_5 = format_CombinedPipesLocal_5.readFeatures(json_CombinedPipesLocal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CombinedPipesLocal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CombinedPipesLocal_5.addFeatures(features_CombinedPipesLocal_5);
var lyr_CombinedPipesLocal_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CombinedPipesLocal_5, 
                style: style_CombinedPipesLocal_5,
                popuplayertitle: 'Combined Pipes (Local)',
                interactive: true,
    title: 'Combined Pipes (Local)<br />\
    <img src="styles/legend/CombinedPipesLocal_5_0.png" /> Before 1930<br />\
    <img src="styles/legend/CombinedPipesLocal_5_1.png" /> 1930 - 1940<br />\
    <img src="styles/legend/CombinedPipesLocal_5_2.png" /> 1940 - 1950<br />\
    <img src="styles/legend/CombinedPipesLocal_5_3.png" /> 1950 - 1960<br />\
    <img src="styles/legend/CombinedPipesLocal_5_4.png" /> 1960 - 1970<br />\
    <img src="styles/legend/CombinedPipesLocal_5_5.png" /> 1970 - 1980<br />\
    <img src="styles/legend/CombinedPipesLocal_5_6.png" /> 1980 - 1990<br />\
    <img src="styles/legend/CombinedPipesLocal_5_7.png" /> 1990 - 2000<br />\
    <img src="styles/legend/CombinedPipesLocal_5_8.png" /> 2000 - 2010<br />\
    <img src="styles/legend/CombinedPipesLocal_5_9.png" /> 2010 - 2020<br />\
    <img src="styles/legend/CombinedPipesLocal_5_10.png" /> 2020 - 2023<br />' });

lyr_Positronnolabels_0.setVisible(true);lyr_place_neighbourhood_1.setVisible(true);lyr_WaterMainsLocal_2.setVisible(true);lyr_StormPipesLocal_3.setVisible(true);lyr_SanitaryPipesLocal_4.setVisible(true);lyr_CombinedPipesLocal_5.setVisible(true);
var layersList = [lyr_Positronnolabels_0,lyr_place_neighbourhood_1,lyr_WaterMainsLocal_2,lyr_StormPipesLocal_3,lyr_SanitaryPipesLocal_4,lyr_CombinedPipesLocal_5];
lyr_place_neighbourhood_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'place': 'place', 'barrier': 'barrier', 'power': 'power', 'direction': 'direction', 'traffic_signals:sound': 'traffic_signals:sound', 'crossing:markings': 'crossing:markings', 'survey:date': 'survey:date', 'species:en': 'species:en', 'species': 'species', 'natural': 'natural', 'leaf_type': 'leaf_type', 'leaf_cycle': 'leaf_cycle', 'genus:en': 'genus:en', 'genus': 'genus', 'circumference': 'circumference', 'alt_name': 'alt_name', 'name:en': 'name:en', 'ref': 'ref', 'public_transport': 'public_transport', 'operator': 'operator', 'network': 'network', 'bus': 'bus', 'bicycle': 'bicycle', 'name:fr': 'name:fr', 'crossing:island': 'crossing:island', 'is_in': 'is_in', 'noref': 'noref', 'highway': 'highway', 'crossing': 'crossing', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'name': 'name', });
lyr_WaterMainsLocal_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SUBTYPE': 'SUBTYPE', 'STRUCT_ID': 'STRUCT_ID', 'STRUCT_TYPE': 'STRUCT_TYPE', 'OWNERSHIP': 'OWNERSHIP', 'INSTALL_YEAR': 'INSTALL_YEAR', 'INTERNAL_DIAMETER': 'INTERNAL_DIAMETER', 'MATERIAL': 'MATERIAL', 'LIFE_CYCLE_STATUS': 'LIFE_CYCLE_STATUS', 'Shape_Length': 'Shape_Length', 'Length_Pipe': 'Length_Pipe', 'WIDTH': 'WIDTH', });
lyr_StormPipesLocal_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SUBTYPE': 'SUBTYPE', 'STRUCT_ID': 'STRUCT_ID', 'STRUCT_TYPE': 'STRUCT_TYPE', 'OWNERSHIP': 'OWNERSHIP', 'INSTALL_YEAR': 'INSTALL_YEAR', 'WIDTH': 'WIDTH', 'MATERIAL': 'MATERIAL', 'INVERT_UPSTREAM': 'INVERT_UPSTREAM', 'INVERT_DOWNSTREAM': 'INVERT_DOWNSTREAM', 'FUNCTION': 'FUNCTION', 'LIFE_CYCLE_STATUS': 'LIFE_CYCLE_STATUS', 'Shape_Length': 'Shape_Length', 'LENGTHASBUILT': 'LENGTH_AS_BUILT_1', 'Length_Pipe': 'Length_Pipe', });
lyr_SanitaryPipesLocal_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SUBTYPE': 'SUBTYPE', 'STRUCT_ID': 'STRUCT_ID', 'STRUCT_TYPE': 'STRUCT_TYPE', 'OWNERSHIP': 'OWNERSHIP', 'INSTALL_YEAR': 'INSTALL_YEAR', 'WIDTH': 'WIDTH', 'MATERIAL': 'MATERIAL', 'INVERT_UPSTREAM': 'INVERT_UPSTREAM', 'INVERT_DOWNSTREAM': 'INVERT_DOWNSTREAM', 'FUNCTION': 'FUNCTION', 'LIFE_CYCLE_STATUS': 'LIFE_CYCLE_STATUS', 'Shape_Length': 'Shape_Length', 'LENGTHASBUILT': 'LENGTH_AS_BUILT_1', 'Pipe_Length': 'Pipe_Length', });
lyr_CombinedPipesLocal_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SUBTYPE': 'SUBTYPE', 'STRUCT_ID': 'STRUCT_ID', 'STRUCT_TYPE': 'STRUCT_TYPE', 'OWNERSHIP': 'OWNERSHIP', 'INSTALL_YEAR': 'INSTALL_YEAR', 'WIDTH': 'WIDTH', 'MATERIAL': 'MATERIAL', 'INVERT_UPSTREAM': 'INVERT_UPSTREAM', 'INVERT_DOWNSTREAM': 'INVERT_DOWNSTREAM', 'FUNCTION': 'FUNCTION', 'LIFE_CYCLE_STATUS': 'LIFE_CYCLE_STATUS', 'Shape_Length': 'Shape_Length', 'LENGTHASBUILT': 'LENGTH_AS_BUILT_1', 'Pipe_Length': 'Pipe_Length', });
lyr_place_neighbourhood_1.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'place': 'TextEdit', 'barrier': 'TextEdit', 'power': 'TextEdit', 'direction': 'TextEdit', 'traffic_signals:sound': 'TextEdit', 'crossing:markings': 'TextEdit', 'survey:date': 'TextEdit', 'species:en': 'TextEdit', 'species': 'TextEdit', 'natural': 'TextEdit', 'leaf_type': 'TextEdit', 'leaf_cycle': 'TextEdit', 'genus:en': 'TextEdit', 'genus': 'TextEdit', 'circumference': 'TextEdit', 'alt_name': 'TextEdit', 'name:en': 'TextEdit', 'ref': 'TextEdit', 'public_transport': 'TextEdit', 'operator': 'TextEdit', 'network': 'TextEdit', 'bus': 'TextEdit', 'bicycle': 'TextEdit', 'name:fr': 'TextEdit', 'crossing:island': 'TextEdit', 'is_in': 'TextEdit', 'noref': 'TextEdit', 'highway': 'TextEdit', 'crossing': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'name': 'TextEdit', });
lyr_WaterMainsLocal_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SUBTYPE': 'TextEdit', 'STRUCT_ID': 'TextEdit', 'STRUCT_TYPE': 'TextEdit', 'OWNERSHIP': 'TextEdit', 'INSTALL_YEAR': 'Range', 'INTERNAL_DIAMETER': 'TextEdit', 'MATERIAL': 'TextEdit', 'LIFE_CYCLE_STATUS': 'TextEdit', 'Shape_Length': 'TextEdit', 'Length_Pipe': 'Range', 'WIDTH': 'Range', });
lyr_StormPipesLocal_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SUBTYPE': 'TextEdit', 'STRUCT_ID': 'TextEdit', 'STRUCT_TYPE': 'TextEdit', 'OWNERSHIP': 'TextEdit', 'INSTALL_YEAR': 'Range', 'WIDTH': 'Range', 'MATERIAL': 'TextEdit', 'INVERT_UPSTREAM': 'TextEdit', 'INVERT_DOWNSTREAM': 'TextEdit', 'FUNCTION': 'TextEdit', 'LIFE_CYCLE_STATUS': 'TextEdit', 'Shape_Length': 'TextEdit', 'LENGTHASBUILT': 'TextEdit', 'Length_Pipe': 'Range', });
lyr_SanitaryPipesLocal_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SUBTYPE': 'TextEdit', 'STRUCT_ID': 'TextEdit', 'STRUCT_TYPE': 'TextEdit', 'OWNERSHIP': 'TextEdit', 'INSTALL_YEAR': 'Range', 'WIDTH': 'Range', 'MATERIAL': 'TextEdit', 'INVERT_UPSTREAM': 'TextEdit', 'INVERT_DOWNSTREAM': 'TextEdit', 'FUNCTION': 'TextEdit', 'LIFE_CYCLE_STATUS': 'TextEdit', 'Shape_Length': 'TextEdit', 'LENGTHASBUILT': 'TextEdit', 'Pipe_Length': 'Range', });
lyr_CombinedPipesLocal_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SUBTYPE': 'TextEdit', 'STRUCT_ID': 'TextEdit', 'STRUCT_TYPE': 'TextEdit', 'OWNERSHIP': 'TextEdit', 'INSTALL_YEAR': 'Range', 'WIDTH': 'Range', 'MATERIAL': 'TextEdit', 'INVERT_UPSTREAM': 'TextEdit', 'INVERT_DOWNSTREAM': 'TextEdit', 'FUNCTION': 'TextEdit', 'LIFE_CYCLE_STATUS': 'TextEdit', 'Shape_Length': 'TextEdit', 'LENGTHASBUILT': 'TextEdit', 'Pipe_Length': 'Range', });
lyr_place_neighbourhood_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'place': 'no label', 'barrier': 'no label', 'power': 'no label', 'direction': 'no label', 'traffic_signals:sound': 'no label', 'crossing:markings': 'no label', 'survey:date': 'no label', 'species:en': 'no label', 'species': 'no label', 'natural': 'no label', 'leaf_type': 'no label', 'leaf_cycle': 'no label', 'genus:en': 'no label', 'genus': 'no label', 'circumference': 'no label', 'alt_name': 'no label', 'name:en': 'no label', 'ref': 'no label', 'public_transport': 'no label', 'operator': 'no label', 'network': 'no label', 'bus': 'no label', 'bicycle': 'no label', 'name:fr': 'no label', 'crossing:island': 'no label', 'is_in': 'no label', 'noref': 'no label', 'highway': 'no label', 'crossing': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'name': 'no label', });
lyr_WaterMainsLocal_2.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SUBTYPE': 'hidden field', 'STRUCT_ID': 'hidden field', 'STRUCT_TYPE': 'inline label - always visible', 'OWNERSHIP': 'hidden field', 'INSTALL_YEAR': 'inline label - always visible', 'INTERNAL_DIAMETER': 'hidden field', 'MATERIAL': 'inline label - visible with data', 'LIFE_CYCLE_STATUS': 'hidden field', 'Shape_Length': 'hidden field', 'Length_Pipe': 'hidden field', 'WIDTH': 'inline label - always visible', });
lyr_StormPipesLocal_3.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SUBTYPE': 'hidden field', 'STRUCT_ID': 'hidden field', 'STRUCT_TYPE': 'inline label - always visible', 'OWNERSHIP': 'hidden field', 'INSTALL_YEAR': 'inline label - always visible', 'WIDTH': 'inline label - always visible', 'MATERIAL': 'inline label - visible with data', 'INVERT_UPSTREAM': 'hidden field', 'INVERT_DOWNSTREAM': 'hidden field', 'FUNCTION': 'hidden field', 'LIFE_CYCLE_STATUS': 'hidden field', 'Shape_Length': 'hidden field', 'LENGTHASBUILT': 'hidden field', 'Length_Pipe': 'hidden field', });
lyr_SanitaryPipesLocal_4.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SUBTYPE': 'inline label - always visible', 'STRUCT_ID': 'hidden field', 'STRUCT_TYPE': 'hidden field', 'OWNERSHIP': 'hidden field', 'INSTALL_YEAR': 'inline label - always visible', 'WIDTH': 'inline label - always visible', 'MATERIAL': 'inline label - visible with data', 'INVERT_UPSTREAM': 'hidden field', 'INVERT_DOWNSTREAM': 'hidden field', 'FUNCTION': 'hidden field', 'LIFE_CYCLE_STATUS': 'hidden field', 'Shape_Length': 'hidden field', 'LENGTHASBUILT': 'hidden field', 'Pipe_Length': 'hidden field', });
lyr_CombinedPipesLocal_5.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SUBTYPE': 'hidden field', 'STRUCT_ID': 'hidden field', 'STRUCT_TYPE': 'inline label - always visible', 'OWNERSHIP': 'hidden field', 'INSTALL_YEAR': 'inline label - always visible', 'WIDTH': 'inline label - always visible', 'MATERIAL': 'inline label - visible with data', 'INVERT_UPSTREAM': 'hidden field', 'INVERT_DOWNSTREAM': 'hidden field', 'FUNCTION': 'hidden field', 'LIFE_CYCLE_STATUS': 'hidden field', 'Shape_Length': 'hidden field', 'LENGTHASBUILT': 'hidden field', 'Pipe_Length': 'hidden field', });
lyr_CombinedPipesLocal_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});