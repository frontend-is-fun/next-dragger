export interface ImageInfo {
  title: string;
  description: string;
  path: string;
}

const generateRandomPicture = (): string => {
  // get random number between 1 and 11
  const random = Math.floor(Math.random() * 10) + 1;
  return `/${random}.jpg`;
};

const imageInfo: ImageInfo = {
  title: 'Demo',
  description: `一个使用 Next.js / Tailwind CSS / TypeScript 的简单项目，展示了对固定区域内图片的缩放、拖拽、点击事件等操作。
  接下来这里是为了展示滚动区域而额外增加的文本。

  
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur`,
  path: generateRandomPicture(),
};

export { imageInfo };
