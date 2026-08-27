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

şeklinde hiyerarşik bir çalışma yapısı oluşturulabilir.

📅 Takvim Sistemi

TaskFlow görevlerin tarih bazlı olarak görüntülenebilmesi için takvim modülüne sahiptir.

Takvim ekranında görevlerin:

başlangıç tarihleri,
son teslim tarihleri,
görev durumları,
zaman bilgileri

görüntülenebilir.

Takvim tarafında FullCalendar kullanılmaktadır.

Takvim sistemi görev verilerini backend API üzerinden alarak frontend üzerinde dinamik olarak görüntüler.

Temel veri akışı:

Database
    ↓
Node-RED
    ↓
REST API
    ↓
JavaScript
    ↓
FullCalendar
    ↓
Kullanıcı
📊 Analiz ve İstatistikler

TaskFlow içerisinde kullanıcıların görev ve proje performanslarını inceleyebileceği analiz ekranı bulunmaktadır.

Analiz modülü üzerinden:

Toplam görev sayısı
Tamamlanan görevler
Devam eden görevler
Bekleyen görevler
Öncelik dağılımları
Proje performansı
Görev durumları
Görev yoğunluğu

gibi bilgiler analiz edilebilir.

Bu yapı sayesinde uygulama yalnızca görevlerin saklandığı bir sistem olmaktan çıkarak kullanıcıya çalışma süreci hakkında bilgi sağlayan bir platform haline gelir.

🤖 AI Destekli İçerikler

TaskFlow içerisinde AI destekli içerik üretimi için harici bir yapay zeka servisi kullanılmaktadır.

AI sistemi özellikle dashboard tarafında kullanıcıya dinamik içerikler ve öneriler üretmek amacıyla kullanılmaktadır.

AI servisinin backend tarafındaki API anahtarı environment variable üzerinden yönetilir.

Temel akış:

Kullanıcı
    ↓
Dashboard
    ↓
Frontend JavaScript
    ↓
Node-RED API
    ↓
AI Service
    ↓
AI Response
    ↓
Dashboard

API anahtarı frontend içerisinde tutulmaz.

Bu yaklaşım sayesinde AI servisinin erişim anahtarı browser tarafına gönderilmeden backend üzerinden kullanılabilir.

🔔 Bildirim Sistemi

TaskFlow kullanıcı işlemleri sırasında kullanıcıya görsel geri bildirim sağlamak için bildirim sistemi kullanmaktadır.

Bildirim sistemi içerisinde:

başarılı işlemler,
hatalı işlemler,
görev işlemleri,
kullanıcı işlemleri,
API hataları

kullanıcıya bildirim olarak gösterilebilir.

Frontend tarafında Toast tabanlı bildirim yapısı kullanılmaktadır.

Örneğin:

Görev başarıyla oluşturuldu.

veya:

İşlem gerçekleştirilemedi.

gibi mesajlar kullanıcıya aktarılır.

🌍 Çoklu Dil Desteği

TaskFlow arayüz metinlerinin doğrudan HTML içerisinde sabitlenmesi yerine dil dosyaları üzerinden yönetilebilmesine uygun bir yapı kullanmaktadır.

Frontend içerisinde:

<span data-i18n="sidebar.dashboard">
    Kontrol Paneli
</span>

gibi yapılar kullanılmaktadır.

Bu yaklaşım sayesinde uygulamanın farklı dillere adapte edilmesi kolaylaştırılmıştır.

Dil sistemi:

Language Files
      ↓
JavaScript
      ↓
data-i18n
      ↓
HTML

akışıyla çalışır.

🏗️ Sistem Mimarisi

