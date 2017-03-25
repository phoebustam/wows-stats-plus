const MAX_RETRY = 5;

//var api_url = window.sessionStorage.getItem("API_URL");
//var api_key = window.sessionStorage.getItem("API_KEY");

//var ship_info = {};
var ownerName = "";

// get ship info
//function get_shipinfo () {
//	console.log("Enter get_shipinfo");

//	var sync_request = new Promise (
//		function (resolve, reject) {
//			if (ship_info != null) {
//				$http({
//					method:'GET',
//					url: 'api_url + '/wows/encyclopedia/ships/?application_id=' + api_key + '&fields=name%2Ctier'
//				}).success(function(data, status) {
//					var info = JSON.parse(data);
//					if (info.status == "ok") {
//						if (info.meta.count > 0) {
//							ship_info = info.data;
//							console.log("Exit get_shipinfo with success");
//							resolve();
//					    } else {
//							console.log('Exit get_shipinfo with meta.count <= 0');
//							reject();
//						}
//				    } else {
//						console.log("Exit get_shipinfo with json parse error");
//						reject();
//					}
//				} else {
//					console.log("Exit get_shipinfo with API request fail");
//					reject();
//				}
//			});
//			} else {
//					console.log("Exit already set array");
//					reject();
//			}
//		}
//	);

//	sync_request.then ( function () {
//		var json_data = data.vehicles;
//		var keys = Object.keys(json_data);

//		for(var i=0, num=keys.length; i<num; i+=1) {
//			var tier = ship_info[ keys[i] ].tier;
//			json_data[ keys[i] ].tier = tier;
//			console.log(ship_info);
//		}
//    });
//}

//get_shipinfo();

function  shiptypr(val1,val2,val3,val4,val_sw){
	document .getElementById("sw1").style .border="outset 3px";
	document .getElementById("sw2").style .border="outset 3px";
	document .getElementById("sw3").style .border="outset 3px";
	document .getElementById("sw4").style .border="outset 3px";
	document .getElementById("sw5").style .border="outset 3px";
	document .getElementById(val_sw).style .border="inset 3px";
	if ( val1 ){
		cv ="none";
	}else {
		cv = "";
	}
	if ( val2 ){
		bb ="none";
	}else {
		bb = "";
	}
	if ( val3 ){
		cl ="none";
	}else {
		cl = "";
	}
	if ( val4 ){
		dd ="none";
	}else {
		dd = "";
	}
	var elements = document.getElementsByName("AirCarrier");
	for (var i=0; i<elements.length ; i++) {
		document .getElementsByName( "AirCarrier" )[i]. style . display = cv;
	}
	var elements = document.getElementsByName("Battleship");
	for (var i=0; i<elements.length ; i++) {
		document .getElementsByName( "Battleship" )[i]. style . display = bb;
	}
	var elements = document.getElementsByName("Cruiser");
	for (var i=0; i<elements.length ; i++) {
		document .getElementsByName( "Cruiser" )[i]. style . display = cl;
	}	var elements = document.getElementsByName("Destroyer");
	for (var i=0; i<elements.length ; i++) {
		document .getElementsByName( "Destroyer" )[i]. style . display = dd;
	}

	prepare_ss("#prtype_tbl");
}

function idhide(val1,val2){
	if ( val1 ){
		idp ="none";
		buta ="";
	}else {
		idp = "";
		buta ="none";
	}
	var el = document.getElementsByName("user_own");
	for (var i=0; i<el.length ; i++) {
		document .getElementsByName( "user_own" )[i]. style . display = idp;
	}
	var el = document.getElementsByName("user_ene");
	for (var i=0; i<el.length ; i++) {
		document .getElementsByName( "user_ene" )[i]. style . display = idp;
	}
	var el = document.getElementsByName("user_buta");
	for (var i=0; i<el.length ; i++) {
		document .getElementsByName( "user_buta" )[i]. style . display = buta;
	}

	if ( val2 ){
		btp ="none";
		asu ="";
	}else {
		btp ="";
		asu ="none";
	}
	var el = document.getElementsByName("battle_suu");
	for (var i=0; i<el.length ; i++) {
		document .getElementsByName( "battle_suu" )[i]. style . display = btp;
	}
	var el = document.getElementsByName("battle_asu");
	for (var i=0; i<el.length ; i++) {
		document .getElementsByName( "battle_asu" )[i]. style . display = asu;
	}

	prepare_ss("#prtype_tbl");
}

