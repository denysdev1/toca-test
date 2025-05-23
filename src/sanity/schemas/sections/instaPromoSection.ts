import { defineType } from 'sanity';

const instaPromoSection = defineType({
  name: 'instaPromo',
  title: 'Insta Promo',
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
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'instagramHandle',
      title: 'Instagram Handle',
      type: 'string',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Insta Promo',
      };
    },
  },
});

export default instaPromoSection;