TaskFlow genel olarak aşağıdaki katmanlardan oluşmaktadır:

                         ┌──────────────────────┐
                         │       TASKFLOW       │
                         │      WEB CLIENT      │
                         └──────────┬───────────┘
                                    │
                   ┌────────────────┴────────────────┐
                   │                                 │
          ┌────────▼─────────┐             ┌────────▼─────────┐
          │    JavaScript    │             │     Mustache     │
          │     Frontend     │             │    Templates     │
          └────────┬─────────┘             └────────┬─────────┘
                   │                                 │
                   └────────────────┬────────────────┘
                                    │
                              Fetch / REST API
                                    │
                         ┌──────────▼──────────┐
                         │      Node-RED       │
                         │   Backend / Flows   │
                         └──────────┬──────────┘
                                    │
                ┌───────────────────┼───────────────────┐
                │                   │                   │
        ┌───────▼───────┐   ┌──────▼──────┐   ┌──────▼──────┐
        │   Database     │   │  Firebase   │   │ AI Service  │
        │     Data       │   │    Auth     │   │             │
        └────────────────┘   └─────────────┘   └─────────────┘

Bu mimaride frontend ile backend doğrudan birbirine bağımlı bir yapı yerine API üzerinden haberleşmektedir.

🧩 Uygulama Katmanları

TaskFlow mimarisi temel olarak aşağıdaki katmanlara ayrılabilir:

1. Presentation Layer

Kullanıcının doğrudan etkileşim kurduğu katmandır.

İçerisinde:

HTML
CSS
Bootstrap
JavaScript
Font Awesome
DataTables
FullCalendar
SurveyJS

gibi teknolojiler bulunur.

2. Application Layer

Frontend ile backend arasındaki iletişim burada gerçekleşir.

Özellikle:

fetch()

kullanılarak REST API çağrıları gerçekleştirilir.

3. Backend Layer

Backend işlemleri Node-RED tarafından yönetilir.

Node-RED içerisindeki flow'lar:

HTTP endpoint
Function
Switch
Change
HTTP Request
Database
Response

gibi node'lar üzerinden oluşturulur.

4. Data Layer

Uygulamanın kalıcı verilerinin tutulduğu katmandır.

Görev, proje ve kullanıcı verileri backend üzerinden veri kaynağına erişilerek yönetilir.

🔧 Node-RED Mimarisi

TaskFlow'un backend mimarisinin merkezinde Node-RED bulunmaktadır.

Node-RED içerisinde farklı işlemler birbirine bağlı flow'lar şeklinde organize edilmiştir.

Örnek bir API akışı:

HTTP IN
   ↓
Authentication
   ↓
Function
   ↓
Database
   ↓
Data Processing
   ↓
HTTP RESPONSE

Örneğin görev listeleme işlemi:

GET /api/tasks
      ↓
HTTP IN
      ↓
JWT Kontrolü
      ↓
Kullanıcı ID
      ↓
Database Query
      ↓
Task Data
      ↓
HTTP RESPONSE

şeklinde çalışabilir.

🔐 Kimlik Doğrulama Mimarisi

TaskFlow içerisinde birden fazla authentication mekanizması bulunmaktadır.

Bunlar:

Local Authentication
        +
Firebase Authentication
        +
Google Authentication
        ↓
Application Authentication
        ↓
JWT

şeklinde birleştirilmektedir.

Kullanıcı başarılı şekilde doğrulandığında backend tarafından uygulama içerisinde kullanılacak JWT oluşturulur.

Frontend bu tokenı API isteklerinde kullanarak kimliği doğrulanmış işlemler gerçekleştirebilir.

🎫 JWT Yapısı

JWT oluşturma işlemi Node-RED Function node'ları içerisinde gerçekleştirilmektedir.

JWT secret doğrudan flow içerisine yazılmak yerine:

const SECRET_KEY = env.get("JWT_SECRET");

şeklinde environment variable üzerinden alınmaktadır.

Token içerisinde temel kullanıcı bilgileri bulunabilir:

{
    id,
    name,
    email
}

Token belirli bir süre için geçerlidir.

Örneğin:

expiresIn: "7d"

veya ilgili authentication flow'una göre:

expiresIn: "24h"

şeklinde süre tanımlanabilir.

Bu yapı sayesinde kullanıcı oturumu backend tarafından doğrulanabilir.

