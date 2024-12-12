[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/ATV5e7Id)
# Oyun Linki = https://gmt-458-web-gis.github.io/geogame-SelenAYD/
# İki Şehir Arasında Bulunan İlleri Tahmin Etme Oyunu

Bu proje, Türkiye’deki iki şehir arasındaki en kısa yol üzerinde kalan şehirleri tahmin etmeye dayalı bir coğrafi oyundur. Oyuncular, başlangıç ve hedef şehir arasındaki illeri doğru tahmin ettikçe puan kazanır. Oyunun amacı, tüm şehirleri harita üzerinde doğru şekilde bulmaktır.

## Proje Konsepti

Kullanıcıya Türkiye haritası üzerinde iki şehir gösterilir: bir başlangıç ve bir hedef şehir. Oyuncu, bu iki şehir arasındaki güzergâhta bulunan şehirleri tahmin eder. Doğru tahmin edilen her şehir için oyuncuya puan verilir ve oyuncu tüm şehirleri doğru şekilde tahmin etmeye çalışır.

## Gereksinimler

### Arayüz Gereksinimleri

- **Harita**: Türkiye haritası üzerinde, başlangıç ve hedef şehir arasındaki şehirleri gösterir.
- **Başlangıç ve Hedef Şehirler**: Rastgele seçilen iki şehrin isimleri ekranda görünür.
- **Puan Göstergesi**: Kullanıcının doğru tahminleri sonucu topladığı puanı güncel olarak gösterir.
- **Tahmin Girişi**: Kullanıcının tahmin ettiği şehri girebileceği bir alan ve "Tahmin Et" butonu.

### Fonksiyonel Gereksinimler

- **Şehir Kontrolü**: Girilen şehrin, başlangıç ve hedef şehir arasında olup olmadığını kontrol eder.
- **Puanlama Sistemi**: Her doğru tahmin için puan ekler ve puanı günceller.
- **Yeni Oyun Başlatma**: Başka bir başlangıç ve hedef şehirle yeni bir oyun başlatır.
- **Süre**: Oyunda 1 dakikalık süre içersinde en fazla ili tahmin edip en yüksek puana ulaşılması hedeflenmektedir.


## Arayüz Yerleşimi

- **Başlık**: Oyun başlığı "İki Şehir Arasında Bulunan İlleri Tahmin Etme" olarak ekranda görünür.
- **Harita**: OpenLayers ile oluşturulan Türkiye haritası.
- **Oyun Bilgileri**: Başlangıç ve hedef şehir bilgileri ile güncel puan gösterilir.
- **Tahmin Girişi**: Kullanıcının şehir tahminini yazabileceği giriş alanı ve "Tahmin Et" butonu.
- **Süre Ekranı**: 1 dakikalık sürenin kullanıcılara bildirileceği ekran. Bu yüzden 1 dakikalık sayaç ekranda olacaktır.

## Kullanılacak Kütüphaneler

- **OpenLayers**: Harita üzerinde şehirlerin doğru işaretlenmesi, etkileşimli harita görselleştirmesi ve kullanıcı etkileşimi için kullanılacaktır.

![tasarım_oyun](https://github.com/user-attachments/assets/965d780a-74cd-4a99-819f-62bca7256bad)


## Event Handlers

### 1. Starting the Game and New Game (onClick)
This event is triggered when the "Start" button is clicked. The start screen is hidden, showing the game screen and timer. In addition, a new game is started and the necessary settings are made.

### 2. Timer Management (onTimer)
It keeps track of the time during the game and updates the remaining time every second. When the time reaches zero, it ends the game and reports the score. Timer management is a mechanism that constantly controls the progress of the game.

### 3. Prediction Control (onInput)
When a city name is entered, the prediction is checked. If the city entered is a valid and correct prediction, points are added and feedback is given. In case of a wrong or invalid prediction, an appropriate message is displayed

## Closure

### 1.Zamanlayıcı ile Closure (startTimer, setInterval)
startTimer fonksiyonu, her saniye kalan süreyi güncellemek için setInterval kullanır. setInterval işlevi, dıştaki startTimer fonksiyonunda tanımlanan timeLeft değişkenine erişerek zamanı kontrol eder. Bu yapı, closure kullanılarak değişkenlere güvenli erişim sağlar.

### 2.Puan Takibi ile Closure (makeGuess, score)
makeGuess fonksiyonu, oyundaki score değişkenini günceller. score, sadece makeGuess fonksiyonu tarafından kontrol edilir ve değiştirilebilir. Bu closure, puanın yalnızca belirli koşullarda güncellenmesini sağlar.

### 3.Tahmin Aralığı Kontrolü ile Closure (isBetweenCities, haversineDistance)
isBetweenCities fonksiyonu, iki şehir arasındaki tahminleri doğrulamak için haversineDistance işlevini kullanır. haversineDistance, dış fonksiyondaki startCity ve endCity koordinatlarına erişir. Bu yapı, closure ile dıştaki verilere ulaşarak karmaşık hesaplamalar yapılmasını sağlar.

## Interaction with the DOM 

### 1. Accessing Elements
In my game, DOM elements are accessed using getElementById to display information and retrieve data to the user during the game. Examples:

-"start-city" and "end-city": Used to display the names of randomly selected starting and ending cities to the user.
-"timer": Updated with a timer to display the remaining time.
-"score": Edited to display the user's current score on the screen.
-"feedback": Used to indicate whether the guesses are correct or incorrect.
-"guess": Used as an input field to get a guess from the user.

### 2. Updating DOM Elements
During the game, the text and states in the DOM are dynamically updated:

-textContent: Used to update the score, feedback, duration and selected city names.
-value: Used to clear the guess input field.
-disabled: Applied to buttons to disable or enable user inputs.

### 3. Interacting with DOM Events
The game manages user interactions using Event Listeners:

-"start-button": When the user clicks the "Start" button, it starts the game and loads a new game settings.

-"guess": When the user makes a guess in the input field, the guess is checked and feedback is provided.
