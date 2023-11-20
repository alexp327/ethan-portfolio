import { Beer } from 'lucide-react';
import React from 'react';

function PersonalHighlights() {
  return (
    <section id='what-i-do' tabIndex={-1} className='mx-auto max-w-screen-lg'>
      <div className='mx-8 my-4 rounded-xl'>
        <div className='grid grid-cols-1 gap-2 rounded-md border border-background bg-background md:grid-cols-3'>
          <div className='rounded-md bg-secondary px-8 py-12'>
            <div className='mx-auto w-fit rounded-full bg-primary p-3 text-4xl text-primary-foreground'>
              <Beer />
            </div>
            <h3 className='text-secondary-bg mx-auto mt-6 w-fit text-center text-2xl'>
              Total Nelk Chad
            </h3>
            <p className='text-secondary-bg mx-auto mt-6 w-fit text-center'>
              I enjoy drinking beer, full sending things, and being an all
              around Chad.
            </p>
            <p className='text-secondary-accent mx-auto mt-12 w-fit'>
              Beers I enjoy drinking:
            </p>
            <ul className='flex flex-col items-center'>
              <li className='mt-2'>Miller Lite</li>
              <li className='mt-2'>Coors</li>
              <li className='mt-2'>Bud Light</li>
              <li className='mt-2'>Michelob Ultra</li>
              <li className='mt-2'>King of Troy</li>
            </ul>
          </div>
          <div className='rounded-md bg-secondary px-8 py-12'>
            <div className='mx-auto w-fit rounded-full bg-primary p-3 text-4xl text-primary-foreground'>
              <Beer />
            </div>
            <h3 className='text-secondary-bg mx-auto mt-6 w-fit text-center text-2xl'>
              Total Nelk Chad
            </h3>
            <p className='text-secondary-bg mx-auto mt-6 w-fit text-center'>
              I enjoy drinking beer, full sending things, and being an all
              around Chad.
            </p>
            <p className='text-secondary-accent mx-auto mt-12 w-fit'>
              Beers I enjoy drinking:
            </p>
            <ul className='flex flex-col items-center'>
              <li className='mt-2'>Miller Lite</li>
              <li className='mt-2'>Coors</li>
              <li className='mt-2'>Bud Light</li>
              <li className='mt-2'>Michelob Ultra</li>
              <li className='mt-2'>King of Troy</li>
            </ul>
          </div>
          <div className='rounded-md bg-secondary px-8 py-12'>
            <div className='mx-auto w-fit rounded-full bg-primary p-3 text-4xl text-primary-foreground'>
              <Beer />
            </div>
            <h3 className='text-secondary-bg mx-auto mt-6 w-fit text-center text-2xl'>
              Total Nelk Chad
            </h3>
            <p className='text-secondary-bg mx-auto mt-6 w-fit text-center'>
              I enjoy drinking beer, full sending things, and being an all
              around Chad.
            </p>
            <p className='text-secondary-accent mx-auto mt-12 w-fit'>
              Beers I enjoy drinking:
            </p>
            <ul className='flex flex-col items-center'>
              <li className='mt-2'>Miller Lite</li>
              <li className='mt-2'>Coors</li>
              <li className='mt-2'>Bud Light</li>
              <li className='mt-2'>Michelob Ultra</li>
              <li className='mt-2'>King of Troy</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PersonalHighlights;