function InitViewMode() {
	$("input[name='idhi']:eq(0)").prop("checked", true);
	$("input:radio[name='idhi']:checked").change();

	$("input[name='knp']:eq(1)").prop("checked", true);
	$("input:radio[name='knp']:checked").change();

	prepare_ss("#prtype_tbl");
}

function UpdateViewMode() {
	var viewmode1 = $("input[name='knp']:checked").val();
	var viewmode2 = $("input[name='idhi']:checked").val();

	switch (viewmode1) {
		case "nm_sw0":
          	shipname_ex(0);
			break;
		case "nm_sw1":
          	shipname_ex(1);
			break;
		default:
			break;
	}

	switch (viewmode2) {
		case "id_pr00":
          	idhide(0,0);
			break;
		case "id_pr10":
          	idhide(1,0);
			break;
		case "id_pr11":
          	idhide(1,1);
			break;
		default:
			break;
	}
}

var imgData = {};
function prepare_ss(target) {
	var element = $(target)[0];
	delete imgData;

    html2canvas(element, { onrendered: function(canvas) {
		var imgData = canvas.toDataURL();
		$('#download')[0].href = imgData;
		$('#download')[0].target = "_blank";
//		$('#download')[0].click;
    }});
}

function  shipname_ex(val){
	if ( val ){
		dispeng ="none";
		dispjp="";
	}else {
		dispeng ="";
		dispjp="none";
	}
	var el = document.getElementsByName("shipname_jp");
	for (var i=0; i<el.length ; i++) {
		document .getElementsByName( "shipname_jp" )[i]. style . display = dispjp;
	}
	var el = document.getElementsByName("shipname_eng");
	for (var i=0; i<el.length ; i++) {
		document .getElementsByName( "shipname_eng" )[i]. style . display = dispeng;
	}
}

function myFormatNumber(x) {
	var s = "" + x; 
	var p = s.indexOf("."); 
	if (p < 0) { 
		p = s.length; 
	}
	var r = s.substring(p, s.length);
	for (var i = 0; i < p; i++) {
        var c = s.substring( p- 1 - i, p - 1 - i + 1);
		if (c < "0" || c > "9") {
			r = s.substring(0, p - i) + r;
			break;
 		}
		if (i > 0 && i % 3 == 0) { 
			r = "," + r; 
		}
		r = c + r;
	}
	return r;
}

function myFormatDate(str) {
	var dd = str.substr(0,2);
	var mm = str.substr(3,2);
	var yyyy = str.substr(6,4);
	var HH = str.substr(11,2);
	var MM = str.substr(14,2);
	var SS = str.substr(17,2);

	var format_str = yyyy + mm + dd + "_" + HH + "-" + MM + "-" + SS;

	return format_str;
}

function myFormatDate2(str) {
	var dd = str.substr(0,2);
	var mm = str.substr(3,2);
	var yyyy = str.substr(6,4);
	var HH = str.substr(11,2);
	var MM = str.substr(14,2);
	var SS = str.substr(17,2);

	var format_str = yyyy + "/" + mm + "/" + dd + " " + HH + ":" + MM + ":" + SS;

	return format_str;
}

function short_id(str){
//	if (str.length < 12) {
//		return(str);
//	}
//	return (str.substring(0,10)+"...");
	return (str.substring(0,24));
}

function countLength(str) { 
	var r = 0; 
	for (var i = 0; i < str.length; i++) { 
		var c = str.charCodeAt(i); 
		if ( (c >= 0x0 && c < 0x81) || (c == 0xf8f0) || (c >= 0xff61 && c < 0xffa0) || (c >= 0xf8f1 && c < 0xf8f4)) { 
			r += 1; 
		} else { 
			r += 2; 
		}
	}
	return r; 
} 

var app = angular.module('wows-stats', []);

