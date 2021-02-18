
// Příklad 1
// const pol = [1, 2, 30, 20, 15, 1];
// function mapa(array, callback) { //callback je obecne pojmenovani nejake fce
//     const newPol = [];
//     for (var index = 0; index < array.length; index++) {
//         newPol.push(callback(array[index]));
//     }
//     return newPol;
// }
// console.log(mapa(pol, prvek => prvek + 2));//vytvoreni noveho pole s prvky upravenymi obecne funkci "callback", kterou ale specifikuji az pri zavolani materske funkce
// console.log(pol.filter(prvek => prvek > 10));//verze vytvoreni noveho pole z prvku jineho pole pomoci funkce FILTER
// console.log(pol.map(prvek => prvek + 5));//verze vytvoreni noveho pole s upravenymi prvky jineho pole pomoci funkce MAP
// ------------------------------------------------------------------------------------------------------
// Příklad 2 - máte seznam zvířat v zoo s jejich ošetřovatelem a hodinou krmení (doplňte si další)
// - vytvořte funkci, která vrátí rozvrh krmení pro ošetřovatele
// - např. funkce getFeedingTimetable("Jan") vrátí:
// [
//   {animal: "lion", time: 14},
//   {animal: "tiger", time: 15},
//   {animal: "wolf", time: 16}
// ]
// var zoo = [
//     { animal: "tiger", keeper: "Jan", feeding: 15 },
//     { animal: "elephant", keeper: "Eva", feeding: 18 },
//     { animal: "giraffe", keeper: "Eva", feeding: 13 },
//     { animal: "lion", keeper: "Jan", feeding: 14 },
//     { animal: "wolf", keeper: "Jan", feeding: 16 },
//     { animal: "gazelle", keeper: "Eva", feeding: 10 }
// ]; 
// function getFeedingTimetable(zadejKeeper) {
//     const zooFilter = zoo.filter(item => item.keeper == zadejKeeper);
//     console.log(zooFilter);
//     //!!!
//     const zooFilterMap = zooFilter.map(item => ({ animal: item.animal, time: item.feeding }))//tady mohu menit nazvy klicu z feeding na time treba
//     console.log(zooFilterMap);
//     const zooMapSort = zooFilterMap.sort((a, b) => {return a.time - b.time});//seradim vzestupne dle casu krmeni - klic feeding; pozor na klic - sortuju zmenene pole zooFilterMap a to uz ma misto feeding klic time
//     console.log(zooMapSort);
//     //zjednodusene a bez vypisu
//     return zoo
//     .filter(item => item.keeper == zadejKeeper)
//     .map(item => ({ animal: item.animal, time: item.feeding }))
//     .sort((a, b) => {return a.time - b.time});
// }
// const janTimetable = getFeedingTimetable("Jan");
// const evaTimetable = getFeedingTimetable("Eva");
// console.log(janTimetable);
// console.log(evaTimetable);

//const { time } = require("console");

// var zoo1 = [{ animal: "tiger", keeper: "Jan"}, 111];
// var zoo2 = zoo1;
// var newZoo = zoo1.map(item => item);
// newZoo[1] = 222;                                              
// console.log(zoo1);
// console.log(zoo2);
// console.log(newZoo);
// newZoo[0].animal = "skoda";                                              
// console.log(zoo1);
// console.log(zoo2);
// console.log(newZoo);

// var pole = [{jmeno:"Jan", prijmeni: "Rolenc"}, {jmeno:"Pavel", prijmeni:"Kluk"},{jmeno:"Jan", prijmeni:"Hus"}];
// console.log(pole.filter(item => item.jmeno == "Jan"));
// - bonus: udělejte možnost u každého zvířete zadat více časů krmení
// - bonus 2: vytvořte funkci, která vrátí nejbližší další krmení pro ošetřovatele podle aktuálního času
// - např. getNextFeeding("Eva"), když je zrovna 17:25 -> {animal: "elephant", time: 18}

//Příklad 2 - napište funkci, která spojí uživatele s jeho právy
// const roles = [
//     { name: "Admin", administrationAccess: true, canEdit: true, canRead: true },
//     { name: "Editor", administrationAccess: false, canEdit: true, canRead: true },
//     { name: "Guest", administrationAccess: false, canEdit: false, canRead: true }
//   ]
//   const users = [
//     { id: 11, name: "Pavel", role: "Admin" },
//     { id: 22, name: "Bára", role: "Editor" },
//     { id: 33, name: "Jana", role: "Editor" },
//     { id: 40, name: "Milan", role: "Guest" }
//   ]
//   function pairUserWithRights(users,roles){//pole mohu oznacit i obecnymi nazvy; dal jsem users a roles pro jasnejsi prehlednost
//       const novePoleRoliAUsersSloucenyDleRoli = 
//       users.map(jedenObjektUsers => {//4) az cinnosti nize provedes u vsech 
//           const vybranaRole = //2) takovy objekt pak vloz do nove promenne vybranaRole
//           roles.find(jedenObjektRoles => jedenObjektRoles.name == jedenObjektUsers.role);//1) prohledej roles a najdi takovy objekt, kde se name shoduje s roli v users;  
//           return {...vybranaRole, ...jedenObjektUsers};//3) novy objekt pak spoj s prislusnym objektem z users a vysledek vrat do noveho pole objektu novePoleRoliAUsersSloucenyDleRoli 
//       });
//       return novePoleRoliAUsersSloucenyDleRoli;
//   }
//   console.log(pairUserWithRights(users, roles));
// bonus: vytvořte si seznam administrátorů a seznam editorů a jako výsledek funkce vraťte opět seznam všech s jejich právy

