'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a85ae72a8d8aa4b60bde210d2e2eb825",
"assets/AssetManifest.bin.json": "4aae30cc3ff4ec91b1f16369d85cd3a9",
"assets/AssetManifest.json": "7ba416cb55abd1b8f65e6420c0d8543d",
"assets/assets/ar/example/Chicken_01/Chicken_01.bin": "c57a219d7d33e867fe4954559630030d",
"assets/assets/ar/example/Chicken_01/Chicken_01.gltf": "e34b5e0c2666c448b978438d7c0dff58",
"assets/assets/ar/example/Chicken_01/license.txt": "2f2201d3426ad0d0715feb848e1dbd78",
"assets/assets/ar/example/triangle.png": "5c41d2d821e68c06145e13a34acbbeee",
"assets/assets/ar/produccion/sabila.bin": "9e8a754316e27a49c15e7ce3c2f5a0b9",
"assets/assets/ar/produccion/sabila.glb": "d231d567275b1eab819f555ec7bf4fe0",
"assets/assets/ar/produccion/sabila.gltf": "7dd63ba62b64c953835ae4315b64422c",
"assets/assets/ar/produccion/tulipan.bin": "6808f3240b540fa80fc3c74994a73d1a",
"assets/assets/ar/produccion/Tulipan.glb": "1c69cec8705579341d51c80236b1be3b",
"assets/assets/ar/produccion/tulipan.gltf": "9c36b60ca6016e624fd97f0b396efbfd",
"assets/assets/data/cons%2520-%2520prod%2520NH.xlsx": "28cb4511d6f21e7705bd33c8eb4cd74a",
"assets/assets/data/consEN.xlsx": "f3dfed2b6766f4325d438cf11c03929a",
"assets/assets/data/conservacionNH.json": "d0f45528b0d999315de9df2a4ec87276",
"assets/assets/data/consES.xlsx": "fafb3ba1961ba43263cbec475bfa93af",
"assets/assets/data/diccionario-nau-es.txt": "69465ea17d346516374fb68a504254ae",
"assets/assets/data/etiquetas_conservacion.txt": "c5a715d7e2f826d66583c065c748b0a6",
"assets/assets/data/etiquetas_produccion.txt": "c224c818b2ae5b7aed0abcc80ebb5353",
"assets/assets/data/etnoNH.json": "a57ce4a4a3b102e73952b5bf54879d80",
"assets/assets/data/glosarioNH.json": "6869998c0387ace48c0e21e6363d7737",
"assets/assets/data/lacueva.json": "33a5b5b5db83a43c80b0297a48a2cd78",
"assets/assets/data/lacueva_en.json": "66ff4d4c13d157d57be6026777603a76",
"assets/assets/data/lacueva_nh.json": "96d317463e96889f95b606a4edd9e80e",
"assets/assets/data/prodEN.xlsx": "b35a1af87aff43292ffb370d4036cc94",
"assets/assets/data/prodES.xlsx": "c8537949eca1357f21e88192bc63c177",
"assets/assets/data/produccionNH.json": "ee8f5e3cf6ab08e4e0c6b5719eee2f02",
"assets/assets/imag/conservacion190p/cabeza_de_arriera.png": "ed8a22d0371e422b7c34f130e2b1e327",
"assets/assets/imag/conservacion190p/flor_de_cera.png": "3f12741bf8f8e1665c403f934fc503e2",
"assets/assets/imag/conservacion190p/hierba_mora.png": "b8a6b953be3832e4741a45a7612c01fd",
"assets/assets/imag/conservacion190p/hoja_santa.png": "80879ed8f3a70b6fc6a5e9d3b7b8237d",
"assets/assets/imag/conservacion190p/hormiguillo.png": "2685c56f68c12a9c4287fc54cf4ad54e",
"assets/assets/imag/conservacion190p/lengua_de_ciervo.png": "a00c9e3a0671e140dac085bbd0173f2e",
"assets/assets/imag/conservacion190p/mozote.png": "8950a5ff721a21cc6576851e10865c81",
"assets/assets/imag/conservacion190p/nacasburro.png": "8fa4a6597d934087c28972e147d33014",
"assets/assets/imag/conservacion190p/tepejilote.png": "2233e66c54bbcb064854572d4f50eca5",
"assets/assets/imag/conservacion190p/teshuat.png": "85e1581992a4868eb18a4f2217f0b6fc",
"assets/assets/imag/conservacion190p/zapote_domingo.png": "9f099138512152b0f05841a828b3ffd2",
"assets/assets/imag/conservacion674p/cabeza_de_arriera.jpg": "55e1289225db44f00c870eedcf0abcda",
"assets/assets/imag/conservacion674p/cabeza_de_arriera_2.jpg": "29c16299056a13de9e223580b387ee46",
"assets/assets/imag/conservacion674p/cabeza_de_arriera_3.jpg": "ce5f9632a684e8f8f405b38b557f72b4",
"assets/assets/imag/conservacion674p/flor_de_cera.jpg": "7249470f42a48cac84cbcfcb082a458c",
"assets/assets/imag/conservacion674p/flor_de_cera_2.jpg": "21f1d43296dd0a3aea0f7377d0513331",
"assets/assets/imag/conservacion674p/hierba_mora.jpg": "7672f0d181761e7c1f9416e1fb9cd64f",
"assets/assets/imag/conservacion674p/hierba_mora_2.jpg": "f3e7a33825cba72f43ec9cc76b32843b",
"assets/assets/imag/conservacion674p/hoja_santa.jpg": "8c08e07f2372601a2b7cdb99d6ef9f2d",
"assets/assets/imag/conservacion674p/hoja_santa_2.jpg": "7ac7d64c409d78f5586a6c062259ca5e",
"assets/assets/imag/conservacion674p/hormiguillo.jpg": "791eee212ace7535714a11e63f0b5afa",
"assets/assets/imag/conservacion674p/hormiguillo_2.jpg": "7c775b0532530cfb112b8ad69feb3259",
"assets/assets/imag/conservacion674p/hormiguillo_3.jpg": "b21771a3b5ce8aecbd8c8e7f63f8c3c4",
"assets/assets/imag/conservacion674p/lengua_de_ciervo.jpg": "d6b4fb22e216738d462071e139af3b73",
"assets/assets/imag/conservacion674p/lengua_de_ciervo_2.jpg": "c4f20876e68c1411b3e8849414d9ae05",
"assets/assets/imag/conservacion674p/mozote.jpg": "45f7ea43cff0a911537afae2ae4678cf",
"assets/assets/imag/conservacion674p/mozote_2.jpg": "9cacf8f5ea2fb68129352df1381e302b",
"assets/assets/imag/conservacion674p/mozote_3.jpg": "da59d49a04809aae5b756574c8fcf6ec",
"assets/assets/imag/conservacion674p/mozote_4.jpg": "cf649f841a0391febfe3302940056cdf",
"assets/assets/imag/conservacion674p/nacasburro.jpg": "2abc26ebc635ab7ba3bfa9273f1d470c",
"assets/assets/imag/conservacion674p/nacasburro_2.jpg": "1be393db56221c49d997125576359852",
"assets/assets/imag/conservacion674p/nacasburro_3.jpg": "a51c114abdea2667fc83757aacb7d55c",
"assets/assets/imag/conservacion674p/tepejilote.jpg": "4eb9f4b861d6b1e3503b71bcb74804e7",
"assets/assets/imag/conservacion674p/tepejilote_2.jpg": "f5a5fb18ac629281f3e0bd45dcb2eca0",
"assets/assets/imag/conservacion674p/teshuat.jpg": "4477003bb60775d35f8cee211a2feb71",
"assets/assets/imag/conservacion674p/teshuat_2.jpg": "bacb9e8ec3b2ad6b614d487aae3dc6cb",
"assets/assets/imag/conservacion674p/teshuat_3.jpg": "1277ad62baf20cf5d0b21d9d877b70e3",
"assets/assets/imag/conservacion674p/teshuat_4.jpg": "1365e7adb35ba1ff1e2ff0ad747c2726",
"assets/assets/imag/conservacion674p/zapote_domingo.jpg": "268069a7e6f5e50b054987e14b591ebe",
"assets/assets/imag/conservacion674p/zapote_domingo_2.jpg": "e685206ff85190c05b5ccd1712a06f4b",
"assets/assets/imag/conservacion674p/zapote_domingo_3.jpg": "f945953d22001671a464d717a4cca1de",
"assets/assets/imag/lacueva/galeria1.jpg": "1ce23c2069af49a15ecab7422c29ef3f",
"assets/assets/imag/lacueva/galeria10.jpg": "a3d00a3eeb5a29f0580f6f026adc4901",
"assets/assets/imag/lacueva/galeria2.jpg": "ab90f69e427e2addf3ab4161afd881a2",
"assets/assets/imag/lacueva/galeria3.jpg": "1095d49c64038fcf30e6ce9b56503805",
"assets/assets/imag/lacueva/galeria4.jpg": "23c07e9a4e5c7b3126df9fcd66ae335f",
"assets/assets/imag/lacueva/galeria5.jpg": "d40275fa73aa11c0d041600714dd6462",
"assets/assets/imag/lacueva/galeria6.jpg": "8c20345d8495525d12a521ba072f345e",
"assets/assets/imag/lacueva/galeria7.jpg": "340af8e3f2519d7f694cdb4a16c8b364",
"assets/assets/imag/lacueva/galeria8.jpg": "24531cee0d78a144547d56086419354e",
"assets/assets/imag/lacueva/galeria9.jpg": "8ccaf7b3bf96c7d06e65c99bf5c45952",
"assets/assets/imag/produccion190p/acalote.png": "bc7f5071fb05fd4183c56c528cb37d2f",
"assets/assets/imag/produccion190p/ahuehuete.png": "54c432b98b519bf7fa25b2e0aea54278",
"assets/assets/imag/produccion190p/alcatraz.png": "03ec22715734c1c2b0aa86f249688d06",
"assets/assets/imag/produccion190p/anona.png": "c46f848c8a6286dd6ae5c851774d7097",
"assets/assets/imag/produccion190p/arandano.png": "1bd9513be75a7270443ac15e72f028f9",
"assets/assets/imag/produccion190p/begonia_bambu.png": "94099520af5199660b2aa2b8d7db05df",
"assets/assets/imag/produccion190p/bigotillo.png": "0f3550503026cd16cf02225256211369",
"assets/assets/imag/produccion190p/blanca_mariposa.png": "f1a57dce4be55d90329c67db5bc73b93",
"assets/assets/imag/produccion190p/buganvilia.png": "d8cb13318263f629bee5e1211417c37d",
"assets/assets/imag/produccion190p/cactus_catedral.png": "87a30b382c66f990a210ceacd87e842f",
"assets/assets/imag/produccion190p/calathea_lancifolia.png": "8a9019cb3784eed5ca8119838744835b",
"assets/assets/imag/produccion190p/cana_de_azucar.png": "ef0b831368234215b82177ed6278f9c4",
"assets/assets/imag/produccion190p/canela.png": "7a5ce6290be9c20daf296033e409a1c5",
"assets/assets/imag/produccion190p/carambolo.png": "c6448d50a0c1db885ceb4fe64d1f9943",
"assets/assets/imag/produccion190p/cepillo_rojo.png": "346d480db8dd677a83e94c61c6f90cbc",
"assets/assets/imag/produccion190p/chaya.png": "c8a365e3c1786d973b5c42f6e86b2a55",
"assets/assets/imag/produccion190p/chirimoya.png": "fda844bd83d7054cfdde71da984c67c5",
"assets/assets/imag/produccion190p/coleo.png": "52673fcc2631e5c1283b9a241d340546",
"assets/assets/imag/produccion190p/costilla_de_adan.png": "4caa30e30d8fdd1e5513405c7de87ad1",
"assets/assets/imag/produccion190p/croton_mammi.png": "16bf2161999c04de75c5e3bee08d1c9c",
"assets/assets/imag/produccion190p/curcuma.png": "c487fdd19f375b796aa83c767289f054",
"assets/assets/imag/produccion190p/damasquita.png": "e63738e5c7018bde5fb25fef9bd93a65",
"assets/assets/imag/produccion190p/durazno.png": "38c786c5888d87d09297af17d76dc458",
"assets/assets/imag/produccion190p/estreptocarpo.png": "54389ab0d8fc3b29ce6388cfbb8540f8",
"assets/assets/imag/produccion190p/flemingia.png": "85394e65639ce0cb6bb9a909b771f55a",
"assets/assets/imag/produccion190p/flor_de_azucar.png": "47f7626d00a30cf0bed649894fcaee79",
"assets/assets/imag/produccion190p/giganton.png": "daf4074b8973f0f2b706b68108b99945",
"assets/assets/imag/produccion190p/granada.png": "0067c28be5f19ccdfadc5c594049cb99",
"assets/assets/imag/produccion190p/guaje.png": "e64b46b24feb3c2d63ac943688abb114",
"assets/assets/imag/produccion190p/guanabana.png": "131544c8a42f58dd2028fdddfc920166",
"assets/assets/imag/produccion190p/guayaba_rosa.png": "039cf22fbfcda36855233a773970ae10",
"assets/assets/imag/produccion190p/higuera.png": "0b4079f15dc5800e6ce3b90c6d32c7af",
"assets/assets/imag/produccion190p/hoja_de_rubi.png": "640755a295469f2ebe170acf52b04efc",
"assets/assets/imag/produccion190p/hoja_de_sangre.png": "54157884599d68bd9809315df9738f41",
"assets/assets/imag/produccion190p/hoja_pinta.png": "20438375d6417c84da26be995c1d4002",
"assets/assets/imag/produccion190p/huele_de_noche.png": "7e2f796289af1784619fdc93e4fb8a28",
"assets/assets/imag/produccion190p/jaboticabo.png": "e517e8e7ae2399c99e7d0c425fe58a9e",
"assets/assets/imag/produccion190p/jengibre.png": "fe883232e27854a87ead02984bb58055",
"assets/assets/imag/produccion190p/jinicuil.png": "1a8c8f0f803d29ad64286574c8666c68",
"assets/assets/imag/produccion190p/jonote.png": "71cb7a895a6556400b7e1d537c6e38ae",
"assets/assets/imag/produccion190p/kalanchoe.png": "94a11b03cb13eea42f9afed9e224f143",
"assets/assets/imag/produccion190p/lengua_de_suegra.png": "97a1c4d8be34b947b06e1f0ccfb87e65",
"assets/assets/imag/produccion190p/limon_tavares.png": "2e5e80df3ce27130be07a9d18b650ac3",
"assets/assets/imag/produccion190p/lirio_amarillo.png": "3459cf978f362a553ce916b5b859b1a6",
"assets/assets/imag/produccion190p/lirio_de_dia.png": "a822925d7dd00fa5577b8bf4bfd7ebac",
"assets/assets/imag/produccion190p/maguey_morado.png": "65d7553fe02f42bc15f03e831d600a13",
"assets/assets/imag/produccion190p/malanga.png": "bcbbcc25755e6cac916e438b9b3979c0",
"assets/assets/imag/produccion190p/mandarina.png": "74db99935dc02a26f5f48bb1bd457a93",
"assets/assets/imag/produccion190p/mango.png": "cc82c1a69fcc9dd89c8b038ad28ea23f",
"assets/assets/imag/produccion190p/maracuya.png": "2cecc2ed85ed54b8d357db972a73bdb2",
"assets/assets/imag/produccion190p/mata_caballo.png": "bec2f117d21d9351fb0dcbab9679bbfd",
"assets/assets/imag/produccion190p/mora_silvestre.png": "1db6601976434afcc34be22c032eba62",
"assets/assets/imag/produccion190p/nance.png": "6d32e9e34d68ed004407918de738aff6",
"assets/assets/imag/produccion190p/nopal.png": "ad6b016a79b1d4492ed3ccb4ede94f47",
"assets/assets/imag/produccion190p/nuez_de_macadamia.png": "7b16f47e0d8de0c7f100f989bf5e5d83",
"assets/assets/imag/produccion190p/oreja_de_elefante.png": "d7b2471875035883748154037709db13",
"assets/assets/imag/produccion190p/orquidea_cola_de_pato.png": "a9949b239d1356144a666ac67f46e611",
"assets/assets/imag/produccion190p/orquidea_pulpo.png": "954eb8c290bc7acb8e0966773d54f425",
"assets/assets/imag/produccion190p/palo_santo.png": "ebb6eb32a3645454090994bbe7fa9dc4",
"assets/assets/imag/produccion190p/papaya.png": "ee1b8c2105bf67eacf99ea0ed4df1ff2",
"assets/assets/imag/produccion190p/papa_aerea.png": "a4f40771a1806d8d77ac3a2aaa3514e3",
"assets/assets/imag/produccion190p/paraguitas.png": "674a1a54437240b9de9939e7cb14fbbd",
"assets/assets/imag/produccion190p/peperomia.png": "c2c2feb0fa39a73831d66d6387b0a159",
"assets/assets/imag/produccion190p/peral.png": "c983a5b025da7d971373a8c18ae1e9a8",
"assets/assets/imag/produccion190p/persimo.png": "9758cfeedbc9f76c2e9d9a4f56c2b8ab",
"assets/assets/imag/produccion190p/pimienta_de_olor.png": "4d186f8443b3bee5993b4b32589dc8b7",
"assets/assets/imag/produccion190p/pina.png": "00e574447267d41d901221f7c941ca8f",
"assets/assets/imag/produccion190p/planta_de_oracion.png": "57cd36c5c0af280aacb022d6b2700304",
"assets/assets/imag/produccion190p/sabila.png": "3a26233ee1807924883e00bb45870da2",
"assets/assets/imag/produccion190p/sauco.png": "7f671640d4cc5adc4e44f05d95fab86b",
"assets/assets/imag/produccion190p/suculenta.png": "717b474dcc269ced704d5437a65fb249",
"assets/assets/imag/produccion190p/tulipan.png": "a1fd9e88f1eadb1964d26a763252214c",
"assets/assets/imag/produccion190p/yuca.png": "76cc9e96da4631c321650b4a245d0abd",
"assets/assets/imag/produccion190p/zacate_formio.png": "2a130cf24a417d822f38d74ca6671c97",
"assets/assets/imag/produccion190p/zapote_blanco.png": "3c9e63ccf8ab72fd282be99862c7b884",
"assets/assets/imag/produccion190p/zapote_negro.png": "221aad9086b89b29f86dcb1e6ddc04a5",
"assets/assets/imag/produccion674p/acalote.jpg": "3902526d3bd57ed54569eaa71bcf36ad",
"assets/assets/imag/produccion674p/ahuehuete.jpg": "5caee66f9f42c6abbfa88310bbdaafca",
"assets/assets/imag/produccion674p/ahuehuete_2.jpg": "4cd4548747b782fbaca5645a12ee34dd",
"assets/assets/imag/produccion674p/ahuehuete_3.jpg": "4faf1944547340a5875cdf31bc82909b",
"assets/assets/imag/produccion674p/alcatraz.jpg": "e0cba9a7c2aa2017117a65f3dce2dfc1",
"assets/assets/imag/produccion674p/anona.jpg": "7edf88373deaa3989ec81dbf564d226a",
"assets/assets/imag/produccion674p/anona_2.jpg": "a4790793c098e8f5c0fa5ba7d7de3b49",
"assets/assets/imag/produccion674p/anona_3.jpg": "888a62ad7703c4fb48fd8278de5ee470",
"assets/assets/imag/produccion674p/arandano.jpg": "d7bb30736bdd88c13a1f4fefc3c3f677",
"assets/assets/imag/produccion674p/arandano_2.jpg": "b12f627cd937dadd15841b7ee59a0632",
"assets/assets/imag/produccion674p/begonia_bambu.jpg": "7de29713660abdc643a6345e4657ac9f",
"assets/assets/imag/produccion674p/begonia_bambu_2.jpg": "2a958b24bc0f87fc083fe25922263b43",
"assets/assets/imag/produccion674p/begonia_bambu_3.jpg": "9405e64931691cb03a6a387c9aafd560",
"assets/assets/imag/produccion674p/bigotillo.jpg": "fab24521de445699eebe9ddb35b330b7",
"assets/assets/imag/produccion674p/bigotillo_2.jpg": "3a5f7da6d0606e53a9fa50eb970445d1",
"assets/assets/imag/produccion674p/bigotillo_3.jpg": "e12a6620ffe8034e63f89991c4830785",
"assets/assets/imag/produccion674p/blanca_mariposa.jpg": "3afe2e3292aec665e2121667e2dfa505",
"assets/assets/imag/produccion674p/blanca_mariposa_2.jpg": "6d21ae810678a11ec47f55f3472d3ccb",
"assets/assets/imag/produccion674p/buganvilia.jpg": "75fa1164cbf400eeca8d75683490fb97",
"assets/assets/imag/produccion674p/buganvilia_2.jpg": "453ea967acf680cb85739543bc03c44b",
"assets/assets/imag/produccion674p/cactus_catedral.jpg": "2980f7502d7ad43c2651d3c27b778175",
"assets/assets/imag/produccion674p/cactus_catedral_2.jpg": "f0aeca2b6e638e2e616e82bec5942f05",
"assets/assets/imag/produccion674p/calathea_lancifolia.jpg": "3b7b0dbb80c3ec8d8dd3bc4246c6b018",
"assets/assets/imag/produccion674p/calathea_lancifolia_2.jpg": "55b089c2ce6868c756465fa817afa6dd",
"assets/assets/imag/produccion674p/cana_de_azucar.jpg": "1ec88000e52e784a718679cfb20e84df",
"assets/assets/imag/produccion674p/cana_de_azucar_2.jpg": "24894dddfde656e03116594e9724dd2d",
"assets/assets/imag/produccion674p/canela.jpg": "bc18edcf01267fb3530a9476b8c91bf4",
"assets/assets/imag/produccion674p/carambolo.jpg": "be4ff739b3338565ac5843c9f675bd8d",
"assets/assets/imag/produccion674p/carambolo_2.jpg": "e72398635b1e18973e74c70af810fefa",
"assets/assets/imag/produccion674p/cepillo_rojo.jpg": "f3de516a657c0b492b491f8bbd1baa6f",
"assets/assets/imag/produccion674p/cepillo_rojo_2.jpg": "7929853fae9a9b45b4b174776fc5df5c",
"assets/assets/imag/produccion674p/cepillo_rojo_3.jpg": "350df9b775949b4a14d8ad7b36e7be79",
"assets/assets/imag/produccion674p/chaya.jpg": "8a72ad8229ee091c47dc40ed68f30121",
"assets/assets/imag/produccion674p/chaya_2.jpg": "f81ca8cd11eabfc29c1eb5978999f475",
"assets/assets/imag/produccion674p/chirimoya.jpg": "22f0d91b3d464760c896ae2453a1c053",
"assets/assets/imag/produccion674p/chirimoya_2.jpg": "4316469d33b6a97195d85f6d1a1bcca1",
"assets/assets/imag/produccion674p/coleo.jpg": "4e90ed6c7bb25d8749d292243063f4d9",
"assets/assets/imag/produccion674p/coleo_2.jpg": "9bcf8b52918ad4dc748db54ae19655f6",
"assets/assets/imag/produccion674p/coleo_3.jpg": "38a5bfea9d5e911c2a6c113bd97c6655",
"assets/assets/imag/produccion674p/costilla_de_adan.jpg": "a78da325dadd007aeaaa6d33a611cf05",
"assets/assets/imag/produccion674p/costilla_de_adan_2.jpg": "490ed250da04071f5a1bbe1a7f7c41bc",
"assets/assets/imag/produccion674p/croton_mammi.jpg": "047d03749b5c98a56d0f85a2294acce9",
"assets/assets/imag/produccion674p/croton_mammi_2.jpg": "0001b0cca869be5379aa822e24e522c7",
"assets/assets/imag/produccion674p/croton_mammi_3.jpg": "151d712502c34845ae543a6e9d9cec62",
"assets/assets/imag/produccion674p/curcuma.jpg": "aa4ebe57ce1330ae36a9bc124ff330e3",
"assets/assets/imag/produccion674p/curcuma_2.jpg": "880c22e14a04b0b7af9499ad506a76ed",
"assets/assets/imag/produccion674p/curcuma_3.jpg": "08e798003add3349dfbb55eb59589036",
"assets/assets/imag/produccion674p/damasquita.jpg": "480b529a93191e49295d497440c6610f",
"assets/assets/imag/produccion674p/damasquita_2.jpg": "5410a54d98f0c5d7dc93125d5eaf1d5b",
"assets/assets/imag/produccion674p/damasquita_3.jpg": "031effc50263d7aceba73c2c9c61fab6",
"assets/assets/imag/produccion674p/durazno.jpg": "638d8b4fda0927a41e965060528f9152",
"assets/assets/imag/produccion674p/durazno_2.jpg": "12eee6eb7a5cbbdfd98ab0a9e1758deb",
"assets/assets/imag/produccion674p/estreptocarpo.jpg": "54065d022d3430a1ab30a50689fda584",
"assets/assets/imag/produccion674p/estreptocarpo_2.jpg": "0111d18f726c98bc969b1878fefc9052",
"assets/assets/imag/produccion674p/flemingia.jpg": "ee098699899af41e5cb5da5103941ffa",
"assets/assets/imag/produccion674p/flemingia_2.jpg": "698a12c54ca88791f5475018059a105d",
"assets/assets/imag/produccion674p/flor_de_azucar.jpg": "8afa520234d7a46fd74e07c05e2da2ee",
"assets/assets/imag/produccion674p/flor_de_azucar_2.jpg": "c74539c2598c8d30173b566818463ee0",
"assets/assets/imag/produccion674p/giganton.jpg": "da5069ea9a71e0dd1ff5cf3890a48e49",
"assets/assets/imag/produccion674p/giganton_2.jpg": "3319b7f9764ba05fc9aa40a9039b4db0",
"assets/assets/imag/produccion674p/granada.jpg": "43b2e01bd430ddc8449dd482bed60aa2",
"assets/assets/imag/produccion674p/granada_2.jpg": "aceaf7c2992af86c617aa3b3a1c88530",
"assets/assets/imag/produccion674p/granada_3.jpg": "eeba80e0fb18898578a185f260af69af",
"assets/assets/imag/produccion674p/guaje.jpg": "77d8adea480edd91ab512fce67410c09",
"assets/assets/imag/produccion674p/guaje_2.jpg": "c066e81371d7a28fd2d1546329cd9e5c",
"assets/assets/imag/produccion674p/guaje_3.jpg": "ce470edce7441d1ad6693d83480393ea",
"assets/assets/imag/produccion674p/guanabana.jpg": "16a8faa8e2712a28a71297ee6dfccea6",
"assets/assets/imag/produccion674p/guanabana_2.jpg": "4539e9a8108516a9baf882c94eeabaa6",
"assets/assets/imag/produccion674p/guayaba_rosa.jpg": "a8aa816ee2f658c2119bb29a7ea229ab",
"assets/assets/imag/produccion674p/guayaba_rosa_2.jpg": "0a4358f163a3b1c1e18e2531dbdac575",
"assets/assets/imag/produccion674p/guayaba_rosa_3.jpg": "b8219f60ae45f7ee397323be977e13ae",
"assets/assets/imag/produccion674p/higuera.jpg": "590e36e4da0683437e0811edcfda855f",
"assets/assets/imag/produccion674p/hoja_de_rubi.jpg": "4a75b960b1946e1c3af5c54cdbe99ba2",
"assets/assets/imag/produccion674p/hoja_de_rubi_2.jpg": "58e4e976a467f4bd8cd569d66c45fbd6",
"assets/assets/imag/produccion674p/hoja_de_rubi_3.jpg": "a16900f164140f14dc662ab24fb9a345",
"assets/assets/imag/produccion674p/hoja_de_sangre.jpg": "ffe03a6619712bdd2262b3f85f9794cf",
"assets/assets/imag/produccion674p/hoja_pinta.jpg": "d48459d4452e67a4c7b12e8ad1023214",
"assets/assets/imag/produccion674p/hoja_pinta_2.jpg": "43a8a6d2aa067175b800002ea35281c3",
"assets/assets/imag/produccion674p/hoja_pinta_3.jpg": "7fe56fd361c3ffeb011f250c8328401e",
"assets/assets/imag/produccion674p/huele_de_noche.jpg": "a4712f4b496d92b3efa3d002cd5cfad3",
"assets/assets/imag/produccion674p/huele_de_noche_2.jpg": "bb273d638aeabd90f8a642058118c07f",
"assets/assets/imag/produccion674p/huele_de_noche_3.jpg": "54fb88e662c64090dc0bc7d9afeafe5b",
"assets/assets/imag/produccion674p/jaboticabo.jpg": "dd9bda0c8760077f836e3261aceb9efe",
"assets/assets/imag/produccion674p/jaboticabo_2.jpg": "4f91b52833077f06905bf8f39a130e0d",
"assets/assets/imag/produccion674p/jengibre.jpg": "a83aa55df88c975b4c5014f0a72dd0f7",
"assets/assets/imag/produccion674p/jengibre_2.jpg": "642cbb40d84b1499d0356eba90dcdcea",
"assets/assets/imag/produccion674p/jinicuil.jpg": "ad7c2861c2925a51d6f6cbc0c9871ffe",
"assets/assets/imag/produccion674p/jinicuil_2.jpg": "1c37138a2d84561a04d0257ed65ba96c",
"assets/assets/imag/produccion674p/jinicuil_3.jpg": "a4f5484bd60706d66cf69d78e4752345",
"assets/assets/imag/produccion674p/jonote.jpg": "0262e2b28ee9b934ced7a2bc937058ea",
"assets/assets/imag/produccion674p/jonote_2.jpg": "e756fbd8933dff3ca44435834c63f21c",
"assets/assets/imag/produccion674p/jonote_3.jpg": "fb370a44714edfe8d63a90194b834fc2",
"assets/assets/imag/produccion674p/kalanchoe.jpg": "22b7a3df5e118cfa8259cd3a6bd35d98",
"assets/assets/imag/produccion674p/kalanchoe_2.jpg": "72482a46463a76a2b1936372d98afbe4",
"assets/assets/imag/produccion674p/lengua_de_suegra.jpg": "beb88bdfbece008176010e46658566b9",
"assets/assets/imag/produccion674p/lengua_de_suegra_2.jpg": "253b639a6a8fd72424c5125a162dbd69",
"assets/assets/imag/produccion674p/lengua_de_suegra_3.jpg": "176842dd48a7e8899456cc7b90b919af",
"assets/assets/imag/produccion674p/limon_tavares.jpg": "f7a33949d41db63ac1333f8a77e5f847",
"assets/assets/imag/produccion674p/lirio_amarillo.jpg": "c5c7d581ac5947768e53121aa95ed4b8",
"assets/assets/imag/produccion674p/lirio_amarillo_2.jpg": "2ab006bfb1a75f5455bec416d768395d",
"assets/assets/imag/produccion674p/lirio_amarillo_3.jpg": "9125a5df1f4a92390e6de6042c2cccce",
"assets/assets/imag/produccion674p/lirio_amarillo_4.jpg": "96be1ea0fce8040eecc1a5d15cad2f91",
"assets/assets/imag/produccion674p/lirio_amarillo_5.jpg": "dc110d0dd959b860fa2c54c8aa464b0f",
"assets/assets/imag/produccion674p/lirio_amarillo_6.jpg": "2da7a4c666c5265dd9cb06ceb487f850",
"assets/assets/imag/produccion674p/lirio_de_dia.jpg": "7842d5f785d90c6557c9901d80679a49",
"assets/assets/imag/produccion674p/lirio_de_dia_2.jpg": "41a36d7a1d718556b987ca2c1dd6a201",
"assets/assets/imag/produccion674p/lirio_de_dia_3.jpg": "2bfb256f15f097556bef8c733b799cec",
"assets/assets/imag/produccion674p/lirio_de_dia_4.jpg": "f1a446bbb6e08038edec477fa7a0acd9",
"assets/assets/imag/produccion674p/lirio_de_dia_5.jpg": "66034c4266c71ef98aaea66800e3ed7d",
"assets/assets/imag/produccion674p/maguey_morado.jpg": "c054ad862700118efe4ae57cfb10db23",
"assets/assets/imag/produccion674p/maguey_morado_2.jpg": "5bbb5ec2623863d7ac4c1efd23e26cc9",
"assets/assets/imag/produccion674p/maguey_morado_3.jpg": "8f0bb2f2407af1c55dd1d81e99dccbfe",
"assets/assets/imag/produccion674p/malanga.jpg": "6bfa3270b20a277ea3adc9be763c8454",
"assets/assets/imag/produccion674p/malanga_2.jpg": "3daae230b3d9c83ddccc208e52165546",
"assets/assets/imag/produccion674p/mandarina.jpg": "07867c51ef25594c1efe89935dca977a",
"assets/assets/imag/produccion674p/mandarina_2.jpg": "abf8d810b75ac30915331433d155799d",
"assets/assets/imag/produccion674p/mandarina_3.jpg": "92b93b55bd154e835250447ffc30b1af",
"assets/assets/imag/produccion674p/mango.jpg": "7dec9aa6b099170aa6b67d648b1fb972",
"assets/assets/imag/produccion674p/maracuya.jpg": "d19281db5cb6e669a8d912d1d9a24cb8",
"assets/assets/imag/produccion674p/mata_caballo.jpg": "2f57f0ac37301502381291093fe4a5fb",
"assets/assets/imag/produccion674p/mata_caballo_2.jpg": "a6f498f4c8e28afb3fe737a5db2f49f7",
"assets/assets/imag/produccion674p/mata_caballo_3.jpg": "ffbf7010336cd11e3cab5f0badeb918c",
"assets/assets/imag/produccion674p/mora_silvestre.jpg": "4e30f2a6d0a8781b4fa6c4201c6c50aa",
"assets/assets/imag/produccion674p/mora_silvestre_2.jpg": "0542734c1509420bebfe4b3d43f60fb9",
"assets/assets/imag/produccion674p/mora_silvestre_3.jpg": "3e29e92e702f94d32e5763429ede9f43",
"assets/assets/imag/produccion674p/nance.jpg": "f5cd8d8c01223f9853e467c4001495bc",
"assets/assets/imag/produccion674p/nance_2.jpg": "bed573fad2927e8310594dcbde83bc52",
"assets/assets/imag/produccion674p/nance_3.jpg": "108dba7d0312b27f57792728f9474772",
"assets/assets/imag/produccion674p/nopal.jpg": "ec9b1ec2a08d0274dc643cb6ba7c5c67",
"assets/assets/imag/produccion674p/nopal_2.jpg": "42100bd8b08a97dd7d7bfcddf08cf50b",
"assets/assets/imag/produccion674p/nuez_de_macadamia.jpg": "ad64fe3b802fbfba079e0b2915e4c067",
"assets/assets/imag/produccion674p/nuez_de_macadamia_2.jpg": "196d5ba3b53b3352a980703ec65f666e",
"assets/assets/imag/produccion674p/nuez_de_macadamia_3.jpg": "55fe34ac7963e76d955a39b8dc78a3c6",
"assets/assets/imag/produccion674p/oreja_de_elefante.jpg": "98f7bdde9d4c4d4e9145ac7eb65f9c45",
"assets/assets/imag/produccion674p/orquidea_cola_de_pato.jpg": "ff43969f9e9cd16c246d29d2b99c2465",
"assets/assets/imag/produccion674p/orquidea_cola_de_pato_2.jpg": "392a57ba6a4bae5037f0c18ea774ba46",
"assets/assets/imag/produccion674p/orquidea_cola_de_pato_3.jpg": "6c8a3f88c6a1f200ef1d0cbbb17180c5",
"assets/assets/imag/produccion674p/orquidea_pulpo.jpg": "de9f631b96d8f45b09fb81ebd718742b",
"assets/assets/imag/produccion674p/orquidea_pulpo_2.jpg": "136169634ce7b2ac66c2e5db4219e427",
"assets/assets/imag/produccion674p/orquidea_pulpo_3.jpg": "259302b2f0316e0a5b2a5e25951a739e",
"assets/assets/imag/produccion674p/palo_santo.jpg": "3df011dfa7a56a6efabdc3c5ca509b23",
"assets/assets/imag/produccion674p/papaya.jpg": "4386d89dd676399356d36a382d8b7804",
"assets/assets/imag/produccion674p/papaya_2.jpg": "88aad124043b9e7113dd1f47a876ef8a",
"assets/assets/imag/produccion674p/papaya_3.jpg": "621ce9e0e6d06e873bb055e96c8025db",
"assets/assets/imag/produccion674p/papa_aerea.jpg": "79fe218914bb2cae73d916fd54358621",
"assets/assets/imag/produccion674p/papa_aerea_2.jpg": "fc32fe20e1e57ebdc6b37e30687a12c4",
"assets/assets/imag/produccion674p/papa_aerea_3.jpg": "3a3d3c37bcecb2975b1e12ed2a9d8c3e",
"assets/assets/imag/produccion674p/paraguitas.jpg": "e59a14cf8d4399c8adbc64c7f06ba617",
"assets/assets/imag/produccion674p/paraguitas_2.jpg": "664452fa8c64e1691af8e6873fdded93",
"assets/assets/imag/produccion674p/peperomia.jpg": "0755b458e571eac901df0d95b712a27f",
"assets/assets/imag/produccion674p/peperomia_2.jpg": "3b8ed9274fabd35cd9b6350294ed0076",
"assets/assets/imag/produccion674p/peperomia_3.jpg": "d310dfd5d39c969612a0cdfd1ce33aa0",
"assets/assets/imag/produccion674p/peral.jpg": "529392967df29d96f698d785db584574",
"assets/assets/imag/produccion674p/peral_2.jpg": "58f7b8067308d894906a437af1ce2c44",
"assets/assets/imag/produccion674p/peral_3.jpg": "bf734c589a3ffeb5b770b97ab35461f6",
"assets/assets/imag/produccion674p/persimo.jpg": "f97be55791c99c04950b883eb94a20fb",
"assets/assets/imag/produccion674p/persimo_2.jpg": "92b1fc8a601d16db7ee286e110685216",
"assets/assets/imag/produccion674p/pimienta_de_olor.jpg": "aa8c33c1a12462b85498df8a3715de2b",
"assets/assets/imag/produccion674p/pimienta_de_olor_2.jpg": "bcdc347a561521b83494366af4c2a43c",
"assets/assets/imag/produccion674p/pimienta_de_olor_3.jpg": "2f3b7a6ae4e3dff6e1384767144b2f4b",
"assets/assets/imag/produccion674p/pina.jpg": "ae54e6e6c1c03cf3b3909535044764ef",
"assets/assets/imag/produccion674p/pina_2.jpg": "f6f7c8aeadbb96fea728960aca9c83ef",
"assets/assets/imag/produccion674p/planta_de_oracion.jpg": "d9948a6d75565820cdebb88aff2f2501",
"assets/assets/imag/produccion674p/planta_de_oracion_2.jpg": "1ad36fcabaa47b7d1c8c7aac1b4bb8fb",
"assets/assets/imag/produccion674p/sabila.jpg": "a8483164d3ce9d2f532b9d94616af1f5",
"assets/assets/imag/produccion674p/sabila_2.jpg": "85bf3c5373e0154017624b5b3b6b55cf",
"assets/assets/imag/produccion674p/sauco.jpg": "af5d67a2c741cba02ce03a27f2b9f91b",
"assets/assets/imag/produccion674p/sauco_2.jpg": "5f5d828b093b5af242817e86cb039d67",
"assets/assets/imag/produccion674p/sauco_3.jpg": "abdec15d7cffabaf4d1b7e2cdf6294ed",
"assets/assets/imag/produccion674p/suculenta.jpg": "9409b962dd9a81a51d228e5d4bd64a99",
"assets/assets/imag/produccion674p/suculenta_2.jpg": "21d45697ce5a15353b40de819efd0c7c",
"assets/assets/imag/produccion674p/suculenta_3.jpg": "55606708bf6ca0b5740e4c722ff14b20",
"assets/assets/imag/produccion674p/tulipan.jpg": "7738422b27eeadc990afb0f6ad8cad0b",
"assets/assets/imag/produccion674p/tulipan_2.jpg": "d5657ddc76593a21b4e2c94809bfcefc",
"assets/assets/imag/produccion674p/tulipan_3.jpg": "63c132f5183f830f111c817a500bd3f2",
"assets/assets/imag/produccion674p/yuca.jpg": "30dd9448282c9c045398c664ed60b3bc",
"assets/assets/imag/produccion674p/yuca_2.jpg": "22e70a0cddefe0d21e0b94844e8f7163",
"assets/assets/imag/produccion674p/zacate_formio.jpg": "4d07a07db9787e14058f0eae9eda918a",
"assets/assets/imag/produccion674p/zacate_formio_2.jpg": "fd0b5dc6b0343bf7a5bb03e5876b965f",
"assets/assets/imag/produccion674p/zapote_blanco.jpg": "d8d7da575182c97221dbd008f4a61230",
"assets/assets/imag/produccion674p/zapote_blanco_2.jpg": "799765794f18dcda53da84f492ac964f",
"assets/assets/imag/produccion674p/zapote_blanco_3.jpg": "26a2ded358d202afe72ae2ec6095b922",
"assets/assets/imag/produccion674p/zapote_negro.jpg": "0fa3b745201403c20b184588c71a6822",
"assets/assets/imag/produccion674p/zapote_negro_2.jpg": "a0ca16603f3da2ea9554667984680c0a",
"assets/assets/imag/produccion674p/zapote_negro_3.jpg": "5bf4393180eaf22e58d40a3367f4c941",
"assets/assets/imag/ui/512.png": "db6a94fa77a35ceb7f82e432a8b07e42",
"assets/assets/imag/ui/512.psd": "5a65ec65d1181ac3830f86fd0ca10e1e",
"assets/assets/imag/ui/512nt.png": "186920d08a3e48decb949ba6cc4d340f",
"assets/assets/imag/ui/app_bar.jpg": "25f821d0b3b1d060a62daa685ba81f88",
"assets/assets/imag/ui/app_icon.psd": "17c5a02cd07a247900777c55cebab61e",
"assets/assets/imag/ui/cuevabg.png": "a27b676e11757e8adde663b69d172428",
"assets/assets/imag/ui/cuevabg.psd": "c87f956bbf08168f973022bc0dd664a7",
"assets/assets/imag/ui/fondo_etnobotanica.jpg": "bd819b54b47cd34cc0a4af1ac7da426e",
"assets/assets/imag/ui/fondo_glosario.jpg": "7fcd258e385eb424e73e99400ef9a569",
"assets/assets/imag/ui/fondo_hd.jpg": "d5067d0b2ce9ee6e4a1d7e2857de9579",
"assets/assets/imag/ui/fondo_info.jpg": "3b94073f6226e29c4f92cf832b647c93",
"assets/assets/imag/ui/fondo_inicio.jpg": "ecf907fee43961f39f84baa5272048e8",
"assets/assets/imag/ui/fondo_items.jpg": "be252655db7c76094c6b4e996d0266f7",
"assets/assets/imag/ui/fondo_nav.jpg": "9219bbd2fd2c1b91ad7d10c173cfd24d",
"assets/assets/imag/ui/fondo_plantas.jpg": "c845f7c9009866f8894e6845d884b962",
"assets/assets/imag/ui/gr%25C3%25A1fico_funciones.png": "5ddbfe45a2651fe32c521bd21bce8b8a",
"assets/assets/imag/ui/gr%25C3%25A1fico_funciones.psd": "8e595b02cd82390b011545e328e25cb6",
"assets/assets/imag/ui/launcher_icon.png": "28a8d069fbfffac7531f913b3a35fc38",
"assets/assets/imag/ui/launcher_icon_t.png": "fad6dd8cdca004fa86a7f7b4c2c5fe53",
"assets/assets/imag/ui/launcher_icon_w.png": "e257987d1b6e3fb9d43c0db4eb2bbf54",
"assets/assets/imag/ui/logo_acerca.png": "2f18cb6923db4268123bd953b80d3247",
"assets/assets/imag/ui/logo_acerca2.png": "7f507ded27d86f9e22694464d1802aa0",
"assets/assets/imag/ui/logo_acerca3.png": "d4460634603d3cc15b17af39141f5660",
"assets/assets/imag/ui/logo_acerca4.png": "8c07a4e72255d9fd54da921b3f03932d",
"assets/assets/imag/ui/logo_acerca5.png": "d78ad90f462208749edf4e95b37b1a38",
"assets/assets/imag/ui/logo_cueva.png": "699b52986ed258f8069e7f1d9480aa69",
"assets/assets/imag/ui/logo_min_cueva.png": "93cd323446c15a74466096fc76e7a1d0",
"assets/assets/imag/ui/logo_tecnm.png": "9eaf1000b8682b58b3df3e0170f34e26",
"assets/assets/imag/ui/logo_tec_itsz.png": "de63a8888f9eebadd04cf3d93d1e9231",
"assets/assets/imag/ui/splash_imagen.jpg": "b578ec575bf037e25af60340d08771e8",
"assets/assets/images/add-cart.png": "0efca392cf7680809dbe245bd6b6c81b",
"assets/assets/images/code-scan-two.png": "d1a786fd1ecc3b69782a1f205abbea99",
"assets/assets/images/code-scan.png": "3440b258fc731b8419cd4b5a02a8b845",
"assets/assets/images/favorited.png": "048458213c5f1d8d7b3674bad3a915fa",
"assets/assets/images/google.png": "ca2f7db280e9c773e341589a81c15082",
"assets/assets/images/plant-eight.png": "90926f6756d93188548ebbd05ba36a38",
"assets/assets/images/plant-five.png": "f5846197bea69fa2af7abc4c833a5d45",
"assets/assets/images/plant-four.png": "78775b84f48694858d1dd61c3133668f",
"assets/assets/images/plant-one.png": "1395c09e00a526de95f23f3c9a2a1c78",
"assets/assets/images/plant-seven.png": "6d1225d8166c41774f2dfe9e7e80b850",
"assets/assets/images/plant-six.png": "8048278152596e5d70c2dbef33b23efa",
"assets/assets/images/plant-three.png": "337d261203f0aa527dab76b9ed92ebbd",
"assets/assets/images/plant-two.png": "1716830b14c4b24956f10cf857d4ad22",
"assets/assets/images/profile.jpg": "32b5244a0dfedea5b311323be1365f10",
"assets/assets/images/reset-password.png": "d21b6f48128102d256561dda32b0cdaf",
"assets/assets/images/signin.png": "b8de3e6db5330a4f182b5a22edc72936",
"assets/assets/images/signup.png": "9295875b85a1281cf3e79f306e470fa4",
"assets/assets/images/upload.png": "c7147492d58400e643f7806ea36678c7",
"assets/assets/images/verified.png": "6558da30a431eb6eb268309387af95aa",
"assets/assets/ml/img_download_script.py": "d0051746e8b2827000173263e1da98a4",
"assets/assets/ml/model_medimaging_metadata.tflite": "1233e1add5e0b03bfcdc071084379d3b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "761891469f3b330a344e8dd6772f891d",
"assets/NOTICES": "0b17f567289dd7a0e2bb3f8ac9db3d7e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "4226392bee9372f20a688343e51e7b54",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/packages/toast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/toast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "eab95c6de85f5fc50beb115311984d9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "694ce789a3b232103967ca56719f733a",
"/": "694ce789a3b232103967ca56719f733a",
"main.dart.js": "70b113dc14ed20f20b18ae26bbedc0ce",
"manifest.json": "31f430688446b1765b142418a75d96ae",
"version.json": "a0e6aae688aedaa6f3869dde568dcacc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