🔑 Environment Variable Yapısı

TaskFlow içerisinde hassas bilgilerin kaynak koduna doğrudan yazılmaması için environment variable yaklaşımı kullanılmaktadır.

Örneğin:

JWT_SECRET=...
GROQ_API_KEY=...
FIREBASE_API_KEY=...
NODE_RED_CREDENTIAL_SECRET=...

Uygulama içerisinde bu değerler:

env.get("JWT_SECRET")

gibi yöntemlerle alınmaktadır.

Bu yaklaşım özellikle:

JWT Secret
AI API Key
Firebase API Key
Node-RED credential secret

gibi yapılandırmaların source code içerisine sabit olarak yazılmasını engeller.

🔥 Firebase ve Google Authentication

Google ile giriş sistemi Firebase Authentication üzerinden gerçekleştirilmektedir.

Frontend tarafında Firebase SDK kullanılarak Google authentication başlatılır.

Temel işlem akışı:

Kullanıcı
   ↓
Google Login
   ↓
Firebase Authentication
   ↓
Firebase User
   ↓
Firebase ID Token
   ↓
POST /api/firebaseauth
   ↓
Node-RED
   ↓
Firebase Token Validation
   ↓
User Lookup
   ↓
JWT
   ↓
Frontend

Frontend tarafında Firebase ID Token alınır:

const firebaseToken = await firebaseUser.getIdToken();

Daha sonra backend'e gönderilir:

fetch("/api/firebaseauth", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        credential: firebaseToken
    })
});

Backend Firebase tokenı doğrular ve uygulama kullanıcı hesabıyla ilişkilendirir.

Başarılı authentication sonucunda TaskFlow kendi JWT tokenını üretir.

Bu nedenle Firebase tokenı ile TaskFlow JWT'si farklı amaçlara sahiptir.

Firebase ID Token
        ↓
Firebase Authentication doğrulaması

TaskFlow JWT
        ↓
TaskFlow API authentication
🌐 REST API Mimarisi

Frontend ile Node-RED arasındaki iletişim REST API üzerinden gerçekleştirilir.

Örnek:

GET /api/tasks

Görev oluşturma:

POST /api/tasks

Görev güncelleme:

PUT /api/tasks/:id

Görev silme:

DELETE /api/tasks/:id

Kullanıcı işlemleri ve diğer modüller için de benzer API endpoint yapısı kullanılmaktadır.

Frontend API çağrılarını Fetch API üzerinden gerçekleştirmektedir.

Örnek:

const response = await fetch("/api/tasks");
const data = await response.json();
🔄 Veri Akışı

TaskFlow içerisindeki standart bir veri akışı şu şekildedir:

USER
 │
 ▼
HTML
 │
 ▼
JavaScript
 │
 ▼
Fetch API
 │
 ▼
Node-RED HTTP IN
 │
 ▼
Authentication
 │
 ▼
Function Node
 │
 ▼
Database
 │
 ▼
Function / Processing
 │
 ▼
HTTP RESPONSE
 │
 ▼
Fetch Response
 │
 ▼
JavaScript
 │
 ▼
DOM
 │
 ▼
USER

Bu yapı frontend ile backend arasında net bir sorumluluk ayrımı oluşturur.

📂 Proje Dosya Yapısı

Projenin temel yapısı aşağıdaki gibidir:

TaskFlow/
│
├── www/
│   │
│   ├── css/
│   │   ├── login.css
│   │   ├── register.css
│   │   ├── calendar.css
│   │   ├── dashboard.css
│   │   ├── tasks.css
│   │   ├── projects.css
│   │   ├── analytics.css
│   │   └── theme.css
│   │
│   ├── js/
│   │   ├── api.js
│   │   ├── common.js
│   │   ├── index.js
│   │   ├── dashboard.js
│   │   ├── tasks.js
│   │   ├── projects.js
│   │   ├── analytics.js
│   │   ├── calendar.js
│   │   ├── loginSurvey.js
│   │   ├── firebaseGoogle.js
│   │   └── ...
│   │
│   ├── templates/
│   │   └── *.mustache
│   │
│   ├── lang/
│   │   └── ...
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
🎨 Frontend Mimarisi

