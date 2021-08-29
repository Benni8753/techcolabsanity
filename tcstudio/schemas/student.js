/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'student',
  title: 'Student',
  type: 'document',
  fields: [
    {
      title: 'Projects',
      name: 'projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'project' }],
        },
      ],
    },
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'story',
      type: 'text',
    },
    {
      name: 'introduction',
      type: 'text',
    },
    {
      name: 'linkedin',
      type: 'url',
    },
    {
      name: 'github',
      type: 'url',
    },
    {
      name: 'resume',
      type: 'file',
    },
    {
      name: 'age',
      type: 'text',
    },
    {
      name: 'studySubject',
      type: 'text',
      max: 50,
    },
    {
      name: 'graduation',
      type: 'text',
    },
    {
      name: 'pathway',
      type: 'text',
    },
    {
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
    },
  ],
};
