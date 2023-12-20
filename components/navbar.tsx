import React from 'react';
import { Button } from './ui/button';
import { RollerCoaster } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export default function Navbar() {
  return (
    <header className='fixed top-0 z-10 flex w-full justify-center border-b bg-background'>
      <div className='flex w-full max-w-7xl justify-between p-2'>
        <Button variant={'ghost'} className='h-full space-x-2 py-3 font-bold'>
          <RollerCoaster size={32} className='stroke-primary' />
          <span className='text-2xl'>Ethan Perry</span>
        </Button>
        <div className='mr-2 flex space-x-2'>
          <nav className='flex space-x-2'>
            <Button asChild className='h-full' variant={'ghost'}>
              <Link href={'/'}>Projects</Link>
            </Button>
            <Button asChild className='h-full' variant={'ghost'}>
              <Link href={'/'}>Skills</Link>
            </Button>
            <Button asChild className='h-full' variant={'ghost'}>
              <Link href={'/'}>Resume</Link>
            </Button>
            <Button asChild className='h-full' variant={'ghost'}>
              <Link href={'/'}>Contact Me</Link>
            </Button>
          </nav>
          <ThemeToggle className='my-auto h-full' />
        </div>
      </div>
    </header>
  );
}