Frontend tarafı vanilla JavaScript ve yardımcı frontend kütüphaneleri üzerine kuruludur.

Temel olarak:

HTML
 +
CSS
 +
JavaScript
 +
Bootstrap
 +
jQuery
 +
Mustache
 +
SurveyJS
 +
FullCalendar
 +
DataTables

kullanılmaktadır.

JavaScript dosyaları modüllere ayrılarak her ekranın kendi işlevlerinin ayrı şekilde yönetilmesi amaçlanmıştır.

Örneğin:

dashboard.js

dashboard işlemlerini,

tasks.js

görev ekranını,

projects.js

proje ekranını,

calendar.js

takvim ekranını,

analytics.js

analiz ekranını yönetmektedir.

Bu yaklaşım JavaScript kodunun tek bir dosya içerisinde büyümesini engeller.

🧱 Mustache Template Sistemi

TaskFlow içerisinde dinamik HTML içeriklerinin oluşturulması için Mustache template yapısından yararlanılmaktadır.

Template mantığı:

Backend / Template
        ↓
Mustache
        ↓
HTML
        ↓
Browser

şeklinde çalışmaktadır.

Template dosyalarının ayrı tutulması sayesinde HTML yapısı ile JavaScript logic birbirinden ayrılabilir.

Bu özellikle tekrar kullanılan UI bileşenlerinin yönetimini kolaylaştırır.

📝 SurveyJS

Kullanıcı girişleri ve form tabanlı ekranlarda SurveyJS kullanılmaktadır.

SurveyJS sayesinde form yapıları JavaScript üzerinden tanımlanabilir ve dinamik olarak oluşturulabilir.

Örneğin:

Survey
│
├── Input
├── Password
├── Email
├── Button
└── Validation

gibi bileşenlerden oluşan formlar oluşturulabilir.

TaskFlow içerisinde özellikle login ve kullanıcı işlemlerinde SurveyJS tabanlı yapı kullanılmıştır.

📊 DataTables

Görev ve benzeri veri listelerinin daha kullanılabilir hale getirilmesi için DataTables kullanılmaktadır.

DataTables ile:

sıralama,
arama,
sayfalama,
tablo yönetimi

gibi işlemler gerçekleştirilebilir.

Bu yapı özellikle fazla sayıda görev bulunduğunda kullanıcı deneyimini iyileştirir.

📅 FullCalendar

Takvim ekranında FullCalendar kullanılmaktadır.

Backend'den alınan görev verileri frontend tarafından FullCalendar formatına dönüştürülerek takvim üzerinde gösterilir.

Temel akış:

API
 ↓
JSON
 ↓
JavaScript
 ↓
Calendar Event
 ↓
FullCalendar
🎨 UI ve Stil Mimarisi

Arayüzün temel stil yapısında Bootstrap kullanılmaktadır.

Bunun yanında TaskFlow'a özel CSS dosyaları ile uygulamanın görsel bütünlüğü sağlanmaktadır.

Genel yapı:

Bootstrap
    +
Custom CSS
    +
Font Awesome
    +
Page Specific CSS

şeklindedir.

Örneğin:

theme.css

genel tema yapısını,

tasks.css

görev ekranına özel stilleri,

calendar.css

takvim ekranına özel stilleri yönetebilir.

🗃️ Veri Yönetimi

TaskFlow backend tarafında veri erişimini REST API üzerinden gerçekleştirir.

Frontend doğrudan veri kaynağıyla iletişim kurmak yerine Node-RED backend katmanı üzerinden işlem yapar.

Bu mimari:

Frontend
   X
Database

yerine:

Frontend
   ↓
REST API
   ↓
Node-RED
   ↓
Database

şeklindedir.

Bu yaklaşım authentication, validation ve veri işleme işlemlerinin merkezi olarak yönetilmesini sağlar.

