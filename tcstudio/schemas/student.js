/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'student',
  title: 'Student',
  type: 'document',
  fields: [
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
      name: 'project',
      title: 'Project',
      type: 'reference',
      weak: true,
      to: [{ type: 'project' }],
      description: 'Which project the student was involved in',
    },
    // {
    //   name: 'projects',
    //   title: 'Projects the student was involved',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'reference',
    //       to: [{ type: 'student' }],
    //     },
    //   ],
    // },
    {
      name: 'about',
      type: 'text',
    },
    {
      name: 'linkedin',
      type: 'url',
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
