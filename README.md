# 🚀 TaskFlow

<p align="center">
  <strong>Modern, modüler ve AI destekli görev & proje yönetim platformu</strong>
</p>

<p align="center">
  TaskFlow, kullanıcıların görevlerini, projelerini, takvimlerini ve çalışma
  süreçlerini tek bir platform üzerinden yönetebilmesini sağlayan,
  Node-RED tabanlı REST API mimarisine sahip web tabanlı bir task management uygulamasıdır.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/Backend-Node--RED-8F0000?style=for-the-badge&logo=nodered&logoColor=white">
  <img src="https://img.shields.io/badge/UI-Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white">
  <img src="https://img.shields.io/badge/Auth-Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black">
  <img src="https://img.shields.io/badge/AI-Groq-111111?style=for-the-badge">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Architecture-REST%20API-blue?style=flat-square">
  <img src="https://img.shields.io/badge/Template-Mustache-orange?style=flat-square">
  <img src="https://img.shields.io/badge/Database-NoSQL-green?style=flat-square">
  <img src="https://img.shields.io/badge/License-Educational-lightgrey?style=flat-square">
</p>

---

## 📌 İçindekiler

- [Proje Hakkında](#-proje-hakkında)
- [Temel Özellikler](#-temel-özellikler)
- [Sistem Mimarisi](#-sistem-mimarisi)
- [Node-RED Mimarisi](#-node-red-mimarisi)
- [Frontend Mimarisi](#-frontend-mimarisi)
- [Kimlik Doğrulama Mimarisi](#-kimlik-doğrulama-mimarisi)
- [JWT Yapısı](#-jwt-yapısı)
- [AI Entegrasyonu](#-ai-entegrasyonu)
- [API Mimarisi](#-api-mimarisi)
- [Veri Akışı](#-veri-akışı)
- [Proje Yapısı](#-proje-yapısı)
- [Kullanılan Teknolojiler](#-kullanılan-teknolojiler)
- [Environment Yapılandırması](#-environment-yapılandırması)
- [Güvenlik](#-güvenlik)
- [Kurulum](#-kurulum)
- [Çalıştırma](#-çalıştırma)
- [Geliştirme Süreci](#-geliştirme-süreci)
- [Frontend Sayfaları](#-frontend-sayfaları)
- [Görev Yönetimi](#-görev-yönetimi)
- [Proje Yönetimi](#-proje-yönetimi)
- [Takvim Sistemi](#-takvim-sistemi)
- [Analiz Sistemi](#-analiz-sistemi)
- [Bildirim Sistemi](#-bildirim-sistemi)
- [Çoklu Dil Desteği](#-çoklu-dil-desteği)
- [Dosya ve Flow Organizasyonu](#-dosya-ve-flow-organizasyonu)
- [Hata Yönetimi](#-hata-yönetimi)
- [Performans ve Bakım](#-performans-ve-bakım)
- [Deployment](#-deployment)
- [Gelecek Geliştirmeler](#-gelecek-geliştirmeler)
- [Sonuç](#-sonuç)

---

# 🎯 Proje Hakkında

**TaskFlow**, görev ve proje yönetimini tek bir platform altında birleştirmek
amacıyla geliştirilmiş web tabanlı bir task management uygulamasıdır.

Uygulama yalnızca temel bir To-Do List yaklaşımı yerine;

- kullanıcı yönetimi,
- görev yönetimi,
- proje yönetimi,
- takvim yönetimi,
- analiz ve istatistik,
- bildirimler,
- Google Authentication,
- JWT tabanlı uygulama oturumu,
- Firebase Authentication,
- AI destekli içerik üretimi,
- çoklu dil desteği,
- REST API iletişimi

gibi farklı modülleri bir araya getiren modüler bir yazılım mimarisi üzerine kurulmuştur.

TaskFlow'un temel amacı, kullanıcıların günlük görevlerini yalnızca listelemek
yerine bu görevleri projeler, tarihler, öncelikler ve durumlar ile ilişkilendirerek
daha sistematik şekilde yönetebilmesini sağlamaktır.

Uygulama mimarisi frontend ve backend katmanlarının birbirinden ayrılmasına
dayanmaktadır.

Frontend tarafında JavaScript tabanlı dinamik yapı kullanılırken backend
iş akışları Node-RED üzerinde oluşturulan flow'lar üzerinden yönetilmektedir.

Bu yapı sayesinde kullanıcı arayüzü ile backend servislerinin sorumlulukları
birbirinden ayrılmıştır.

---

# ✨ Temel Özellikler

## 🔐 Kullanıcı Yönetimi

TaskFlow içerisinde kullanıcı işlemleri ayrı bir authentication katmanı
üzerinden yönetilmektedir.

Desteklenen işlemler:

- Kullanıcı kayıt işlemi
- Kullanıcı giriş işlemi
- JWT tabanlı oturum yönetimi
- Google ile giriş
- Firebase Authentication
- Şifre sıfırlama
- Yeni şifre oluşturma
- Kullanıcı profil bilgileri
- Kullanıcı ayarları
- Kullanıcı oturum kontrolü
- Yetkilendirilmiş API istekleri

---

## 📋 Görev Yönetimi

TaskFlow'un ana modüllerinden biri görev yönetim sistemidir.

Kullanıcılar:

- yeni görev oluşturabilir,
- görev düzenleyebilir,
- görev silebilir,
- görev durumunu değiştirebilir,
- görev önceliği belirleyebilir,
- görevi projeye bağlayabilir,
- görev tarihlerini belirleyebilir,
- tamamlanan görevleri takip edebilir,
- aktif görevlerini görüntüleyebilir.

Görevler farklı ekranlar üzerinden takip edilebilir.

Örneğin:

```text
Dashboard
    │
    ├── Toplam görev
    ├── Aktif görev
    ├── Tamamlanan görev
    └── Bugünkü görevler
