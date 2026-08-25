# TaskFlow

<p align="center">
  <strong>Modern Web Tabanlı Görev ve Proje Yönetim Platformu</strong>
</p>

<p align="center">
  Görevlerin, projelerin, takvim planlamasının, kullanıcı işlemlerinin ve analiz süreçlerinin tek bir platform üzerinden yönetilmesini sağlayan modüler task management uygulaması.
</p>

---

## İçindekiler

- [Proje Hakkında](#proje-hakkında)
- [Temel Özellikler](#temel-özellikler)
- [Sistem Mimarisi](#sistem-mimarisi)
- [Uygulama Mimarisi](#uygulama-mimarisi)
- [Frontend Mimarisi](#frontend-mimarisi)
- [Backend Mimarisi](#backend-mimarisi)
- [Node-RED Akış Mimarisi](#node-red-akış-mimarisi)
- [Kimlik Doğrulama Mimarisi](#kimlik-doğrulama-mimarisi)
- [JWT Yapısı](#jwt-yapısı)
- [Firebase ve Google Authentication](#firebase-ve-google-authentication)
- [AI Entegrasyonu](#ai-entegrasyonu)
- [Veri Akışı](#veri-akışı)
- [REST API Yapısı](#rest-api-yapısı)
- [Görev Yönetimi](#görev-yönetimi)
- [Proje Yönetimi](#proje-yönetimi)
- [Takvim Sistemi](#takvim-sistemi)
- [Analiz ve İstatistikler](#analiz-ve-istatistikler)
- [Çoklu Dil Desteği](#çoklu-dil-desteği)
- [Bildirim Sistemi](#bildirim-sistemi)
- [SurveyJS Kullanımı](#surveyjs-kullanımı)
- [Mustache Template Yapısı](#mustache-template-yapısı)
- [Dosya ve Klasör Yapısı](#dosya-ve-klasör-yapısı)
- [Environment Variable Yönetimi](#environment-variable-yönetimi)
- [Güvenlik](#güvenlik)
- [Kurulum](#kurulum)
- [Çalıştırma](#çalıştırma)
- [Geliştirme Süreci](#geliştirme-süreci)
- [Git ve Repository Yönetimi](#git-ve-repository-yönetimi)
- [Teknoloji Yığını](#teknoloji-yığını)
- [Gelecek Geliştirmeler](#gelecek-geliştirmeler)
- [Projenin Amacı](#projenin-amacı)
- [Lisans](#lisans)

---

# Proje Hakkında

**TaskFlow**, kullanıcıların günlük görevlerini, projelerini, çalışma planlarını ve ilerleme durumlarını merkezi bir sistem üzerinden yönetebilmesini amacıyla geliştirilmiş web tabanlı bir görev ve proje yönetim platformudur.

Uygulama yalnızca temel bir To-Do List mantığı üzerine kurulmamıştır. Görev yönetiminin yanında;

- kullanıcı yönetimi,
- kimlik doğrulama,
- Google ile giriş,
- JWT tabanlı oturum yönetimi,
- proje yönetimi,
- görev-proje ilişkisi,
- takvim yönetimi,
- analiz ve istatistikler,
- AI destekli içerik üretimi,
- çoklu dil desteği,
- bildirim yönetimi,
- dinamik frontend yapısı,
- REST API iletişimi

gibi farklı yazılım bileşenlerini tek bir sistem içerisinde birleştiren modüler bir yapı hedeflenmiştir.

TaskFlow'un temel mimari yaklaşımı, frontend ile backend işlemlerinin birbirinden ayrılmasıdır.

Frontend tarafındaki kullanıcı etkileşimleri JavaScript tabanlı modüller aracılığıyla yönetilirken, backend tarafındaki API işlemleri Node-RED flow yapıları üzerinden gerçekleştirilmektedir.

Bu yapı sayesinde uygulamanın kullanıcı arayüzü ile backend iş mantığının birbirinden bağımsız olarak geliştirilebilmesi amaçlanmıştır.

---

# Temel Özellikler

## Kullanıcı Yönetimi

TaskFlow kullanıcı işlemleri için kapsamlı bir authentication yapısı kullanmaktadır.

Desteklenen temel işlemler:

- Kullanıcı kayıt işlemi
- Kullanıcı giriş işlemi
- Kullanıcı çıkış işlemi
- Google ile giriş
- Firebase Authentication
- JWT oluşturma
- JWT doğrulama
- Şifre sıfırlama
- Yeni şifre oluşturma
- Profil bilgilerini görüntüleme
- Profil bilgilerinin güncellenmesi
- Kullanıcı ayarlarının yönetilmesi

Authentication katmanı frontend, Firebase ve Node-RED backend arasında çalışan bir veri akışına sahiptir.

---

# Görev Yönetimi

TaskFlow'un temel modüllerinden biri görev yönetim sistemidir.

Kullanıcılar:

- görev oluşturabilir,
- görevleri düzenleyebilir,
- görevleri silebilir,
- görev durumlarını değiştirebilir,
- görev önceliği belirleyebilir,
- görevleri projelerle ilişkilendirebilir,
- görevlerin tamamlanma durumlarını takip edebilir,
- görev tarihlerini belirleyebilir.

Görevler backend API üzerinden alınmakta ve frontend üzerinde dinamik olarak oluşturulmaktadır.

Görev verilerinin frontend üzerinde doğrudan statik olarak tutulması yerine REST API üzerinden alınması sayesinde uygulamanın veri yapısının dinamik olması sağlanmıştır.

---

# Proje Yönetimi

TaskFlow içerisinde görevler bağımsız olarak yönetilebildiği gibi projeler altında da gruplanabilir.

Proje sistemi üzerinden:

- proje oluşturma,
- proje silme,
- projeye görev ekleme,
- proje görevlerini görüntüleme,
- proje bazlı görev takibi,
- proje durumlarını görüntüleme

işlemleri gerçekleştirilebilir.

Bu yapı görevlerin yalnızca bireysel olarak değil, daha büyük çalışma grupları içerisinde organize edilmesini sağlar.

---

# Takvim Sistemi

TaskFlow içerisinde görevlerin tarih bazlı olarak takip edilebilmesi için takvim modülü bulunmaktadır.

Takvim ekranında görevler:

- başlangıç tarihi,
- teslim tarihi,
- görev durumu,
- görev bilgileri

üzerinden görüntülenebilir.

Takvim modülünde **FullCalendar** kullanılarak kullanıcıların görevlerini zaman ekseni üzerinde takip edebilmesi amaçlanmıştır.

Bu yapı sayesinde görev listesi ile takvim görünümü arasında veri bağlantısı oluşturulmaktadır.

---

# Analiz ve İstatistikler

TaskFlow yalnızca görev oluşturma ve takip etme işlemlerine odaklanmamaktadır.

Analiz ekranı üzerinden görev ve proje verileri çeşitli metrikler üzerinden incelenebilir.

Analiz kapsamında:

- toplam görev sayısı,
- tamamlanan görevler,
- devam eden görevler,
- bekleyen görevler,
- proje dağılımları,
- görev öncelikleri,
- görev durumları,
- proje performansı

gibi veriler görselleştirilebilir.

Bu bölümün temel amacı kullanıcıya yalnızca görev listesini göstermek yerine çalışma performansı hakkında özet bilgi sağlamaktır.

---

# AI Destekli İçerikler

TaskFlow içerisinde AI destekli içerik üretimi için bir AI katmanı bulunmaktadır.

AI sistemi dashboard üzerinde kullanıcıya dinamik içerikler ve öneriler sunmak amacıyla kullanılmaktadır.

Bu yapı kullanıcı tarafından oluşturulan görev verilerini temel alarak:

- görev odaklı öneriler,
- dinamik içerikler,
- çalışma önerileri,
- görevlerle ilişkili AI çıktıları

oluşturulabilecek şekilde tasarlanmıştır.

AI servisinin backend üzerinden yönetilmesi sayesinde API anahtarlarının frontend kaynak koduna doğrudan eklenmesinin önüne geçilmesi hedeflenmiştir.

AI API erişim bilgileri environment variable üzerinden yönetilmektedir.

---

# Sistem Mimarisi

TaskFlow temel olarak üç ana katmandan oluşmaktadır:

```text
┌─────────────────────────────────────────────┐
│                  TaskFlow                   │
│                 Web Client                  │
└──────────────────────┬──────────────────────┘
                       │
                       │ HTTP / Fetch API
                       ▼
┌─────────────────────────────────────────────┐
│                 Frontend                    │
│                                             │
│ HTML / CSS / JavaScript                    │
│ Bootstrap / jQuery                         │
│ Mustache / SurveyJS                        │
│ FullCalendar / DataTables                  │
└──────────────────────┬──────────────────────┘
                       │
                       │ REST API
                       ▼
┌─────────────────────────────────────────────┐
│                 Node-RED                    │
│                                             │
│ HTTP In                                     │
│ Function                                    │
│ Change                                      │
│ Switch                                      │
│ HTTP Request                                │
│ Database Operations                         │
│ HTTP Response                               │
└──────────────────────┬──────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────┐
│                  Database                   │
│                                             │
│ User Data                                   │
│ Task Data                                   │
│ Project Data                                │
│ Authentication Data                         │
└─────────────────────────────────────────────┘
