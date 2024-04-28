var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ken_admbnda_adm1_iebc_20191031_1 = new ol.format.GeoJSON();
var features_ken_admbnda_adm1_iebc_20191031_1 = format_ken_admbnda_adm1_iebc_20191031_1.readFeatures(json_ken_admbnda_adm1_iebc_20191031_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ken_admbnda_adm1_iebc_20191031_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ken_admbnda_adm1_iebc_20191031_1.addFeatures(features_ken_admbnda_adm1_iebc_20191031_1);
var lyr_ken_admbnda_adm1_iebc_20191031_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ken_admbnda_adm1_iebc_20191031_1, 
                style: style_ken_admbnda_adm1_iebc_20191031_1,
                popuplayertitle: "ken_admbnda_adm1_iebc_20191031",
                interactive: true,
                title: '<img src="styles/legend/ken_admbnda_adm1_iebc_20191031_1.png" /> ken_admbnda_adm1_iebc_20191031'
            });
var format_kenya_2 = new ol.format.GeoJSON();
var features_kenya_2 = format_kenya_2.readFeatures(json_kenya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kenya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kenya_2.addFeatures(features_kenya_2);
var lyr_kenya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kenya_2, 
                style: style_kenya_2,
                popuplayertitle: "kenya",
                interactive: true,
                title: '<img src="styles/legend/kenya_2.png" /> kenya'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ken_admbnda_adm1_iebc_20191031_1.setVisible(true);lyr_kenya_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ken_admbnda_adm1_iebc_20191031_1,lyr_kenya_2];
lyr_ken_admbnda_adm1_iebc_20191031_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_kenya_2.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'completene': 'completene', 'amenity': 'amenity', 'healthcare': 'healthcare', 'name': 'name', 'operator': 'operator', 'source': 'source', 'speciality': 'speciality', 'operator_t': 'operator_t', 'operationa': 'operationa', 'opening_ho': 'opening_ho', 'beds': 'beds', 'staff_doct': 'staff_doct', 'staff_nurs': 'staff_nurs', 'health_ame': 'health_ame', 'dispensing': 'dispensing', 'wheelchair': 'wheelchair', 'emergency': 'emergency', 'insurance': 'insurance', 'water_sour': 'water_sour', 'electricit': 'electricit', 'is_in_heal': 'is_in_heal', 'is_in_he_1': 'is_in_he_1', 'url': 'url', 'addr_house': 'addr_house', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'changeset_': 'changeset_', 'changese_1': 'changese_1', 'changese_2': 'changese_2', 'uuid': 'uuid', });
lyr_ken_admbnda_adm1_iebc_20191031_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_kenya_2.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'completene': 'TextEdit', 'amenity': 'TextEdit', 'healthcare': 'TextEdit', 'name': 'TextEdit', 'operator': 'TextEdit', 'source': 'TextEdit', 'speciality': 'TextEdit', 'operator_t': 'TextEdit', 'operationa': 'TextEdit', 'opening_ho': 'TextEdit', 'beds': 'TextEdit', 'staff_doct': 'TextEdit', 'staff_nurs': 'TextEdit', 'health_ame': 'TextEdit', 'dispensing': 'TextEdit', 'wheelchair': 'TextEdit', 'emergency': 'TextEdit', 'insurance': 'TextEdit', 'water_sour': 'TextEdit', 'electricit': 'TextEdit', 'is_in_heal': 'TextEdit', 'is_in_he_1': 'TextEdit', 'url': 'TextEdit', 'addr_house': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'changeset_': 'TextEdit', 'changese_1': 'TextEdit', 'changese_2': 'DateTime', 'uuid': 'TextEdit', });
lyr_ken_admbnda_adm1_iebc_20191031_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'inline label - always visible', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_kenya_2.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'completene': 'no label', 'amenity': 'inline label - always visible', 'healthcare': 'inline label - always visible', 'name': 'inline label - always visible', 'operator': 'no label', 'source': 'no label', 'speciality': 'no label', 'operator_t': 'no label', 'operationa': 'no label', 'opening_ho': 'no label', 'beds': 'no label', 'staff_doct': 'no label', 'staff_nurs': 'no label', 'health_ame': 'no label', 'dispensing': 'no label', 'wheelchair': 'no label', 'emergency': 'no label', 'insurance': 'no label', 'water_sour': 'no label', 'electricit': 'no label', 'is_in_heal': 'no label', 'is_in_he_1': 'no label', 'url': 'no label', 'addr_house': 'no label', 'addr_stree': 'no label', 'addr_postc': 'no label', 'addr_city': 'no label', 'changeset_': 'no label', 'changese_1': 'no label', 'changese_2': 'no label', 'uuid': 'no label', });
lyr_kenya_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});