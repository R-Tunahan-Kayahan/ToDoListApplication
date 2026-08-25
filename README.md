TaskFlow

TaskFlow, görev ve proje yönetimini tek bir platform üzerinden gerçekleştirmek amacıyla geliştirilmiş, web tabanlı bir task management uygulamasıdır. Uygulama; kullanıcıların görevlerini ve projelerini oluşturmasına, takip etmesine, durumlarını yönetmesine ve çalışmalarını takvim ve analiz ekranları üzerinden incelemesine olanak sağlayan modüler bir yapı üzerine kurulmuştur.

🚀 Özellikler
🔐 Kullanıcı Yönetimi
Kullanıcı kayıt ve giriş işlemleri
Google ile giriş
Şifre sıfırlama ve yeni şifre oluşturma
Kullanıcı profil ve ayar yönetimi
📋 Görev Yönetimi
Görev oluşturma, düzenleme ve silme
Görev durumlarının yönetilmesi
Öncelik belirleme
Görevlerin projeler ile ilişkilendirilmesi
Görevlerin tamamlanma durumlarının takip edilmesi
📁 Proje Yönetimi
Proje oluşturma ve silme
Projelere görev atama
Proje bazlı görev takibi
Proje durumlarının görüntülenmesi
📅 Takvim
Görevlerin takvim üzerinden görüntülenmesi
Tarih bazlı görev takibi
FullCalendar entegrasyonu
📊 Analiz ve İstatistikler
Görev istatistikleri
Proje performansı
Görev durumlarının grafiksel analizi
Öncelik dağılımlarının incelenmesi
🤖 AI Destekli İçerikler
Dashboard üzerinde AI destekli içerik ve önerilerin gösterilmesi
Kullanıcı görevlerine yönelik dinamik içerik üretimi
🌍 Çoklu Dil Desteği
Dil dosyaları üzerinden yönetilebilir arayüz metinleri
Dinamik dil yapısı
🔔 Bildirim Sistemi
Kullanıcı işlemleri için Toast bildirimleri
Başarılı ve hatalı işlemlerin kullanıcıya aktarılması
🏗️ Mimari

TaskFlow, frontend ve backend işlemlerinin birbirinden ayrıldığı web tabanlı bir mimari kullanır.

                    ┌──────────────────────┐
                    │       TaskFlow       │
                    │      Web Client      │
                    └──────────┬───────────┘
                               │
                ┌──────────────┴──────────────┐
                │                             │
        ┌───────▼────────┐          ┌────────▼────────┐
        │   JavaScript   │          │    Templates    │
        │  Frontend      │          │    Mustache     │
        └───────┬────────┘          └────────┬────────┘
                │                            │
                └──────────────┬─────────────┘
                               │
                         REST API / Fetch
                               │
                    ┌──────────▼──────────┐
                    │      Node-RED       │
                    │   Backend / Flows   │
                    └──────────┬──────────┘
                               │
                    ┌──────────▼──────────┐
                    │      Database       │
                    └─────────────────────┘

Backend tarafındaki işlem akışları Node-RED üzerinden yönetilirken, frontend tarafında JavaScript tabanlı dinamik sayfa yönetimi kullanılmaktadır.

🛠️ Kullanılan Teknolojiler
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
Node-RED
REST API
Fetch API
JavaScript
Kimlik Doğrulama
Firebase Authentication
Google Authentication
Veri Yönetimi
REST tabanlı veri erişimi
JSON
Node-RED flow yapısı
Geliştirme Araçları
Visual Studio Code
Git
GitHub
npm
📂 Proje Yapısı
TaskFlow/
│
├── www/
│ ├── css/
│ │ ├── login.css
│ │ ├── register.css
│ │ ├── calendar.css
│ │ └── ...
│ │
│ ├── js/
│ │ ├── api.js
│ │ ├── common.js
│ │ ├── index.js
│ │ ├── dashboard.js
│ │ ├── tasks.js
│ │ ├── projects.js
│ │ ├── analytics.js
│ │ ├── calendar.js
│ │ └── ...
│ │
│ ├── templates/
│ │ └── \*.mustache
│ │
│ ├── lang/
│ │ └── ...
│ │
│ ├── images/
│ │ └── ...
│ │
│ └── data/
│ └── ...
│
├── flows.json
├── settings.js
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
├── .env.example
└── README.md
🔄 Uygulama Akışı

Kullanıcı uygulamaya giriş yaptığında kimlik doğrulama işlemi gerçekleştirilir. Başarılı giriş sonrasında kullanıcı dashboard ekranına yönlendirilir.

Dashboard üzerinden:

Dashboard
│
├── Görevler
│ ├── Görev oluştur
│ ├── Görev düzenle
│ └── Görev tamamla
│
├── Projeler
│ ├── Proje oluştur
│ └── Proje görevleri
│
├── Takvim
│
├── Analiz
│
└── Ayarlar

kullanıcı uygulamanın temel fonksiyonlarına erişebilir.

🔌 API Yapısı

Frontend ile backend arasındaki veri iletişimi REST API üzerinden gerçekleştirilmektedir.

Örneğin görev verileri:

GET /api/tasks

üzerinden alınabilir.

Görev, proje ve kullanıcı işlemleri API üzerinden gerçekleştirilerek frontend ile backend arasındaki bağımsızlık korunmaktadır.

🔒 Güvenlik

Projede hassas bilgilerin kaynak koduna doğrudan yazılmaması hedeflenmiştir.

Gizli bilgiler:

.env
firebase-service-account.json
flows_cred.json

gibi dosyalarda tutulur ve repository'ye dahil edilmez.

Repository içerisinde yalnızca:

.env.example

bulundurularak gerekli environment variable'ların yapısı belirtilir.

⚙️ Kurulum

Projeyi klonlayın:

git clone <repository-url>
cd TaskFlow

Bağımlılıkları yükleyin:

npm install

Environment dosyasını oluşturun:

.env.example → .env

Gerekli environment variable değerlerini .env içerisinde tanımlayın.

Ardından Node-RED yapılandırmasını kullanarak uygulamayı çalıştırın.

🧪 Geliştirme

Projeyi geliştirmek için:

npm install

komutuyla gerekli bağımlılıklar yüklenebilir.

Frontend kaynakları www/ altında, Node-RED backend flow'ları ise flows.json içerisinde bulunmaktadır.

📌 Projenin Amacı

TaskFlow'un temel amacı, bireysel kullanıcıların ve ekiplerin görev ve proje süreçlerini daha düzenli şekilde yönetebilmesini sağlayan, modüler ve geliştirilebilir bir görev yönetim platformu oluşturmaktır.

Uygulama; görev yönetimi, proje takibi, takvim, analiz, kullanıcı yönetimi ve API tabanlı backend mimarisini tek bir platform altında birleştirmektedir.

📄 Lisans

Bu proje eğitim ve geliştirme amacıyla oluşturulmuştur.

TaskFlow — Planla, organize et, takip et.
