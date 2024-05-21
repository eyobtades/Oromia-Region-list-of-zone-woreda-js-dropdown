// Todo: Create a function that loads the state, province, woreda, zip

var provinceInfo = 
{
    "oromia" : [
        "Arsi zone",
        "Bale Zone",
        "East Bale Zone",
        "Borena Zone",
        "Buno Bedele Zone",
        "East Hararghe Zone",
        "East Shewa Zone",
        "East Welega Zone",
        "East Borena Zone",
        "Horo Guduru Welega Zone",
        "Illubabor Zone",
        "Jimma Zone",
        "Kelam Welega Zone",
        "North Shewa Zone",
        "Southwest Shewa Zone",
        "West Arsi Zone",
        "West Guji Zone",
        "West Hararghe Zone",
        "West Shewa Zone",
        "West Welega Zone",

    ],
}

var woredaInfo = 
{
        "Arsi zone": ["Aminya", "Aseko", "Asella Town", "Bale Gasegar", "Batu Dugda", "Chole", "Digelu fi Tijo", "Diksis", "Dodota", "Enkelo Wabe", "Gololcha", "Guna", "Hetosa", "Jeju", "Lemo fi bilbilo", "Lode Hetosa", "Merti", "Munesa", "Robe", "Seru", "Sire", "Shirka", "Sude", "Tena", "Tiyo", "Shanan kolu"],
        "Bale Zone" : ["Agarfa","Berbere","Delo Menna","Dinsho","Gasera","Goba","Goba Town","Goro","Guradamole","Harena Buluk","Meda Welabu","Robe Town","Sinana"],
        "East Bale Zone" : ["Sawena", "Rayitu", "Legahidha", "Gindhir", "Dawe Qachan", "Dawe sarar", "Gololcha", "Gindhir town"],
        "Borena Zone" : ["Arero", "Dillo", "Dire", "Gomole", "Miyu", "Moyale", "Teltele", "Yabelo", "Dubuluq", "Elowaye", "Wacile", "Yabelo town", "Guchi", "Dhas"],
        "Buno Bedele Zone" : ["Bedele", "Chora", "Dabo", "Chawaka", "Boracha", "Gechi", "Dedesa", "Dega", "Meko", "Badele town"],
        "East Hararghe Zone" : ["Babile", "Badeno", "Chinaksen", "Dadar", "Fedis", "Girawa", "Gola Oda", "Goro Gutu", "Gursum", "Haro Maya", "Jarso", "Kersa", "Kombolcha", "Kurfa Chele", "Malka Balo", "Meyumuluke", "Meta", "Midega Tola", "Kumbi", "Goro muti", "Makanisa Oromoo"],
        "East Shewa Zone" : ["Ada'a", "Adami Tullu and Jido Kombolcha", "Batu town", "Bora", "Boset", "Dugda", "Fentale", "Gimbichu", "Liben", "Lume", "Magaalaa Adaamaa", "Aqaqi kalitiu"],
        "East Welega Zone" : ["Bonaya Boshe" ,"Diga" ,"Gida Kiremu" ,"Gobu Seyo" ,"Gudeya Bila" ,"Guto Gida" ,"Haro Limmu" ,"Ibantu" ,"Jimma Arjo" ,"Leka Dulecha" ,"Limmu" ,"Naqamte" ,"Nunu Kumba" ,"Sasiga" ,"Sibu Sire" ,"Wama Hagalo" ,"Wayu Tuka"],
        "East Borena Zone" : ["Arero" ,"Liban" ,"Gumi Eeldalo" ,"Dhaas" ,"Waacile" ,"Madda walabu" ,"Saba boru" ,"Nageellee Boorana town" ,"Gorodola" ,"Moyale" ,"West Walabu" ,"Moyale town"],
        "Horo Guduru Welega Zone" : ["Abaya Chomen", "Abe Dongoro", "Amuru", "Guduru", "Coomman guduruu", "Hababo Guduru", "Horo", "Jardega Jarte", "Jimma Genete", "Jimma Rare", "Shambu Town", "Horo Bulluq", "Sulala Fincha"],
        "Illubabor Zone" : ["Ale", "Alge Sache", "Bacho", "Bilo Nopha", "Bure", "Darimu", "Didu", "Doreni", "Halu", "Hurumu", "Metu", "Metu Town", "Nono Sele", "Supena Sodo", "Yayu"],
        "Jimma Zone" : ["Agaro Town", "Chora Botor", "Dedo", "Gera", "Gomma", "Guma", "Kersa", "Limmu Sakka", "Limmu Kosa", "Mana", "Omo Nada", "Seka Chekorsa", "Setema", "Shebe Senbo", "Sigmo", "Sokoru", "Botor xolay", "Nadhi Gibe", "Mancho", "Nono Benja", "Omo beyam"],
        "Kelam Welega Zone" : ["Anfillo", "Dale Sedi", "Dale Wabera", "Dembidolo Town", "Gawo Kebe", "Gidami", "Hawa Gelan", "Jimma Horo", "Lalo Kile", "Sayo", "Yemalogi Welele", "Sedi Chenka"],
        "North Shewa Zone" : ["Abichu", "Aleltu", "Degem", "Dera", "Fiche Town", "Gerar Jarso", "Hidabu Abote", "Jida", "Kembibit", "Kuyu", "[Barak (woreda)]]", "Wara Jarso", "Wuchale", "Yaya Gulele", "Sululta", "Mulo", "Shararo"],
        "Southwest Shewa Zone" : ["Amaya", "Becho", "Dawo", "Ilu", "Goro", "Kersa fi Malima", "Seden Sodo", "Sodo Dachi", "Tole", "Waliso", "Waliso Town", "Wanchi", "Sabata Hawas"],
        "West Arsi Zone" : ["Adaba", "Negele Arsi", "Dodola", "Gedeb Hassasa", "Kofele", "Kokosa", "Qoree", "Naannawa Shashamane", "Nensebo", "Seraro", "Shala", "Shashamane Town", "Heban Arsi", "Dodola town", "Kofale town", "Nagele Arsi town", "Wondo ganati"],
        "West Guji Zone" : ["Bule Hora", "Birbirsa Kojowa", "Kerca", "Abeya", "Suro", "Gelana", "Dugda dawa", "Hambala wamana", "Bulehora town", "Karcha town", "Malka soda"],
        "West Hararghe Zone" : ["Badessa Town", "Boke", "Oda Bultum", "Chiro Town", "Daru labu", "Doba", "Gamachis", "Guba Koricha", "Habro", "Masela", "Mieso", "Nannawa Chiro", "Tulo", "Gumbi bordode", "Burqa Dhintu", "Mechara michata", "Hawwi Guddina"],
        "West Shewa Zone" : [ "Abuna Ginde Beret ", "Ada'a Berga ", "Ambo Town ", "Bako Tibe ", "Cheliya ", "Dano (woreda) ", "Dendi ", "Dire Enchini ", "Ejerie ", "Ejersa Lafo ", "Elfata ", "Ginde Beret ", "Jeldu ","Jibat ", "Meta Robi ", "Midakegn ", "Naannawa Ambo "," Nono ", "Toke Kutaye ", "Liban Jawi ", "Cobii ", "Ilu Galan ", "Ambo town ", "Meettaa Walqixxee ", "Walmara"],
        "West Welega Zone" : ["Ayra", "Babo Gambela", "Begi", "Boji Chokorsa ", "Boji Dirmaji", "Genji ", "Gimbi ", "Gimbi Town ", "Guliso", "Haru", "Homa", "Jarso", "Kondala", "Kiltu Kara ", "Lalo Asabi ", "Mana Sibu ", "Nejo ", "Nole Kaba ", "Sayo Nole ", "Yubdo"],
    
}


var stateSelect = document.getElementById("State");
var provinceSelect = document.getElementById("Province");
var woredaSelect = document.getElementById("Woreda");

//////////////////////////////////////////////////////////////////////////////Zone

function populateProvince(){
    provinceSelect.innerHTML='<option value="">Choose Zone</option>';
    woredaSelect.innerHTML='<option value="">Choose Woreda</option>';

    var selectedState = stateSelect.value;
    if(selectedState)
    {
        var selectedProvicnce = provinceInfo[selectedState];
        selectedProvicnce.forEach( function(province) {
            var option = document.createElement("option");
            option.value = province;
            option.text = province;
            provinceSelect.appendChild(option);
        });
    }
}

function populateWoreda(){
    woredaSelect.innerHTML='<option value="">Choose woreda</option>';

    var selectedProvicnce = provinceSelect.value;
    if(selectedProvicnce)
    {
        var selectedworeda = woredaInfo[selectedProvicnce];
        selectedworeda.forEach( function(woreda) {
            var option = document.createElement("option");
            option.value = woreda;
            option.text = woreda;
            woredaSelect.appendChild(option);
        });
    }
}

