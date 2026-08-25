# TaskFlow

> **TaskFlow — Planla, organize et, takip et.**

TaskFlow, görev ve proje yönetimini tek bir platform üzerinden gerçekleştirmek amacıyla geliştirilmiş, web tabanlı bir **task management uygulamasıdır**.

Uygulama; kullanıcıların görevlerini ve projelerini oluşturmasına, takip etmesine, durumlarını yönetmesine ve çalışmalarını **takvim, analiz ve dashboard ekranları** üzerinden incelemesine olanak sağlayan modüler bir yapı üzerine kurulmuştur.

TaskFlow'un temel amacı; görev yönetimi, proje takibi, kullanıcı yönetimi, takvim, analiz, bildirim ve yapay zekâ destekli içerik üretimi gibi farklı işlevleri tek bir platform altında birleştirerek kullanıcıların çalışma süreçlerini daha düzenli ve takip edilebilir hâle getirmektir.

---

## İçindekiler

- [Proje Hakkında](#proje-hakkında)
- [Özellikler](#özellikler)
  - [Kullanıcı Yönetimi](#-kullanıcı-yönetimi)
  - [Görev Yönetimi](#-görev-yönetimi)
  - [Proje Yönetimi](#-proje-yönetimi)
  - [Takvim](#-takvim)
  - [Analiz ve İstatistikler](#-analiz-ve-istatistikler)
  - [AI Destekli İçerikler](#-ai-destekli-içerikler)
  - [Çoklu Dil Desteği](#-çoklu-dil-desteği)
  - [Bildirim Sistemi](#-bildirim-sistemi)
- [Sistem Mimarisi](#sistem-mimarisi)
- [Frontend Mimarisi](#frontend-mimarisi)
- [Backend Mimarisi](#backend-mimarisi)
- [Node-RED Flow Mimarisi](#node-red-flow-mimarisi)
- [Veri Akışı](#veri-akışı)
- [Kimlik Doğrulama Mimarisi](#kimlik-doğrulama-mimarisi)
- [API Yapısı](#api-yapısı)
- [Kullanılan Teknolojiler](#kullanılan-teknolojiler)
- [Proje Yapısı](#proje-yapısı)
- [Uygulama Akışı](#uygulama-akışı)
- [Güvenlik](#güvenlik)
- [Environment Variables](#environment-variables)
- [Kurulum](#kurulum)
- [Geliştirme](#geliştirme)
- [Git Yapısı](#git-yapısı)
- [Geliştirme Yaklaşımı](#geliştirme-yaklaşımı)
- [Projenin Amacı](#projenin-amacı)
- [Lisans](#lisans)

---

# Proje Hakkında

TaskFlow, kullanıcıların günlük görevlerini, projelerini ve çalışma süreçlerini merkezi bir sistem üzerinden yönetebilmesini sağlayan modüler bir web uygulamasıdır.

Uygulama frontend ve backend taraflarının birbirinden ayrıldığı bir mimari kullanmaktadır.

Frontend tarafında:

- HTML5
- CSS3
- JavaScript
- Bootstrap
- jQuery
- Mustache
- SurveyJS
- FullCalendar
- DataTables
- Font Awesome

gibi teknolojiler kullanılırken, backend tarafındaki API ve iş akışları **Node-RED** üzerinden yönetilmektedir.

Kullanıcı ile backend arasındaki veri iletişimi REST API ve Fetch API üzerinden gerçekleştirilmektedir.

Bu yapı sayesinde frontend tarafındaki kullanıcı arayüzü ile backend tarafındaki iş mantığı birbirinden ayrılmıştır.

---

# Özellikler

## 🔐 Kullanıcı Yönetimi

TaskFlow içerisinde kullanıcı yönetimi için aşağıdaki özellikler bulunmaktadır:

- Kullanıcı kayıt işlemleri
- Kullanıcı giriş işlemleri
- Google ile giriş
- Firebase Authentication
- Google Authentication
- Şifre sıfırlama
- Yeni şifre oluşturma
- Kullanıcı profil yönetimi
- Kullanıcı ayarlarının yönetilmesi
- Kullanıcı oturum bilgilerinin yönetilmesi
- JWT tabanlı uygulama oturumu

Kullanıcı başarılı şekilde giriş yaptığında backend tarafından oluşturulan uygulama token'ı kullanılarak korumalı API işlemlerine erişim sağlanmaktadır.

---

## 📋 Görev Yönetimi

TaskFlow'un temel modüllerinden biri görev yönetimidir.

Kullanıcılar:

- Görev oluşturabilir.
- Görevleri düzenleyebilir.
- Görevleri silebilir.
- Görev durumlarını değiştirebilir.
- Görev önceliği belirleyebilir.
- Görevleri projeler ile ilişkilendirebilir.
- Görevlerin tamamlanma durumunu takip edebilir.
- Görevlerin teslim tarihlerini belirleyebilir.
- Görevlerini dashboard üzerinden takip edebilir.
- Görevlerini takvim üzerinden görüntüleyebilir.

Görev verileri backend API üzerinden yönetilmekte ve frontend tarafında dinamik olarak görüntülenmektedir.

---

## 📁 Proje Yönetimi

TaskFlow içerisinde görevlerin daha düzenli şekilde gruplandırılabilmesi için proje yönetimi modülü bulunmaktadır.

Kullanıcılar:

- Proje oluşturabilir.
- Proje silebilir.
- Projelere görev atayabilir.
- Proje içerisindeki görevleri görüntüleyebilir.
- Proje bazlı görev takibi gerçekleştirebilir.
- Proje durumlarını görüntüleyebilir.

Bu yapı görevlerin yalnızca bağımsız şekilde değil, belirli projeler altında organize edilmesine olanak sağlamaktadır.

---

## 📅 Takvim

Takvim modülü görevlerin tarih bazlı şekilde takip edilmesini sağlar.

Takvim üzerinde:

- Görevler görüntülenebilir.
- Teslim tarihleri takip edilebilir.
- Tarih bazlı görev planlaması yapılabilir.
- Kullanıcının yaklaşan görevleri incelenebilir.

Takvim yapısında **FullCalendar** kullanılmaktadır.

---

## 📊 Analiz ve İstatistikler

TaskFlow içerisinde kullanıcıların görev ve proje süreçlerini analiz edebilmesi için analiz ekranı bulunmaktadır.

Analiz ekranında:

- Görev istatistikleri
- Proje performansı
- Görev durumlarının dağılımı
- Öncelik dağılımları
- Tamamlanan görevler
- Devam eden görevler
- Görev yoğunluğu

gibi bilgiler incelenebilmektedir.

Bu yapı kullanıcının yalnızca görev oluşturmasını değil, çalışma sürecini analiz edebilmesini de amaçlamaktadır.

---

## 🤖 AI Destekli İçerikler

TaskFlow içerisinde dashboard üzerinde kullanıcıya dinamik içerikler ve öneriler sunmak amacıyla AI destekli bir yapı bulunmaktadır.

AI tarafında:

- Dashboard üzerinde dinamik içerik üretimi
- Kullanıcının görevlerine yönelik içerik oluşturulması
- Görev verilerine göre öneriler
- Kullanıcı çalışma sürecine yönelik dinamik çıktılar

gibi işlemler gerçekleştirilebilmektedir.

AI servis iletişimi backend tarafında environment variable üzerinden yönetilen API anahtarı aracılığıyla gerçekleştirilmektedir.

Bu sayede hassas API anahtarı frontend kodu içerisinde tutulmamaktadır.

---

## 🌍 Çoklu Dil Desteği

TaskFlow dinamik bir çoklu dil yapısına sahiptir.

Arayüz içerisinde kullanılan metinler doğrudan HTML içerisine sabitlenmek yerine dil dosyaları üzerinden yönetilebilmektedir.

Bu yapı sayesinde:

- Menü metinleri
- Butonlar
- Sayfa başlıkları
- Bildirimler
- Form metinleri
- Dashboard içerikleri

gibi kullanıcı arayüzündeki metinlerin farklı dillere uyarlanması mümkün hâle gelmektedir.

---

## 🔔 Bildirim Sistemi

TaskFlow içerisinde kullanıcı işlemlerinin sonucunu kullanıcıya aktarmak amacıyla bildirim sistemi bulunmaktadır.

Bildirim sistemi ile:

- Başarılı işlemler
- Hatalı işlemler
- Kullanıcı işlemleri
- API sonuçları

kullanıcıya Toast bildirimleri aracılığıyla aktarılmaktadır.

Bu yapı kullanıcı deneyimini iyileştirmek ve gerçekleştirilen işlemler hakkında anlık geri bildirim sağlamak amacıyla kullanılmaktadır.

---

# Sistem Mimarisi

TaskFlow frontend ve backend taraflarının birbirinden ayrıldığı web tabanlı bir mimariye sahiptir.

Temel mimari aşağıdaki şekilde özetlenebilir:

```text
                    ┌─────────────────────────┐
                    │        TaskFlow         │
                    │       Web Client        │
                    └────────────┬────────────┘
                                 │
                    ┌────────────▼────────────┐
                    │       Frontend          │
                    │ HTML / CSS / JavaScript │
                    └────────────┬────────────┘
                                 │
              ┌──────────────────┴──────────────────┐
              │                                     │
     ┌────────▼─────────┐                  ┌────────▼─────────┐
     │    Templates     │                  │   JavaScript     │
     │     Mustache     │                  │      Logic       │
     └────────┬─────────┘                  └────────┬─────────┘
              │                                     │
              └──────────────────┬──────────────────┘
                                 │
                            Fetch API
                                 │
                           REST Endpoints
                                 │
                    ┌────────────▼────────────┐
                    │        Node-RED         │
                    │    Backend / Flows      │
                    └────────────┬────────────┘
                                 │
                ┌────────────────┼────────────────┐
                │                │                │
       ┌────────▼───────┐ ┌──────▼────────┐ ┌────▼─────────┐
       │ Authentication │ │ Business Logic│ │ External API │
       │ Firebase/JWT   │ │   Node-RED    │ │   AI / Auth  │
       └────────────────┘ └──────┬─────────┘ └──────────────┘
                                 │
                        ┌────────▼────────┐
                        │    Database     │
                        └─────────────────┘
