import { NewsletterFormSection } from '@/sanity/types';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export default function NewsletterForm({
  heading,
  subheading,
  emailPlaceholder = 'Enter email address...',
  selectPlaceholder = 'Select location...',
  locations,
  submitButtonText = 'SEND',
}: NewsletterFormSection) {
  return (
    <div className='flex max-w-full flex-col items-center bg-black px-5 py-10 lg:flex-row lg:justify-between'>
      <div className='w-full'>
        <div className='font-serif text-2xl leading-[110%] italic lg:text-[28px]'>{heading}</div>
        <div className='font-sans text-[15px] leading-[150%] opacity-60 lg:text-base'>{subheading}</div>
      </div>
      <div className='mt-3 flex w-full flex-col gap-5 lg:flex-row lg:items-center lg:justify-end lg:gap-6'>
        <div className='flex flex-col items-center gap-3 lg:flex-row'>
          <Input placeholder={emailPlaceholder} className='min-w-[220px] lg:!h-10' />
          <Select>
            <SelectTrigger className='min-w-[220px] lg:!h-10'>
              <SelectValue placeholder={selectPlaceholder} />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location.toLowerCase()}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button variant='submit' size='submit' className='lg:h-10'>
          {submitButtonText}
        </Button>
      </div>
    </div>
  );
}
