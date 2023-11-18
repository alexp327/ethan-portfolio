import React from 'react';
import { Button } from './ui/button';
import { RollerCoaster } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export default function Navbar() {
  return (
    <header className='fixed w-full top-0 bg-background/70 backdrop-blur-sm flex justify-center border-b'>
      <div className='flex justify-between max-w-7xl w-full p-2'>
        <Button
          variant={'ghost'}
          size={'lg'}
          className='space-x-2 py-3 font-bold h-full'
        >
          <RollerCoaster size={32} />
          <span className='text-2xl'>Ethan Perry</span>
        </Button>
        <div className='space-x-2 flex mr-2'>
          <nav className='flex space-x-2'>
            <Button asChild className='h-full' variant={'ghost'}>
              <Link href={'/Projects'}>Test1</Link>
            </Button>
            <Button asChild className='h-full' variant={'ghost'}>
              <Link href={'/Projects'}>Test2</Link>
            </Button>
            <Button asChild className='h-full' variant={'ghost'}>
              <Link href={'/Projects'}>Test3</Link>
            </Button>
          </nav>
          <ThemeToggle className='my-auto h-full' />
        </div>
      </div>
    </header>
  );
}

