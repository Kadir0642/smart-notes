# 🚀 Smart Notes API

Bu proje, ölçeklenebilir ve güvenli bir not yönetim sistemi için geliştirilmiş **Backend REST API** servisidir. 
Modern yazılım mimarisi prensipleri (Monorepo, Layered Architecture) kullanılarak geliştirilmektedir.

## 🛠 Kullanılan Teknolojiler

* **Dil:** TypeScript (Node.js)
* **Framework:** Express.js
* **Veritabanı:** MongoDB (Yakında eklenecek)
* **Mimari:** Katmanlı Mimari (Controller - Service - Model)

## 📂 Proje Yapısı

Bu proje Monorepo mimarisi ile kurgulanmıştır:

```bash
smart-notes/
├── backend/           # Node.js & Express API servisleri
│   ├── src/           # Kaynak kodlar (Controllers, Services, Models)
│   ├── package.json   # Bağımlılıklar
│   └── .env           # (Gizli) Ortam değişkenleri
├── frontend/          # (Planlanan) React/Next.js Arayüzü
├── README.md          # Proje Dokümantasyonu
└── .gitignore         # Git yasaklılar listesi

Bu proje bir **Monorepo** yapısına sahiptir:
* `/backend` - Node.js & Express API servisleri
* `/frontend` - (Geliştirme aşamasında)

## ⚙️ Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1.  **Projeyi Klonlayın:**
    ```bash
    git clone [https://github.com/Kadir0642/smart-notes.git](https://github.com/Kadir0642/smart-notes.git)
    cd smart-notes/backend
    ```

2.  **Paketleri Yükleyin:**
    ```bash
    npm install
    ```

3.  **Çevresel Değişkenleri Ayarlayın (.env):**
    Ana dizinde `.env` dosyası oluşturun ve PORT bilgisini girin.

4.  **Sunucuyu Başlatın:**
    ```bash
    npm run dev
    ```

## Endpoints (API Uç Noktaları)

* `GET /` -> API durumunu kontrol eder (Health Check).

---
*Geliştirici: [Kadir0642]*