app.factory('api', function($http, $q) {
	var api = {};
	api.fetchShip = function(player) {
		player.api.ship = api.ship(player);
		player.api.ship.then(function(player){
			// nothing needs to be done after fetching ship stats
		}, function(player){
			// retry if rejected
			if (!player.ship)
				player.ship = {};
			if (!player.ship.hasOwnProperty('retry'))
				player.ship.retry = MAX_RETRY;
			if (player.ship.retry > 0) {
				player.ship.retry --; 
				api.fetchShip(player);
			}
			else {
				// report error if max retry reached
				if (player.api.ship.status == 404)
					player.ship.err = "戦闘記録無し";
				else if(player.api.ship.response.message)
					player.ship.err = player.api.ship.response.message;
				else if(player.api.ship.response.error)
					player.ship.err = player.api.ship.response.error.message;
				else
					player.ship.err = player.api.ship.response;
			}
		});
	}

	api.fetchPlayer = function(player) {
		player.api.player = api.player(player);
		player.api.player.then(function(player) {
			// fetch ship stats after player fetching is done so we have the proper playerId
			api.fetchShip(player);
		}, function(player) {
			// retry if rejected
			if (!player.hasOwnProperty('retry'))
				player.retry = MAX_RETRY;
			if (player.retry <= 0 || player.api.status == 401) {
				// report error if max retry reached or player profile is private
				player.ship = {};
				if (player.api.status == 401) {
					player.err = "非公開";
				}
				else if (player.api.response.message) {
					player.err = player.api.response.message;
				}
				else if(player.api.response.error) {
					player.err = player.api.response.error.message;
				}
				else {
					player.err = player.api.response;
				}
				if (player.api.response.hasOwnProperty("id")){
					// playerId is available
					angular.extend(player, player.api.response);
					player.uri = player.id + '-' + encodeURIComponent(player.name);
					api.fetchShip(player);
				}
				else {
					// report the same error to ship since we can't fetch ship without playerId
					player.ship.err = player.err;
				}
			}
			else {
				player.retry --;
				api.fetchPlayer(player);
			}
		});
	}

api.shipnamejp = function(type, value) {
var sneng =[
"Hashidate","Chikuma","Tenryu","Kuma","Furutaka",
"Aoba","Myoko","Mogami","Ibuki","Zao",
"Umikaze","Wakatake","Isokaze","Minekaze",
"Mutsuki","Hatsuharu","Fubuki","Kagero","Shimakaze",
"Kawachi","Myogi","Kongo","Fuso","Nagato","Amagi","Izumo","Yamato",
"Hosho","Zuiho","Ryujo","Hiryu","Shokaku","Taiho","Hakuryu",
"Mikasa","Yūbari","Ishizuchi","Fujin","Kamikaze","Atago","Mutsu",
"Tachibana","Iwaki Alpha","Kamikaze R","Fūjin",
"ARP Kongō","ARP Hiei","ARP Haruna","ARP Kirishima",
"ARP Myoko","ARP Haguro","ARP Ashigara","ARP Nachi",
"ARP Takao","ARP Atago","ARP Maya","ARP Chokai","ARP Chōkai",
"Tone","Akatsuki","Shiratsuyu","Akizuki","Yugumo","Yūgumo","Shinonome",
"Anshan","Lo Yang",
"Arkansas Beta","Tachibana Lima","Marblehead Lima","Imperator Nikolai I","Leberecht Maass"
];
var snjp = [
"橋立","筑摩","天龍","球磨","古鷹",
"青葉","妙高","最上","伊吹","蔵王",
"海風","若竹","磯風","峯風",
"睦月","初春","吹雪","陽炎","島風",
"河内","妙義","金剛","扶桑","長門","天城","出雲","大和",
"鳳翔","瑞鳳","龍驤","飛龍","翔鶴","大鳳","白龍",
"三笠","夕張","石鎚","風神","神風","愛宕","陸奥",
"橘","岩木.α","神風.Ｒ","風神",
"ARPコンゴウ(金剛)","ARPヒエイ（金剛）","ARPハルナ（金剛）","ARPキリシマ(金剛)",
"ARPミョウコウ(妙高)","ARPハグロ(妙高)","ARPアシガラ(妙高)","ARPナチ(妙高)",
"ARPタカオ(愛宕)","ARPアタゴ(愛宕)","ARPマヤ(愛宕)","ARPチョウカイ(愛宕)","ARPチョウカイ(愛宕)",
"利根","暁","白露","秋月","夕雲","夕雲","東雲",
"鞍山","洛陽",
"Arkansas.β","橘.Ｌ","Marblehead.Ｌ","Nikolai I","Maass"
];
// 複数回書いてあるものは表記揺れ対策

	for (var i=0; i<sneng.length ; i++) {
		if (value == sneng[i]) {
			return snjp[i];
			brake;
		}
	}
	return value;
}

api.shiptypejp_s = function(type, value) {
	if (value == 'Destroyer') {
		return '駆';
	}
	else if(value == 'Cruiser') {
		return '巡';
	}
	else if(value == 'Battleship') {
		return '戦';
	}
	else if(value == 'AirCarrier') {
		return '空';
	}
	else return value;
}

api.nationjp_s = function(str) {
var ntname =[
	["japan","日"] ,["usa","米"] ,["ussr","ソ"],["germany","独"] ,
	["uk","英"],["france","仏"] ,["poland","波"],["pan_asia","ア"] ,
	["italy","伊"],["australia","豪"],["commonwealth","連"],
	["netherlands","蘭"],["spain","西"]
]
	for (var i=0; i<ntname.length ; i++) {
		if (str == ntname[i][0]) {
			return ntname[i][1];
			brake;
		}
	}
	return '他';
}

api.shipnamefont = function(value) {
	if (value < 7) { 	
		return 'ship_font_6'; 
	}
	else if(value < 10) {
		return 'ship_font_9'; 
	}
	else if(value < 15) {
		return 'ship_font_14'; 
	}
	else return 'ship_font_20';  
}

api.beautify = function(type, value) {
	// xvm like colorization
	switch(type) {
		case "winRate":
			if	(value < 47) {
				return 'class1';
			}
			else if(value < 49) {
				return 'class2';
			}
			else if(value < 52) {
				return 'class3';
			}
			else if(value < 57) {
				return 'class4';
			}
			else if(value < 65) {
				return 'class5';
			}
			else if(value < 101) {
				return 'class6';
			}
			break;
		default:
			return null;
			break;
	}
}

api.b_beautify = function(type, value) {
	// xvm like colorization for combat power
	switch(type) {
		case "combatPower":
			if	(value < 10000) {
				return 'cp_class1';
			}
			else if(value < 20000) {
				return 'cp_class2';
			}
			else if(value < 30000) {
				return 'cp_class3';
			}
			else if(value < 80000) {
				return 'cp_class4';
			}
			else if(value < 150000) {
				return 'cp_class5';
			}
			else if(value < 1000000) {
				return 'cp_class6';
			}
			else {
				return 'cp_class7';
			}
			break;
		default:
			return null;
			break;
	}
}

api.highlight = function(type, value) {
	switch(type) {
		case "combatPower":
			if(value >= 150000) {
				return 'highlight_danger';
			}
			else {
				return 'highlight_normal';
			}
			break;
		default:
			return null;
			break;
	}
}

api.owner = function(type, value) {
	switch(type) {
		case "owner":
			if(value == ownerName) {
				return 'highlight_owner';
			}
			else {
				return 'highlight_others';
			}
			break;
		default:
			return null;
			break;
	}
}

api.mapname_ex_jp = function(type, value) {

var mapname =[
["i01_tutorial",		"チュートリアル"] ,
["00_CO_ocean",			"大海原"],
["01_solomon_islands",	"ソロモン諸島"],
["04_Archipelago",		"列島"],
["05_Ring",		"リング"],
["08_NE_passage",		"海峡"],
["10_NE_big_race",		"ビッグレース"],
["13_OC_new_dawn",		"新たなる夜明け"],
["14_Atlantic",			"大西洋"],
["15_NE_north",			"北方"],
["16_OC_bees_to_honey",	"ホットスポット"],
["17_NA_fault_line",	"断層線"],
["18_NE_ice_islands",	"氷の群島"],
["19_OC_prey",			"罠"],
["20_NE_two_brothers",	"二人の兄弟"],
["22_tierra_del_fuego",	"火の地"],
["23_Shards",			"破片"],
["25_sea_hope",			"幸運の海"],
["28_naval_mission",	"砂漠の涙"],
["33_new_tierra",		"極地"],
["34_OC_islands",		"群島"],
["35_NE_north_winter",	"北極光（北方冬ver）"],
["37_Ridge",			"山岳地帯"],
["38_Canada",			"粉砕"],
["40_Okinawa",			"沖縄"],
["41_Conquest",			"トライデント"],
["42_Neighbors",		"隣接勢力"],
["44_Path_warrior",		"戦士の道"],
["45_Zigzag",			"ループ"],
["46_Estuary",			"河口"],
["50_Gold_harbor",			"安息の地"]
]
for (var i=0; i<mapname.length ; i++) {
	if (value == mapname[i][0]) {
		return mapname[i][1];
		brake;
	}
}
return value;
}

api.sinarioname_ex_jp = function(type, value) {
var snname =[
["Default_test","チュートリアル"] ,
["Skirmish_Domination_2_BASES","Co-op戦 : 通常"] ,
["Skirmish_Domination_rhombus","Co-op戦 : 制圧"] ,
["Skirmish_Domination","Co-op戦 : 制圧"] ,
["Skirmish_MegaBase","Co-op戦 : ゾーン"] ,
["Skirmish_Epicenter","Co-op戦 : 中央攻略"] ,
["Domination_2_BASES","ランダム戦 : 通常"],
["MegaBase","ランダム戦 : ゾーン"],
["Domination","ランダム戦 : 制圧"],
["Domination_rhombus","ランダム戦 : 制圧"],
["Epicenter","ランダム戦 : 中央攻略"],
["Ranked_Domination","ランク戦 : 制圧"],
["Ranked_Epicenter","ランク戦 : 中央攻略"]
]
	for (var i=0; i<snname.length ; i++) {
		if (value == snname[i][0]) {
			return snname[i][1];
			brake;
		}
	}
	return value;
}

api.player = function(player) {
	return $q(function(resolve, reject) {
		$http({
			method:'GET',
			url: 'http://localhost:8080/api/player?name=' + encodeURIComponent(player.name)
		}).success(function(data, status) {
			angular.extend(player, data);
			player.uri = player.id + '-' + encodeURIComponent(player.name);
			var winRate = parseFloat(player.winRate.replace('%', ''));
			player.winRateClass = api.beautify("winRate", winRate);
			player.formatbattle = myFormatNumber(parseInt(player.battles));
			player.formatdmg = myFormatNumber(parseInt(player.avgDmg));
			player.formatexp = myFormatNumber(parseInt(player.avgExp));
			resolve(player);
		}).error(function(data, status) {
			player.api.response = data;
			player.api.status = status;
			reject(player);
		});
		player.name_s = short_id(player.name);
	});
}

api.ship = function(player) {
	return $q(function(resolve, reject) {
		$http({
			method:'GET',
			url: 'http://localhost:8080/api/ship?playerId=' + player.id + '&shipId=' + player.shipId
		}).success(function(data, status) {
			var battles = parseInt(data.battles);
			var victories = parseInt(data.victories);
			var winRate = (victories / battles * 100).toFixed(2);
			var survived = parseInt(data.survived);
			var kill = parseInt(data.destroyed);
			var death = battles - survived;
			var kakin = "";
			var killkoo= "";
			var svrate= "";
			var svgeta="";
			if (death == 0 && kill > 0){
				kdRatio ="∞";
				combatPower ="∞";
			}else if(death == 0 && kill == 0){
				kdRatio ="－";
				combatPower ="－";
			}
			else{
				var kdRatio = (kill / death).toFixed(2);
				if (kdRatio == 0) {
					var combatPower = combatPower ="∞";
				} else {
					if (data.info.type == 'Battleship') {
						var type_param = 0.7;
					} else if (data.info.type == 'AirCarrier') {
						var type_param = 0.5;
					} else {
						var type_param = 1.0;
					}

					var combatPower = (data.avgDmg*kdRatio*data.avgExp/800*(1-(0.03*data.info.tier))*type_param).toFixed(0);
				}
			}
			if (data.noRecord !=  true ){
				var atkavg = (parseInt(data.destroyed)/ battles).toFixed(1);
				var sdkavg =  (parseInt(data.raw.pvp.planes_killed)/ battles).toFixed(1);
				if (parseInt(data.raw.pvp.main_battery.shots) != 0){
					var hitm = (parseInt(data.raw.pvp.main_battery.hits) / parseInt(data.raw.pvp.main_battery.shots)*100).toFixed(1);
				}
				else{
					var hitm ="－";
				}
				if (parseInt(data.raw.pvp.torpedoes.shots) != 0){
					var hitt = (parseInt("0"+data.raw.pvp.torpedoes.hits) / parseInt("0"+data.raw.pvp.torpedoes.shots)*100).toFixed(1);
				}
				else{
					var hitt ="－";
				}
				if (data.destroyed >4 ){
					killkoo =(parseInt(data.raw.pvp.damage_dealt)/parseInt(data.destroyed)/10000).toFixed(1);
				}else{
					killkoo ="－";
				}
				if ( parseInt(data.victories) >10 && (parseInt(data.battles) - parseInt(data.victories)) >10 ){
					var svwin=((parseInt(data.raw.pvp.survived_wins)/parseInt(data.victories))*100).toFixed(0);
					var svlose=(((parseInt(data.raw.pvp.survived_battles)-parseInt(data.raw.pvp.survived_wins))/(parseInt(data.battles) - parseInt(data.victories)))*100).toFixed(0);
					if (parseInt(svlose)<10){
						svgeta=" ";
					}else{
						svgeta="";
					}
					svrate=svwin+"-"+svgeta+svlose;
				}else{
					svrate="－";
				}
			}
			if (data.info.is_premium != false){
				kakin ="℗";
			}
			player.ship = {
				"shiptia_s": data.info.tier,
				"shipty": data.info.type,
				"shiptype_s": api.shiptypejp_s("shiptype",data.info.type),
				"shipnation_s": api.nationjp_s(data.info.nation),
				"shipkakin": kakin,
				"name": data.name,
				"namejp" :api.shipnamejp("jpname",  data.name),
				"namefont" : api.shipnamefont(countLength(data.name)),
				"namefontjp" : api.shipnamefont(countLength(api.shipnamejp("jpname",data.name))),
				"bgcolor" :data.info.type+"_bg",  
				"winRate": winRate + "%",
				"winRateClass": api.beautify("winRate", winRate),
				"shfl" : atkavg,
				"ftfl" : sdkavg,
				"hitratem" : hitm ,
				"hitratet" : hitt ,
				"kdRatio": kdRatio,
				"battles": myFormatNumber(battles),
				"avgExp": myFormatNumber(data.avgExp),
				"avgDmg": myFormatNumber(data.avgDmg),
				"combatPower": myFormatNumber(combatPower),
				"combatPowerClass": api.b_beautify("combatPower", combatPower),
				"highlightClass": api.highlight("combatPower", combatPower),
				"ownerClass": api.owner("owner", player.name),
				"killkoo":killkoo,
				"svrate":svrate
			}
			if (data.noRecord)
				player.ship.err = "記録無し";
			resolve(player);
		}).error(function(data, status) {
			player.api.ship.response = data;
			player.api.ship.status = status;
			reject(player);
		});
	});
}
return api;
});

