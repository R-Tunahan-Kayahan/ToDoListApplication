# TaskFlow

TaskFlow, görev ve proje yönetimi süreçlerini tek bir platform üzerinden gerçekleştirmek amacıyla geliştirilmiş web tabanlı bir task management uygulamasıdır.

Uygulama; kullanıcıların görevlerini ve projelerini oluşturmasına, düzenlemesine, takip etmesine ve durumlarını yönetmesine olanak sağlamaktadır. Bunun yanında takvim, analiz, bildirim, çoklu dil ve yapay zekâ destekli içerik özellikleri ile kullanıcıların çalışma süreçlerini tek bir platform üzerinden yönetebilmesi hedeflenmiştir.

TaskFlow, frontend ve backend işlemlerinin birbirinden ayrıldığı modüler bir mimari üzerine kurulmuştur. Frontend tarafında JavaScript tabanlı dinamik yapı kullanılırken, backend tarafındaki API ve veri işleme süreçleri Node-RED flow'ları üzerinden yönetilmektedir.

---

## 🚀 Özellikler

### 🔐 Kullanıcı Yönetimi

TaskFlow içerisinde kullanıcıların uygulamaya güvenli bir şekilde erişebilmesi için çeşitli kimlik doğrulama ve kullanıcı yönetimi özellikleri bulunmaktadır.

- Kullanıcı kayıt işlemleri
- Kullanıcı giriş işlemleri
- Google ile giriş
- Firebase Authentication entegrasyonu
- JWT tabanlı oturum yönetimi
- Şifre sıfırlama
- Yeni şifre oluşturma
- Kullanıcı profil bilgilerinin görüntülenmesi
- Kullanıcı profil bilgilerinin güncellenmesi
- Kullanıcı ayarlarının yönetilmesi

Kullanıcı başarılı bir şekilde giriş yaptığında uygulama tarafından oluşturulan oturum token'ı kullanılarak sonraki API isteklerinin kimlik doğrulaması gerçekleştirilmektedir.

---

## 📋 Görev Yönetimi

TaskFlow'un temel modüllerinden biri görev yönetimidir. Kullanıcılar oluşturdukları görevleri farklı özellikler üzerinden takip edebilmektedir.

- Görev oluşturma
- Görev düzenleme
- Görev silme
- Görev durumlarının değiştirilmesi
- Görev önceliğinin belirlenmesi
- Görevlerin tamamlanma durumlarının takip edilmesi
- Görevlerin projeler ile ilişkilendirilmesi
- Görev tarih bilgilerinin yönetilmesi
- Görevlerin takvim üzerinde görüntülenmesi
- Görevlerin filtrelenmesi ve listelenmesi

Görev işlemleri frontend tarafından API üzerinden backend'e gönderilmekte ve Node-RED üzerinde bulunan ilgili flow'lar tarafından işlenmektedir.

---

## 📁 Proje Yönetimi

TaskFlow, görevlerin daha düzenli şekilde gruplanabilmesi için proje tabanlı çalışma yapısını desteklemektedir.

Kullanıcılar:

- Proje oluşturabilir
- Proje silebilir
- Projeleri görüntüleyebilir
- Projelere görev atayabilir
- Proje içerisindeki görevleri takip edebilir
- Proje durumlarını görüntüleyebilir
- Proje bazlı görev dağılımlarını inceleyebilir

Bu yapı sayesinde birden fazla görevin belirli bir proje altında organize edilmesi sağlanmaktadır.

---

## 📅 Takvim

TaskFlow içerisinde görevlerin tarih bazlı olarak takip edilebilmesi için takvim modülü bulunmaktadır.

Takvim üzerinden:

- Görevlerin tarihleri görüntülenebilir
- Günlük görevler takip edilebilir
- Tarih bazlı görev planlaması yapılabilir
- Görevlerin başlangıç ve teslim tarihleri incelenebilir
- Görevler takvim görünümü üzerinden takip edilebilir

Takvim yapısında **FullCalendar** entegrasyonu kullanılmaktadır.

---

## 📊 Analiz ve İstatistikler

TaskFlow içerisinde kullanıcıların görev ve proje süreçlerini inceleyebilmesi için analiz ekranı bulunmaktadır.

Analiz modülü üzerinden:

- Toplam görev sayısı
- Tamamlanan görevler
- Devam eden görevler
- Bekleyen görevler
- Görev durumlarının dağılımı
- Görev önceliklerinin dağılımı
- Proje performansı
- Görev istatistikleri

gibi bilgiler görüntülenebilmektedir.

Bu yapı sayesinde kullanıcıların çalışma süreçleri yalnızca görev listeleri üzerinden değil, istatistiksel veriler üzerinden de incelenebilmektedir.

---

## 🤖 AI Destekli İçerikler

TaskFlow içerisinde kullanıcıların görev ve çalışma süreçlerine yardımcı olmak amacıyla yapay zekâ destekli içerik üretimi kullanılmaktadır.

AI destekli yapı üzerinden:

- Dashboard üzerinde dinamik içerikler oluşturulması
- Kullanıcının görevlerine yönelik öneriler
- Görev verilerine göre içerik oluşturulması
- Kullanıcı çalışma sürecine yönelik dinamik öneriler

sunulabilmektedir.

AI işlemleri backend tarafındaki API akışları üzerinden gerçekleştirilmekte ve ilgili servis ile iletişim sağlanmaktadır.

---

## 🌍 Çoklu Dil Desteği

TaskFlow arayüzünün farklı dillerde kullanılabilmesi için dinamik bir dil yapısı oluşturulmuştur.

Dil sistemi:

- Dil dosyaları üzerinden çalışmaktadır
- Arayüz metinlerinin merkezi olarak yönetilmesini sağlamaktadır
- Sayfa içerisindeki metinlerin dinamik olarak değiştirilmesine olanak tanımaktadır
- Yeni dillerin sisteme eklenebilmesini kolaylaştırmaktadır

Bu yapı sayesinde uygulama içerisindeki statik metinlerin doğrudan sayfa kodlarına bağlı kalması azaltılmıştır.

---

## 🔔 Bildirim Sistemi

Kullanıcı işlemlerinin daha anlaşılır şekilde takip edilebilmesi amacıyla bildirim sistemi kullanılmaktadır.

Bildirim sistemi üzerinden:

- Başarılı işlemler
- Hatalı işlemler
- Kullanıcı işlemlerinin sonuçları
- Sistem tarafından oluşturulan bilgilendirmeler

kullanıcıya Toast bildirimleri aracılığıyla aktarılmaktadır.

---

# 🏗️ Mimari

TaskFlow, frontend ve backend işlemlerinin birbirinden ayrıldığı web tabanlı ve modüler bir mimari kullanmaktadır.

```text
                    ┌──────────────────────┐
                    │       TaskFlow       │
                    │      Web Client      │
                    └──────────┬───────────┘
                               │
                ┌──────────────┴──────────────┐
                │                             │
        ┌───────▼────────┐          ┌────────▼────────┐
        │   JavaScript   │          │    Templates    │
        │    Frontend    │          │     Mustache     │
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
