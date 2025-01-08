var wms_layers = [];


        var lyr_Google_0 = new ol.layer.Tile({
            'title': 'Google',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_Lueng_1 = new ol.format.GeoJSON();
var features_Lueng_1 = format_Lueng_1.readFeatures(json_Lueng_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lueng_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lueng_1.addFeatures(features_Lueng_1);
var lyr_Lueng_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lueng_1, 
                style: style_Lueng_1,
                popuplayertitle: 'Lueng',
                interactive: true,
                title: '<img src="styles/legend/Lueng_1.png" /> Lueng'
            });
var format_Sungai_2 = new ol.format.GeoJSON();
var features_Sungai_2 = format_Sungai_2.readFeatures(json_Sungai_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_2.addFeatures(features_Sungai_2);
var lyr_Sungai_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_2, 
                style: style_Sungai_2,
                popuplayertitle: 'Sungai',
                interactive: true,
                title: '<img src="styles/legend/Sungai_2.png" /> Sungai'
            });
var format_BatasGampong_3 = new ol.format.GeoJSON();
var features_BatasGampong_3 = format_BatasGampong_3.readFeatures(json_BatasGampong_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasGampong_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasGampong_3.addFeatures(features_BatasGampong_3);
var lyr_BatasGampong_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasGampong_3, 
                style: style_BatasGampong_3,
                popuplayertitle: 'Batas Gampong',
                interactive: true,
                title: '<img src="styles/legend/BatasGampong_3.png" /> Batas Gampong'
            });
var format_Gang_4 = new ol.format.GeoJSON();
var features_Gang_4 = format_Gang_4.readFeatures(json_Gang_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gang_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gang_4.addFeatures(features_Gang_4);
var lyr_Gang_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gang_4, 
                style: style_Gang_4,
                popuplayertitle: 'Gang',
                interactive: true,
                title: '<img src="styles/legend/Gang_4.png" /> Gang'
            });
var format_Got_5 = new ol.format.GeoJSON();
var features_Got_5 = format_Got_5.readFeatures(json_Got_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Got_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Got_5.addFeatures(features_Got_5);
var lyr_Got_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Got_5, 
                style: style_Got_5,
                popuplayertitle: 'Got',
                interactive: true,
                title: '<img src="styles/legend/Got_5.png" /> Got'
            });
var format_Jalan_6 = new ol.format.GeoJSON();
var features_Jalan_6 = format_Jalan_6.readFeatures(json_Jalan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_6.addFeatures(features_Jalan_6);
var lyr_Jalan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_6, 
                style: style_Jalan_6,
                popuplayertitle: 'Jalan',
                interactive: true,
                title: '<img src="styles/legend/Jalan_6.png" /> Jalan'
            });
var format_Lorong_7 = new ol.format.GeoJSON();
var features_Lorong_7 = format_Lorong_7.readFeatures(json_Lorong_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lorong_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lorong_7.addFeatures(features_Lorong_7);
var lyr_Lorong_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lorong_7, 
                style: style_Lorong_7,
                popuplayertitle: 'Lorong',
                interactive: true,
                title: '<img src="styles/legend/Lorong_7.png" /> Lorong'
            });
var format_Tambak_8 = new ol.format.GeoJSON();
var features_Tambak_8 = format_Tambak_8.readFeatures(json_Tambak_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tambak_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tambak_8.addFeatures(features_Tambak_8);
var lyr_Tambak_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tambak_8, 
                style: style_Tambak_8,
                popuplayertitle: 'Tambak',
                interactive: true,
                title: '<img src="styles/legend/Tambak_8.png" /> Tambak'
            });
var format_TanahKosong_9 = new ol.format.GeoJSON();
var features_TanahKosong_9 = format_TanahKosong_9.readFeatures(json_TanahKosong_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TanahKosong_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TanahKosong_9.addFeatures(features_TanahKosong_9);
var lyr_TanahKosong_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TanahKosong_9, 
                style: style_TanahKosong_9,
                popuplayertitle: 'Tanah Kosong',
                interactive: true,
                title: '<img src="styles/legend/TanahKosong_9.png" /> Tanah Kosong'
            });
var format_Toko_10 = new ol.format.GeoJSON();
var features_Toko_10 = format_Toko_10.readFeatures(json_Toko_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toko_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toko_10.addFeatures(features_Toko_10);
var lyr_Toko_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Toko_10, 
                style: style_Toko_10,
                popuplayertitle: 'Toko',
                interactive: true,
                title: '<img src="styles/legend/Toko_10.png" /> Toko'
            });
var format_Bengkel_11 = new ol.format.GeoJSON();
var features_Bengkel_11 = format_Bengkel_11.readFeatures(json_Bengkel_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bengkel_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bengkel_11.addFeatures(features_Bengkel_11);
var lyr_Bengkel_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bengkel_11, 
                style: style_Bengkel_11,
                popuplayertitle: 'Bengkel',
                interactive: true,
                title: '<img src="styles/legend/Bengkel_11.png" /> Bengkel'
            });
var format_Kantor_12 = new ol.format.GeoJSON();
var features_Kantor_12 = format_Kantor_12.readFeatures(json_Kantor_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kantor_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kantor_12.addFeatures(features_Kantor_12);
var lyr_Kantor_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kantor_12, 
                style: style_Kantor_12,
                popuplayertitle: 'Kantor',
                interactive: true,
                title: '<img src="styles/legend/Kantor_12.png" /> Kantor'
            });
