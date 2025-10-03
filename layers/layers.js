var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_DarkMatter_1 = new ol.layer.Tile({
            'title': 'Dark Matter',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });

        var lyr_Positron_2 = new ol.layer.Tile({
            'title': 'Positron',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_StormPipes_3 = new ol.format.GeoJSON();
var features_StormPipes_3 = format_StormPipes_3.readFeatures(json_StormPipes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StormPipes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StormPipes_3.addFeatures(features_StormPipes_3);
var lyr_StormPipes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StormPipes_3, 
                style: style_StormPipes_3,
                popuplayertitle: 'Storm Pipes',
                interactive: true,
    title: 'Storm Pipes<br />\
    <img src="styles/legend/StormPipes_3_0.png" /> Before 1930<br />\
    <img src="styles/legend/StormPipes_3_1.png" /> 1930 - 1940<br />\
    <img src="styles/legend/StormPipes_3_2.png" /> 1940 - 1950<br />\
    <img src="styles/legend/StormPipes_3_3.png" /> 1950 - 1960<br />\
    <img src="styles/legend/StormPipes_3_4.png" /> 1960 - 1970<br />\
    <img src="styles/legend/StormPipes_3_5.png" /> 1970 - 1980<br />\
    <img src="styles/legend/StormPipes_3_6.png" /> 1980 - 1990<br />\
    <img src="styles/legend/StormPipes_3_7.png" /> 1990 - 2000<br />\
    <img src="styles/legend/StormPipes_3_8.png" /> 2000 - 2010<br />\
    <img src="styles/legend/StormPipes_3_9.png" /> 2010 - 2020<br />\
    <img src="styles/legend/StormPipes_3_10.png" /> 2020 - 2023<br />' });
var format_SanitaryPipes_4 = new ol.format.GeoJSON();
var features_SanitaryPipes_4 = format_SanitaryPipes_4.readFeatures(json_SanitaryPipes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SanitaryPipes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SanitaryPipes_4.addFeatures(features_SanitaryPipes_4);
var lyr_SanitaryPipes_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SanitaryPipes_4, 
                style: style_SanitaryPipes_4,
                popuplayertitle: 'Sanitary Pipes',
                interactive: true,
    title: 'Sanitary Pipes<br />\
    <img src="styles/legend/SanitaryPipes_4_0.png" /> Before 1930<br />\
    <img src="styles/legend/SanitaryPipes_4_1.png" /> 1930 - 1940<br />\
    <img src="styles/legend/SanitaryPipes_4_2.png" /> 1940 - 1950<br />\
    <img src="styles/legend/SanitaryPipes_4_3.png" /> 1950 - 1960<br />\
    <img src="styles/legend/SanitaryPipes_4_4.png" /> 1960 - 1970<br />\
    <img src="styles/legend/SanitaryPipes_4_5.png" /> 1970 - 1980<br />\
    <img src="styles/legend/SanitaryPipes_4_6.png" /> 1980 - 1990<br />\
    <img src="styles/legend/SanitaryPipes_4_7.png" /> 1990 - 2000<br />\
    <img src="styles/legend/SanitaryPipes_4_8.png" /> 2000 - 2010<br />\
    <img src="styles/legend/SanitaryPipes_4_9.png" /> 2010 - 2020<br />\
    <img src="styles/legend/SanitaryPipes_4_10.png" /> 2020 - 2023<br />' });
var format_CombinedPipes_5 = new ol.format.GeoJSON();
var features_CombinedPipes_5 = format_CombinedPipes_5.readFeatures(json_CombinedPipes_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CombinedPipes_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CombinedPipes_5.addFeatures(features_CombinedPipes_5);
var lyr_CombinedPipes_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CombinedPipes_5, 
                style: style_CombinedPipes_5,
                popuplayertitle: 'Combined Pipes',
                interactive: true,
    title: 'Combined Pipes<br />\
    <img src="styles/legend/CombinedPipes_5_0.png" /> Before 1930<br />\
    <img src="styles/legend/CombinedPipes_5_1.png" /> 1930 - 1940<br />\
    <img src="styles/legend/CombinedPipes_5_2.png" /> 1940 - 1950<br />\
    <img src="styles/legend/CombinedPipes_5_3.png" /> 1950 - 1960<br />\
    <img src="styles/legend/CombinedPipes_5_4.png" /> 1960 - 1970<br />\
    <img src="styles/legend/CombinedPipes_5_5.png" /> 1970 - 1980<br />\
    <img src="styles/legend/CombinedPipes_5_6.png" /> 1980 - 1990<br />\
    <img src="styles/legend/CombinedPipes_5_7.png" /> 1990 - 2000<br />\
    <img src="styles/legend/CombinedPipes_5_8.png" /> 2000 - 2010<br />\
    <img src="styles/legend/CombinedPipes_5_9.png" /> 2010 - 2020<br />\
    <img src="styles/legend/CombinedPipes_5_10.png" /> 2020 - 2023<br />' });
