import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'certificate',
  title: 'Certificate',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Certificate Title',
      type: 'string',
    }),
    defineField({
      name: 'issuer',
      title: 'Issuer (e.g. Coursera, AWS)',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Certificate Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'link',
      title: 'Verification Link (URL)',
      type: 'url',
    }),
  ],
})