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
📁 Proje Yönetimi

TaskFlow görevlerin yalnızca bağımsız kayıtlar olarak tutulması yerine
projeler altında organize edilmesini destekler.

Bir proje;

proje adı,
açıklama,
durum,
oluşturulma tarihi,
kullanıcı ilişkisi

gibi bilgiler ile yönetilebilir.

Proje ve görev ilişkisi sayesinde kullanıcı belirli bir proje altında
hangi görevlerin bulunduğunu görüntüleyebilir.

Örnek:

Web Application
│
├── Login sistemi
├── Dashboard
├── Task Management
├── Calendar
├── Analytics
└── AI Integration

Bu yapı özellikle büyük görev listelerinin daha düzenli yönetilmesini sağlar.

📅 Takvim Sistemi

TaskFlow içerisinde görevlerin tarih bazlı görüntülenebilmesi için
takvim modülü bulunmaktadır.

Takvim sistemi sayesinde:

görev tarihleri,
teslim tarihleri,
yaklaşan görevler,
günlük görev yoğunluğu

görsel olarak takip edilebilir.

Takvim tarafında FullCalendar tabanlı bir yapı kullanılmaktadır.

Temel veri akışı:

Database
   │
   ▼
REST API
   │
   ▼
Calendar JavaScript
   │
   ▼
FullCalendar
   │
   ▼
User Interface
📊 Analiz ve İstatistik

Analytics modülü kullanıcıya görev ve proje durumlarını daha anlaşılır
bir şekilde inceleme imkanı sağlar.

Analiz ekranında aşağıdaki bilgiler değerlendirilebilir:

toplam görev sayısı,
tamamlanan görevler,
devam eden görevler,
bekleyen görevler,
proje performansı,
görev durumları,
öncelik dağılımları,
görev yoğunluğu.

Bu yapı sayesinde kullanıcı yalnızca görevleri yönetmekle kalmaz,
çalışma sürecini de analiz edebilir.

🤖 AI Entegrasyonu

TaskFlow içerisinde kullanıcıya dinamik içerik ve öneriler sağlayabilmek
amacıyla AI entegrasyonu bulunmaktadır.

AI katmanı özellikle dashboard üzerinde kullanılmak üzere tasarlanmıştır.

Genel akış:

User
 │
 ▼
Dashboard
 │
 ▼
Frontend JavaScript
 │
 ▼
REST API
 │
 ▼
Node-RED
 │
 ▼
AI Service
 │
 ▼
Generated Content
 │
 ▼
Frontend

AI servisine erişim için API anahtarı doğrudan frontend içerisine
yerleştirilmemektedir.

API anahtarı environment variable üzerinden backend tarafında
kullanılmaktadır.

Bu yaklaşım API credential bilgilerinin client tarafında görünmesini
engellemek amacıyla uygulanmıştır.

🏗️ Sistem Mimarisi

TaskFlow genel olarak aşağıdaki katmanlardan oluşmaktadır:

                         ┌─────────────────────────┐
                         │        TASKFLOW         │
                         │      Web Application    │
                         └────────────┬────────────┘
                                      │
                         ┌────────────▼────────────┐
                         │       FRONTEND          │
                         │                         │
                         │ HTML / CSS / JS         │
                         │ Bootstrap               │
                         │ jQuery                  │
                         │ Mustache                │
                         │ SurveyJS                │
                         │ FullCalendar            │
                         │ DataTables              │
                         └────────────┬────────────┘
                                      │
                                  Fetch API
                                      │
                              REST API Requests
                                      │
                         ┌────────────▼────────────┐
                         │        NODE-RED         │
                         │     Backend Flows       │
                         │                         │
                         │ Authentication          │
                         │ Users                   │
                         │ Tasks                   │
                         │ Projects                │
                         │ Calendar                │
                         │ Analytics               │
                         │ AI                      │
                         └────────────┬────────────┘
                                      │
                    ┌─────────────────┼─────────────────┐
                    │                 │                 │
                    ▼                 ▼                 ▼
               Database          Firebase          AI Service

Bu mimarinin temel amacı frontend ile backend sorumluluklarını ayırmaktır.

🔄 İstek-Response Mimarisi

