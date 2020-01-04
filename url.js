const urls = [
    {
        id: 0,
        url:'https://www.amazon.in/Persang-Karaoke-XM-19-Wireless-Headphone/dp/B078V3TMJ4?pf_rd_p=3c349a4f-126d-4404-bf22-f0077cd0f06b&pd_rd_wg=rjDPE&pf_rd_r=T21J6A5JCFQ784Q4THN9&ref_=pd_gw_cr_cartx&pd_rd_w=SWZa3&pd_rd_r=13255631-b5b2-48a2-a7a8-41f3a7c77b7c'
    },
    {
        id:1,
        url: 'https://www.amazon.in/Samsung-Galaxy-Active-SM-R500-Silver/dp/B07NQ9BBBB/ref=pd_sbs_147_5/262-1431463-2560304?_encoding=UTF8&pd_rd_i=B07NQ9BBBB&pd_rd_r=c25a486f-0c08-4809-a379-ff5b8afa6667&pd_rd_w=GRctZ&pd_rd_wg=nMS6d&pf_rd_p=fbf43daf-8fb3-47b5-9deb-ae9cce3969a9&pf_rd_r=K80XTDBE5158Z4HCSV50&psc=1&refRID=K80XTDBE5158Z4HCSV50'
    },
    {
        id: 2,
        url: 'https://www.amazon.in/dp/B07FT9GSSK/ref=sspa_dk_detail_2?psc=1&pd_rd_i=B07FT9GSSK&pd_rd_w=xqQVA&pf_rd_p=357151f8-058c-46f1-b7d1-fa3647ce3999&pd_rd_wg=fjsEH&pf_rd_r=TSA6M86FXV2BMN78FG0P&pd_rd_r=0fe9388a-d3db-4f96-b0ab-f82115088494&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzOE9WS0hDSzJFNUNZJmVuY3J5cHRlZElkPUEwMzI3MTg5MVlDSklRMEU5TzkzRiZlbmNyeXB0ZWRBZElkPUEwMzQ3ODE3MkJDV1VDRU5IREVBVyZ3aWRnZXROYW1lPXNwX2RldGFpbCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU='
    },
    {
        id: 3,
        url: 'https://www.amazon.in/UBI-Soft-Assassins-Creed-Odyssey/dp/B07DS1FFHK/ref=pd_sim_63_5/262-1431463-2560304?_encoding=UTF8&pd_rd_i=B07DS1FFHK&pd_rd_r=cc1b4f73-b241-43b9-8368-d9b6c49a8e31&pd_rd_w=0vGRg&pd_rd_wg=i84ng&pf_rd_p=64901ac7-e7c5-4bfc-9580-c94746a1fc53&pf_rd_r=XD0TKQ9QE5811MP0BEHY&psc=1&refRID=XD0TKQ9QE5811MP0BEHY'
    },
    {
        id: 4,
        url: 'https://www.amazon.in/Marvels-Spider-Man-PS4-Game/dp/B07X23YRCS/ref=pd_rhf_gw_s_bmx_0_6/262-1431463-2560304?_encoding=UTF8&pd_rd_i=B07X23YRCS&pd_rd_r=25237c80-95ce-4a16-9050-da41eafda1e5&pd_rd_w=auIv6&pd_rd_wg=qlg7Q&pf_rd_p=65a2b3b4-c6ee-481d-84c0-06fec97024ff&pf_rd_r=MSJG6Y80W81AZ0ZDRMRR&psc=1&refRID=MSJG6Y80W81AZ0ZDRMRR'
    },
    {
        id: 5,
        url: 'https://www.amazon.in/dp/B01N128G9W/ref=sspa_dk_hqp_detail_aax_0?psc=1&smid=A15UYRUD2TXZ5&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE1WVhJQkxKRTMwTzYmZW5jcnlwdGVkSWQ9QTA5NDcyMjQyQjJSV01XUldQQVpJJmVuY3J5cHRlZEFkSWQ9QTEwMzUxODgxTlpGUDdQT0sxMUZLJndpZGdldE5hbWU9c3BfaHFwX3NoYXJlZCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU='
    },
    {
        id: 6,
        url: 'https://www.amazon.in/Syska-Power-20000-Lithium-Polymer/dp/B07X1SRY9G/ref=gbph_img_m11_19a2_d192c8de?smid=A14CZOWI0VEHLG&pf_rd_p=396a1395-774d-4c12-98b1-00abbd9119a2&pf_rd_s=merchandised-search-11&pf_rd_t=101&pf_rd_i=6612025031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_r=4RZKAMD5H1MVBMNHRAX6'
    },
    {
        id: 7,
        url: 'https://www.amazon.in/dp/B07KP74NDS/ref=sspa_dk_detail_0?psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExMEFDTUkwNlBDTTZZJmVuY3J5cHRlZElkPUEwODQ2NjkxMlczNklSRDdOSEhGMiZlbmNyeXB0ZWRBZElkPUEwMDExODIyWktCUVdQTFpXV0VBJndpZGdldE5hbWU9c3BfZGV0YWlsMiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU='
    },
    {
        id: 8,
        url: 'https://www.amazon.in/Rapidotzz-Graffiti-Patches-Skateboard-Stickers/dp/B07GPZDRLJ/ref=sr_1_1?crid=U7O931314LP8&keywords=stickers+for+macbook&qid=1578132658&s=computers&sprefix=sti%2Ccomputers%2C293&sr=1-1'
    },
    {
        id: 9,
        url: 'https://www.amazon.in/HP-Pavilion-15-dk0045TX-15-6-inch-i5-9300H/dp/B07SKPVYX2/ref=sr_1_2_sspa?crid=1A5M0LPQU8K5&keywords=gaming+laptop&qid=1578132783&s=computers&sprefix=gam%2Ccollectibles%2C617&sr=1-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyTlNWUkM2NVU3N0FSJmVuY3J5cHRlZElkPUExMDE5ODk1MlVKWkpTR0RUQ0NRVSZlbmNyeXB0ZWRBZElkPUEwOTg5ODAzMlBMOEdJMjRGSDBQVCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU='
    }

]
module.exports = urls;