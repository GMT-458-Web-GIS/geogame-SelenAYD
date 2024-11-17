[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/ATV5e7Id)
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
- **Süre **: Oyunda 1 dakikalık süre içersinde en fazla ili tahmin edip en yüksek puana ulaşılması hedeflenmektedir.


## Arayüz Yerleşimi

- **Başlık**: Oyun başlığı "İki Şehir Arasında Bulunan İlleri Tahmin Etme" olarak ekranda görünür.
- **Harita**: OpenLayers ile oluşturulan Türkiye haritası.
- **Oyun Bilgileri**: Başlangıç ve hedef şehir bilgileri ile güncel puan gösterilir.
- **Tahmin Girişi**: Kullanıcının şehir tahminini yazabileceği giriş alanı ve "Tahmin Et" butonu.
- **Süre Ekranı**: 1 dakikalık sürenin kullanıcılara bildirileceği ekran. Bu yüzden 1 dakikalık sayaç ekranda olacaktır.

## Kullanılacak Kütüphaneler

- **OpenLayers**: Harita üzerinde şehirlerin doğru işaretlenmesi, etkileşimli harita görselleştirmesi ve kullanıcı etkileşimi için kullanılacaktır.

![tasarım_oyun](https://github.com/user-attachments/assets/965d780a-74cd-4a99-819f-62bca7256bad)



