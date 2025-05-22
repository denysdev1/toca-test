import { defineType } from 'sanity';

const newsletterForm = defineType({
  name: 'newsletterForm',
  title: 'Newsletter Form',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'emailPlaceholder',
      title: 'Email Placeholder',
      type: 'string',
    },
    {
      name: 'selectPlaceholder',
      title: 'Select Placeholder',
      type: 'string',
    },
    {
      name: 'locations',
      title: 'Locations',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'submitButtonText',
      title: 'Submit Button Text',
      type: 'string',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Newsletter Form',
      };
    },
  },
});

export default newsletterForm;
