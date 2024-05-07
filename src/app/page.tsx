// components
import { Header } from '@/components/header';
import { Main } from '@/components/main';

export default function Home() {
  return (
    <main className='flex w-screen min- h-screen flex-col items-center justify-start'>
      <div
        className='flex flex-col justify-start items-center w-96'
      >
        <Header />
        <Main />
      </div>
    </main>
  );
}