🔒 Güvenlik

TaskFlow geliştirilirken hassas bilgilerin repository içerisinde tutulmaması hedeflenmiştir.

Aşağıdaki bilgiler kaynak kod içerisinde sabit olarak bulunmamalıdır:

JWT Secret
AI API Keys
Firebase credentials
Node-RED credentials
Service account credentials

Bu nedenle .gitignore içerisinde hassas dosyalar hariç tutulmaktadır.

Örneğin:

.env
.env.*
firebase-service-account.json
service-account.json
flows_cred.json
.config.nodes.json
.config.runtime.json
.config.users.json
node_modules/
*.backup
*.bak
*.log
.vscode/

Repository içerisinde gerçek secret değerleri yerine .env.example dosyası bulundurulur.

⚙️ Node-RED Environment Yapılandırması

Node-RED'in environment variable değerlerini kullanabilmesi için settings.js içerisinde environment dosyasının yüklenmesi sağlanmıştır.

Örneğin:

require("dotenv").config({
    path: require("path").join(__dirname, ".env"),
});

Bu yapı sayesinde .env içerisindeki değişkenler Node.js process environment'a yüklenir.

Node-RED Function node içerisinde ise:

env.get("JWT_SECRET")

şeklinde erişilebilir.

Örneğin JWT:

const jwtSecret = env.get("JWT_SECRET");

AI:

${GROQ_API_KEY}

Firebase:

const firebaseApiKey = env.get("FIREBASE_API_KEY");

şeklinde kullanılabilir.

🧪 Hata Yönetimi

API işlemlerinde HTTP status code'ları kullanılarak istemciye işlemin sonucu aktarılır.

Örneğin:

200 → Başarılı
201 → Oluşturuldu
400 → Hatalı istek
401 → Yetkisiz erişim
404 → Bulunamadı
500 → Sunucu hatası

Frontend tarafında response kontrol edilerek kullanıcıya uygun mesaj gösterilir.

Örneğin:

if (!response.ok) {
    return {
        success: false,
        message: data?.message
    };
}

Bu yapı backend hatalarının frontend tarafında kontrol edilmesini sağlar.

🔄 Google Login Veri Akışı

Google login işleminin daha detaylı akışı:

┌─────────────────┐
│     Browser     │
└────────┬────────┘
         │
         ▼
Google Login Button
         │
         ▼
Firebase Auth
         │
         ▼
Google Account
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
┌─────────────────┐
│    Node-RED     │
└────────┬────────┘
         │
         ▼
Firebase Token Validation
         │
         ▼
User Lookup
         │
         ├───────────────┐
         │               │
      Existing        New User
         │               │
         └───────┬───────┘
                 ▼
             JWT Sign
                 │
                 ▼
          Application Token
                 │
                 ▼
             Frontend

Bu yapı Firebase authentication ile TaskFlow authentication katmanlarını birbirinden ayırmaktadır.

🧠 AI Veri Akışı

AI destekli dashboard içeriklerinin temel akışı:

User Data
    ↓
Dashboard
    ↓
Frontend Request
    ↓
Node-RED
    ↓
Prompt / Context
    ↓
AI API
    ↓
AI Response
    ↓
Node-RED
    ↓
JSON Response
    ↓
Frontend
    ↓
Dashboard UI

AI API anahtarı frontend'e gönderilmez.

Backend tarafında environment variable üzerinden okunur.

🔁 Genel Uygulama Akışı

TaskFlow'a giriş yapıldığında genel akış:

Application Start
       ↓
Login Screen
       ↓
Authentication
       ↓
JWT
       ↓
Dashboard
       ↓
┌──────┼────────┬────────┬────────┐
│      │        │        │        │
Tasks Projects Calendar Analytics Settings
│      │        │        │        │
└──────┴────────┴────────┴────────┘
       ↓
REST API
       ↓
Node-RED
       ↓
