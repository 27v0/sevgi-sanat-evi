import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Genel Ayarları & İletişim',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Başlığı',
      type: 'string',
      initialValue: 'Sevgi Sanat Evi | Müzik ve Resim Kursları',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Site Açıklaması (Meta Description - SEO)',
      type: 'text',
      rows: 3,
      initialValue:
        'Sevgi Sanat Evi; piyano, gitar, keman, bağlama, şan, karakalem, yağlı boya ve güzel sanatlara hazırlık kursları ile her yaştan sanat severe profesyonel eğitim sunar.',
      validation: (rule) => rule.max(160).warning('SEO için 160 karakteri geçmemesi önerilir.'),
    }),
    defineField({
      name: 'phone',
      title: 'Telefon Numarası',
      type: 'string',
      initialValue: '+90 555 123 45 67',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp İletişim Numarası (Boşluksuz, örn: 905551234567)',
      type: 'string',
      initialValue: '905551234567',
    }),
    defineField({
      name: 'email',
      title: 'E-posta Adresi',
      type: 'string',
      initialValue: 'bilgi@sevgisanatevi.com',
    }),
    defineField({
      name: 'address',
      title: 'Açık Adres',
      type: 'text',
      rows: 2,
      initialValue: 'Sanat Sokak No: 12, Kadıköy / İstanbul',
    }),
    defineField({
      name: 'googleMapsUrl',
      title: 'Google Haritalar Bağlantısı',
      type: 'url',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram Kullanıcı Adı veya Linki',
      type: 'string',
      initialValue: 'sevgisanatevi',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook Linki',
      type: 'url',
    }),
    defineField({
      name: 'youtube',
      title: 'YouTube Kanal Linki',
      type: 'url',
    }),
    defineField({
      name: 'announcementBanner',
      title: 'Üst Duyuru Bandı Metni (Opsiyonel)',
      type: 'string',
      initialValue: '🎨 Yeni Dönem Müzik ve Resim Kursu Kayıtlarımız Başladı! Erken Kayıt Fırsatını Kaçırmayın.',
    }),
    defineField({
      name: 'isBannerActive',
      title: 'Duyuru Bandı Aktif mi?',
      type: 'boolean',
      initialValue: true,
    }),
  ],
});
