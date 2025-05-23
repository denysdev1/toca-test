import { defineType } from 'sanity';

const mainPromo = defineType({
  name: 'mainPromo',
  title: 'Main Promo',
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
  preview: {
    prepare: () => ({
      title: 'Main Promo',
    }),
  },
});

export default mainPromo;
