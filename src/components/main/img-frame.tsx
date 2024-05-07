/* eslint-disable @next/next/no-img-element */

'use client';

import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Draggable from 'react-draggable';

export interface ImageFrameProps {
  imgUrl: string;
}

const ImageFrame = (props: ImageFrameProps) => {
  const { imgUrl } = props;
  return (
    <div className='flex flex-col justify-center items-center bg-slate-100'>
      <TransformWrapper>
        <TransformComponent>
          <Draggable>
            <img
              src={imgUrl}
              alt='demo'
            />
          </Draggable>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export { ImageFrame };
