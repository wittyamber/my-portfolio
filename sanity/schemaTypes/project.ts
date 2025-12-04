import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ 
        name: 'slug', 
        title: 'Slug', 
        type: 'slug', 
        options: { source: 'title' } 
    }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ 
        name: 'techStack', 
        title: 'Tech Stack', 
        type: 'array', 
        of: [{ type: 'string' }] 
    }),
    defineField({ name: 'demoLink', title: 'Live Link', type: 'url' }),
    defineField({ name: 'repoLink', title: 'GitHub Link', type: 'url' }),
  ],
})