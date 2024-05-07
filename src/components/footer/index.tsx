'use client';

export interface FooterButtonProps {
  title: string;
  onClick: () => void;
}

const footerButtons = [
  {
    title: 'Home',
    onClick: () => {
      console.log('Button 1 clicked');
    },
  },
  {
    title: 'Create',
    onClick: () => {
      console.log('Button 2 clicked');
    },
  },
  {
    title: 'Profile',
    onClick: () => {
      console.log('Button 3 clicked');
    },
  },
];

const Footer = () => (
  <div className='w-full flex flex-col justify-start items-center  fixed bottom-0 left-0 z-10'>
    <div
      className='w-full lg:w-96 md:w-96 flex flex-row justify-center items-center bg-slate-100 h-24 border-t'
    >
      <div
        className='flex flex-row justify-around items-center w-11/12 border rounded-full px-4 py-2 bg-slate-300'
      >
        {
        footerButtons.map((button, index) => (
          <button
            type='button'
            key={button.title + index.toString()}
            onClick={button.onClick}
            className='px-4 py-2 border rounded-full bg-slate-200 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-opacity-50 transition-colors'
          >
            {button.title}
          </button>
        ))
      }
      </div>
    </div>
  </div>

);

export {
  Footer,
};