var format_Kebun_13 = new ol.format.GeoJSON();
var features_Kebun_13 = format_Kebun_13.readFeatures(json_Kebun_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kebun_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kebun_13.addFeatures(features_Kebun_13);
var lyr_Kebun_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kebun_13, 
                style: style_Kebun_13,
                popuplayertitle: 'Kebun',
                interactive: true,
                title: '<img src="styles/legend/Kebun_13.png" /> Kebun'
            });
var format_Kuburan_14 = new ol.format.GeoJSON();
var features_Kuburan_14 = format_Kuburan_14.readFeatures(json_Kuburan_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kuburan_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuburan_14.addFeatures(features_Kuburan_14);
var lyr_Kuburan_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kuburan_14, 
                style: style_Kuburan_14,
                popuplayertitle: 'Kuburan',
                interactive: true,
                title: '<img src="styles/legend/Kuburan_14.png" /> Kuburan'
            });
var format_Lapangan_15 = new ol.format.GeoJSON();
var features_Lapangan_15 = format_Lapangan_15.readFeatures(json_Lapangan_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapangan_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_15.addFeatures(features_Lapangan_15);
var lyr_Lapangan_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_15, 
                style: style_Lapangan_15,
                popuplayertitle: 'Lapangan',
                interactive: true,
                title: '<img src="styles/legend/Lapangan_15.png" /> Lapangan'
            });
var format_Masjid_16 = new ol.format.GeoJSON();
var features_Masjid_16 = format_Masjid_16.readFeatures(json_Masjid_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Masjid_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Masjid_16.addFeatures(features_Masjid_16);
var lyr_Masjid_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Masjid_16, 
                style: style_Masjid_16,
                popuplayertitle: 'Masjid',
                interactive: true,
                title: '<img src="styles/legend/Masjid_16.png" /> Masjid'
            });
var format_Rangkang_17 = new ol.format.GeoJSON();
var features_Rangkang_17 = format_Rangkang_17.readFeatures(json_Rangkang_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rangkang_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rangkang_17.addFeatures(features_Rangkang_17);
var lyr_Rangkang_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rangkang_17, 
                style: style_Rangkang_17,
                popuplayertitle: 'Rangkang',
                interactive: true,
                title: '<img src="styles/legend/Rangkang_17.png" /> Rangkang'
            });
var format_Ruko_18 = new ol.format.GeoJSON();
var features_Ruko_18 = format_Ruko_18.readFeatures(json_Ruko_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruko_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruko_18.addFeatures(features_Ruko_18);
var lyr_Ruko_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruko_18, 
                style: style_Ruko_18,
                popuplayertitle: 'Ruko',
                interactive: true,
                title: '<img src="styles/legend/Ruko_18.png" /> Ruko'
            });
var format_Rumah_19 = new ol.format.GeoJSON();
var features_Rumah_19 = format_Rumah_19.readFeatures(json_Rumah_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_19.addFeatures(features_Rumah_19);
var lyr_Rumah_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_19, 
                style: style_Rumah_19,
                popuplayertitle: 'Rumah',
                interactive: true,
                title: '<img src="styles/legend/Rumah_19.png" /> Rumah'
            });
var format_Sekolah_20 = new ol.format.GeoJSON();
var features_Sekolah_20 = format_Sekolah_20.readFeatures(json_Sekolah_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sekolah_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_20.addFeatures(features_Sekolah_20);
var lyr_Sekolah_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sekolah_20, 
                style: style_Sekolah_20,
                popuplayertitle: 'Sekolah',
                interactive: true,
                title: '<img src="styles/legend/Sekolah_20.png" /> Sekolah'
            });
var format_Tanah_KosongPoint_21 = new ol.format.GeoJSON();
var features_Tanah_KosongPoint_21 = format_Tanah_KosongPoint_21.readFeatures(json_Tanah_KosongPoint_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tanah_KosongPoint_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tanah_KosongPoint_21.addFeatures(features_Tanah_KosongPoint_21);
var lyr_Tanah_KosongPoint_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tanah_KosongPoint_21, 
                style: style_Tanah_KosongPoint_21,
                popuplayertitle: 'Tanah_Kosong Point',
                interactive: true,
                title: '<img src="styles/legend/Tanah_KosongPoint_21.png" /> Tanah_Kosong Point'
            });
var format_Toko_KedaiPoint_22 = new ol.format.GeoJSON();
var features_Toko_KedaiPoint_22 = format_Toko_KedaiPoint_22.readFeatures(json_Toko_KedaiPoint_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toko_KedaiPoint_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toko_KedaiPoint_22.addFeatures(features_Toko_KedaiPoint_22);
var lyr_Toko_KedaiPoint_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Toko_KedaiPoint_22, 
                style: style_Toko_KedaiPoint_22,
                popuplayertitle: 'Toko_Kedai Point',
                interactive: true,
                title: '<img src="styles/legend/Toko_KedaiPoint_22.png" /> Toko_Kedai Point'
            });