//Funkce pro spojeni poli a prvky na stridacku
// var jedna = [1, 2, 3, 4, 5, 6, 7];
// var dva = ["ahoj", "jak", "se", "mas"];
// function poleCikcak(arr1, arr2) {
//     var arr3 = [];
//     var i = 0;
//     for (var index = 0; index < (arr1.length+arr2.length)+2; index++) {
//         arr3[index] = arr1[i];
//         arr3[index + 1] = arr2[i];
//         index++;
//         i++;
//     }
//     return arr3.filter(item => item !== undefined);
// }
// console.log(poleCikcak(jedna, dva));

// Příklad 3
// Napište funkci, která ze dvou vstupních polí vrátí pouze unikátní prvky
// Bonus: Udělejte funkci tak, aby zvládla vzít 1 až x vstupních polí

// const arr10 = [1,2,3,4,5,6,7,8,9,10];
// const arr20 = [7,8,9,10,11,12,13];
// function uniqueValues(one, second){
//     const sjednoceni = [...one, ...second];//pozor na typ zavorek - u poli [], pokud by sjednocoval objekty pak {}
//     const unique = new Set(sjednoceni);//vsechny stejne zobrazi jen jednou
//     return unique;
// }
// console.log(uniqueValues(arr10,arr20)); 

// POCITADLO
// var answer = 0;
// var countId = setInterval(() => {//systemova fce; deje se v intervalech, zde 1s
//     answer++;
//     console.log(`The answer now is ${answer}.`)
//     if (answer == 10){
//         clearInterval(countId);//po dosazeni 10 se spusti syst.fce clearInterval, ktera ukoncuje setInterval
//     }
// }, 1000);

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// var neco = ["Ahoj", "Honziku", "jak", "se", "mas"];
// console.log(neco.join(" + "));
// console.log(neco.shift());
// console.log(neco.unshift());
// var a = [];
// var b = [];
// for (var index = 0; index < 5; index++) {
//     a.push(index);
//     b.unshift(index);
// }
// console.log(a);
// console.log(b);
// console.log(a.find(item => item >2));
// console.log(a.filter(item => item >2));
// console.log(a);
// a.splice(2, 0, 10, 11);
// console.log(a);

// var names = ["Arthur", "Ford", "Trillian"];
// console.log(names.find(name => name.length % 3 === 0));
// console.log(names.includes("Arthur"));
// ---------------------------------------------
// var ob = {jmeno:"Jan", vek:43};
// var {jmeno, vek} = ob;
// console.log(ob);
// console.log(jmeno, vek);
// console.log(ob.jmeno, ob.vek);
// console.log(Object.entries(ob));
// console.log(Object.keys(ob));
// ---------------------------------------------
// var obj1 = {JMENO:"Jan", Prijmeni:"Rolenc"};
// var obj2 = {jmeno:"Milan", prijmeni:"Berka"};
// var obj3 = {zvire:"pes", pohlavi:"fenka"};
// var newObj = Object.assign(obj1, obj2, obj3);
// console.log(newObj);
// var newObj1 = {...obj1, ...obj3};
// console.log(newObj1);
// ---------------------------------------------
// var xx = function (...params){
//     console.log(params);
// };
// xx(1,2,3,"pp");
// ---------------------------------------------
// var neco = [1,2,3,4];
// var neco2 = neco.map(dvakrat);
// var neco2 = neco.map(element => element*2);//jednodussi verze pomoci "arrow funkce"
// function dvakrat(cislo){
//      return cislo * 2;
// };
// console.log(neco2);

// GET FULL NAME
// var names100 = [
//     {jmeno:"Jan1", prijmeni:"Rolenc1"},
//     {jmeno:"Jan2", prijmeni:"Rolenc2"},
//     {jmeno:"Jan3", prijmeni:"Rolenc3"}
// ];
// var fullNames = names100.map(makeFullNames);
// function makeFullNames(prvek){
//     return (prvek.jmeno + ' ' + prvek.prijmeni);
//     // return [prvek.jmeno, prvek.prijmeni].join(" ");
// };
// console.log(fullNames);
// //pokud chci vypsat cela jmen pod sebe, doplnim dalsi funkci:
// function vypisJmenaPodSebou(poleJm){
//     poleJm.forEach((element) => console.log(element));
// };
// vypisJmenaPodSebou(fullNames);
// GET FULL NAME - pokud jen Objekt, nikoliv pole objektu
// var names200 = { "Jan": "Rolenc", "Jan1": "Rolenc1" };
// var poleNames200 = Object.entries(names200);
// console.log(poleNames200);
//!!! - za forEach jsou dva elementy 
// Object.entries(names200).forEach(([element1, element2]) => {
//     console.log(`${element1} ${element2}`); 
// });

// Casovane spousteni fce a zruseni casovani
// var answer = 0;
// var pocitadlo = setInterval(() => {
//     answer++;
//     console.log(`Cislo je ted ${answer}.`);
//     if (answer == 10){
//         clearInterval(pocitadlo);
//     }
// }, 1000);

// Nalezeni minima pomoci SPREAD operatoru
// var cisl = [10,20,30];
// var min = Math.min(...cisl);
// console.log(min);
// var datum = new Date();
// console.log(`Dnes je ${datum.getDate()}.${datum.getMonth()+1}.${datum.getFullYear()}`);
// console.log(`Presny cas ${datum.getHours()}:${datum.getMinutes()}`);

