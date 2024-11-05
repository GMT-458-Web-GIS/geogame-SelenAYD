
const map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([35.2433, 38.9637]), /* tr merkez coord */
    zoom: 6
  })
});

/* şehirler */
const cities = [
  { name: "Adana", coord: [35.3213, 37.0000] },
  { name: "Adıyaman", coord: [38.2786, 37.7648] },
  { name: "Afyonkarahisar", coord: [30.5287, 38.7638] },
  { name: "Ağrı", coord: [43.0448, 39.7191] },
  { name: "Amasya", coord: [35.8353, 40.6520] },
  { name: "Ankara", coord: [32.8597, 39.9334] },
  { name: "Antalya", coord: [30.7133, 36.8969] },
  { name: "Artvin", coord: [41.8190, 41.1828] },
  { name: "Aydın", coord: [27.8453, 37.8485] },
  { name: "Balıkesir", coord: [27.8843, 39.6484] },
  { name: "Bilecik", coord: [30.0561, 40.1497] },
  { name: "Bingöl", coord: [40.7643, 39.0626] },
  { name: "Bitlis", coord: [42.1043, 38.3938] },
  { name: "Bolu", coord: [31.5788, 40.7350] },
  { name: "Burdur", coord: [30.2835, 37.7166] },
  { name: "Bursa", coord: [29.0614, 40.1826] },
  { name: "Çanakkale", coord: [26.4098, 40.1553] },
  { name: "Çankırı", coord: [33.6167, 40.6013] },
  { name: "Çorum", coord: [34.9556, 40.5489] },
  { name: "Denizli", coord: [29.0871, 37.7765] },
  { name: "Diyarbakır", coord: [40.2317, 37.9244] },
  { name: "Edirne", coord: [26.5567, 41.6764] },
  { name: "Elazığ", coord: [39.2238, 38.6811] },
  { name: "Erzincan", coord: [39.7477, 39.7466] },
  { name: "Erzurum", coord: [41.2769, 39.9042] },
  { name: "Eskişehir", coord: [30.5206, 39.7767] },
  { name: "Gaziantep", coord: [37.3833, 37.0662] },
  { name: "Giresun", coord: [38.3906, 40.9124] },
  { name: "Gümüşhane", coord: [39.4851, 40.4598] },
  { name: "Hakkari", coord: [43.7380, 37.5744] },
  { name: "Hatay", coord: [36.4018, 36.4018] },
  { name: "Isparta", coord: [30.5537, 37.7648] },
  { name: "Mersin", coord: [34.6442, 36.8121] },
  { name: "İstanbul", coord: [28.9784, 41.0082] },
  { name: "İzmir", coord: [27.1384, 38.4237] },
  { name: "Kars", coord: [43.0976, 40.6085] },
  { name: "Kastamonu", coord: [33.7784, 41.3890] },
  { name: "Kayseri", coord: [35.4894, 38.7322] },
  { name: "Kırklareli", coord: [27.2286, 41.7358] },
  { name: "Kırşehir", coord: [34.1617, 39.1451] },
  { name: "Kocaeli", coord: [29.9293, 40.8533] },
  { name: "Konya", coord: [32.4828, 37.8667] },
  { name: "Kütahya", coord: [29.6149, 39.4192] },
  { name: "Malatya", coord: [38.3113, 38.3552] },
  { name: "Manisa", coord: [27.4265, 38.6191] },
  { name: "Kahramanmaraş", coord: [36.9264, 37.5744] },
  { name: "Mardin", coord: [40.7339, 37.3212] },
  { name: "Muğla", coord: [28.3677, 37.2153] },
  { name: "Muş", coord: [41.4915, 38.9462] },
  { name: "Nevşehir", coord: [34.7121, 38.6244] },
  { name: "Niğde", coord: [34.6799, 37.9667] },
  { name: "Ordu", coord: [37.8967, 40.9847] },
  { name: "Rize", coord: [40.5219, 41.0201] },
  { name: "Sakarya", coord: [30.4159, 40.7569] },
  { name: "Samsun", coord: [36.3344, 41.2867] },
  { name: "Siirt", coord: [41.9325, 37.9333] },
  { name: "Sinop", coord: [35.1534, 42.0231] },
  { name: "Sivas", coord: [37.0166, 39.7477] },
  { name: "Tekirdağ", coord: [27.5085, 40.9786] },
  { name: "Tokat", coord: [36.5544, 40.3139] },
  { name: "Trabzon", coord: [39.7168, 41.0015] },
  { name: "Tunceli", coord: [39.5503, 39.3074] },
  { name: "Şanlıurfa", coord: [38.7927, 37.1674] },
  { name: "Uşak", coord: [29.4068, 38.6823] },
  { name: "Van", coord: [43.0564, 38.5011] },
  { name: "Yozgat", coord: [34.8147, 39.8185] },
  { name: "Zonguldak", coord: [31.7717, 41.4564] },
  { name: "Aksaray", coord: [34.0254, 38.3729] },
  { name: "Bayburt", coord: [40.2552, 40.2589] },
  { name: "Karaman", coord: [33.2323, 37.1811] },
  { name: "Kırıkkale", coord: [33.5217, 39.8467] },
  { name: "Batman", coord: [41.1164, 37.8812] },
  { name: "Şırnak", coord: [42.4896, 37.4187] },
  { name: "Bartın", coord: [32.3373, 41.5811] },
  { name: "Ardahan", coord: [42.7022, 41.1105] },
  { name: "Iğdır", coord: [44.0449, 39.9235] },
  { name: "Yalova", coord: [29.2769, 40.6556] },
  { name: "Karabük", coord: [32.6352, 41.2060] },
  { name: "Kilis", coord: [37.1157, 36.7184] },
  { name: "Osmaniye", coord: [36.2476, 37.0743] },
  { name: "Düzce", coord: [31.1667, 40.8438] }
];

