import { Beer } from 'lucide-react';
import React from 'react';

const Skills = () => {
  return (
    <section id='skills' tabIndex={-1}>
      <div className='mx-auto h-full max-w-screen-xl p-4 pb-12 pt-8 md:px-16'>
        <ul className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          <li className='flex flex-col items-center rounded-md bg-secondary p-6 text-secondary-foreground shadow-md transition-all hover:scale-105 hover:shadow-lg'>
            <div className='mx-auto w-fit rounded-full bg-primary p-3 text-4xl text-primary-foreground'>
              <Beer />
            </div>
            <h3 className='mx-auto mt-6 w-fit text-center text-2xl'>
              Some Cool Skill
            </h3>
            <p className='mx-auto mt-6 w-fit text-center'>
              This skill helps me to do x, y, and z.
            </p>
          </li>
          <li className='flex flex-col items-center rounded-md bg-secondary p-6 text-secondary-foreground shadow-md transition-all hover:scale-105 hover:shadow-lg'>
            <div className='mx-auto w-fit rounded-full bg-primary p-3 text-4xl text-primary-foreground'>
              <Beer />
            </div>
            <h3 className='mx-auto mt-6 w-fit text-center text-2xl'>
              Some Cool Skill
            </h3>
            <p className='mx-auto mt-6 w-fit text-center'>
              This skill helps me to do x, y, and z.
            </p>
          </li>
          <li className='flex flex-col items-center rounded-md bg-secondary p-6 text-secondary-foreground shadow-md transition-all hover:scale-105 hover:shadow-lg'>
            <div className='mx-auto w-fit rounded-full bg-primary p-3 text-4xl text-primary-foreground'>
              <Beer />
            </div>
            <h3 className='mx-auto mt-6 w-fit text-center text-2xl'>
              Some Cool Skill
            </h3>
            <p className='mx-auto mt-6 w-fit text-center'>
              This skill helps me to do x, y, and z.
            </p>
          </li>
          <li className='flex flex-col items-center rounded-md bg-secondary p-6 text-secondary-foreground shadow-md transition-all hover:scale-105 hover:shadow-lg'>
            <div className='mx-auto w-fit rounded-full bg-primary p-3 text-4xl text-primary-foreground'>
              <Beer />
            </div>
            <h3 className='mx-auto mt-6 w-fit text-center text-2xl'>
              Some Cool Skill
            </h3>
            <p className='mx-auto mt-6 w-fit text-center'>
              This skill helps me to do x, y, and z.
            </p>
          </li>
          <li className='flex flex-col items-center rounded-md bg-secondary p-6 text-secondary-foreground shadow-md transition-all hover:scale-105 hover:shadow-lg'>
            <div className='mx-auto w-fit rounded-full bg-primary p-3 text-4xl text-primary-foreground'>
              <Beer />
            </div>
            <h3 className='mx-auto mt-6 w-fit text-center text-2xl'>
              Some Cool Skill
            </h3>
            <p className='mx-auto mt-6 w-fit text-center'>
              This skill helps me to do x, y, and z.
            </p>
          </li>
          <li className='flex flex-col items-center rounded-md bg-secondary p-6 text-secondary-foreground shadow-md transition-all hover:scale-105 hover:shadow-lg'>
            <div className='mx-auto w-fit rounded-full bg-primary p-3 text-4xl text-primary-foreground'>
              <Beer />
            </div>
            <h3 className='mx-auto mt-6 w-fit text-center text-2xl'>
              Some Cool Skill
            </h3>
            <p className='mx-auto mt-6 w-fit text-center'>
              This skill helps me to do x, y, and z.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;