Frontend tarafından yapılan işlemler doğrudan database'e gönderilmez.

Bunun yerine REST API katmanı kullanılır.

Örneğin görevlerin alınması:

Browser
   │
   │ GET /api/tasks
   ▼
Node-RED HTTP In
   │
   ▼
Authentication
   │
   ▼
Database Query
   │
   ▼
Node-RED Response
   │
   ▼
Browser

Bu yapı frontend tarafındaki kodların database altyapısından bağımsız
çalışmasını sağlar.

🔴 Node-RED Mimarisi

TaskFlow backend mimarisinin merkezinde Node-RED bulunmaktadır.

Node-RED içerisindeki flow'lar API endpoint'lerini, veri işlemlerini,
authentication süreçlerini ve harici servis bağlantılarını yönetmektedir.

Genel yapı:

HTTP In
   │
   ▼
Function
   │
   ▼
Validation
   │
   ▼
Database / External API
   │
   ▼
Function
   │
   ▼
HTTP Response

Node-RED içerisinde farklı sorumluluklara sahip flow grupları
bulunmaktadır.

Örneğin:

Authentication
│
├── Register
├── Login
├── JWT
├── Google Authentication
└── Password Reset

Tasks
│
├── GET
├── POST
├── PUT
└── DELETE

Projects
│
├── GET
├── POST
└── DELETE

AI
│
└── AI Request

User
│
├── Profile
└── Settings
🔐 Kimlik Doğrulama Mimarisi

TaskFlow içerisinde authentication iki temel aşamada ele alınmaktadır.

                 ┌─────────────────┐
                 │      User       │
                 └────────┬────────┘
                          │
                    Login Request
                          │
              ┌───────────▼───────────┐
              │       Node-RED        │
              └───────────┬───────────┘
                          │
                Credential Validation
                          │
              ┌───────────▼───────────┐
              │      JWT Token        │
              └───────────┬───────────┘
                          │
                          ▼
                     Frontend

Google Authentication durumunda ise akış farklıdır:

User
 │
 ▼
Google Popup
 │
 ▼
Firebase Authentication
 │
 ▼
Firebase ID Token
 │
 ▼
Node-RED
 │
 ▼
Firebase Token Validation
 │
 ▼
User Lookup / Create
 │
 ▼
Application JWT
 │
 ▼
Frontend

Bu yapı sayesinde Firebase tarafından oluşturulan kimlik doğrulama
tokenı ile uygulamanın kendi session tokenı birbirinden ayrılmıştır.

🔑 JWT Yapısı

TaskFlow içerisinde uygulama oturumlarının yönetimi için JSON Web Token
kullanılmaktadır.

JWT oluşturulurken kullanıcıya ait temel bilgiler token içerisine
aktarılmaktadır.

Örneğin:

{
    id,
    email,
    name
}

Token oluşturulduktan sonra frontend tarafında uygulama oturumunun
devamlılığı için kullanılmaktadır.

JWT secret değeri kaynak kodda tutulmamaktadır.

JWT_SECRET

environment variable üzerinden backend'e aktarılmaktadır.

Bu sayede secret değerinin Git repository içerisine yazılması engellenir.

🔥 Firebase Authentication

Google Authentication işlemleri frontend tarafında Firebase SDK
kullanılarak başlatılır.

Temel işlem sırası:

Google Login
     │
     ▼
Firebase SDK
     │
     ▼
Google Authentication
     │
     ▼
Firebase User
     │
     ▼
Firebase ID Token
     │
     ▼
POST /api/firebaseauth
     │
     ▼
Node-RED
     │
     ▼
Firebase Token Verification
     │
     ▼
Application User
     │
     ▼
JWT

Frontend tarafında Firebase API configuration bilgileri kullanılırken,
server-side credential ve application secret değerleri frontend'e
aktarılmaz.

🌐 API Mimarisi

Frontend ve backend arasındaki iletişim REST API üzerinden
gerçekleştirilmektedir.

Örnek endpoint yapısı:

/api/login
/api/register
/api/firebaseauth

/api/tasks
/api/tasks/:id

/api/projects
/api/projects/:id

/api/profile
/api/settings

/api/calendar
/api/analytics

/api/ai