Database / External Services
🧰 Kullanılan Teknolojiler
Frontend
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
Backend
Node.js
Node-RED
REST API
Fetch API
JavaScript
Authentication
Firebase Authentication
Google Authentication
JWT
bcrypt
Data
JSON
REST tabanlı veri erişimi
Node-RED flow yapısı
MongoDB tabanlı veri yönetimi
AI
AI API entegrasyonu
Environment variable tabanlı API key yönetimi
Development
Visual Studio Code
Git
GitHub
npm
Node.js
Node-RED
📦 package.json ve Dependency Yönetimi

Node.js bağımlılıkları package.json içerisinde tanımlanmaktadır.

Proje bağımlılıklarının belirli sürümlerle kurulabilmesi için:

package-lock.json

dosyası repository içerisinde tutulmaktadır.

Yeni bir ortamda bağımlılıkların kurulması:

npm install

komutu ile gerçekleştirilebilir.

node_modules repository'ye dahil edilmez.

Bu nedenle .gitignore içerisinde:

node_modules/

bulunmaktadır.

🧹 Git Repository Temizliği

Repository içerisinde aşağıdaki dosyaların bulunmaması amaçlanmaktadır:

node_modules/
.env
flows_cred.json
firebase-service-account.json
.config.nodes.json
.config.runtime.json
.config.users.json
*.backup
*.bak
*.log
.vscode/

Bu dosyalar uygulamanın lokal çalışma ortamına ait dosyalardır.

Repository içerisinde uygulamanın çalışması için gerekli kaynak kod, flow ve yapılandırma şablonlarının tutulması hedeflenmektedir.

📝 .env.example

Yeni bir geliştiricinin projeyi kurabilmesi için environment variable isimleri .env.example içerisinde gösterilebilir.

Örnek yapı:

NODE_RED_CREDENTIAL_SECRET=
JWT_SECRET=
GROQ_API_KEY=
FIREBASE_API_KEY=

Gerçek değerler .env içerisinde tutulmalıdır.

.env dosyası repository'ye gönderilmemelidir.

⚙️ Kurulum
1. Repository'yi Klonlama
git clone <repository-url>

Proje klasörüne geçilir:

cd TaskFlow
2. Node.js Bağımlılıklarını Kurma
npm install

Bu işlem package.json içerisindeki bağımlılıkları kurar.

3. Environment Dosyasını Oluşturma

.env.example dosyasından .env oluşturulur.

.env.example
     ↓
.env

Ardından gerekli environment variable değerleri tanımlanır.

4. Node-RED Yapılandırması

Node-RED'in settings.js üzerinden environment dosyasını okuyabilmesi sağlanır.

Proje içerisinde:

settings.js
flows.json

Node-RED çalışma yapısının temel parçalarıdır.

5. Uygulamayı Başlatma

Node-RED kurulumu mevcutsa proje dizininden Node-RED başlatılabilir:

node-red

Node-RED arayüzü varsayılan olarak:

http://127.0.0.1:1880

üzerinden erişilebilir.

Uygulama endpoint'leri Node-RED flow'ları tarafından yönetilir.

🧪 Geliştirme

Geliştirme sırasında frontend dosyaları:

www/

altında,

backend flow'ları:

flows.json

içerisinde,

Node-RED yapılandırması:

settings.js

içerisinde,

dependency yönetimi:

package.json
package-lock.json

üzerinden yönetilir.

Yeni bir frontend modülü oluşturulurken ilgili JavaScript ve CSS dosyasının ayrı tutulması önerilir.

Örneğin:

www/js/newModule.js
www/css/newModule.css
🔌 API Tasarım Yaklaşımı

API endpoint'leri REST prensiplerine uygun şekilde kaynak bazlı tasarlanmıştır.

Örneğin:

/api/tasks
/api/projects
/api/firebaseauth

gibi endpoint'ler ilgili kaynak veya işlemi temsil eder.

HTTP methodları işlem tipini belirler:

GET
POST
PUT
DELETE

Bu yaklaşım API katmanının frontend tarafından anlaşılmasını ve farklı istemciler tarafından kullanılabilmesini kolaylaştırır.