// Priklad na SET() a FLAT() - z libovolneho poctu vstupnich poli vygeneruj jen jedno s unikatnimi prvky
// var arr1 = ["a", "b", "c", "d"];
// var arr2 = ["c", "d", "e", "f"];
// var arr3 = ["e", "f", "g", "g"];
// var spoj = [arr1, arr2, arr3].flat();//tady jen zkousim flat
// console.log(spoj);
//Var1 - pomoci fce FLAT()
// function uniqueItemsArrayFlat(...param){//nebo (...arrays)
//!!! - paradni spojeni kontejneru Set a funkce flat a libovolneho mnozstvi vstupnich poli
//     console.log(new Set(param.flat()));
// }
// uniqueItemsArrayFlat(arr1,arr2,arr3);

//Var2 - bez flat s dvojcyklem
// function uniqueItems(...param) {//libovolny pocet vstupu
//     var result = new Set();//Set zajisti jedinecne hodnoty
//     param.forEach(inputArray => {//cyklus pro vsechny pole 
//         inputArray.forEach(item => { result.add(item) });//cyklus pro vsechny prvky pole; vlozeni prvku do Set pomoci funkce add
//     });
//     return result;
// }
// console.log(uniqueItems(arr1, arr2, arr3));
// console.log(uniqueItemsArray);


// REGEX
// var text = "Consectetur pariatur ipsum proident eiusmod anim. Nostrud amet incididunt aliqua aliquip quis et commodo veNIam veniam anim qui."
// var reg = /[n][i]/gi;
// var reg2 = /PARIATUR/gi;
// var reg2 = new RegExp("pariatur");//alternativni zapis jako objekt
// console.log(text.match(reg));//projde retezec a vypise pole vsech prvku, co splnuji regex
// console.log(text.match(reg2));
// console.log(reg.test(text));//boolean zda regex je v retezci
// var v = reg.exec(text);//exec jako test, ale vraci jen prvni nalezenou shodu, typeof je object
// console.log(v);
// console.log(typeof v);
// console.log(reg2.test(text));

// Příklad 5)
// Napište převodník barev z hexa formátu na decimální
// 1) Využijte regulární výraz pro kontrolu validity barvy ve formátu #RRGGBB (velkost písmen A-F nehraje roli)
// 2) Převeďte na "rgb(rrr, ggg, bbb)" (hex => dec)
// 3 bonus) Doplňte možnost zadat na vstupu barvu ve formátu #RGB (#2AC == #22AACC)
// 4 bonus) Doplňte převod #RRGGBBAA (případně i #RGBA) na rgba(rrr, ggg, bbb, a)   (a == alpha/neprůhlednost a je v rozmezí 0-1)
// var barvaHex = "#aabbccdd";
// var barvaToArray = [];
// function prevodNaDec(barvaH) {
//   var regEx = /#[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?/;
//   var jeHex = regEx.test(barvaH);
//   if (jeHex) {
//     barvaToArray = barvaH.toUpperCase().split("");
//     for (var index = 1; index < barvaToArray.length; index++) {
//       switch (barvaToArray[index]) {
//         case ("A"):
//           barvaToArray[index] = 10;
//           break;
//         case ("B"):
//           barvaToArray[index] = 11;
//           break;
//         case ("C"):
//           barvaToArray[index] = 12;
//           break;
//         case ("D"):
//           barvaToArray[index] = 13;
//           break;
//         case ("E"):
//           barvaToArray[index] = 14;
//           break;
//         case ("F"):
//           barvaToArray[index] = 15;
//           break;
//       }
//     }
//   }
//   for (var index = 1; index < barvaToArray.length; index++) {
//     barvaToArray[index] = parseInt(barvaToArray[index]);
//   }
//   var red = barvaToArray[1] * 16 + barvaToArray[2];
//   var green = barvaToArray[3] * 16 + barvaToArray[4];
//   var blue = barvaToArray[5] * 16 + barvaToArray[6];
//   var opacity = barvaToArray[7] * 16 + barvaToArray[8];
//   return `RGB (${red}, ${green}, ${blue}, ${opacity})`;
// }
// console.log(prevodNaDec(barvaHex));

// //jednodussi varianta s vyuzitim parseInt se dvema parametry
// function prevodNaDec2(barvaH) {
//   // var regEx = /#[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?/;
//   const regEx = /^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})?$/; //#aabbccdd; !aby mi match nebo exec vyhodil na pozici 1-3 dvojice, musim
//   //i regex zadat po dvojicich, nikoliv jako {6}, to pak nasledne zpracovani komplikuje, protoze i zapis barev je po dvojicich
//   var jeHex = barvaH.match(regEx);
//   // var jeHex = regEx.exec(barvaH);
//   if (jeHex == null) {
//     return "Invalid color code";
//   }
//   //toto reseni nize je pro regex zadany pro sestice {6}
//   else {
//     barvaToArray = barvaH.toUpperCase().split("");
//     var red = parseInt((barvaToArray[1] + barvaToArray[2]), 16); //pokud u parseInt prevadim do 16tkove soustavy, jako parametr muze byt i pismeno/string
//     var green = parseInt((barvaToArray[3] + barvaToArray[4]), 16);
//     var blue = parseInt((barvaToArray[5] + barvaToArray[6]), 16);
//     var opacity = parseInt((barvaToArray[7] + barvaToArray[8]), 16);

//     return `RGB (${red}, ${green}, ${blue}, ${opacity})`;
//   }
// }
// console.log(`Uvedeny hexadecimalni zapis barvy lze zapsat v decimalnim takto: ${prevodNaDec2(barvaHex)}`);