Frontend API çağrıları fetch() üzerinden gerçekleştirilmektedir.

Örneğin:

fetch("/api/tasks")
    .then(response => response.json())
    .then(data => {
        // task data
    });

Bu yapı frontend ile backend arasındaki iletişimin standart HTTP
protokolü üzerinden gerçekleştirilmesini sağlar.

📡 Veri Akışı

TaskFlow'da temel veri akışı aşağıdaki şekilde gerçekleşmektedir:

┌──────────────┐
│    Browser   │
└──────┬───────┘
       │
       │ Fetch
       ▼
┌──────────────┐
│   Node-RED   │
└──────┬───────┘
       │
       │ Query / Request
       ▼
┌──────────────┐
│   Database   │
└──────┬───────┘
       │
       │ Result
       ▼
┌──────────────┐
│   Node-RED   │
└──────┬───────┘
       │
       │ JSON Response
       ▼
┌──────────────┐
│   Frontend   │
└──────────────┘

JSON, frontend ve backend arasındaki temel veri formatı olarak
kullanılmaktadır.

🧩 Frontend Mimarisi

Frontend tarafında klasik statik HTML yaklaşımı yerine JavaScript
tabanlı dinamik sayfa yönetimi uygulanmaktadır.

Temel frontend katmanları:

HTML
 │
 ├── Layout
 ├── Components
 └── Templates
       │
       ▼
JavaScript
 │
 ├── API
 ├── Authentication
 ├── State
 ├── UI
 └── Event Handling
       │
       ▼
REST API

Frontend tarafında kullanılan başlıca teknolojiler:

HTML5
CSS3
JavaScript
Bootstrap
jQuery
Mustache
SurveyJS
FullCalendar
DataTables
Font Awesome
🧱 Mustache Template Sistemi

TaskFlow içerisinde bazı sayfaların dinamik olarak oluşturulması
amacıyla Mustache template yapısından yararlanılmaktadır.

Template yaklaşımının temel amacı HTML yapısı ile veri işlemlerinin
birbirinden ayrılmasıdır.

Örnek:

Data
 │
 ▼
Mustache Template
 │
 ▼
Rendered HTML
 │
 ▼
Browser

Bu yaklaşım özellikle tekrar kullanılan arayüz bileşenlerinde
kod tekrarını azaltmaktadır.

📝 SurveyJS Kullanımı

TaskFlow içerisindeki bazı form ve kullanıcı etkileşimleri
SurveyJS tabanlı olarak oluşturulmaktadır.

SurveyJS sayesinde form yapılarının;

soru tipleri,
validation,
seçenekler,
event işlemleri,
kullanıcı cevapları

gibi bileşenleri daha kontrollü şekilde yönetilebilmektedir.

📋 Görev Yönetimi Mimarisi

Görev oluşturma işlemi genel olarak:

User
 │
 ▼
Task Form
 │
 ▼
Frontend Validation
 │
 ▼
POST /api/tasks
 │
 ▼
Node-RED
 │
 ▼
Validation
 │
 ▼
Database
 │
 ▼
JSON Response
 │
 ▼
UI Update

şeklinde çalışmaktadır.

Görevlerin temel özellikleri:

Task
├── ID
├── Title
├── Description
├── Status
├── Priority
├── Project
├── Due Date
├── User
└── Created At
📁 Proje-Görev İlişkisi

TaskFlow'da görevler projelerle ilişkilendirilebilir.

Bu ilişki sayesinde:

Project
   │
   ├── Task 1
   ├── Task 2
   ├── Task 3
   └── Task 4

şeklinde proje bazlı görev yönetimi gerçekleştirilebilir.

Bu yaklaşım özellikle kullanıcıların büyük görev listelerini
proje bazında filtreleyebilmesini sağlar.

📊 Analytics Mimarisi

Analytics modülünde backend tarafından sağlanan veriler frontend
tarafında işlenerek grafiksel ve istatistiksel şekilde sunulmaktadır.

Örnek veri akışı:

Database
   │
   ▼
Node-RED
   │
   ▼
Analytics API
   │
   ▼
Frontend
   │
   ├── Task Statistics
   ├── Project Statistics
   ├── Status Distribution
   └── Priority Distribution

