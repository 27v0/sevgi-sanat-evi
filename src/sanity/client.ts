import { createClient } from '@sanity/client';

export const isSanityConfigured = Boolean(
  import.meta.env.PUBLIC_SANITY_PROJECT_ID &&
  import.meta.env.PUBLIC_SANITY_PROJECT_ID !== 'dummy-project-id'
);

export const client = isSanityConfigured
  ? createClient({
      projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
      dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
      useCdn: true,
      apiVersion: '2024-03-01',
    })
  : null;

// Fallback site data when Sanity is not yet connected
export const defaultSiteSettings = {
  title: 'Sevgi Sanat Evi | Müzik ve Resim Kursları',
  tagline: 'Sanatın ve Müziğin İlham Veren Buluşma Noktası',
  description:
    'Sevgi Sanat Evi; piyano, keman, klasik ve elektro gitar, bağlama, şan, karakalem, yağlı boya ve güzel sanatlara hazırlık kursları ile her yaşa sanatı sevdiriyor.',
  phone: '+90 (555) 000 00 00',
  phoneClean: '05550000000',
  whatsapp: '905550000000',
  email: 'iletisim@sevgisanatevi.com',
  address: 'Sanat ve Kültür Caddesi, No: 10/A (Merkez)',
  city: 'İstanbul',
  country: 'Türkiye',
  instagram: 'https://instagram.com/sevgisanatevi',
  announcementBanner: '🎨 Yeni Dönem Müzik & Resim Kursu Ön Kayıtlarımız Başlamıştır! Sınırlı Kontenjan.',
};

export const defaultCourses = [
  {
    title: 'Piyano Eğitimi',
    category: 'muzik',
    badge: 'Müzik',
    icon: 'music',
    summary: 'Klasik ve modern piyano repertuarı, nota okuma, armoni ve iki el koordinasyonu eğitimi.',
    details: 'Çocuklar (5 yaştan itibaren) ve yetişkinler için birebir özel dersler.',
  },
  {
    title: 'Gitar Eğitimi (Klasik / Akustik / Elektro)',
    category: 'muzik',
    badge: 'Müzik',
    icon: 'guitar',
    summary: 'Akor geçişleri, arpej, solo teknikleri ve sahne repertuarı ile her seviyeye özel gitar dersi.',
    details: 'Başlangıçtan ileri seviyeye, tarzınıza uygun eğitim.',
  },
  {
    title: 'Keman Eğitimi',
    category: 'muzik',
    badge: 'Müzik',
    icon: 'violin',
    summary: 'Doğru yay tutuşu, ton çıkarma, entonasyon ve klasik eser icrası ile zarif bir müzik yolculuğu.',
    details: 'Birebir kulak ve ritim destekli profesyonel eğitim.',
  },
  {
    title: 'Bağlama & Türk Halk Müziği',
    category: 'muzik',
    badge: 'Müzik',
    icon: 'folk',
    summary: 'Kısa ve uzun sap bağlama eğitimi, yöresel tavırlar, tezene teknikleri ve solfej.',
    details: 'Anadolu’nun köklü tınılarını usta dokunuşlarla keşfedin.',
  },
  {
    title: 'Karakalem & Temel Sanat Eğitimi',
    category: 'resim',
    badge: 'Resim',
    icon: 'palette',
    summary: 'Oran-orantı, perspektif, ışık-gölge, kompozisyon ve anatomi çizim teknikleri.',
    details: 'Çizim yeteneğini sıfırdan zirveye taşımak isteyenler için temel atölye.',
  },
  {
    title: 'Yağlı Boya & Akrilik Atölyesi',
    category: 'resim',
    badge: 'Resim',
    icon: 'brush',
    summary: 'Renk teorisi, fırça ve spatula teknikleri, tuval üzeri özgün eser yaratımı.',
    details: 'Kendi sergi parçalarınızı üretirken rahatlayıp sanatla dinlenin.',
  },
  {
    title: 'Güzel Sanatlara & Konservatuvara Hazırlık',
    category: 'hazirlik',
    badge: 'Akademik Hazırlık',
    icon: 'award',
    summary: 'GSF (Resim, Heykel, Grafik, İç Mimarlık) ve Devlet Konservatuvarı giriş sınavlarına yoğun hazırlık.',
    details: 'Sınav simülasyonları, canlı model çizimleri ve ileri düzey işitme/solfej kampları.',
  },
  {
    title: 'Çocuklar İçin Yaratıcı Sanat & Ritim',
    category: 'cocuk',
    badge: 'Çocuk Atölyesi',
    icon: 'sparkles',
    summary: 'Orff çalgıları, ritim algısı, serbest boyama, el-göz koordinasyonu ve estetik zeka gelişimi.',
    details: '4-12 yaş minik sanatçılar için özgüven ve hayal gücünü geliştiren eğlenceli dersler.',
  },
];

export const defaultFaqs = [
  {
    question: 'Kayıt olmak için daha önce bir deneyimim olması gerekir mi?',
    answer:
      'Kesinlikle hayır! Sevgi Sanat Evi’nde tüm eğitimlerimiz birebir ve sıfırdan başlama prensibine uygundur. İster ilk kez enstrüman elinize alıyor olun, ister fırça tutuyor olun; eğitmenlerimiz sizin seviyenize ve hızınıza göre özel bir eğitim programı hazırlar.',
  },
  {
    question: 'Eğitimler birebir mi yoksa grup dersi şeklinde mi yapılıyor?',
    answer:
      'Müzik enstrüman derslerimiz (Piyano, Keman, Gitar, Bağlama vb.) tamamen birebir (özel) olarak gerçekleştirilir. Resim ve çocuk sanat atölyelerimiz ise hem birebir hem de en fazla 4-6 kişilik butik gruplar halinde yapılabilmektedir.',
  },
  {
    question: 'Konservatuvar ve Güzel Sanatlar Fakültelerine hazırlık kursunuz var mı?',
    answer:
      'Evet. Güzel Sanatlar Fakülteleri (Resim, Grafik Tasarım, İç Mimarlık vb.), Güzel Sanatlar Liseleri ve Konservatuvar Müzik Bölümleri yetenek sınavlarına yönelik yoğun akademik hazırlık programlarımız mevcuttur. Sınav müfredatına birebir uygun canlı model çalışmaları ve müzikal işitme eğitimleri verilir.',
  },
  {
    question: 'Ön kayıt veya deneme dersi imkanı bulunuyor mu?',
    answer:
      'Evet! Kurumumuzda öğrencilerimizin eğitmenimizle tanışması ve enstrüman/sanat yatkınlığının değerlendirilmesi için ücretsiz seviye ve tanışma görüşmesi yapıyoruz. İletişim formundan veya WhatsApp hattımızdan randevu alabilirsiniz.',
  },
  {
    question: 'Sanity Yönetim Paneline nereden ulaşabilirim?',
    answer:
      'Web sitemizin yönetim paneline doğrudan "/admin" adresinden giriş yapabilirsiniz. Kursları, eğitmenleri, iletişim bilgilerini ve duyuruları oradan kolayca güncelleyebilirsiniz.',
  },
];
