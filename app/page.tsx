import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className='max-w-7xl mx-auto border-4 border-red-500 '>
      <div className='min-h-[80vh] flex flex-col justify-center'>
        <h1 className='text-6xl'>
          Hello, I&apos;m <br /> <span className='font-bold'>Ethan Perry</span>
        </h1>
        <h3 className='text-lg mt-4'>
          Mechanical Engineer &#x2022; Student &#x2022; Theme Park Enthusiast
        </h3>
        <div className='mt-4 space-x-4'>
          <Button variant={'outline'} size={'lg'}>
            My Work
          </Button>
          <Button size={'lg'}>Contact Me</Button>
        </div>
      </div>
    </main>
  );
}