Bu sayede ham database verisi doğrudan kullanıcıya gösterilmek yerine
anlamlandırılmış istatistiklere dönüştürülmektedir.

🔔 Bildirim Sistemi

TaskFlow kullanıcı işlemlerinin sonucunu kullanıcıya bildirmek için
Toast tabanlı bildirimler kullanmaktadır.

Örneğin:

Success
  └── "Görev başarıyla oluşturuldu."

Warning
  └── "Görev tarihi yaklaşıyor."

Error
  └── "Görev oluşturulamadı."

Info
  └── "Yeni görev yüklendi."

Bu yapı kullanıcı deneyimini iyileştirmek ve işlemlerin sonucunu
anlık olarak göstermek amacıyla kullanılmaktadır.

🌍 Çoklu Dil Desteği

TaskFlow arayüz metinleri doğrudan JavaScript veya HTML içerisinde
sabit şekilde tutulmak yerine dil dosyaları üzerinden yönetilebilecek
şekilde tasarlanmıştır.

Örneğin:

lang/
├── tr.json
├── en.json
└── ...

Arayüz içerisinde:

<span data-i18n="dashboard.title">
    Dashboard
</span>

benzeri bir yapı kullanılabilmektedir.

Bu yaklaşım sayesinde uygulamanın farklı dillere genişletilmesi
kolaylaştırılmıştır.

📂 Proje Yapısı
TaskFlow/
│
├── www/
│   │
│   ├── css/
│   │   ├── theme.css
│   │   ├── login.css
│   │   ├── register.css
│   │   ├── dashboard.css
│   │   ├── tasks.css
│   │   ├── projects.css
│   │   ├── calendar.css
│   │   ├── analytics.css
│   │   └── ...
│   │
│   ├── js/
│   │   ├── api.js
│   │   ├── common.js
│   │   ├── index.js
│   │   ├── loginSurvey.js
│   │   ├── firebaseGoogle.js
│   │   ├── dashboard.js
│   │   ├── tasks.js
│   │   ├── projects.js
│   │   ├── calendar.js
│   │   ├── analytics.js
│   │   ├── settings.js
│   │   └── ...
│   │
│   ├── templates/
│   │   └── *.mustache
│   │
│   ├── lang/
│   │   └── *.json
│   │
│   ├── images/
│   │   └── ...
│   │
│   └── data/
│       └── ...
│
├── flows.json
├── settings.js
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
├── .env.example
└── README.md
⚙️ Environment Yapılandırması

Hassas bilgiler doğrudan kaynak kod içerisinde tutulmamalıdır.

TaskFlow içerisinde environment variable yaklaşımı kullanılmaktadır.

Örnek:

NODE_RED_CREDENTIAL_SECRET=your_secret
JWT_SECRET=your_jwt_secret
GROQ_API_KEY=your_groq_api_key
FIREBASE_API_KEY=your_firebase_api_key

Gerçek değerler:

.env

dosyasında tutulmaktadır.

.env dosyası Git repository'sine dahil edilmemektedir.

Repository içerisinde yalnızca:

.env.example

bulundurulmaktadır.

Bu dosya yalnızca gerekli environment variable isimlerini
tanımlamak amacıyla kullanılmaktadır.

🔒 Güvenlik

TaskFlow geliştirilirken hassas bilgilerin kaynak kod içerisine
sabit olarak yazılmaması hedeflenmiştir.

Aşağıdaki bilgiler repository içerisinde tutulmamalıdır:

JWT Secret
API Keys
Firebase Service Account
Node-RED Credentials
Environment Variables
Database Credentials

Bu nedenle .gitignore içerisinde hassas dosyalar hariç tutulmaktadır.

Örnek:

.env
.env.*
!.env.example

firebase-service-account.json
service-account.json

flows_cred.json

.config.nodes.json
.config.runtime.json
.config.users.json

node_modules/

*.backup
*.bak

Bu yaklaşım özellikle public Git repository kullanılan projelerde
credential sızıntısı riskini azaltmaktadır.

🛡️ Secret Yönetimi

JWT işlemlerinde:

const jwtSecret = env.get("JWT_SECRET");

şeklinde environment üzerinden secret okunmaktadır.

AI servisinde:

