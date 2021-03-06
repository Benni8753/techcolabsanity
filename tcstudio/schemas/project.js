import Students from "../../src/components/Students";

/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      title: "Students",
      name: "students",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "student" }],
        },
      ],
    },
    {
      name: "title",
      type: "string",
    },
    {
      name: "sub_title",
      type: "text",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "place",
      type: "string",
    },
    {
      name: "description_one",
      type: "text",
    },
    {
      name: "description_two",
      type: "text",
    },

    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "image_one",
      title: "image one",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "image_two",
      type: "image",
    },
    {
      name: "image_three",
      type: "image",
    },
    {
      name: "image_four",
      type: "image",
    },
    {
      name: "projectType",
      title: "Project type",
      type: "string",
      options: {
        list: [
          { value: "Capstone project", title: "Capstone Project" },
          { value: "Tech Colab Project", title: "Tech Colab Project" },
        ],
      },
    },
    {
      name: "link",
      type: "url",
    },
    {
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      author: "student.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { student } = selection;
      return Object.assign({}, selection, {
        subtitle: student && `by ${student}`,
      });
    },
  },
};
