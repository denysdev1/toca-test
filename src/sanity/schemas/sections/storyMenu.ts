import { defineType } from 'sanity';

const storyMenu = defineType({
  name: 'storyMenu',
  title: 'Story Menu',
  type: 'object',
  fields: [
    {
      name: 'story',
      title: 'Story',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
        },
        {
          name: 'subheading',
          title: 'Subheading',
          type: 'string',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
        },
        {
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'menu',
      title: 'Menu',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
        },
        {
          name: 'subheading',
          title: 'Subheading',
          type: 'string',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
        },
        {
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Story Menu',
      };
    },
  },
});

export default storyMenu;