// Alternativa lektora - NECHAPU ALE JAK FUNGUJE, hlavne to slice... po dvou dnech uz CHAPU...
// const barva = "#aabbcc";
// function hexColorToDec(colorCode) {
//   const hexRegex = /^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/ // #rrggbb

//   const match = hexRegex.exec(colorCode)//toto vraci jakysi pole-objekt, kde na pozicich 0-3 jsou #aabbcc, aa, bb, cc
//   // console.log(match[0]);
//   // console.log(match[1]);
//   // console.log(match[2]);
//   // console.log(match[3]);
//   if (match == null)
//     return "Invalid color code"
//   const rgbParts = match
//     .slice(1, 4)//takze toto mu vyhodi pole uz nachystanych dvojic aa,bb,cc  
//     .map(part => parseInt(part, 16)) //!! kazdou dvojici prevede do 16tkove soustavy; v tomto pripade parseInt umozni  

//   return `rgb(${rgbParts.join(", ")})`
// }
// console.log(hexColorToDec(barva));

//Array REDUCE metoda - podobne jako map, filter a forEach bere kazdou hodnotu a neco s ni provede, mezihodnoty dava do accumulatoru, 
//ten si mohu oznacit, jak chci; vystupem je pak konecna hodnota accumulatoru 
// const arr222 = [1,2,3];
// const arrayReduce = arr222.reduce((accumulator, num) => {
//   return accumulator * num;//veme prvni hodnotu (v tomto pripade ale 10) a nasobi k tomu dalsi ... 10*1*2*3
// },10);//tento parametr je volitelny - stanovuje pocatecni hodnotu accumulatoru
// console.log(arrayReduce);


// POZOR NA var a var
// var cislo = 100;
// var stav = true;
// if (cislo > 90){
//     stav = false;
//     console.log(stav);
// }
// console.log(stav);

// var useN = false;
// var loc = true;
// function whereAmI(username, location) {
//     if (username && location) {
//         return "I am not lost";
//     } else {
//         return "I am totally lost!";
//     }
// }
// console.log(whereAmI(useN, loc));
//ALTERNATIVA
// var whereIam = (username, location) => (username && location) ? "I am not lost" : "I am totally lost";
// console.log(whereIam(useN, loc));


// Cviceni 10.1.2021
// Příklad 1
// 1) Zjistěte od uživatele rok jeho narození
// 2a) Pokud v současném roce uživatel dosáhl nebo dosáhne 18 var, vypište "Můžete volit"
// 2b) Jinak vypište "Nemůžete volit"
// var datum = new Date;
// console.log(datum);
// var aktualRok = datum.getFullYear();
// console.log(aktualRok);
// var rokVstup = promt("When you were born, insert year:");
// function vek(input){
//     return 
// }
// Příklad 
// 1) napište funkci, která vrátí vstupní text rozdělený na řádky (\n) po 80 znacích
// 2) počet znaků nechte jako možnost zadat nepovinným parametrem (defaultní hodnota 80)
// const longText = "Před srážkou se Zemí meteoroid obíhal Slunce po málo výstředné dráze, která byla necelých 20 stupňů skloněna k rovině ekliptiky, tj. rovině zemské dráhy. V přísluní se dostával jen o něco blíže ke Slunci, než je dráha Země, a v odsluní se dostal jen málo za dráhu planety Mars. Pravděpodobně se jednalo původně o část asteroidu pocházejícího z vnitřní části hlavního pásu planetek. Kvůli inverznímu rázu počasí sice zůstal na velké části našeho území pro většinu obyvatel skrytý hustou vrstvou nízké oblačnosti, našla se ale i místa, kde bylo alespoň částečně jasno - a několik náhodných svědků poslalo odborníkům svá hlášení. Pro objasnění zmíněných parametrů vzácného přírodního úkazu včetně jeho průvaru naší atmosférou i Sluneční soustavou bylo rozhodující, že se podařil zaznamenat speciálními přístroji, které jsou rozmístěny na stanicích tzv. Evropské bolidové sítě. V době převaru bolidu bylo podle dalšího astronoma Jiřího Borovičky zcela nebo aspoň částečně jasno na více než polovině všech stanic, přičemž na devíti z nich byl bolid zaznamenán."
// var textPole = longText.split("");
// for (var index = 0; index < 80; index++) {
//     console.log(textPole);
// }
// Příklad 1
// - máte seznam zvířat v zoo s jejich ošetřovatelem a hodinou krmení (doplňte si další)
// var seznam = 
// [
//   {​​animal: "tiger", keeper: "Jan", feeding: 15}​​,
//   {​​animal: "elephant", keeper: "Eva", feeding: 18}​​,
//   {​​animal: "giraffe", keeper: "Eva", feeding: 13}​​,
//   {​​animal: "lion", keeper: "Jan", feeding: 14}​​,
//   {​​animal: "wolf", keeper: "Jan", feeding: 16}​​,
//   {​​animal: "gazelle", keeper: "Eva", feeding: 10}​​
// ];
// // - vytvořte funkci, která vrátí rozvrh krmení pro ošetřovatele
// function getFeedingTimetable(zadejKeeper) {
//         const zooFilter = zoo.filter(item => item.keeper == zadejKeeper);
//         console.log(zooFilter);
//         const zooFilterMap = zooFilter.map(item => ({ animal: item.animal, time: item.feeding }))//tady mohu menit nazvy klicu z feeding na time treba
//         console.log(zooFilterMap);
//         const zooMapSort = zooFilterMap.sort((a, b) => {return a.time - b.time});//seradim vzestupne dle casu krmeni - klic feeding; pozor na klic - sortuju zmenene pole zooFilterMap a to uz ma misto feeding klic time
//         console.log(zooMapSort);
//         //zjednodusene a bez vypisu
//         return zoo
//         .filter(item => item.keeper == zadejKeeper)
//         .map(item => ({ animal: item.animal, time: item.feeding }))
//         .sort((a, b) => {return a.time - b.time});//funguje i bez tohoto returnu
//     }
//     const janTimetable = getFeedingTimetable("Jan");
// - např. funkce getFeedingTimetable("Jan") vrátí:

// [

//   {​​animal: "lion", time: 14}​​,

//   {​​animal: "tiger", time: 15}​​,

//   {​​animal: "wolf", time: 16}​​

// ]

// - bonus: udělejte možnost u každého zvířete zadat více časů krmení

// - bonus 2: vytvořte funkci, která vrátí nejbližší další krmení pro ošetřovatele podle aktuálního času

// - např. getNextFeeding("Eva"), když je zrovna 17:25 -> {​​animal: "elephant", time: 18}​​

// PRIKLAD: Napište funkci, která zkontroluje, že zadaný text:
// - neobsahuje mezeru
// - je kratší, než 20 znaků
// Přidejte callback pro případ validního i nevalidního textu

// function isValid(text, onValid, onInvalid) {
//   const valid = !text.includes(" ") && text.length < 20
// //TOMUTO NEROZUMIM
//   valid && onValid && onValid() // stejné jako: if (valid && onValid) onValid()
//   !valid && onInvalid && onInvalid() // stejné jako: if (!valid && onInvalid) onInvalid()
//   return valid
// }
// function writeValid()
// {
//   console.log("valid")
// }
// isValid("ahojahojahojahojaho", writeValid)
// isValid("ahojahojahojahojahoj", writeValid, () => console.log("invalid"))
// isValid("ahoj ahoj", writeValid, () => console.log("invalid"))

// PRIKLAD: napište funkci, která spojí uživatele s jeho právy
// const roles = [
//   { name: "Admin", administrationAccess: true, canEdit: true, canRead: true },
//   { name: "Editor", administrationAccess: false, canEdit: true, canRead: true },
//   { name: "Guest", administrationAccess: false, canEdit: false, canRead: true }
// ]
// const users = [
//   { id: 11, name: "Pavel", role: "Admin" },
//   { id: 22, name: "Bára", role: "Editor" },
//   { id: 33, name: "Jana", role: "Editor" },
//   { id: 40, name: "Milan", role: "Guest" }
// ]
// function pairUserWithRights(users,roles){//pole mohu oznacit i obecnymi nazvy; dal jsem users a roles pro jasnejsi prehlednost
//     const novePoleRoliAUsersSloucenyDleRoli = 
//     users.map(jedenObjektUsers => {//4) az cinnosti nize provedes u vsech 
//         const vybranaRole = //2) takovy objekt pak vloz do nove promenne vybranaRole
//         roles.find(jedenObjektRoles => jedenObjektRoles.name == jedenObjektUsers.role);//1) prohledej roles a najdi takovy objekt, kde se name shoduje s roli v users;  
//         return {...vybranaRole, ...jedenObjektUsers};//3) novy objekt pak spoj s prislusnym objektem z users a vysledek vrat do noveho pole objektu novePoleRoliAUsersSloucenyDleRoli 

//     });
//     return novePoleRoliAUsersSloucenyDleRoli.map((item) => ({ firstName: item.name, id: item.id, role: item.role, administrationAccess: item.administrationAccess, canEdit: item.canEdit, canRead: item.canRead}));
// //timto jsem si zmenil nazev klice name na fistname a i poradi prvku objektu
//   }
// console.log(pairUserWithRights(users, roles));  

//!!!Alternativa - poradne zjednodusena...
// function pairUsersWithRole() {
//   return users.map(user => ({ ...roles.find(role => user.role == role.name), ...user }))
// }
// console.log(pairUsersWithRole());  