var format_BengkelPoint_23 = new ol.format.GeoJSON();
var features_BengkelPoint_23 = format_BengkelPoint_23.readFeatures(json_BengkelPoint_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BengkelPoint_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BengkelPoint_23.addFeatures(features_BengkelPoint_23);
var lyr_BengkelPoint_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BengkelPoint_23, 
                style: style_BengkelPoint_23,
                popuplayertitle: 'Bengkel Point',
                interactive: true,
                title: '<img src="styles/legend/BengkelPoint_23.png" /> Bengkel Point'
            });
var format_KantorPoint_24 = new ol.format.GeoJSON();
var features_KantorPoint_24 = format_KantorPoint_24.readFeatures(json_KantorPoint_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KantorPoint_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KantorPoint_24.addFeatures(features_KantorPoint_24);
var lyr_KantorPoint_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KantorPoint_24, 
                style: style_KantorPoint_24,
                popuplayertitle: 'Kantor Point',
                interactive: true,
                title: '<img src="styles/legend/KantorPoint_24.png" /> Kantor Point'
            });
var format_KebunPoint_25 = new ol.format.GeoJSON();
var features_KebunPoint_25 = format_KebunPoint_25.readFeatures(json_KebunPoint_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KebunPoint_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KebunPoint_25.addFeatures(features_KebunPoint_25);
var lyr_KebunPoint_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KebunPoint_25, 
                style: style_KebunPoint_25,
                popuplayertitle: 'Kebun Point',
                interactive: true,
                title: '<img src="styles/legend/KebunPoint_25.png" /> Kebun Point'
            });
var format_KuburanPoint_26 = new ol.format.GeoJSON();
var features_KuburanPoint_26 = format_KuburanPoint_26.readFeatures(json_KuburanPoint_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KuburanPoint_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KuburanPoint_26.addFeatures(features_KuburanPoint_26);
var lyr_KuburanPoint_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KuburanPoint_26, 
                style: style_KuburanPoint_26,
                popuplayertitle: 'Kuburan Point',
                interactive: true,
                title: '<img src="styles/legend/KuburanPoint_26.png" /> Kuburan Point'
            });
var format_LapanganPoint_27 = new ol.format.GeoJSON();
var features_LapanganPoint_27 = format_LapanganPoint_27.readFeatures(json_LapanganPoint_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapanganPoint_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LapanganPoint_27.addFeatures(features_LapanganPoint_27);
var lyr_LapanganPoint_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LapanganPoint_27, 
                style: style_LapanganPoint_27,
                popuplayertitle: 'Lapangan Point',
                interactive: true,
                title: '<img src="styles/legend/LapanganPoint_27.png" /> Lapangan Point'
            });
var format_MasjidPoint_28 = new ol.format.GeoJSON();
var features_MasjidPoint_28 = format_MasjidPoint_28.readFeatures(json_MasjidPoint_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MasjidPoint_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasjidPoint_28.addFeatures(features_MasjidPoint_28);
var lyr_MasjidPoint_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasjidPoint_28, 
                style: style_MasjidPoint_28,
                popuplayertitle: 'Masjid Point',
                interactive: true,
                title: '<img src="styles/legend/MasjidPoint_28.png" /> Masjid Point'
            });
var format_RangkangPoint_29 = new ol.format.GeoJSON();
var features_RangkangPoint_29 = format_RangkangPoint_29.readFeatures(json_RangkangPoint_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RangkangPoint_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RangkangPoint_29.addFeatures(features_RangkangPoint_29);
var lyr_RangkangPoint_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RangkangPoint_29, 
                style: style_RangkangPoint_29,
                popuplayertitle: 'Rangkang Point',
                interactive: true,
                title: '<img src="styles/legend/RangkangPoint_29.png" /> Rangkang Point'
            });
var format_RukoPoint_30 = new ol.format.GeoJSON();
var features_RukoPoint_30 = format_RukoPoint_30.readFeatures(json_RukoPoint_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RukoPoint_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RukoPoint_30.addFeatures(features_RukoPoint_30);
var lyr_RukoPoint_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RukoPoint_30, 
                style: style_RukoPoint_30,
                popuplayertitle: 'Ruko Point',
                interactive: true,
                title: '<img src="styles/legend/RukoPoint_30.png" /> Ruko Point'
            });
var format_RumahPoint_31 = new ol.format.GeoJSON();
var features_RumahPoint_31 = format_RumahPoint_31.readFeatures(json_RumahPoint_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahPoint_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahPoint_31.addFeatures(features_RumahPoint_31);
var lyr_RumahPoint_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahPoint_31, 
                style: style_RumahPoint_31,
                popuplayertitle: 'Rumah Point',
                interactive: true,
                title: '<img src="styles/legend/RumahPoint_31.png" /> Rumah Point'
            });
var format_SekolahPoint_32 = new ol.format.GeoJSON();
var features_SekolahPoint_32 = format_SekolahPoint_32.readFeatures(json_SekolahPoint_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SekolahPoint_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SekolahPoint_32.addFeatures(features_SekolahPoint_32);
var lyr_SekolahPoint_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SekolahPoint_32, 
                style: style_SekolahPoint_32,
                popuplayertitle: 'Sekolah Point',
                interactive: true,
                title: '<img src="styles/legend/SekolahPoint_32.png" /> Sekolah Point'
            });