GROQ_API_KEY

environment variable olarak kullanılmaktadır.

Firebase server-side işlemlerinde:

FIREBASE_API_KEY

gibi environment değişkenlerinden yararlanılmaktadır.

Bu yapı sayesinde credential değerleri:

Source Code
    ❌

Git Repository
    ❌

Frontend
    ❌

Environment
    ✅

şeklinde ayrıştırılmaktadır.

🧪 Hata Yönetimi

API katmanında HTTP status kodları kullanılarak hata durumları
frontend'e aktarılmaktadır.

Örneğin:

200 OK

başarılı istek.

201 Created

başarılı oluşturma işlemi.

400 Bad Request

geçersiz kullanıcı isteği.

401 Unauthorized

authentication başarısız.

404 Not Found

kaynak bulunamadı.

500 Internal Server Error

backend tarafında beklenmeyen hata.

Frontend bu response değerlerini kontrol ederek kullanıcıya
uygun bildirim göstermektedir.

🛠️ Kullanılan Teknolojiler
Frontend
Teknoloji	Kullanım
HTML5	Sayfa yapısı
CSS3	Stil ve responsive tasarım
JavaScript	Dinamik uygulama mantığı
Bootstrap	UI framework
jQuery	DOM ve yardımcı işlemler
Mustache	Template rendering
SurveyJS	Dinamik form yapıları
FullCalendar	Takvim
DataTables	Tablo yönetimi
Font Awesome	İkon sistemi
Backend
Teknoloji	Kullanım
Node-RED	Backend flow mimarisi
JavaScript	Function node işlemleri
REST API	Frontend-backend iletişimi
Fetch API	HTTP istekleri
JSON	Veri formatı
Authentication
Teknoloji	Kullanım
Firebase Authentication	Google Authentication
Google Authentication	Harici kullanıcı doğrulama
JWT	Application session
AI
Teknoloji	Kullanım
Groq API	AI destekli içerik üretimi
Development
Teknoloji	Kullanım
Visual Studio Code	Geliştirme ortamı
Git	Versiyon kontrolü
GitHub	Repository
npm	Paket yönetimi
Node.js	JavaScript runtime
📦 Kurulum
1. Repository'yi klonlama
git clone <repository-url>

Proje klasörüne geçilir:

cd TaskFlow
2. Node.js bağımlılıklarını yükleme
npm install

Bu işlem package.json içerisinde tanımlanan bağımlılıkları
yükler.

3. Environment dosyasını oluşturma

.env.example dosyasının bir kopyası oluşturularak:

.env

haline getirilmelidir.

Örnek:

NODE_RED_CREDENTIAL_SECRET=
JWT_SECRET=
GROQ_API_KEY=
FIREBASE_API_KEY=

Gerçek secret değerleri ilgili alanlara girilmelidir.

▶️ Uygulamayı Çalıştırma

Bağımlılıklar yüklendikten ve environment değerleri tanımlandıktan
sonra Node-RED başlatılabilir.

Node-RED flow'ları:

flows.json

üzerinden yüklenmektedir.

Node-RED başlatıldıktan sonra uygulamanın HTTP endpoint'leri
aktif hale gelir.

Genel olarak geliştirme ortamında:

http://127.0.0.1:1880

üzerinden Node-RED yönetim arayüzüne erişilebilir.

🔄 Geliştirme Süreci

TaskFlow modüler bir geliştirme yaklaşımı ile oluşturulmuştur.

Frontend ve backend geliştirmeleri birbirinden ayrılmaktadır.

Frontend Change
      │
      ▼
www/
      │
      ▼
Browser Test
      │
      ▼
API Request
      │
      ▼
Node-RED
      │
      ▼
Backend Test

Backend tarafındaki değişikliklerde Node-RED flow'ları kontrol edilir.

Frontend tarafındaki değişikliklerde ise ilgili JavaScript,
template ve CSS dosyaları test edilir.

🖥️ Frontend Sayfaları

TaskFlow içerisinde temel olarak aşağıdaki kullanıcı ekranları
bulunmaktadır:

Login
 │
 ▼
Dashboard
 │
 ├── Tasks
 │
 ├── Projects
 │
 ├── Calendar
 │
 ├── Analytics
 │
 └── Settings