//HACKATHON 24.1.2021
//--------------------------------------------------------------------
// const prijmeni = ["Bouška", "Kruliš", "Šnajdr", "Brzobohatý", "Mikulášek", "Šálek", "Kabát", "Sojka", "Žižka", "Balcar", "Minarčík", "Šefl",
//     "Franc", "Lipovský", "Voříšek", "Jandl", "Zuna", "Vogl", "Frank", "Rác", "Tancoš", "Juchelka", "Sochor", "Šikula", "Kurková", "Viktorinová",
//     "Jíšová", "Balcarová", "Kačírková", "Valtrová", "Prášková", "Šabatová", "Halířová", "Hrubá", "Petrásková", "Havlenová", "Zezulová", "Blahutová",
//     "Kousalová", "Hoffmannová", "Koutová", "Větrovská", "Sochorová", "Kožíšková", "Munzarová", "Nováková", "Novák", "Novák", "Nováková", "Vyskočilová"];
// const jmena = ["Olga", "Bohumila", "Marcela", "Oldřiška", "Barbora", "Liběna", "Olívie", "Denisa", "Mariana", "Patricie", "Hana", "Jitka",
//     "Vilma", "Drahoslava", "Ida", "Vendula", "Darina", "Jindřiška", "Vilma", "Darina", "Laura", "Sandra", "Gizela", "Miroslava", "Vladěna", "Jarmil", "Silvestr", "Oto", "Hubert", "Vincenc", "Miloš", "Filip", "Vavřinec", "Rostislav", "Jonáš", "Zdeněk", "Marek",
//     "Emanuel", "Věroslav", "Libor", "Dominik", "Vladan", "Roland", "František", "Vladimír", "Ludvík", "Jan", "Teodor", "Libor", "Dalibor"];
// const workload = [10, 20, 30, 40];
// const seznamZamestnacu = [];
// for (var index = 0; index < prijmeni.length; index++) {
//     var nahCisloJmena = Math.floor(Math.random() * 49);
//     var birthdate = birthDate(19, 35)
//     function birthDate(x, y) { //generuje nahodne datum v zadanem rozmezi (je to najite na netu...)
//         var startDate = new Date((2021 - x), 0, 1).getTime();
//         var endDate = new Date((2021 - y), 0, 1).getTime();
//         var spaces = (endDate - startDate);
//         var timestamp = Math.round(Math.random() * spaces);
//         timestamp += startDate;
//         return new Date(timestamp).toISOString();
//     }
//     var nahCisloWorkload = Math.floor(Math.random() * 4);//jednodussi by bylo generovat rovnou nahodne 10,20,30 nebo 40 pomoci Math.floor(Math.random() * 4)*10
//     //a nemusel bych mit pole workload
//     var zamestnanec = {};
//     var surname = prijmeni[index];
//     if (surname.endsWith("á")) {
//         zamestnanec = {
//             name: jmena[nahCisloJmena], surname: prijmeni[index], gender: "female", workload: workload[nahCisloWorkload],
//             birthdate: birthdate
//         };
//     }
//     else {
//         zamestnanec = {
//             name: jmena[nahCisloJmena], surname: prijmeni[index], gender: "male", workload: workload[nahCisloWorkload],
//             birthdate: birthdate
//         };
//     }
//     seznamZamestnacu.push(zamestnanec);
// }
// console.log(seznamZamestnacu);
//Uloha 2
//počet zaměstnanců
// console.log(seznamZamestnacu.length);

// //počet zaměstnanců podle výše úvazku (10, 20, 30 a 40h/týdně)
// const zamestnanci10 = seznamZamestnacu.filter(item => item.workload == "10");
// console.log(zamestnanci10.length);
// const zamestnanci20 = seznamZamestnacu.filter(item => item.workload == "20");
// console.log(zamestnanci20.length);
// const zamestnanci30 = seznamZamestnacu.filter(item => item.workload == "30");
// console.log(zamestnanci30.length);
// const zamestnanci40 = seznamZamestnacu.filter(item => item.workload == "40");
// console.log(zamestnanci40.length);

// //průměrný věk (zaokrouhleno na jedno desetinné místo)
//  const poleVek = seznamZamestnacu.map((item) => {
//      return parseInt(2021 - parseInt(item.birthdate.slice(0,4)));
//  });
// const prumVek = (poleVek.reduce((acc, element) => acc+element) / (poleVek.length)).toFixed(1);
// console.log(prumVek);

// //minimální věk (nejmladší zaměstnanec)
// const minimalniVek = poleVek.sort(function (a,b) {return a-b} )[0];
// const maximalniVek = poleVek.sort(function (a,b) {return b-a} )[0];
// console.log(minimalniVek);
// console.log(maximalniVek);

// //medián věku
// const poleVek = seznamZamestnacu.map((item) => {
//     return parseInt(2021 - parseInt(item.birthdate.slice(0,4)));
// });
// const poleVekVzestupne = poleVek.sort(function (a,b) {return a-b} );//serezeni dle velikosti vzestupne - nutne pro zjisteni medianu
// function medianFce(array){
//     var median = 0;
//     if (array.length % 2 == 0){//sudy pocet prvku
//         median = ( array[(array.length)/2] + array[(array.length)/2+1] ) / 2;//ar.prumer prvku n/2 a n+1/2
//     }
//     else{
//         median = ( array[(array.length+1)/2] );//prostredni hodnota pro lichy pocet prvku n+1/2
//     }
//     return median;
// }
// console.log(medianFce(poleVekVzestupne));

// //přehled zaměstnanců setříděných dle výše úvazků od nejmenšího po největší
// const zamestnanciDleUvazkuVzestupne = seznamZamestnacu.sort(function (a,b) {return a.workload-b.workload} );
// console.log(zamestnanciDleUvazkuVzestupne);

// //medián výše úvazku
// const poleUvazku = seznamZamestnacu.map((item) => {
//     return item.workload;
// })
// const poleUvazkuVzestupne = poleUvazku.sort(function (a, b) { return a - b });
// function medianUvazkyFce(array) {
//     var medianUvazky = 0;
//     if (array.length % 2 == 0) {//sudy pocet prvku
//         medianUvazky = ( array[(array.length) / 2] + array[(array.length) / 2 + 1] ) / 2;//ar.prumer prvku n/2 a n+1/2
//     }
//     else {
//         medianUvazky = ( array[ (array.length + 1) / 2 ] );//prostredni hodnota pro lichy pocet prvku n+1/2
//     }
//     return medianUvazky;
// }
// console.log(medianUvazkyFce(poleUvazkuVzestupne));

// //průměrná výše úvazku v rámci žen
// const poleUvazkuZen = seznamZamestnacu.filter(item => item.gender == "female").map((item) => {
//     return item.workload;
// })
// const prumVyseUvazkuZeny = (  poleUvazkuZen.reduce((acc, element) => acc+element) / poleUvazkuZen.length  ).toFixed(1);
// console.log(prumVyseUvazkuZeny);

//Ukol 5
//Vytvořte uuScript, který pro vygenerovaný pool zaměstnanců z úlohy 1 vypíše zaměstnance včetně informace o věku, 
//kteří slaví narozeniny v měsíci, ve kterém došlo ke spuštění skriptu.