🧩 Modülerlik

TaskFlow'un önemli tasarım hedeflerinden biri modülerliktir.

Örneğin görev modülü:

tasks.html
tasks.js
tasks.css

proje modülü:

projects.html
projects.js
projects.css

takvim modülü:

calendar.html
calendar.js
calendar.css

şeklinde birbirinden ayrılabilir.

Backend tarafında da benzer şekilde ilgili işlemler farklı Node-RED flow'ları içerisinde organize edilebilir.

🔍 Debug ve Loglama

Geliştirme aşamasında Node-RED Function node'ları içerisinde:

node.warn(...)

ve:

node.error(...)

gibi mekanizmalar kullanılarak backend akışı takip edilebilir.

Örneğin authentication sırasında:

node.warn({
    hasCredential: !!credential,
    credentialLength: credential?.length || 0
});

gibi debug bilgileri kullanılabilir.

Ancak production ortamında hassas token veya secret değerleri loglanmamalıdır.

🛡️ Güvenlik Yaklaşımı

TaskFlow içerisinde güvenlik açısından temel prensipler:

Secret'ları source code'da tutmamak
JWT_SECRET
GROQ_API_KEY
Firebase credentials

environment üzerinden yönetilir.

Authentication katmanını backend'de gerçekleştirmek

Frontend tarafından gönderilen authentication verileri Node-RED tarafından kontrol edilir.

Firebase ID Token ile uygulama JWT'sini ayırmak

Firebase tokenı authentication sağlayıcısına aitken TaskFlow JWT'si uygulama API erişimi için kullanılır.

Credential dosyalarını repository dışında bırakmak
.env
flows_cred.json
firebase-service-account.json

gibi dosyalar .gitignore ile hariç tutulur.

🗂️ Git Çalışma Akışı

Geliştirme sırasında önerilen temel Git akışı:

git status

Değişiklikleri kontrol etmek için:

git diff

Dosyaları stage etmek için:

git add .

Commit oluşturmak için:

git commit -m "Açıklayıcı commit mesajı"

Repository'ye göndermek için:

git push

Çalışma ağacının temiz olması:

nothing to commit, working tree clean

şeklinde görüntülenir.

📦 Repository'de Bulunması Gerekenler

Repository içerisinde temel olarak:

Frontend
Backend flows
Configuration templates
Package definitions
Documentation

bulunmalıdır.

Özellikle:

flows.json
settings.js
package.json
package-lock.json
www/
index.html
.gitignore
.env.example
README.md

projenin temel çalışma yapısını oluşturur.

🚀 Üretim Ortamına Hazırlık

TaskFlow production ortamına alınmadan önce aşağıdaki kontroller gerçekleştirilmelidir:

Gerçek secret değerlerinin repository'de bulunmadığının kontrol edilmesi
.env dosyasının repository dışında tutulması
Firebase credentials dosyalarının korunması
Node-RED credential güvenliğinin sağlanması
JWT secret değerinin güçlü olması
AI API key'lerinin frontend'e gönderilmemesi
Debug loglarının production ortamında azaltılması
HTTPS kullanılması
CORS politikalarının kontrol edilmesi
API endpoint authentication kontrollerinin yapılması
Database bağlantısının güvenli şekilde yapılandırılması
🐳 Containerization İçin Uygunluk

TaskFlow'un Node.js ve Node-RED tabanlı yapısı container ortamına taşınabilecek şekilde organize edilebilir.

Genel container mimarisi:

┌──────────────────────────┐
│       TaskFlow App       │
│                          │
│      Node.js             │
│      Node-RED            │
└────────────┬─────────────┘
             │
             ├────────────── Database
             │
             ├────────────── Firebase
             │
             └────────────── AI Service

Environment variable'lar container içerisine doğrudan image içine gömülmek yerine runtime sırasında sağlanabilir.

Bu yaklaşım deployment güvenliğini ve taşınabilirliği artırır.

🔮 Gelecekteki Geliştirmeler

