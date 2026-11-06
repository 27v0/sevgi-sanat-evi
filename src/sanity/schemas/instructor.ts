import { defineField, defineType } from 'sanity';

export const instructor = defineType({
  name: 'instructor',
  title: 'Eğitmen Kadrosu',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Eğitmen Adı Soyadı',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Unvan / Branş',
      type: 'string',
      placeholder: 'Örn: Piyano Eğitmeni & Konservatuvar Mezunu',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Kısa Özgeçmiş & Deneyim',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'photo',
      title: 'Fotoğraf',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'order',
      title: 'Görüntülenme Sırası',
      type: 'number',
      initialValue: 0,
    }),
  ],
});