// var d = new Date();
// var rokAktual = d.getFullYear();
// var mesicAktual = d.getMonth() + 1;
// var pocetOslavencu = 0;
// for (var index = 0; index < seznamZamestnacu.length; index++) {
//     var mesicNarozeni = seznamZamestnacu[index].birthdate.slice(5, 7);
//     if (mesicAktual == mesicNarozeni) {
//         var vek = parseInt(rokAktual) - parseInt(seznamZamestnacu[index].birthdate.slice(0, 5));
//         console.log(seznamZamestnacu[index], `Dneska slavi: ${vek}`);
//         pocetOslavencu++;
//     }
// }
// console.log(`Pocet oslavencu v tomto mesici: ${pocetOslavencu}`);

//Klonovani objektu s vnitrnim objektem
// const obj = {name:"Jan", surname:{deep:"copy me"}};
// const objClone = {...obj};//nebo pomoci Assign - vytvori se klon, ale vnitrni objekt bude zase jen reference, tedy pokud dam zmenit value u vnitrniho objektu 
//u obj, tak zmena nastane i u objClone  
// const objSuperClone = JSON.parse(JSON.stringify(obj));//timto zpusobem se vytvori klon bez referenci i u vnitrniho objeku, 
//takze obj.surname.deep = "Rolenc"; se u objSuperClone neprojevi - "deep cloning"
// console.log(obj);
// console.log(objClone);
// console.log(objSuperClone);

// obj.surname.deep = "Rolenc";
// console.log(obj);
// console.log(objClone);
// console.log(objSuperClone);

// //Class
// class Animal {
//     constructor(name, type, color){
//         this.name = name;
//         this.type = type;
//         this.color = color;
//     }
// }
// class Mammal extends Animal{
//     constructor(name, type, color){
//         super(name, type, color)
//     }
//     sound(){
//         console.log(`I am a ${this.type} called ${this.name} and I am ${this.color}.`);
//     }
// }
// const cow = new Mammal("Peggy", "cow", "white-black");
// console.log("Mooooo ");
// cow.sound();

// Solve the below problems:
// #1) Check if this array includes the name "John".
// const dragons1 = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
// console.log(dragons1.includes("John"));

// // #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// // name or names in an array.
// const dragons2 = ['Tim', 'Johnathan', 'Sandy', 'Sarah', "MaJohnny"];
// const dragonsJohn = dragons2.filter((item) => item.includes("John"));
// console.log(dragonsJohn);
// // #3) Create a function that calulates the power of 100 of a number entered as a parameter
// var power100 = (num) => num**100;
// console.log(power100(10));
// // #4) Useing your function from #3, put in the paramter 10000. What is the result?
// // Research for yourself why you get this result
// var power100 = (num) => num**100;
// console.log(power100(10000));//Infinity

// var objekt = {Jan:"Rolenc", Pavel:"Berka", Dusan:"Bera"};
// var jmenaPole = Object.entries(objekt);
// console.log(jmenaPole);
// var jmenaCela = jmenaPole.map(item => {
//     return item[0] + " " + item[1];
// })   
// console.log(jmenaCela);
////Alternativne
// var jmenaCela2 = jmenaPole.map(([item1, item2]) => {
//     return item1 + " " + item2;
// })
// console.log(jmenaCela2);

// Novinka v ES8 / padStart, padEnd
// #1) Line up the Turtle and the Rabbit at the start line:
// const startLine = '     ||<- Start line';
// var turtle = '🐢';
// var rabbit = '🐇';
// turtle = turtle.padStart(8,"*");
// rabbit = rabbit.padStart(8);
// console.log(startLine);
// console.log(turtle);
// console.log(rabbit);
// rabbit = rabbit.trim().padEnd(9, "=");
// console.log(rabbit);

// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
// turtle = turtle.trim().padEnd(9, '=');
//'🐇========';

// // #3) Get the below object to go from:
// var obj = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }
// // // to this:
// // 'my name is Rudolf the raindeer'
// var str = "";
// const neco = Object.entries(obj).forEach((item) => {
//      str += item[0] + " " + item[1] + " ";
// })
// console.log(str);
// //alternativa:
// const neco2 = Object.entries(obj).map(value => value.join(" ")).join(' ');
// console.log(neco2);

// //Flat, FlatMap
// const a = [1,2,3,4];
// const aa = a.map(item => item*3);
// const aab = a.map(item => [item*3]);//pokud dam hranate zavorky, tak vystupem bude pole poli
// const aaa = aab.flatMap(item => item*2);//flatMap je kombinace v obou v jednom - vsechny pole slouci do jednoho pole a vsechny prvky vynasobi
// console.log(aa);
// console.log(aab);
// console.log(aaa);
// var stringArray = ["es10", "", "feature"];
// console.log(stringArray.map(word =>word.split(" "))); 
// //[["es10"], [""], ["feature"]]
// console.log(stringArray.flatMap(word =>word.split("")));
// //["e", "s", "1", "0", "f", "e", "a", "t", "u", "r", "e"]

////SPLIT na stringu
// var str = "How are you doing today?";
// var res = str.split("o");
// var res2 = str.split(' ');
// var res3 = str.split(' ');
// console.log(res);
// console.log(res2);
// console.log(res3);

////ES10 - Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
// // const array = [[1],[2],[3],[[[4]]],[[[5]]]]
// // const arr2 = array.flat();
// // const arr3 = array.flat(2);
// // console.log(arr2);
// // console.log(arr3);

