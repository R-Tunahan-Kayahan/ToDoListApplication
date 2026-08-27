# 🚀 TaskFlow

> **Modern, modüler ve API tabanlı görev ve proje yönetim platformu**

TaskFlow; kullanıcıların görevlerini, projelerini, takvimlerini ve çalışma süreçlerini tek bir platform üzerinden yönetebilmesini sağlayan, **Node-RED tabanlı backend mimarisi**, **JavaScript tabanlı frontend yapısı**, **REST API iletişimi**, **Firebase Authentication**, **Google Authentication**, **Mustache template sistemi** ve **MongoDB tabanlı veri yönetimi** üzerine kurulmuş web tabanlı bir task management uygulamasıdır.

Uygulama yalnızca temel bir yapılacaklar listesi mantığında çalışmak yerine; görev yönetimi, proje yönetimi, takvim, analiz, bildirim, kullanıcı yönetimi, çoklu dil desteği ve AI destekli içerik üretimi gibi farklı modülleri tek bir uygulama mimarisi altında birleştirmeyi amaçlamaktadır.

TaskFlow'un temel tasarım yaklaşımı; frontend, backend, kimlik doğrulama, veri erişimi ve harici servislerin mümkün olduğunca birbirinden ayrılması ve her katmanın kendi sorumluluğunu yerine getirmesi üzerine kuruludur.

---

## 📌 İçindekiler

- [Proje Hakkında](#-proje-hakkında)
- [Temel Özellikler](#-temel-özellikler)
- [Sistem Mimarisi](#-sistem-mimarisi)
- [Uygulama Katmanları](#-uygulama-katmanları)
- [Node-RED Mimarisi](#-node-red-mimarisi)
- [Frontend Mimarisi](#-frontend-mimarisi)
- [Kimlik Doğrulama Mimarisi](#-kimlik-doğrulama-mimarisi)
- [JWT Yapısı](#-jwt-yapısı)
- [Firebase ve Google Authentication](#-firebase-ve-google-authentication)
- [Environment Variables](#-environment-variables)
- [REST API Mimarisi](#-rest-api-mimarisi)
- [Görev Yönetimi](#-görev-yönetimi)
- [Proje Yönetimi](#-proje-yönetimi)
- [Takvim Sistemi](#-takvim-sistemi)
- [Analiz ve İstatistikler](#-analiz-ve-istatistikler)
- [AI Destekli İçerikler](#-ai-destekli-içerikler)
- [Bildirim Sistemi](#-bildirim-sistemi)
- [Çoklu Dil Sistemi](#-çoklu-dil-sistemi)
- [Mustache Template Sistemi](#-mustache-template-sistemi)
- [SurveyJS](#-surveyjs)
- [DataTables](#-datatables)
- [Veri Akışı](#-veri-akışı)
- [Proje Dosya Yapısı](#-proje-dosya-yapısı)
- [Kullanılan Teknolojiler](#-kullanılan-teknolojiler)
- [Güvenlik](#-güvenlik)
- [Environment Yapılandırması](#-environment-yapılandırması)
- [Kurulum](#-kurulum)
- [Çalıştırma](#-çalıştırma)
- [Geliştirme Süreci](#-geliştirme-süreci)
- [Git ve Repository Yapısı](#-git-ve-repository-yapısı)
- [Üretim Ortamına Hazırlık](#-üretim-ortamına-hazırlık)
- [Gelecekteki Geliştirmeler](#-gelecekteki-geliştirmeler)
- [Projenin Amacı](#-projenin-amacı)

---

# 🧠 Proje Hakkında

TaskFlow, görev ve proje süreçlerinin merkezi bir platform üzerinden yönetilmesini sağlamak amacıyla geliştirilmiştir.

Klasik bir To-Do uygulamasından farklı olarak sistem içerisinde:

- kullanıcı yönetimi,
- klasik kullanıcı girişi,
- Google ile giriş,
- Firebase Authentication,
- JWT tabanlı uygulama oturumu,
- görev CRUD işlemleri,
- proje CRUD işlemleri,
- görev-proje ilişkisi,
- takvim yönetimi,
- analiz ekranları,
- grafiksel istatistikler,
- bildirimler,
- çoklu dil desteği,
- AI destekli içerikler,
- dinamik frontend,
- Mustache template sistemi,
- SurveyJS tabanlı formlar,
- DataTables tabanlı veri tabloları

gibi farklı modüller bulunmaktadır.

Sistem, frontend tarafında kullanıcı etkileşimlerini yönetirken backend tarafındaki işlemler Node-RED flow'ları üzerinden gerçekleştirilir.

Bu sayede uygulamanın frontend tarafı ile backend tarafı birbirinden ayrılmıştır.

---

# 🚀 Temel Özellikler

## 🔐 Kullanıcı Yönetimi

TaskFlow kullanıcıların uygulama içerisinde kendi hesaplarını oluşturmasına ve yönetmesine olanak sağlar.

Desteklenen temel işlemler:

- Kullanıcı kayıt işlemi
- Kullanıcı giriş işlemi
- Kullanıcı çıkış işlemi
- JWT oluşturma
- JWT doğrulama
- Google ile giriş
- Firebase Authentication
- Şifre sıfırlama
- Yeni şifre oluşturma
- Profil görüntüleme
- Profil bilgilerini güncelleme
- Kullanıcı ayarları

Kullanıcı doğrulaması başarılı olduktan sonra frontend tarafında uygulama oturumu için JWT kullanılmaktadır.

---

# 📋 Görev Yönetimi

TaskFlow'un temel modüllerinden biri görev yönetim sistemidir.

Kullanıcılar görevleri oluşturabilir, düzenleyebilir, silebilir ve durumlarını değiştirebilir.

Görev sistemi içerisinde:

- Görev oluşturma
- Görev düzenleme
- Görev silme
- Görev tamamlama
- Görev durumunu değiştirme
- Öncelik belirleme
- Son teslim tarihi belirleme
- Görevi projeye bağlama
- Görevleri filtreleme
- Görevleri listeleme
- Görevlerin tamamlanma durumlarını takip etme

gibi işlemler gerçekleştirilebilir.

Görev verileri frontend tarafından REST API üzerinden alınır ve Node-RED backend flow'ları tarafından işlenir.

---

# 📁 Proje Yönetimi

TaskFlow içerisinde görevlerin daha büyük çalışma grupları altında organize edilebilmesi için proje sistemi bulunmaktadır.

Kullanıcılar:

- Proje oluşturabilir
- Proje silebilir
- Projeleri görüntüleyebilir
- Projelere görev atayabilir
- Proje içerisindeki görevleri görüntüleyebilir
- Proje durumlarını takip edebilir

Bu yapı sayesinde görevler tek başına tutulmak yerine proje bazında gruplanabilir.

Örneğin:

```text
Proje
│
├── Görev 1
├── Görev 2
├── Görev 3
└── Görev 4
