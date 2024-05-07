// components
import { ScrollArea } from '@/components/ui/scroll-area';

// 图片描述组件的 props
export interface DescriptionProps {
  title: string;
  description: string;
}

const DescriptionComponent = ({ title, description }: DescriptionProps) => (
  <div className='flex flex-col justify-center items-start w-full min-h-36 p-2 mt-4'>
    <h1 className='text-3xl font-bold text-black pb-2'>{title}</h1>
    {/* 使用 scrollarea 组件实现滚动区域，封装了滚动条样式 */}
    <ScrollArea className='h-72 w-full  text-sm text-gray-600 whitespace-pre-line'>
      {description}
    </ScrollArea>
  </div>
);

export { DescriptionComponent };
