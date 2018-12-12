"use strict";function setOfCachedUrls(c){return c.keys().then(function(c){return c.map(function(c){return c.url})}).then(function(c){return new Set(c)})}var precacheConfig=[["/index.html","e947dedb409449b5802b30397ebf4863"],["/main.bf2c382e.css","bf2c382e9e1032fe8392d6d4c2de6425"],["/static/css/main.c9c9412e.css","c9c9412e88f8219015028e5729434934"],["/static/js/0.1e170ea1.chunk.js","80f2abbb0731affcfd353cb6238f5e58"],["/static/js/1.9208259a.chunk.js","9afb23a8d7ba6e358472a45c6f538658"],["/static/js/10.89b2e1f1.chunk.js","762cec3457dcfc37ab01b96b7bf4f7ee"],["/static/js/11.6e468d36.chunk.js","816e13f887f4f8b69b93fd840c9d7e86"],["/static/js/12.e30b4372.chunk.js","1c556898c0e3b46c7c1049306ffeaf06"],["/static/js/13.b18297c5.chunk.js","2e15a28c036a9e0a6bd3b2fd2eedbeb2"],["/static/js/14.a45e90d9.chunk.js","8887c1e40371edf97f7488c9b653285b"],["/static/js/15.0972b07c.chunk.js","8ac1d16b2725e5de7b093443d246cd0e"],["/static/js/16.efbf6027.chunk.js","bb266a0e27f22569212d0bda4544c0a5"],["/static/js/17.35f38f61.chunk.js","e1db5283cbec9cc93ad55b9774d876d7"],["/static/js/18.279b2a12.chunk.js","cba8a841e6ad63d77c1cf6b1c623e00c"],["/static/js/19.b49592ea.chunk.js","2191d727190c0d49b65dd59f8011036e"],["/static/js/2.b078b9ab.chunk.js","111644ea6b7e4c5f3d59efe32add112b"],["/static/js/20.cd3843a9.chunk.js","527aae535b177d26beb48ff85bcd84a3"],["/static/js/21.834ac7c7.chunk.js","c008b2e46d704d0824df71cad5b72e70"],["/static/js/22.1f525b33.chunk.js","1fbb00959ee287d57391ec966e4864eb"],["/static/js/23.cd30e4b0.chunk.js","5060c06d01c0709943c4bfed5bd29577"],["/static/js/24.be9947bc.chunk.js","e93d8598a1a87c431924c25cc13fffb7"],["/static/js/25.efe7aae1.chunk.js","a7ddda44048ce636298d6a4c3144eb8f"],["/static/js/26.a8215317.chunk.js","d720049664774f48f7169ae75280a0b7"],["/static/js/27.b582a5ff.chunk.js","855a6efa51ca74a49d031006f412cfc6"],["/static/js/28.6d9f3433.chunk.js","9b5e282738948afc077ec9a7fc64ed39"],["/static/js/29.dfca82e0.chunk.js","e10f37028da6a12de27522df519315e1"],["/static/js/3.2758950d.chunk.js","18378f7a95033318a0ac431a25c45002"],["/static/js/30.cea00268.chunk.js","28de919657dbe9d2607827fafff103e1"],["/static/js/31.ced6eba0.chunk.js","c4e41c456a41b51724efa2a2bb65e867"],["/static/js/32.2353ede3.chunk.js","fff79205e9458074b30c2b2f63bb4f51"],["/static/js/33.d5c1de0d.chunk.js","5225a2a8f102025d715ee27de650b7eb"],["/static/js/34.709239b3.chunk.js","a3e8a0a20591133922312de12ae1f9b3"],["/static/js/35.6457e875.chunk.js","970af736bc536bb586625b6bb9aaede0"],["/static/js/36.2ac375d3.chunk.js","e1847878198b0c63d152a557b2238077"],["/static/js/37.ff3e29ee.chunk.js","66b34bcd028feafa8926dbcb4c19dead"],["/static/js/38.a40012b5.chunk.js","9211799d2ab827f142a4dfe18b26da2a"],["/static/js/39.09395dfc.chunk.js","b8a2f7212d3b26018d242ad3bbe337ec"],["/static/js/4.ef866cf6.chunk.js","c39a266649cd2c7aca89d84a8386f495"],["/static/js/40.d0a9cd3b.chunk.js","265da9a451db32c4032472ff7043cf52"],["/static/js/41.e1ba9969.chunk.js","52b247aaef1037b64fddc56b2b10adce"],["/static/js/42.882ddf89.chunk.js","bf52d22437df07324f52e5e70220bd13"],["/static/js/43.ddb63c01.chunk.js","afc6bf79f7cde1fa554716dbe8c9df72"],["/static/js/44.aae2054b.chunk.js","ab2927d7de427598873a4fdd96175a03"],["/static/js/45.c047fd0e.chunk.js","4fa930eab4a17551ebb0a0509cd16df9"],["/static/js/46.8e975b20.chunk.js","74df75cc06be92773592c088c5657813"],["/static/js/47.c10ebc01.chunk.js","a28f767a66522246f2b5fcba8dfc6904"],["/static/js/48.e52ac11d.chunk.js","156da882d82f52d1880b19681d97cf8c"],["/static/js/49.b00bbe96.chunk.js","a7a9d023c7d3c1f1f1a9fa21ddc48f85"],["/static/js/5.f81533b8.chunk.js","519a4bbbc4d2a215d1183b198bcf719a"],["/static/js/50.ea28377a.chunk.js","2d34f8096bff568384fb54fa5fddad2b"],["/static/js/51.2f249ddc.chunk.js","00bd5af56a395fff7d5878c22aaf0040"],["/static/js/52.7c487c8e.chunk.js","b566df8f1546224959f9e204f47b00e5"],["/static/js/53.04baa592.chunk.js","df68c6969e9eed56eed2a90ae112f16b"],["/static/js/54.3b819d3e.chunk.js","1e39baa7c9046e479f48828076a29c14"],["/static/js/55.8046aafa.chunk.js","a466b5c5532dd23232c5f761ecf063d5"],["/static/js/56.842d5a48.chunk.js","2a3e1918cb008f85dc419cf6f1e2f0fc"],["/static/js/57.26d10ae2.chunk.js","02000e55b1ab8e75c926814485a6734b"],["/static/js/58.2a424229.chunk.js","d88d951029582dfbe57b984ed70e50e3"],["/static/js/59.403eb3c4.chunk.js","739f04abf8a0be823b1c0be1ff7a89a6"],["/static/js/6.fba77044.chunk.js","0bb8c02dfaab4f5e689ab2d34390e6fb"],["/static/js/60.67451eec.chunk.js","f30c23543bd4c6fd527dafdbf1d693c5"],["/static/js/61.b46eb472.chunk.js","0077ca66eda473102c60e1e70c9aa81f"],["/static/js/62.1d020005.chunk.js","95093c7c03eba3415aa14b6e657146e7"],["/static/js/63.56edeac6.chunk.js","7ddd28e35421e888f989b583dafb843e"],["/static/js/64.0d7b613d.chunk.js","e6e84359eeefda6f3812798025fa81cb"],["/static/js/65.b2d548ec.chunk.js","a436048f85a49d7aa7de4d1bff1a289e"],["/static/js/66.6b90c5c0.chunk.js","2b6caf07fbe8cc63d65dac2fb323cb99"],["/static/js/67.937b15b7.chunk.js","f2f8e5e2b851ede41323043dc54cc45c"],["/static/js/68.c7da1654.chunk.js","2fbf22d9445f751cf825507bc23202e5"],["/static/js/69.3faada51.chunk.js","e301109f1c27c925d801a64d07a3449a"],["/static/js/7.9dffe071.chunk.js","79848a108be849a7ab34cb001c45413c"],["/static/js/70.7bc04a96.chunk.js","7323fe947533d723eacbf74d3b290f40"],["/static/js/71.a7dde693.chunk.js","b4314613496d784f1a245e73aad27f33"],["/static/js/72.e2e5816d.chunk.js","28be713665d218f7c6b62ae08e67c53a"],["/static/js/73.cfb8d325.chunk.js","a3a183340c214a32fad065c9bfee17a4"],["/static/js/8.4c61bb6c.chunk.js","c0f4ed3a252acd53db76f35d817ad4a0"],["/static/js/9.dee84c56.chunk.js","c3f06827c76671a65653f7709685a2f0"],["/static/js/LeafletMapWithCustomHtmlMarker.72dcfa02.chunk.js","f2910c7b5b37fd4a1a0b9db74b6c286b"],["/static/js/LeafletMapWithCustomMarker.9c7601f2.chunk.js","a068ca41188cc6825cd042574c31d010"],["/static/js/LeafletMapWithMarkerCluster.db4a966c.chunk.js","d81ceabb86ccc1bf1888aa5fe1e781fb"],["/static/js/ReactChart2-Doughnut.0909d680.chunk.js","a9ca6613069d4fdd9f5935f4d15f023f"],["/static/js/ReactChart2-bar.c6ef3e1c.chunk.js","dd43f2ba68e19a6c98ef08227e121c6e"],["/static/js/ReactChart2-box.14e4d6b3.chunk.js","b58f4a749a97cecc60407db888e441c9"],["/static/js/ReactChart2-bubble.8ff41c89.chunk.js","6c94d07336114a0c065639f7c2416580"],["/static/js/ReactChart2-contentHolder.50c173eb.chunk.js","ba781c3784cfb94d77e3b4dfcf294f0e"],["/static/js/ReactChart2-dynamic-doughnut.5a2f638a.chunk.js","f20ff8d264b975ae38ce96e76302eab0"],["/static/js/ReactChart2-horizontalBar.2307cf42.chunk.js","8bc27e91ddcdf53051fde5f35c6cc201"],["/static/js/ReactChart2-layoutWrapper.a858c2f7.chunk.js","bdff5120c79859d08c557674441526d1"],["/static/js/ReactChart2-line.a778f96b.chunk.js","7911d5e37fc75ea69e5db89b9f85ded4"],["/static/js/ReactChart2-mix.47f9231e.chunk.js","f105116d04dbe4e98ffa7acd60c16ec1"],["/static/js/ReactChart2-pageHeader.7c4f38fd.chunk.js","f751c24b00d14ea4f9ff7173381c4e4b"],["/static/js/ReactChart2-pie.806b4d05.chunk.js","674be67b33b403292edfbecad52a8ed9"],["/static/js/ReactChart2-polar.0fb53b1c.chunk.js","2ace2ee9fcee8583912a5a0fe46536cb"],["/static/js/ReactChart2-radar.1fec1aee.chunk.js","12d4591b9a362754c5e4fe8afd964ad4"],["/static/js/ReactChart2-randomizedLine.cc1e2cdd.chunk.js","90ba18700f5dd5d7bbcc86cdab18bb70"],["/static/js/basicLeafletMap.e9c02afa.chunk.js","e2db97a0df9d7177cd5a8d0b2cac0a77"],["/static/js/basicLeafletMapWithMarker.59c7ccba.chunk.js","d043926eefb31e330c4d90171cc0a3e8"],["/static/js/compose-mAIL--editor.099134b7.chunk.js","fdcac6479335b42df8e422a25fb30614"],["/static/js/forms-editor.56c139f1.chunk.js","705e57ff891f909eba1dcd613aaaca5e"],["/static/js/googleChart.9413e4b9.chunk.js","7d1c6f37f034b82c877d1211833134de"],["/static/js/react-trend.fcdba76f.chunk.js","0ce01a740863c2f328f2eabf4deaee8c"],["/static/js/react-vis-animatedSunburst.70b9d904.chunk.js","0770a616f2a3f7a103e4f01214dfaa56"],["/static/js/react-vis-basicSunburst.e1f27dc4.chunk.js","d3ed49036d8950199c8bb169631fc77b"],["/static/js/react-vis-candleStick.cf4b9977.chunk.js","7d497735e013889dbdd41fd23a4f3c9a"],["/static/js/react-vis-circularGridLines.19bc798a.chunk.js","b67356027dab9e0ee9becd244bb1f5be"],["/static/js/react-vis-clusteredStackedBarChart.7b522aeb.chunk.js","5548514de98ba3e560bf4ddbaebf739d"],["/static/js/react-vis-complexChart.b78493ac.chunk.js","7780bd41bf4e2a7a0d1f049de1ff217e"],["/static/js/react-vis-customRadius.39e5d31a.chunk.js","4a554081dcea44de7d663299c822d534"],["/static/js/react-vis-customScales.9ff24236.chunk.js","2f60f0b9e6f70ec8944dab218603f9fb"],["/static/js/react-vis-dynamicCrosshairScatterplot.f6cb5525.chunk.js","f1f2c15f94f2f33807378dab4658e522"],["/static/js/react-vis-dynamicProgrammaticRightedgehints.e57f77b9.chunk.js","f1be5eb591a2246494811740c0aba1ff"],["/static/js/react-vis-dynamicTreeMap.968462b1.chunk.js","1e923c449a5df5cb962f7c2e3d7f3cc5"],["/static/js/react-vis-lineMark.74930545.chunk.js","8706188f0d34b903a130a2e3ce62f097"],["/static/js/react-vis-lineSeries.f932d19a.chunk.js","28463d1550a42f37ad4d46d7bd352ba5"],["/static/js/react-vis-simpleDonutChart.f1877b11.chunk.js","ea943310d4458bcd68e9698fe46c22ed"],["/static/js/react-vis-simpleRadialChart.f5e16ef4.chunk.js","ac73d54dffbd3d9c88575542862de2b4"],["/static/js/react-vis-simpleTreeMap.c80892da.chunk.js","8637cc599e45d27f8289024f2c7948d7"],["/static/js/react-vis-stackedHorizontalBarChart.363c3d0c.chunk.js","c7326c96efa6da28d4f5062a37ad236d"],["/static/js/react-vis-streamGraph.0c8f8ac6.chunk.js","81d7dbe71d1c631601a3cfd3c8f8c708"],["/static/js/rechartx-biaxialBarChart.fe5e101f.chunk.js","563c38d68892256f2e914e4005d21b84"],["/static/js/rechartx-customActiveShapePieChart.f2a7dd30.chunk.js","4ad771caa4b7f67c91ecacb29e3d5c55"],["/static/js/rechartx-customShapeBarChart.94610e80.chunk.js","b96702b8f83e0113a5f0fd2410e89b6c"],["/static/js/rechartx-customizedDotLineChart.41292bae.chunk.js","cb3611caa003c2e557c6c2008f25d412"],["/static/js/rechartx-legendEffectOpacity.48759b71.chunk.js","092078be026af0d6a17f27305191bc10"],["/static/js/rechartx-lineBarAreaComposedChart.142b626a.chunk.js","eb9046118ae41a5dc86245d463b7cd8e"],["/static/js/rechartx-mixBarChart.c5a597d0.chunk.js","5a28bf4851366029016f9a2463e3fced"],["/static/js/rechartx-simpleAreaChart.befaa5ea.chunk.js","5a6ca68a300517d6f2403f804640673a"],["/static/js/rechartx-simpleBarChart.707edf56.chunk.js","c7ff1ba38a6cf0eeefe3cadc9a4b8c68"],["/static/js/rechartx-simpleLineCharts.0ba13b14.chunk.js","c216a6d367d3b7dc62211525a7115dfd"],["/static/js/rechartx-simpleRadialBarChart.2cfef6ea.chunk.js","f90dcaf6f1993fd30a024c6959a746de"],["/static/js/rechartx-specifiedDomainRadarChart.20cebc82.chunk.js","3560736ff353fb38ca9c544f4f603b2e"],["/static/js/rechartx-stackedAreaChart.60b4cae4.chunk.js","de89c0453b8ff9b018f88df136e401fb"],["/static/media/1.57c4a8ee.jpg","57c4a8eee85156be8b96aca5f8488991"],["/static/media/2.b3c1af26.jpg","b3c1af263dfc26c4daaff934f66a3f3e"],["/static/media/3.ce8b33de.jpg","ce8b33deebfcb35dba62259312c59217"],["/static/media/4.54022705.jpg","540227055782999a73c80638dca9671c"],["/static/media/5.5daa9a7e.jpg","5daa9a7ee4062c3e64ed4403924df071"],["/static/media/6.b0b11045.jpg","b0b11045634ee42c0b4bdb62d12bccb4"],["/static/media/7.6f3b92ce.jpg","6f3b92ce2eb3ef570da604aa793fb85b"],["/static/media/algolia.fd4c766f.svg","fd4c766fbd98fd9765e22618a2865d28"],["/static/media/candlestick.32f3f818.scss","32f3f8185c457a58256082be72b6d5e2"],["/static/media/china.4e4d59b7.svg","4e4d59b7a0903071d743973f8e3b3aab"],["/static/media/france.bcd389de.svg","bcd389debadb2cf1c0332df62b80c1b9"],["/static/media/image1.1c979949.jpg","1c9799495a3b052d0804fd0562ae9662"],["/static/media/image3.d032955c.jpg","d032955c4314cf635a801dc49f74b96a"],["/static/media/image4.7db25367.jpg","7db253676738825728676e4c137d5ef8"],["/static/media/image5.603427e6.jpg","603427e6eaa565bed5f98f003c67bf23"],["/static/media/italy.604345b4.svg","604345b476aa52a0245ee2ffd3cd50db"],["/static/media/map-pin-2.5169ff2d.svg","5169ff2daacad33efc5a9273ec48c6f6"],["/static/media/rob.b34fc52c.png","b34fc52c382add7ec9fa87c03adfe907"],["/static/media/sign.adf5846b.jpg","adf5846b1711fa8000cfd4c6c65a411d"],["/static/media/spain.6a9dc11f.svg","6a9dc11ff55791478b31156cd09b6b38"],["/static/media/uk.bc48afcc.svg","bc48afcc15d5d9d51255de0b2ee708be"],["/static/media/work.56bf9122.jpg","56bf912220fcc0ea7d0f6595a28f9a4d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(c,a){var e=new URL(c);return"/"===e.pathname.slice(-1)&&(e.pathname+=a),e.toString()},cleanResponse=function(c){if(!c.redirected)return Promise.resolve(c);return("body"in c?Promise.resolve(c.body):c.blob()).then(function(a){return new Response(a,{headers:c.headers,status:c.status,statusText:c.statusText})})},createCacheKey=function(c,a,e,t){var s=new URL(c);return t&&s.pathname.match(t)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(e)),s.toString()},isPathWhitelisted=function(c,a){if(0===c.length)return!0;var e=new URL(a).pathname;return c.some(function(c){return e.match(c)})},stripIgnoredUrlParameters=function(c,a){var e=new URL(c);return e.hash="",e.search=e.search.slice(1).split("&").map(function(c){return c.split("=")}).filter(function(c){return a.every(function(a){return!a.test(c[0])})}).map(function(c){return c.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(c){var a=c[0],e=c[1],t=new URL(a,self.location),s=createCacheKey(t,hashParamName,e,/\.\w{8}\./);return[t.toString(),s]}));self.addEventListener("install",function(c){c.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(e){if(!a.has(e)){var t=new Request(e,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+e+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return c.put(e,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(c){var a=new Set(urlsToCacheKeys.values());c.waitUntil(caches.open(cacheName).then(function(c){return c.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return c.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(c){if("GET"===c.request.method){var a,e=stripIgnoredUrlParameters(c.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(e))||(e=addDirectoryIndex(e,"index.html"),a=urlsToCacheKeys.has(e));!a&&"navigate"===c.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],c.request.url)&&(e=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(e)),a&&c.respondWith(caches.open(cacheName).then(function(c){return c.match(urlsToCacheKeys.get(e)).then(function(c){if(c)return c;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',c.request.url,a),fetch(c.request)}))}});