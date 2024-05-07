// components
import { ScrollArea } from '@/components/ui/scroll-area';

export interface DescriptionProps {
  title: string;
  description: string;
}

const DescriptionComponent = ({ title, description }: DescriptionProps) => (
  <div className='flex flex-col justify-center items-start w-full min-h-36 p-2 mt-4'>
    <h1 className='text-3xl font-bold text-black pb-2'>{title}</h1>
    <ScrollArea className='h-36 w-full  text-sm text-gray-600 whitespace-pre-line'>
      {description}
    </ScrollArea>
  </div>
);

export { DescriptionComponent };