Bu yapı uygulamanın ana navigation sistemini oluşturmaktadır.

🏠 Dashboard

Dashboard kullanıcıya uygulamanın genel durumunu tek ekranda
göstermek amacıyla tasarlanmıştır.

Dashboard içerisinde:

görev sayıları,
aktif görevler,
tamamlanan görevler,
yaklaşan görevler,
AI destekli içerikler,
bildirimler

gibi bilgiler görüntülenebilmektedir.

Dashboard'ın amacı kullanıcının uygulamaya giriş yaptıktan sonra
çalışma durumunu hızlı şekilde değerlendirebilmesidir.

📋 Tasks

Tasks ekranı görevlerin merkezi olarak yönetildiği bölümdür.

Kullanıcı:

Create
Read
Update
Delete

işlemlerini gerçekleştirebilir.

Görevler durum ve öncelik gibi alanlara göre yönetilebilir.

📁 Projects

Projects ekranı görevlerin proje bazında organize edilmesini sağlar.

Proje oluşturulduktan sonra ilgili görevler proje ile
ilişkilendirilebilir.

Bu sayede:

Project A
 ├── Task A
 ├── Task B
 └── Task C

Project B
 ├── Task D
 └── Task E

şeklinde yapı oluşturulabilir.

📅 Calendar

Calendar ekranı görevleri tarih tabanlı olarak görüntüler.

Görevlerin:

başlangıç tarihi,
teslim tarihi,
yaklaşan tarihleri

takvim üzerinde takip edilebilir.

FullCalendar kullanımı sayesinde görevler kullanıcıya
görsel bir zaman çizelgesi şeklinde sunulmaktadır.

📈 Analytics

Analytics ekranı görev ve proje verilerinin analiz edilmesini sağlar.

Örnek analizler:

Task Completion Rate
Project Progress
Priority Distribution
Status Distribution

Bu ekran kullanıcıya yalnızca görev listesini değil,
çalışma performansının genel görünümünü sunmaktadır.

⚡ Modüler JavaScript Yapısı

Frontend JavaScript dosyaları farklı sorumluluklara ayrılmıştır.

Örneğin:

api.js
    │
    └── API iletişimi

common.js
    │
    └── Ortak fonksiyonlar

dashboard.js
    │
    └── Dashboard işlemleri

tasks.js
    │
    └── Görev işlemleri

projects.js
    │
    └── Proje işlemleri

calendar.js
    │
    └── Takvim işlemleri

analytics.js
    │
    └── Analiz işlemleri

Bu yapı tek bir JavaScript dosyasının gereğinden fazla büyümesini
engellemek ve bakım kolaylığı sağlamak amacıyla kullanılmaktadır.

🔌 API Katmanı

Frontend içerisinde API işlemlerinin merkezi olarak yönetilmesi
amacıyla ortak API fonksiyonları kullanılmaktadır.

Genel yaklaşım:

UI Component
     │
     ▼
JavaScript Function
     │
     ▼
API Layer
     │
     ▼
Fetch
     │
     ▼
Node-RED

Bu yapı sayesinde API endpoint değişikliklerinin tüm frontend
dosyalarına dağılması önlenmektedir.

🧠 AI Veri Akışı

AI işlemlerinde API anahtarının browser tarafına gönderilmemesi
önemlidir.

TaskFlow içerisindeki yaklaşım:

Browser
   │
   │ User Request
   ▼
Node-RED
   │
   │ GROQ_API_KEY
   ▼
AI Provider
   │
   │ Generated Response
   ▼
Node-RED
   │
   ▼
Browser

Böylece AI servis credential bilgisi frontend JavaScript kodunun
içerisinde bulunmaz.

🗃️ Veri Yönetimi

Uygulama veri erişimini REST API ve Node-RED flow'ları üzerinden
gerçekleştirmektedir.

Frontend database ile doğrudan iletişim kurmaz.

Bu yaklaşım:

güvenlik,
abstraction,
bakım kolaylığı,
backend kontrolü,
validation

açısından avantaj sağlamaktadır.

🔁 CRUD Mimarisi

TaskFlow görev ve proje işlemlerinde CRUD yaklaşımını kullanmaktadır.

