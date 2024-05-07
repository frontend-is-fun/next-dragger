// mock image info
import { imageInfo } from '@/mock/image-info';

// components
import { ImageFrame } from '@/components/main/img-frame';
import { DescriptionComponent } from '@/components/main/description';

// 根据组件划分原则将image操作和描述放在一起，imageframe 包含客户端操作是client 组件，所以拆分下来不会影响到外面的服务端组件
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