TaskFlow mimarisi daha ileri seviyede aşağıdaki özelliklerle genişletilebilir:

Takım/ekip yönetimi
Kullanıcı rolleri
Role Based Access Control
Proje üyelik sistemi
Görev atama sistemi
Gerçek zamanlı bildirimler
WebSocket desteği
Gelişmiş dashboard
Gelişmiş AI task planning
AI destekli görev önceliklendirme
AI destekli proje planlama
Dosya yükleme
Görev yorumları
Görev geçmişi
Activity log
Audit log
Gelişmiş raporlama
PDF rapor oluşturma
Excel export
Docker deployment
CI/CD
Automated testing
API documentation
Rate limiting
Daha gelişmiş authorization
🎯 Projenin Amacı

TaskFlow'un temel amacı, kullanıcıların görev ve proje süreçlerini tek bir platform üzerinden yönetebileceği modüler, geliştirilebilir ve API tabanlı bir uygulama oluşturmaktır.

Uygulama yalnızca görev oluşturma ve tamamlama işlevleriyle sınırlı değildir.

TaskFlow;

Kullanıcı Yönetimi
       +
Authentication
       +
Görev Yönetimi
       +
Proje Yönetimi
       +
Takvim
       +
Analiz
       +
Bildirim
       +
AI
       +
Çoklu Dil
       +
REST API
       +
Node-RED

bileşenlerini tek bir sistem içerisinde birleştirmektedir.

Bu mimari sayesinde uygulamanın yeni özelliklerle genişletilebilmesi ve farklı kullanıcı ihtiyaçlarına adapte edilebilmesi hedeflenmektedir.

🏁 Sonuç

TaskFlow; frontend ve backend katmanlarını birbirinden ayıran, REST API üzerinden haberleşen, Node-RED tabanlı backend akışlarına sahip, JavaScript tabanlı dinamik frontend mimarisi kullanan bir görev ve proje yönetim platformudur.

Authentication tarafında Firebase ve Google Authentication desteklenirken uygulama içi API erişimi JWT tabanlı authentication ile gerçekleştirilmektedir.

Frontend tarafında Bootstrap, JavaScript, jQuery, Mustache, SurveyJS, FullCalendar ve DataTables gibi teknolojiler kullanılarak modüler ve dinamik bir kullanıcı arayüzü oluşturulmuştur.

Backend tarafında Node-RED flow mimarisi kullanılarak API endpoint'leri, authentication işlemleri, veri erişimi ve harici servis entegrasyonları yönetilmektedir.

Hassas yapılandırmalar environment variable yaklaşımı ile yönetilerek secret değerlerin kaynak kodundan ayrılması hedeflenmiştir.

TaskFlow'un genel mimari yaklaşımı:

                  TASKFLOW
                     │
        ┌────────────┴────────────┐
        │                         │
     FRONTEND                  BACKEND
        │                         │
 HTML / CSS / JS              NODE-RED
        │                         │
 Bootstrap / jQuery           REST API
        │                         │
 Mustache / SurveyJS             │
        │                         │
 FullCalendar / DataTables       │
        │                         │
        └───────────┬─────────────┘
                    │
               AUTHENTICATION
                    │
          ┌─────────┴─────────┐
          │                   │
       Firebase             JWT
          │                   │
          └─────────┬─────────┘
                    │
              DATA / SERVICES
                    │
          ┌─────────┼─────────┐
          │         │         │
       Database   Firebase     AI

TaskFlow bu mimariyle birlikte görev, proje, kullanıcı ve çalışma süreçlerinin merkezi olarak yönetilebildiği, geliştirilmeye ve genişletilmeye uygun bir web uygulaması olarak tasarlanmıştır.

📌 TaskFlow

Planla. Organize et. Takip et. Analiz et.

TaskFlow, görev ve proje yönetimini tek bir platform altında birleştirerek kullanıcıların çalışmalarını daha düzenli, izlenebilir ve yönetilebilir hale getirmeyi amaçlamaktadır.
