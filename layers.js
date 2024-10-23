var wms_layers = [];


        var lyr_EsriTopographic_0 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_geo_packageson_la_countour_1 = new ol.format.GeoJSON();
var features_geo_packageson_la_countour_1 = format_geo_packageson_la_countour_1.readFeatures(json_geo_packageson_la_countour_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geo_packageson_la_countour_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geo_packageson_la_countour_1.addFeatures(features_geo_packageson_la_countour_1);
var lyr_geo_packageson_la_countour_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geo_packageson_la_countour_1, 
                style: style_geo_packageson_la_countour_1,
                popuplayertitle: "geo_package — son_la_countour",
                interactive: true,
                title: '<img src="styles/legend/geo_packageson_la_countour_1.png" /> geo_package — son_la_countour'
            });
var format_geo_packagegadm41_vnm_1_2 = new ol.format.GeoJSON();
var features_geo_packagegadm41_vnm_1_2 = format_geo_packagegadm41_vnm_1_2.readFeatures(json_geo_packagegadm41_vnm_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geo_packagegadm41_vnm_1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geo_packagegadm41_vnm_1_2.addFeatures(features_geo_packagegadm41_vnm_1_2);
var lyr_geo_packagegadm41_vnm_1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geo_packagegadm41_vnm_1_2, 
                style: style_geo_packagegadm41_vnm_1_2,
                popuplayertitle: "geo_package — gadm41_vnm_1",
                interactive: true,
                title: '<img src="styles/legend/geo_packagegadm41_vnm_1_2.png" /> geo_package — gadm41_vnm_1'
            });
var format_geo_packageaverage_rainfall_dryseason_3 = new ol.format.GeoJSON();
var features_geo_packageaverage_rainfall_dryseason_3 = format_geo_packageaverage_rainfall_dryseason_3.readFeatures(json_geo_packageaverage_rainfall_dryseason_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geo_packageaverage_rainfall_dryseason_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geo_packageaverage_rainfall_dryseason_3.addFeatures(features_geo_packageaverage_rainfall_dryseason_3);
var lyr_geo_packageaverage_rainfall_dryseason_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geo_packageaverage_rainfall_dryseason_3, 
                style: style_geo_packageaverage_rainfall_dryseason_3,
                popuplayertitle: "geo_package — average_rainfall_dryseason",
                interactive: true,
                title: '<img src="styles/legend/geo_packageaverage_rainfall_dryseason_3.png" /> geo_package — average_rainfall_dryseason'
            });

lyr_EsriTopographic_0.setVisible(true);lyr_geo_packageson_la_countour_1.setVisible(true);lyr_geo_packagegadm41_vnm_1_2.setVisible(true);lyr_geo_packageaverage_rainfall_dryseason_3.setVisible(true);
var layersList = [lyr_EsriTopographic_0,lyr_geo_packageson_la_countour_1,lyr_geo_packagegadm41_vnm_1_2,lyr_geo_packageaverage_rainfall_dryseason_3];
lyr_geo_packageson_la_countour_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_geo_packagegadm41_vnm_1_2.set('fieldAliases', {'fid': 'fid', 'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_geo_packageaverage_rainfall_dryseason_3.set('fieldAliases', {'fid': 'fid', 'STATION': 'STATION', 'STATION_NA': 'STATION_NA', 'ELEVATION': 'ELEVATION', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'DRY_AVG': 'DRY_AVG', 'dry_avg_mm': 'dry_avg_mm', });
lyr_geo_packageson_la_countour_1.set('fieldImages', {'fid': '', 'ID': '', 'ELEV': '', });
lyr_geo_packagegadm41_vnm_1_2.set('fieldImages', {'fid': '', 'GID_1': '', 'GID_0': '', 'COUNTRY': '', 'NAME_1': '', 'VARNAME_1': '', 'NL_NAME_1': '', 'TYPE_1': '', 'ENGTYPE_1': '', 'CC_1': '', 'HASC_1': '', 'ISO_1': '', });
lyr_geo_packageaverage_rainfall_dryseason_3.set('fieldImages', {'fid': '', 'STATION': '', 'STATION_NA': '', 'ELEVATION': '', 'LATITUDE': '', 'LONGITUDE': '', 'DRY_AVG': '', 'dry_avg_mm': '', });
lyr_geo_packageson_la_countour_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'inline label - always visible', });
lyr_geo_packagegadm41_vnm_1_2.set('fieldLabels', {'fid': 'no label', 'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'inline label - always visible', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_geo_packageaverage_rainfall_dryseason_3.set('fieldLabels', {'fid': 'no label', 'STATION': 'inline label - always visible', 'STATION_NA': 'no label', 'ELEVATION': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'DRY_AVG': 'inline label - always visible', 'dry_avg_mm': 'inline label - always visible', });
lyr_geo_packageaverage_rainfall_dryseason_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});