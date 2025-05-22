import { defineType } from 'sanity';

const footer = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'object',
  fields: [
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'sanityLink' }],
    },
    {
      name: 'websiteInfoLinks',
      title: 'Website Info Links',
      type: 'array',
      of: [{ type: 'sanityLink' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'instagramUrl',
      title: 'Instagram Link',
      type: 'url',
    },
    {
      name: 'noble33Url',
      title: 'Noble 33 Link',
      type: 'url',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer',
      };
    },
  },
});

export default footer;
