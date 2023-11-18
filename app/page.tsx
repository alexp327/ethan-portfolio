import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='max-w-7xl mx-auto border-4 border-red-500 px-2'>
      <div className='min-h-[80vh] w-full flex'>
        <div className='flex flex-col justify-center w-full'>
          <h1 className='text-6xl'>
            Hello, I&apos;m <br />{' '}
            <span className='font-bold'>Ethan Perry</span>
          </h1>
          <h3 className='text-lg mt-4'>
            Mechanical Engineer &#x2022; Student &#x2022; Theme Park Enthusiast
          </h3>
          <div className='mt-6 space-x-4'>
            <Button variant={'outline'} size={'lg'}>
              My Work
            </Button>
            <Button size={'lg'}>Contact Me</Button>
          </div>
        </div>
        <div className='flex w-full self-center h-fit'>
          <img
            src={
              'https://i.pinimg.com/originals/f0/f5/3a/f0f53ae40e84f92ce1cb0cc2e2124a1f.png'
            }
            alt='pic of ethan'
            className='object-cover'
          ></img>
        </div>
      </div>
    </main>
  );
}