app.controller('TeamStatsCtrl', function ($scope, $http, api) {
	$scope.inGame = false;
	$scope.dateTime = "";
  	$scope.data = {};
  	$scope.players = [];
  	$scope.gamemapnamejp  = "";
  	$scope.gameLogicjp  = "";
	$scope.downloadFile = "";
	var kariload = [[]];

	var updateArena = function() {
		UpdateViewMode();

		$http({
			method: 'GET',
			url: 'http://localhost:8080/api/arena'
		}).success(function(data, status) {
			$scope.inGame = true;
			$scope.data = data;
			if ($scope.dateTime != data.dateTime) {
				$scope.players = [];
				$scope.dateTime = data.dateTime;
				$scope.gamemapnamejp = api.mapname_ex_jp("mapname_eng",data.mapDisplayName);
				$scope.gameLogicjp = api.sinarioname_ex_jp("sinarioname_eng",data.scenario);
				ownerName = data.playerName;
				$scope.downloadFile = "wows_" + myFormatDate(data.dateTime) + "_" + $scope.gamemapnamejp + "_" + $scope.gameLogicjp +"_" + data.playerVehicle + ".png";
				$scope.battleTime = myFormatDate2(data.dateTime);

				delete kariload;
				for (var i=0; i<data.vehicles.length; i++) {
						kariload[i] =data.vehicles[i];
				}
				kariload.sort(function(val1,val2){
					var val1 = ((val1.shipId % 1048576)-(val1.shipId / 1048576));//the magic namber
					var val2 = ((val2.shipId % 1048576)-(val2.shipId / 1048576));
					if( val1 < val2 ) {
						return 1;
					} else {
						return -1;
					}
				});
				for (var i=0; i<kariload.length; i++) {
					var player =kariload[i];
					$scope.players.push(player);
					player.api = {};
					api.fetchPlayer(player);
				}
			}
		}).error(function(data, status) {
			$scope.dateTime = "";
			$scope.inGame = false;
		});
	}

	var timer = setInterval(function() {
		$scope.$apply(updateArena);
	}, 2000);

	updateArena();
});