var format_WaterMains_6 = new ol.format.GeoJSON();
var features_WaterMains_6 = format_WaterMains_6.readFeatures(json_WaterMains_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterMains_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterMains_6.addFeatures(features_WaterMains_6);
var lyr_WaterMains_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterMains_6, 
                style: style_WaterMains_6,
                popuplayertitle: 'Water Mains',
                interactive: true,
    title: 'Water Mains<br />\
    <img src="styles/legend/WaterMains_6_0.png" /> Before 1930<br />\
    <img src="styles/legend/WaterMains_6_1.png" /> 1930 - 1940<br />\
    <img src="styles/legend/WaterMains_6_2.png" /> 1940 - 1950<br />\
    <img src="styles/legend/WaterMains_6_3.png" /> 1950 - 1960<br />\
    <img src="styles/legend/WaterMains_6_4.png" /> 1960 - 1970<br />\
    <img src="styles/legend/WaterMains_6_5.png" /> 1970 - 1980<br />\
    <img src="styles/legend/WaterMains_6_6.png" /> 1980 - 1990<br />\
    <img src="styles/legend/WaterMains_6_7.png" /> 1990 - 2000<br />\
    <img src="styles/legend/WaterMains_6_8.png" /> 2000 - 2010<br />\
    <img src="styles/legend/WaterMains_6_9.png" /> 2010 - 2020<br />\
    <img src="styles/legend/WaterMains_6_10.png" /> 2020 - 2023<br />' });

lyr_GoogleHybrid_0.setVisible(false);lyr_DarkMatter_1.setVisible(true);lyr_Positron_2.setVisible(false);lyr_StormPipes_3.setVisible(true);lyr_SanitaryPipes_4.setVisible(true);lyr_CombinedPipes_5.setVisible(true);lyr_WaterMains_6.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_DarkMatter_1,lyr_Positron_2,lyr_StormPipes_3,lyr_SanitaryPipes_4,lyr_CombinedPipes_5,lyr_WaterMains_6];
lyr_StormPipes_3.set('fieldAliases', {'fid': 'fid', 'INSTALL_YEAR': 'INSTALL_YEAR', 'WIDTH': 'WIDTH', 'MATERIAL': 'MATERIAL', });
lyr_SanitaryPipes_4.set('fieldAliases', {'fid': 'fid', 'INSTALL_YEAR': 'INSTALL_YEAR', 'WIDTH': 'WIDTH', 'MATERIAL': 'MATERIAL', });
lyr_CombinedPipes_5.set('fieldAliases', {'fid': 'fid', 'INSTALL_YEAR': 'INSTALL_YEAR', 'WIDTH': 'WIDTH', 'MATERIAL': 'MATERIAL', });
lyr_WaterMains_6.set('fieldAliases', {'fid': 'fid', 'INSTALL_YEAR': 'INSTALL_YEAR', 'MATERIAL': 'MATERIAL', 'WIDTH': 'WIDTH', });
lyr_StormPipes_3.set('fieldImages', {'fid': 'TextEdit', 'INSTALL_YEAR': 'Range', 'WIDTH': 'Range', 'MATERIAL': 'TextEdit', });
lyr_SanitaryPipes_4.set('fieldImages', {'fid': 'TextEdit', 'INSTALL_YEAR': 'Range', 'WIDTH': 'Range', 'MATERIAL': 'TextEdit', });
lyr_CombinedPipes_5.set('fieldImages', {'fid': 'TextEdit', 'INSTALL_YEAR': 'Range', 'WIDTH': 'Range', 'MATERIAL': 'TextEdit', });
lyr_WaterMains_6.set('fieldImages', {'fid': 'TextEdit', 'INSTALL_YEAR': 'Range', 'MATERIAL': 'TextEdit', 'WIDTH': 'Range', });
lyr_StormPipes_3.set('fieldLabels', {'fid': 'hidden field', 'INSTALL_YEAR': 'inline label - always visible', 'WIDTH': 'inline label - always visible', 'MATERIAL': 'inline label - always visible', });
lyr_SanitaryPipes_4.set('fieldLabels', {'fid': 'hidden field', 'INSTALL_YEAR': 'inline label - always visible', 'WIDTH': 'inline label - always visible', 'MATERIAL': 'inline label - always visible', });
lyr_CombinedPipes_5.set('fieldLabels', {'fid': 'hidden field', 'INSTALL_YEAR': 'inline label - always visible', 'WIDTH': 'inline label - always visible', 'MATERIAL': 'inline label - always visible', });
lyr_WaterMains_6.set('fieldLabels', {'fid': 'hidden field', 'INSTALL_YEAR': 'inline label - always visible', 'MATERIAL': 'inline label - always visible', 'WIDTH': 'inline label - always visible', });
lyr_WaterMains_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});