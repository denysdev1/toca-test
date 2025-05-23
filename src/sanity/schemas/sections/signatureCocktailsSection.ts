import { defineType } from 'sanity';

const signatureCocktailsSection = defineType({
  name: 'signatureCocktailsSection',
  title: 'Signature Cocktails Section',
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
      name: 'cocktails',
      title: 'Cocktails',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Signature Cocktails Section',
      };
    },
  },
});

export default signatureCocktailsSection;