CREATE
   │
   ▼
POST /api/...

READ
   │
   ▼
GET /api/...

UPDATE
   │
   ▼
PUT /api/...

DELETE
   │
   ▼
DELETE /api/...

Bu yapı REST API prensipleriyle uyumlu şekilde tasarlanmıştır.

🧩 Node-RED Function Node Yapısı

Node-RED içerisindeki Function node'lar backend logic'in
çalıştırıldığı alanlardır.

Örneğin JWT üretiminde:

const jwtSecret = env.get("JWT_SECRET");

const token = jwt.sign(
    {
        id: user._id,
        email: user.email,
        name: user.username
    },
    jwtSecret,
    {
        expiresIn: "7d"
    }
);

Burada secret değerinin function içerisine sabit olarak yazılması
yerine environment üzerinden alınması tercih edilmiştir.

🔐 Credential Ayrıştırması

Node-RED'in kendi credential sistemi ile uygulamanın environment
secret'ları birbirinden ayrılmaktadır.

Node-RED Runtime
      │
      ├── NODE_RED_CREDENTIAL_SECRET
      │
      └── Application Secrets
              │
              ├── JWT_SECRET
              ├── GROQ_API_KEY
              └── FIREBASE_API_KEY

Bu ayrım farklı deployment ortamlarında configuration yönetimini
kolaylaştırmaktadır.

🧪 Test ve Debug

Geliştirme sırasında Node-RED debug node'ları kullanılarak
flow içerisindeki mesajlar incelenebilmektedir.

Örneğin:

HTTP Request
     │
     ▼
Function
     │
     ▼
Debug
     │
     ▼
Response

Debug çıktıları özellikle:

authentication,
API request,
Firebase token,
JWT,
AI request,
database response

gibi işlemlerin kontrol edilmesinde kullanılmaktadır.

Production ortamına geçilirken gereksiz debug çıktılarının
azaltılması önerilmektedir.

📦 Git ve Versiyon Kontrolü

TaskFlow kaynak kodunun versiyon kontrolü Git ile sağlanmaktadır.

Repository içerisinde kaynak kodun yanında hassas dosyaların
bulunmaması için .gitignore kullanılmaktadır.

Özellikle:

.env
node_modules/
flows_cred.json
firebase-service-account.json
.config.*

gibi dosyalar repository dışında tutulmaktadır.

Bu yaklaşım source control sisteminin yalnızca proje için gerekli
kaynak kodunu taşımasını sağlar.

🚀 Deployment Hazırlığı

TaskFlow lokal geliştirme ortamından production ortamına
taşınabilecek şekilde yapılandırılmıştır.

Production ortamında aşağıdaki bileşenlerin ayrı şekilde
yapılandırılması önerilmektedir:

┌──────────────────────┐
│       Frontend       │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│      Reverse Proxy   │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│       Node-RED       │
└──────────┬───────────┘
           │
      ┌────┴─────┐
      ▼          ▼
 Database      AI API

Production ortamında environment değerleri sunucunun environment
yapısından sağlanmalıdır.

Secret değerlerinin Docker image içerisine veya Git repository'sine
yazılması önerilmez.

🐳 Docker İçin Uygunluk

Projenin Node.js ve Node-RED tabanlı yapısı container mimarisine
uygundur.

İlerleyen aşamada:

taskflow
│
├── frontend
│
├── node-red
│
└── database

şeklinde Docker Compose tabanlı bir deployment mimarisi
oluşturulabilir.

Environment değerleri:

.env

veya deployment platformunun secret/configuration sistemi üzerinden
sağlanabilir.

📈 Performans Yaklaşımı

TaskFlow geliştirilirken performans açısından aşağıdaki prensipler
dikkate alınmaktadır:

Gereksiz API isteklerinin azaltılması
Ortak JavaScript fonksiyonlarının kullanılması
Modüler frontend yapısı
Template kullanımının yaygınlaştırılması
Backend validation
Database sorgularının kontrollü yapılması
Gereksiz DOM işlemlerinin azaltılması
API response'larının yalnızca gerekli verileri içermesi
Static asset'lerin ayrı tutulması