var format_TambakPoint_33 = new ol.format.GeoJSON();
var features_TambakPoint_33 = format_TambakPoint_33.readFeatures(json_TambakPoint_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TambakPoint_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TambakPoint_33.addFeatures(features_TambakPoint_33);
var lyr_TambakPoint_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TambakPoint_33, 
                style: style_TambakPoint_33,
                popuplayertitle: 'Tambak Point',
                interactive: true,
                title: '<img src="styles/legend/TambakPoint_33.png" /> Tambak Point'
            });

lyr_Google_0.setVisible(true);lyr_Lueng_1.setVisible(true);lyr_Sungai_2.setVisible(true);lyr_BatasGampong_3.setVisible(true);lyr_Gang_4.setVisible(true);lyr_Got_5.setVisible(true);lyr_Jalan_6.setVisible(true);lyr_Lorong_7.setVisible(true);lyr_Tambak_8.setVisible(true);lyr_TanahKosong_9.setVisible(true);lyr_Toko_10.setVisible(true);lyr_Bengkel_11.setVisible(true);lyr_Kantor_12.setVisible(true);lyr_Kebun_13.setVisible(true);lyr_Kuburan_14.setVisible(true);lyr_Lapangan_15.setVisible(true);lyr_Masjid_16.setVisible(true);lyr_Rangkang_17.setVisible(true);lyr_Ruko_18.setVisible(true);lyr_Rumah_19.setVisible(true);lyr_Sekolah_20.setVisible(true);lyr_Tanah_KosongPoint_21.setVisible(true);lyr_Toko_KedaiPoint_22.setVisible(true);lyr_BengkelPoint_23.setVisible(true);lyr_KantorPoint_24.setVisible(true);lyr_KebunPoint_25.setVisible(true);lyr_KuburanPoint_26.setVisible(true);lyr_LapanganPoint_27.setVisible(true);lyr_MasjidPoint_28.setVisible(true);lyr_RangkangPoint_29.setVisible(true);lyr_RukoPoint_30.setVisible(true);lyr_RumahPoint_31.setVisible(true);lyr_SekolahPoint_32.setVisible(true);lyr_TambakPoint_33.setVisible(true);
var layersList = [lyr_Google_0,lyr_Lueng_1,lyr_Sungai_2,lyr_BatasGampong_3,lyr_Gang_4,lyr_Got_5,lyr_Jalan_6,lyr_Lorong_7,lyr_Tambak_8,lyr_TanahKosong_9,lyr_Toko_10,lyr_Bengkel_11,lyr_Kantor_12,lyr_Kebun_13,lyr_Kuburan_14,lyr_Lapangan_15,lyr_Masjid_16,lyr_Rangkang_17,lyr_Ruko_18,lyr_Rumah_19,lyr_Sekolah_20,lyr_Tanah_KosongPoint_21,lyr_Toko_KedaiPoint_22,lyr_BengkelPoint_23,lyr_KantorPoint_24,lyr_KebunPoint_25,lyr_KuburanPoint_26,lyr_LapanganPoint_27,lyr_MasjidPoint_28,lyr_RangkangPoint_29,lyr_RukoPoint_30,lyr_RumahPoint_31,lyr_SekolahPoint_32,lyr_TambakPoint_33];
lyr_Lueng_1.set('fieldAliases', {'Id': 'Id', });
lyr_Sungai_2.set('fieldAliases', {'Id': 'Id', 'Nm_Sungai': 'Nm_Sungai', 'Pjg_Sungai': 'Pjg_Sungai', });
lyr_BatasGampong_3.set('fieldAliases', {'Id': 'Id', 'Nama_Gmpng': 'Nama_Gmpng', 'Luas_Gmpng': 'Luas_Gmpng', });
lyr_Gang_4.set('fieldAliases', {'Id': 'Id', 'Nama_Gang': 'Nama_Gang', 'Pjg_Gang': 'Pjg_Gang', 'Lebar_Gang': 'Lebar_Gang', 'Status_Gg': 'Status_Gg', });
lyr_Got_5.set('fieldAliases', {'Id': 'Id', 'Pjg_Got': 'Pjg_Got', 'Lebar_Got': 'Lebar_Got', });
lyr_Jalan_6.set('fieldAliases', {'Id': 'Id', 'Nama_Jalan': 'Nama_Jalan', 'Pjg_Jalan': 'Pjg_Jalan', 'Lebar': 'Lebar', 'Status_Jln': 'Status_Jln', 'Kondisi': 'Kondisi', 'Kategori': 'Kategori', });
lyr_Lorong_7.set('fieldAliases', {'Id': 'Id', 'Nama_Lrg': 'Nama_Lrg', 'Pjg_Lrg': 'Pjg_Lrg', 'Lebar_Lrg': 'Lebar_Lrg', 'Status_Lrg': 'Status_Lrg', });
lyr_Tambak_8.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'Jns_Ikan': 'Jns_Ikan', 'Stts_Usaha': 'Stts_Usaha', 'Luas_Bngun': 'Luas_Bngun', 'Luan_Lahan': 'Luan_Lahan', 'No_Kontak': 'No_Kontak', });
lyr_TanahKosong_9.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'Luas_Lahan': 'Luas_Lahan', 'Status': 'Status', 'No_Kontak': 'No_Kontak', });
lyr_Toko_10.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'Jns_Usaha': 'Jns_Usaha', 'Stts_Usaha': 'Stts_Usaha', 'Luas_Bngun': 'Luas_Bngun', 'Luas_Lahan': 'Luas_Lahan', 'No_Kontak': 'No_Kontak', });
lyr_Bengkel_11.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'No_Kontak': 'No_Kontak', 'Luas_Bngun': 'Luas_Bngun', });
lyr_Kantor_12.set('fieldAliases', {'Id': 'Id', 'Nm_kantor': 'Nm_kantor', 'Kpl_Kantor': 'Kpl_Kantor', 'Luas_Bngun': 'Luas_Bngun', 'Luas_Tanah': 'Luas_Tanah', 'No_Kontak': 'No_Kontak', });
lyr_Kebun_13.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'Luas_Lahan': 'Luas_Lahan', 'Jns_Tanama': 'Jns_Tanama', });
lyr_Kuburan_14.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'Luas_Lahan': 'Luas_Lahan', 'No_Kontak': 'No_Kontak', });
lyr_Lapangan_15.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'No_Kontak': 'No_Kontak', 'Jns_Kegiat': 'Jns_Kegiat', 'Luas_Lahan': 'Luas_Lahan', 'Luas_Bngun': 'Luas_Bngun', });
lyr_Masjid_16.set('fieldAliases', {'Id': 'Id', 'Nm_Mesjid': 'Nm_Mesjid', 'Luas_Bngun': 'Luas_Bngun', 'Luas_Tanah': 'Luas_Tanah', 'Nama_Imum': 'Nama_Imum', 'No_Kontak': 'No_Kontak', });
lyr_Rangkang_17.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'Luas_Bngun': 'Luas_Bngun', 'No_Kontak': 'No_Kontak', });
lyr_Ruko_18.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'No_Kontak': 'No_Kontak', 'Jmlh_Huni': 'Jmlh_Huni', 'Luas_Lahan': 'Luas_Lahan', });
lyr_Rumah_19.set('fieldAliases', {'Id': 'Id', 'No_Rmh': 'No_Rmh', 'Stts_Kepem': 'Stts_Kepem', 'Jns_Bangun': 'Jns_Bangun', 'Jns_Lantai': 'Jns_Lantai', 'Nama_KK': 'Nama_KK', 'Pdd_Trkhr': 'Pdd_Trkhr', 'Pekerjaan': 'Pekerjaan', 'No_KTP': 'No_KTP', 'Jmlh_Laki2': 'Jmlh_Laki2', 'Jmlh_Perem': 'Jmlh_Perem', 'Ttl_Hunian': 'Ttl_Hunian', 'Luas_Bngun': 'Luas_Bngun', 'No_Telepon': 'No_Telepon', });
lyr_Sekolah_20.set('fieldAliases', {'Id': 'Id', 'Nm_Sekolah': 'Nm_Sekolah', 'Nm_Kepsek': 'Nm_Kepsek', 'Luas_Bngun': 'Luas_Bngun', 'Luas_Tanah': 'Luas_Tanah', 'No_Kontak': 'No_Kontak', });
lyr_Tanah_KosongPoint_21.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'Luas_Lahan': 'Luas_Lahan', 'Status': 'Status', 'No_Kontak': 'No_Kontak', 'ORIG_FID': 'ORIG_FID', });
lyr_Toko_KedaiPoint_22.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'Jns_Usaha': 'Jns_Usaha', 'Stts_Usaha': 'Stts_Usaha', 'Luas_Bngun': 'Luas_Bngun', 'Luas_Lahan': 'Luas_Lahan', 'No_Kontak': 'No_Kontak', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_BengkelPoint_23.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'No_Kontak': 'No_Kontak', 'Luas_Bngun': 'Luas_Bngun', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_KantorPoint_24.set('fieldAliases', {'Id': 'Id', 'Nm_kantor': 'Nm_kantor', 'Kpl_Kantor': 'Kpl_Kantor', 'Luas_Bngun': 'Luas_Bngun', 'Luas_Tanah': 'Luas_Tanah', 'No_Kontak': 'No_Kontak', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_KebunPoint_25.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'Luas_Lahan': 'Luas_Lahan', 'Jns_Tanama': 'Jns_Tanama', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_KuburanPoint_26.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'Luas_Lahan': 'Luas_Lahan', 'No_Kontak': 'No_Kontak', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_LapanganPoint_27.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'No_Kontak': 'No_Kontak', 'Jns_Kegiat': 'Jns_Kegiat', 'Luas_Lahan': 'Luas_Lahan', 'Luas_Bngun': 'Luas_Bngun', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_MasjidPoint_28.set('fieldAliases', {'Id': 'Id', 'Nm_Mesjid': 'Nm_Mesjid', 'Luas_Bngun': 'Luas_Bngun', 'Luas_Tanah': 'Luas_Tanah', 'Nama_Imum': 'Nama_Imum', 'No_Kontak': 'No_Kontak', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_RangkangPoint_29.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'Luas_Bngun': 'Luas_Bngun', 'No_Kontak': 'No_Kontak', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_RukoPoint_30.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'No_Kontak': 'No_Kontak', 'Jmlh_Huni': 'Jmlh_Huni', 'Luas_Lahan': 'Luas_Lahan', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_RumahPoint_31.set('fieldAliases', {'Id': 'Id', 'No_Rmh': 'No_Rmh', 'Stts_Kepem': 'Stts_Kepem', 'Jns_Bangun': 'Jns_Bangun', 'Jns_Lantai': 'Jns_Lantai', 'Nama_KK': 'Nama_KK', 'Pdd_Trkhr': 'Pdd_Trkhr', 'Pekerjaan': 'Pekerjaan', 'No_KTP': 'No_KTP', 'Jmlh_Laki2': 'Jmlh_Laki2', 'Jmlh_Perem': 'Jmlh_Perem', 'Ttl_Hunian': 'Ttl_Hunian', 'Luas_Bngun': 'Luas_Bngun', 'No_Telepon': 'No_Telepon', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_SekolahPoint_32.set('fieldAliases', {'Id': 'Id', 'Nm_Sekolah': 'Nm_Sekolah', 'Nm_Kepsek': 'Nm_Kepsek', 'No_Kontak': 'No_Kontak', 'Luas_Bngun': 'Luas_Bngun', 'Luas_Tanah': 'Luas_Tanah', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_TambakPoint_33.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'Jns_Ikan': 'Jns_Ikan', 'Stts_Usaha': 'Stts_Usaha', 'Luas_Bngun': 'Luas_Bngun', 'Luan_Lahan': 'Luan_Lahan', 'No_Kontak': 'No_Kontak', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_Lueng_1.set('fieldImages', {'Id': '', });
lyr_Sungai_2.set('fieldImages', {'Id': '', 'Nm_Sungai': '', 'Pjg_Sungai': '', });
lyr_BatasGampong_3.set('fieldImages', {'Id': '', 'Nama_Gmpng': '', 'Luas_Gmpng': '', });
lyr_Gang_4.set('fieldImages', {'Id': '', 'Nama_Gang': '', 'Pjg_Gang': '', 'Lebar_Gang': '', 'Status_Gg': '', });
lyr_Got_5.set('fieldImages', {'Id': '', 'Pjg_Got': '', 'Lebar_Got': '', });
lyr_Jalan_6.set('fieldImages', {'Id': '', 'Nama_Jalan': '', 'Pjg_Jalan': '', 'Lebar': '', 'Status_Jln': '', 'Kondisi': '', 'Kategori': '', });
lyr_Lorong_7.set('fieldImages', {'Id': '', 'Nama_Lrg': '', 'Pjg_Lrg': '', 'Lebar_Lrg': '', 'Status_Lrg': '', });
lyr_Tambak_8.set('fieldImages', {'Id': '', 'Nm_Pemilik': '', 'Jns_Ikan': '', 'Stts_Usaha': '', 'Luas_Bngun': '', 'Luan_Lahan': '', 'No_Kontak': '', });
lyr_TanahKosong_9.set('fieldImages', {'Id': '', 'Nm_Pemilik': '', 'Luas_Lahan': '', 'Status': '', 'No_Kontak': '', });
lyr_Toko_10.set('fieldImages', {'Id': '', 'Nm_Pemilik': '', 'Jns_Usaha': '', 'Stts_Usaha': '', 'Luas_Bngun': '', 'Luas_Lahan': '', 'No_Kontak': '', });
lyr_Bengkel_11.set('fieldImages', {'Id': '', 'Nm_Pemilik': '', 'No_Kontak': '', 'Luas_Bngun': '', });
lyr_Kantor_12.set('fieldImages', {'Id': '', 'Nm_kantor': '', 'Kpl_Kantor': '', 'Luas_Bngun': '', 'Luas_Tanah': '', 'No_Kontak': '', });
lyr_Kebun_13.set('fieldImages', {'Id': '', 'Nm_Pemilik': '', 'Luas_Lahan': '', 'Jns_Tanama': '', });
lyr_Kuburan_14.set('fieldImages', {'Id': '', 'Nm_Pemilik': '', 'Luas_Lahan': '', 'No_Kontak': '', });
lyr_Lapangan_15.set('fieldImages', {'Id': '', 'Nm_Pemilik': '', 'No_Kontak': '', 'Jns_Kegiat': '', 'Luas_Lahan': '', 'Luas_Bngun': '', });
lyr_Masjid_16.set('fieldImages', {'Id': '', 'Nm_Mesjid': '', 'Luas_Bngun': '', 'Luas_Tanah': '', 'Nama_Imum': '', 'No_Kontak': '', });
lyr_Rangkang_17.set('fieldImages', {'Id': '', 'Nm_Pemilik': '', 'Luas_Bngun': '', 'No_Kontak': '', });
lyr_Ruko_18.set('fieldImages', {'Id': '', 'Nm_Pemilik': '', 'No_Kontak': '', 'Jmlh_Huni': '', 'Luas_Lahan': '', });
lyr_Rumah_19.set('fieldImages', {'Id': '', 'No_Rmh': '', 'Stts_Kepem': '', 'Jns_Bangun': '', 'Jns_Lantai': '', 'Nama_KK': '', 'Pdd_Trkhr': '', 'Pekerjaan': '', 'No_KTP': '', 'Jmlh_Laki2': '', 'Jmlh_Perem': '', 'Ttl_Hunian': '', 'Luas_Bngun': '', 'No_Telepon': '', });
lyr_Sekolah_20.set('fieldImages', {'Id': '', 'Nm_Sekolah': '', 'Nm_Kepsek': '', 'Luas_Bngun': '', 'Luas_Tanah': '', 'No_Kontak': '', });
lyr_Tanah_KosongPoint_21.set('fieldImages', {'Id': '', 'Nm_Pemilik': '', 'Luas_Lahan': '', 'Status': '', 'No_Kontak': '', 'ORIG_FID': '', });
lyr_Toko_KedaiPoint_22.set('fieldImages', {'Id': '', 'Nm_Pemilik': '', 'Jns_Usaha': '', 'Stts_Usaha': '', 'Luas_Bngun': '', 'Luas_Lahan': '', 'No_Kontak': '', 'ORIG_FID': '', 'X': '', 'Y': '', });
lyr_BengkelPoint_23.set('fieldImages', {'Id': '', 'Nm_Pemilik': '', 'No_Kontak': '', 'Luas_Bngun': '', 'ORIG_FID': '', 'X': '', 'Y': '', });
lyr_KantorPoint_24.set('fieldImages', {'Id': '', 'Nm_kantor': '', 'Kpl_Kantor': '', 'Luas_Bngun': '', 'Luas_Tanah': '', 'No_Kontak': '', 'ORIG_FID': '', 'X': '', 'Y': '', });
lyr_KebunPoint_25.set('fieldImages', {'Id': '', 'Nm_Pemilik': '', 'Luas_Lahan': '', 'Jns_Tanama': '', 'ORIG_FID': '', 'X': '', 'Y': '', });
lyr_KuburanPoint_26.set('fieldImages', {'Id': '', 'Nm_Pemilik': '', 'Luas_Lahan': '', 'No_Kontak': '', 'ORIG_FID': '', 'X': '', 'Y': '', });
lyr_LapanganPoint_27.set('fieldImages', {'Id': '', 'Nm_Pemilik': '', 'No_Kontak': '', 'Jns_Kegiat': '', 'Luas_Lahan': '', 'Luas_Bngun': '', 'ORIG_FID': '', 'X': '', 'Y': '', });
lyr_MasjidPoint_28.set('fieldImages', {'Id': '', 'Nm_Mesjid': '', 'Luas_Bngun': '', 'Luas_Tanah': '', 'Nama_Imum': '', 'No_Kontak': '', 'ORIG_FID': '', 'X': '', 'Y': '', });
lyr_RangkangPoint_29.set('fieldImages', {'Id': '', 'Nm_Pemilik': '', 'Luas_Bngun': '', 'No_Kontak': '', 'ORIG_FID': '', 'X': '', 'Y': '', });
lyr_RukoPoint_30.set('fieldImages', {'Id': '', 'Nm_Pemilik': '', 'No_Kontak': '', 'Jmlh_Huni': '', 'Luas_Lahan': '', 'ORIG_FID': '', 'X': '', 'Y': '', });
lyr_RumahPoint_31.set('fieldImages', {'Id': '', 'No_Rmh': '', 'Stts_Kepem': '', 'Jns_Bangun': '', 'Jns_Lantai': '', 'Nama_KK': '', 'Pdd_Trkhr': '', 'Pekerjaan': '', 'No_KTP': '', 'Jmlh_Laki2': '', 'Jmlh_Perem': '', 'Ttl_Hunian': '', 'Luas_Bngun': '', 'No_Telepon': '', 'ORIG_FID': '', 'X': '', 'Y': '', });
lyr_SekolahPoint_32.set('fieldImages', {'Id': '', 'Nm_Sekolah': '', 'Nm_Kepsek': '', 'No_Kontak': '', 'Luas_Bngun': '', 'Luas_Tanah': '', 'ORIG_FID': '', 'X': '', 'Y': '', });
lyr_TambakPoint_33.set('fieldImages', {'Id': '', 'Nm_Pemilik': '', 'Jns_Ikan': '', 'Stts_Usaha': '', 'Luas_Bngun': '', 'Luan_Lahan': '', 'No_Kontak': '', 'ORIG_FID': '', 'X': '', 'Y': '', });
lyr_Lueng_1.set('fieldLabels', {'Id': 'no label', });
lyr_Sungai_2.set('fieldLabels', {'Id': 'no label', 'Nm_Sungai': 'no label', 'Pjg_Sungai': 'no label', });
lyr_BatasGampong_3.set('fieldLabels', {'Id': 'no label', 'Nama_Gmpng': 'no label', 'Luas_Gmpng': 'no label', });
lyr_Gang_4.set('fieldLabels', {'Id': 'no label', 'Nama_Gang': 'no label', 'Pjg_Gang': 'no label', 'Lebar_Gang': 'no label', 'Status_Gg': 'no label', });
lyr_Got_5.set('fieldLabels', {'Id': 'no label', 'Pjg_Got': 'no label', 'Lebar_Got': 'no label', });
lyr_Jalan_6.set('fieldLabels', {'Id': 'no label', 'Nama_Jalan': 'no label', 'Pjg_Jalan': 'no label', 'Lebar': 'no label', 'Status_Jln': 'no label', 'Kondisi': 'no label', 'Kategori': 'no label', });
lyr_Lorong_7.set('fieldLabels', {'Id': 'no label', 'Nama_Lrg': 'no label', 'Pjg_Lrg': 'no label', 'Lebar_Lrg': 'no label', 'Status_Lrg': 'no label', });
lyr_Tambak_8.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'Jns_Ikan': 'no label', 'Stts_Usaha': 'no label', 'Luas_Bngun': 'no label', 'Luan_Lahan': 'no label', 'No_Kontak': 'no label', });
lyr_TanahKosong_9.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'Luas_Lahan': 'no label', 'Status': 'no label', 'No_Kontak': 'no label', });
lyr_Toko_10.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'Jns_Usaha': 'no label', 'Stts_Usaha': 'no label', 'Luas_Bngun': 'no label', 'Luas_Lahan': 'no label', 'No_Kontak': 'no label', });
lyr_Bengkel_11.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'No_Kontak': 'no label', 'Luas_Bngun': 'no label', });
lyr_Kantor_12.set('fieldLabels', {'Id': 'no label', 'Nm_kantor': 'no label', 'Kpl_Kantor': 'no label', 'Luas_Bngun': 'no label', 'Luas_Tanah': 'no label', 'No_Kontak': 'no label', });
lyr_Kebun_13.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'Luas_Lahan': 'no label', 'Jns_Tanama': 'no label', });
lyr_Kuburan_14.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'Luas_Lahan': 'no label', 'No_Kontak': 'no label', });
lyr_Lapangan_15.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'No_Kontak': 'no label', 'Jns_Kegiat': 'no label', 'Luas_Lahan': 'no label', 'Luas_Bngun': 'no label', });
lyr_Masjid_16.set('fieldLabels', {'Id': 'no label', 'Nm_Mesjid': 'no label', 'Luas_Bngun': 'no label', 'Luas_Tanah': 'no label', 'Nama_Imum': 'no label', 'No_Kontak': 'no label', });
lyr_Rangkang_17.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'Luas_Bngun': 'no label', 'No_Kontak': 'no label', });
lyr_Ruko_18.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'No_Kontak': 'no label', 'Jmlh_Huni': 'no label', 'Luas_Lahan': 'no label', });
lyr_Rumah_19.set('fieldLabels', {'Id': 'no label', 'No_Rmh': 'no label', 'Stts_Kepem': 'no label', 'Jns_Bangun': 'no label', 'Jns_Lantai': 'no label', 'Nama_KK': 'no label', 'Pdd_Trkhr': 'no label', 'Pekerjaan': 'no label', 'No_KTP': 'no label', 'Jmlh_Laki2': 'no label', 'Jmlh_Perem': 'no label', 'Ttl_Hunian': 'no label', 'Luas_Bngun': 'no label', 'No_Telepon': 'no label', });
lyr_Sekolah_20.set('fieldLabels', {'Id': 'no label', 'Nm_Sekolah': 'no label', 'Nm_Kepsek': 'no label', 'Luas_Bngun': 'no label', 'Luas_Tanah': 'no label', 'No_Kontak': 'no label', });
lyr_Tanah_KosongPoint_21.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'Luas_Lahan': 'no label', 'Status': 'no label', 'No_Kontak': 'no label', 'ORIG_FID': 'no label', });
lyr_Toko_KedaiPoint_22.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'Jns_Usaha': 'no label', 'Stts_Usaha': 'no label', 'Luas_Bngun': 'no label', 'Luas_Lahan': 'no label', 'No_Kontak': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_BengkelPoint_23.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'No_Kontak': 'no label', 'Luas_Bngun': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_KantorPoint_24.set('fieldLabels', {'Id': 'no label', 'Nm_kantor': 'no label', 'Kpl_Kantor': 'no label', 'Luas_Bngun': 'no label', 'Luas_Tanah': 'no label', 'No_Kontak': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_KebunPoint_25.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'Luas_Lahan': 'no label', 'Jns_Tanama': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_KuburanPoint_26.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'Luas_Lahan': 'no label', 'No_Kontak': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_LapanganPoint_27.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'No_Kontak': 'no label', 'Jns_Kegiat': 'no label', 'Luas_Lahan': 'no label', 'Luas_Bngun': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_MasjidPoint_28.set('fieldLabels', {'Id': 'no label', 'Nm_Mesjid': 'no label', 'Luas_Bngun': 'no label', 'Luas_Tanah': 'no label', 'Nama_Imum': 'no label', 'No_Kontak': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_RangkangPoint_29.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'Luas_Bngun': 'no label', 'No_Kontak': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_RukoPoint_30.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'No_Kontak': 'no label', 'Jmlh_Huni': 'no label', 'Luas_Lahan': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_RumahPoint_31.set('fieldLabels', {'Id': 'no label', 'No_Rmh': 'no label', 'Stts_Kepem': 'no label', 'Jns_Bangun': 'no label', 'Jns_Lantai': 'no label', 'Nama_KK': 'no label', 'Pdd_Trkhr': 'no label', 'Pekerjaan': 'no label', 'No_KTP': 'no label', 'Jmlh_Laki2': 'no label', 'Jmlh_Perem': 'no label', 'Ttl_Hunian': 'no label', 'Luas_Bngun': 'no label', 'No_Telepon': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_SekolahPoint_32.set('fieldLabels', {'Id': 'no label', 'Nm_Sekolah': 'no label', 'Nm_Kepsek': 'no label', 'No_Kontak': 'no label', 'Luas_Bngun': 'no label', 'Luas_Tanah': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_TambakPoint_33.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'Jns_Ikan': 'no label', 'Stts_Usaha': 'no label', 'Luas_Bngun': 'no label', 'Luan_Lahan': 'no label', 'No_Kontak': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_TambakPoint_33.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});