// //FlatMap
// // #2 Turn greeting array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
// const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
// console.log(greeting.flat());
// console.log(greeting.map(x => x.join(' ')));//toto udela to same v tomto pripade
// console.log(greeting.flatMap(x => x.join(' ')));//vem kazde pole z pole greeting, spoj (join()) mezerou jeho prvky a nakonec vsechny nova podpole spoj dohromady 

//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
// const greeting = [greeting1,greeting2,greeting3].join().replace(/,/g, " ");
// console.log(greeting);
//console.log(greeting.flatMap(x => x.join(' ')).join(' '));//alternativa od Andrei

//#4 Turn the trapped 3 number into: [3]
// const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]].flat(27);
// const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]].flat(infinity);//Andrei
// console.log(trapped);

//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
// const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   ';
// const checkedEmail = userEmail3.trim();//Andrei console.log(userEmail3.trimEnd().trimStart())
// console.log(checkedEmail);

//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// const users = { user1: 18273, user2: 92833, user3: 90315 }
// const usersArray = Object.entries(users);
// console.log(usersArray);

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
// const newUserArray = usersArray.map(([item1, item2]) => {
//     return [item1, item2*2];
// }) 
//updatedUsersArray = usersArray.map((user) => [user[0], user[1] * 2])//alternativa Andrei
// const newUserObj = Object.fromEntries(newUserArray);
// console.log(newUserArray);
// console.log(newUserObj);

// const basket = ['apples', 'oranges', 'grapes'];
// const detailedBasket = {
//   apples: 5,
//   oranges: 10,
//   grapes: 1000
// }


// FOR IN - object
// Write a function checkBasket() that vars you know if the item is in the basket or not
// amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// }
// function checkBasket(basket, lookingFor) {
//     for (item in basket){ //pomoci FOR IN mohu prochazet klice objektu
//         // console.log(typeof item);
//         if (item === lookingFor){
//             return `Yes, there are ${lookingFor} in the basket.`
//         }
//     }
// }
// console.log(checkBasket(amazonBasket, "glasses"));

// //Optional?, Nullish?? a Or|| Operators  - funguji na objekty
// const ja = {
//     bojovnici : {
//         jmeno:"Jan",
//         vek:43,
//         power1:0,
//         power2:"",
//         power3:""
//     }
// }
// var power1 = ja?.bojovnici?.power1;//0
// var power2 = ja?.bojovnici?.power2??"no power";//white space - operator ?? vyhodnoti jako "truthy"
// var power3 = ja?.bojovnici?.power3||"no power";//ale operator || vyhodnoti null nebo undefined jako "falsy", takze no power
// console.log(power1);
// console.log(power2);
// console.log(power3);



// // Exercise 3: Clean up this code using optional chaining
// var will_pokemon = {
//     pikachu: {
//         species: 'Mouse Pokemon',
//         height: 0.4,
//         weight: 6,
//         power: 'lightning',
//         friend: {
//             charizard: {
//                 species: 'Dragon Pokemon',
//                 height: 1.7,
//                 weight: 90.5,
//                 power: 'fire'
//             }
//         }
//     }
// }
// var andrei_pokemon = {
//     raichu: {
//         species: 'Mouse Pokemon',
//         height: 0.8,
//         weight: 30,
//         power: ''
//     }
// }
// // if (andrei_pokemon && andrei_pokemon.raichu && will_pokemon
// //     && will_pokemon.pikachu && will_pokemon.pikachu.friend
// //     && will_pokemon.pikachu.friend.charizard) {
// //     console.log('fight!')
// // } else {
// //     console.log('walk away...')
// // }
// if (andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard) {
//     console.log('fight!')
// } else {
//     console.log('walk away...')
// }

// Exercise 4: What do these each output?
//  console.log(false ?? 'hellooo') //false
//  console.log(null ?? 'hellooo')// hellooo
//  console.log(null || 'hellooo')// hellooo
//  console.log((false || null) ?? 'hellooo')//hellooo
//  console.log(null ?? (false || 'hellooo'))//hellooo

// //DEBUGGER
// const flatten = [[0, 1], [2, 3], [4, 5]].reduce((accumulator, item) => {
//     debugger
//     return accumulator.concat(item)
// });
// console.log(flatten);

////Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
//make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) 
//should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 

//var pole = [1, 1, 3, 2, 3, 2, 88, 7];
// var poleNew = [];
// var pocetOpakovani;
// var pocetPoli = 0;
// do {
//     poleNew[pocetPoli] = pole.filter(item => item === pole[0]);
//     pole = pole.filter(item => item !== pole[0]);
//     pocetOpakovani = pole.length;
//     pocetPoli++;
// } while (pocetOpakovani !== 0);
// console.log(poleNew);

// //Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that,
// //when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]
// var pole = [1, 5, 6, 10, 15, 14];
// var cisloInput = 15;
// function sumExist(array, number) {
//     var poleCisel = [...[]];
//     for (let index = 0; index < array.length; index++) {
//         var rozdil = number - array[index];
//         var cislo2 = array.find(item => item === rozdil);
//         if (cislo2) {
//             poleCisel.push([cislo2, array[index]]);
//         }
//     }
//     if (poleCisel.length < 1) {
//         return "There are no two numbers in the array whose sum gives the input number."
//     }
//     else {
//         console.log(`Input array: ${pole}`);
//         console.log(`Input number: ${cisloInput}`);
//         console.log(`Two numbers from the array whose sum gives the input number are: `);
//         poleCisel.forEach((item) => {
//             var dvojice = [item[0], item[1]].join(" and ");
//             console.log(dvojice);
//         })
//     }
// }
// console.log(sumExist(pole, cisloInput));
