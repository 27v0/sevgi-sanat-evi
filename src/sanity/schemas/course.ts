import { defineField, defineType } from 'sanity';

export const course = defineType({
  name: 'course',
  title: 'Kurslar & Branşlar',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Kurs Adı',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Bağlantı Adresi (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Müzik Eğitimi', value: 'muzik' },
          { title: 'Resim & Görsel Sanatlar', value: 'resim' },
          { title: 'Sınavlara Hazırlık (Konservatuvar / GSF)', value: 'hazirlik' },
          { title: 'Çocuk Sanat Atölyeleri', value: 'cocuk' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Kısa Açıklama (Özet)',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: 'description',
      title: 'Detaylı Kurs İçeriği ve Programı',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'image',
      title: 'Kurs Görseli',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'ageGroup',
      title: 'Yaş Grubu',
      type: 'string',
      initialValue: 'Tüm Yaş Grupları (Çocuk & Yetişkin)',
    }),
    defineField({
      name: 'duration',
      title: 'Ders Süresi / Formatı',
      type: 'string',
      initialValue: 'Haftada 1 Gün / 50 Dakika Birebir',
    }),
    defineField({
      name: 'features',
      title: 'Öne Çıkan Özellikler',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'isFeatured',
      title: 'Anasayfada Öne Çıkarılsın mı?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Sıralama',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Sıralama Önceliği',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});