Özellikle dashboard gibi birden fazla API çağrısı yapan ekranlarda
gereksiz tekrarların azaltılması uygulama performansını olumlu
etkilemektedir.

🧹 Kod Organizasyonu

Kod organizasyonunda temel hedefler:

Single Responsibility
        +
Modularity
        +
Reusability
        +
Maintainability

şeklindedir.

Frontend dosyalarının ekran bazında ayrılması ve Node-RED flow'larının
fonksiyonel sorumluluklara göre organize edilmesi bu yaklaşımın
parçalarıdır.

🔮 Gelecek Geliştirmeler

TaskFlow'un mevcut mimarisi ileride aşağıdaki özelliklerin
eklenmesine uygundur:

👥 Ekip Yönetimi
Takım oluşturma
Kullanıcı davetleri
Rol tabanlı yetkilendirme
Proje üyeleri
Takım bazlı görev yönetimi
🔔 Gelişmiş Bildirimler
Browser notifications
E-posta bildirimleri
Görev son tarihi hatırlatmaları
Proje bildirimleri
🤖 Gelişmiş AI
AI görev oluşturma
Otomatik görev önceliklendirme
Görev açıklaması oluşturma
Proje planlama
Günlük çalışma önerileri
Kullanıcı çalışma alışkanlıklarının analizi
📊 Gelişmiş Analytics
Kullanıcı performans raporları
Proje karşılaştırmaları
Zaman bazlı performans
Görev tamamlanma trendleri
🔐 Gelişmiş Güvenlik
Refresh token sistemi
Role-based authorization
Rate limiting
Request validation
Audit logging
Session management
☁️ Deployment
Docker Compose
Reverse Proxy
HTTPS
Production database
CI/CD pipeline
Environment-based deployment
🧭 Genel Sistem Akışı

TaskFlow'un uçtan uca çalışma modeli:

                         USER
                          │
                          ▼
                  ┌───────────────┐
                  │   Web Client  │
                  └───────┬───────┘
                          │
                    JavaScript
                          │
                    Fetch / REST
                          │
                          ▼
                  ┌───────────────┐
                  │    Node-RED   │
                  │    Backend    │
                  └───────┬───────┘
                          │
             ┌────────────┼────────────┐
             │            │            │
             ▼            ▼            ▼
        Authentication  Database       AI
             │            │            │
             │            │            │
             └────────────┼────────────┘
                          │
                          ▼
                  JSON Response
                          │
                          ▼
                  Frontend Update
                          │
                          ▼
                         USER
🏁 Sonuç

TaskFlow; görev yönetimini temel alan ancak bunun ötesinde kullanıcı
kimlik doğrulama, proje yönetimi, takvim, analiz, bildirim, çoklu dil
ve AI destekli özellikleri aynı platform üzerinde birleştiren
modüler bir web uygulamasıdır.

Projenin mimarisinde frontend ve backend sorumluluklarının ayrılması,
Node-RED tabanlı REST API yaklaşımının kullanılması ve environment
tabanlı secret yönetimi temel tasarım kararları arasında yer almaktadır.

Frontend tarafındaki JavaScript modülleri kullanıcı arayüzünü ve
etkileşimleri yönetirken Node-RED flow'ları backend işlemlerinin
kontrolünü üstlenmektedir.

Authentication katmanında Firebase ve Google Authentication ile
kullanıcı doğrulaması gerçekleştirilirken uygulama içerisindeki
oturum yönetimi JWT tabanlı olarak gerçekleştirilmektedir.

AI entegrasyonu ise backend üzerinden gerçekleştirilerek API
credential bilgilerinin frontend tarafına taşınması engellenmiştir.

Bu mimari TaskFlow'un yalnızca mevcut görev yönetimi ihtiyaçlarını
karşılamasını değil, aynı zamanda ilerleyen aşamalarda ekip yönetimi,
gelişmiş yetkilendirme, Docker tabanlı deployment, CI/CD ve daha
gelişmiş AI servisleri gibi özelliklerle genişletilebilmesini
sağlayacak şekilde tasarlanmıştır.

📌 TaskFlow
Planla.
Organize et.
Takip et.
Analiz et.
Geliştir.

TaskFlow — Görev ve proje yönetimini tek bir platformda birleştirir.
