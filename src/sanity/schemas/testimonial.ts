import { defineField, defineType } from 'sanity';

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Öğrenci & Veli Yorumları',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'İsim Soyisim',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Açıklama / Branş',
      type: 'string',
      placeholder: 'Örn: Piyano Öğrencisi Velisi veya Gitar Kursiyeri',
    }),
    defineField({
      name: 'comment',
      title: 'Yorum Metni',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Puan (1-5)',
      type: 'number',
      initialValue: 5,
      validation: (rule) => rule.min(1).max(5),
    }),
  ],
});
