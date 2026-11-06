# 🎨 Sevgi Sanat Evi — Müzik & Resim Kursu Web Sitesi

Sevgi Sanat Evi için geliştirilmiş; **Astro 7**, **Sanity CMS**, **Tailwind CSS** ve **Google Arama & Yerel SEO (Local SEO)** odaklı, ultra hızlı ve modern kurumsal web sitesi ve yönetim paneli.

---

## 🚀 Öne Çıkan Özellikler

- **Maksimum Hız ve Performans (100/100 Core Web Vitals)**: Astro'nun statik üretim (SSG) mimarisi sayesinde sıfır gereksiz JavaScript yükü, anında açılan sayfalar.
- **Google Arama Motoru ve Yerel SEO (SEO First)**:
  - **Schema.org JSON-LD**: `EducationalOrganization`, `MusicSchool`, `ArtGallery` ve `LocalBusiness` tam yapısal veri entegrasyonu.
  - **Kurs Kataloğu Şeması (`hasOfferCatalog`)**: Piyano, gitar, keman, bağlama, karakalem, yağlı boya ve sınav hazırlık kurslarının Google tarafından doğrudan dizine eklenmesi.
  - **FAQPage Şeması**: Sıkça sorulan soruların Google arama sonuçlarında genişletilmiş zengin snippet olarak çıkması.
  - **Otomatik Sitemap & robots.txt**: `@astrojs/sitemap` ile arama motorlarına güncel harita sunumu (admin paneli gizlenmiş olarak).
  - **Open Graph & Twitter Cards**: Sosyal medya ve WhatsApp paylaşımlarında görsel ve açıklama kartları.
- **Entegre Sanity Yönetim Paneli (`/admin`)**:
  - Kurslar & Branşlar ekleme/düzenleme (Müzik, Resim, Yetenek Sınavı Hazırlığı, Çocuk Atölyeleri).
  - Eğitmen kadrosu yönetimi.
  - Duyurular ve blog yazıları.
  - Öğrenci & veli yorumları (Testimonials).
  - İletişim bilgileri, WhatsApp numarası ve duyuru bandı ayarları.
- **"Yakında Yayındayız" & Ön Kayıt Açılış Sayfası**:
  - Şık, modern, sanatsal karanlık tema (amber/rose vurguları).
  - Branş kartları ve detayları.
  - WhatsApp doğrudan bağlantılı erken kayıt ve bilgi alma formu.

---

## 🛠️ Kurulum ve Yerel Geliştirme

Projeyi bilgisayarınızda çalıştırmak için:

```bash
# Proje dizinine girin
cd sevgi-sanat-evi

# Geliştirici sunucusunu başlatın
npm run dev
```

Tarayıcınızda açın:
- **Web Sitesi:** [http://localhost:4321](http://localhost:4321)
- **Sanity Yönetim Paneli:** [http://localhost:4321/admin](http://localhost:4321/admin)

---

## ⚙️ Sanity CMS Bağlantısı (Admin Paneli)

Proje şu anda Sanity kimlik bilgileri olmadan da varsayılan verilerle (fallback data) kusursuz şekilde derlenir ve çalışır. Kendi Sanity veritabanınızı bağlamak için:

1. [sanity.io](https://www.sanity.io) adresinden ücretsiz bir hesap oluşturun.
2. Terminalde yeni bir proje açabilir veya mevcut bir projenin `Project ID` bilgisini alabilirsiniz:
   ```bash
   npx sanity init
   ```
3. Proje kökündeki `.env` dosyasını düzenleyin:
   ```env
   PUBLIC_SANITY_PROJECT_ID=sizin-proje-id-niz
   PUBLIC_SANITY_DATASET=production
   PUBLIC_SITE_URL=https://sevgisanatevi.com
   ```
4. Sanity Yönetim Panelinde **API > CORS Origins** sekmesine Vercel sitenizin adresini (ve yerel için `http://localhost:4321`) ekleyin ve "Allow credentials" seçeneğini işaretleyin.

---

## ☁️ Vercel'e Dağıtım (Deployment)

Proje Vercel ile %100 uyumludur:

1. GitHub'a gönderilen bu repoyu Vercel hesabınıza bağlayın (**Add New Project > Import**).
2. Framework Preset olarak **Astro** otomatik algılanacaktır.
3. **Environment Variables** bölümüne:
   - `PUBLIC_SANITY_PROJECT_ID` = `sizin-proje-id-niz` (veya `dummy-project-id`)
   - `PUBLIC_SANITY_DATASET` = `production`
   - `PUBLIC_SITE_URL` = `https://sevgisanatevi.com` (kendi domaininiz)
4. **Deploy** butonuna tıklayın.
5. Vercel Domains ayarlarından satın aldığınız domaini ekleyin ve DNS yönlendirmesini tamamlayın.

---

## 📈 Google Arama Sıralamasını Yükseltme Önerileri

1. **Google İşletme Profili (Google Business Profile)**:
   - Google Haritalar'da "Sevgi Sanat Evi" adıyla bir işletme profili açın.
   - Sitedeki telefon, açık adres ve çalışma saatleriyle Google Haritalar'daki bilgilerin birebir aynı olmasına dikkat edin (NAP tutarlılığı).
2. **Google Search Console**:
   - Site yayına girdiğinde `https://sevgisanatevi.com/sitemap-index.xml` adresini Google Search Console'a gönderin.
3. **Sosyal Medya & Backlink**:
   - Instagram, Facebook ve YouTube hesaplarınızın biyografi kısmına sitenizin linkini ekleyin.
