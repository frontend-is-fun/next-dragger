// mock image info
import { imageInfo } from '@/mock/image-info';

// components
import { ImageFrame } from '@/components/main/img-frame';
import { DescriptionComponent } from '@/components/main/description';

const Main = () => (
  <div>
    <ImageFrame
      imgUrl={imageInfo.path}
    />
    <DescriptionComponent
      title={imageInfo.title}
      description={imageInfo.description}
    />
  </div>

);

export { Main };