let startCity, endCity, score = 0;


function newGame() {
  startCity = cities[Math.floor(Math.random() * cities.length)];
  endCity = cities[Math.floor(Math.random() * cities.length)];

  if (startCity.name === endCity.name) {
    return newGame(); 
  }

  document.getElementById("start-city").textContent = startCity.name;
  document.getElementById("end-city").textContent = endCity.name;
  document.getElementById("score").textContent = score = 0;
  document.getElementById("feedback").textContent = "";
  document.getElementById("guess").value = "";
}


function makeGuess() {
  const guessInput = document.getElementById("guess").value;
  const guessCity = cities.find(city => city.name.toLowerCase() === guessInput.toLowerCase());

  if (!guessCity) {
    document.getElementById("feedback").textContent = "Geçersiz şehir adı.";
    return;
  }

  if (isBetweenCities(guessCity)) {
    score += 10;
    document.getElementById("feedback").textContent = "Doğru tahmin!";
  } else {
    document.getElementById("feedback").textContent = "Yanlış tahmin!";
  }

  document.getElementById("score").textContent = score;
  document.getElementById("guess").value = "";
}



function isBetweenCities(guessCity) {
  const [startLon, startLat] = startCity.coord;
  const [endLon, endLat] = endCity.coord;
  const [guessLon, guessLat] = guessCity.coord;
  

  const toRadians = (deg) => (deg * Math.PI) / 180;

  function haversineDistance(coord1, coord2) {
    const R = 6371; 
    const dLat = toRadians(coord2[1] - coord1[1]);
    const dLon = toRadians(coord2[0] - coord1[0]);
    const lat1 = toRadians(coord1[1]);
    const lat2 = toRadians(coord2[1]);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; 
  }

  const distanceToStart = haversineDistance([startLon, startLat], [guessLon, guessLat]);
  const distanceToEnd = haversineDistance([endLon, endLat], [guessLon, guessLat]);
  const totalDistance = haversineDistance([startLon, startLat], [endLon, endLat]);

  const tolerance = 50;

  return distanceToStart + distanceToEnd <= totalDistance + tolerance;
}



newGame();

