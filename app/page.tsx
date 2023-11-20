import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import data from '@/db.json';
import Skills from '@/components/skills';
import PersonalHighlights from '@/components/personal-highlights';

export default function Home() {
  return (
    <main className='mx-auto max-w-7xl'>
      {/* About Me */}
      <div className='flex min-h-[80vh] w-full border-2 border-red-300 px-2'>
        <div className='flex w-full flex-col justify-center'>
          <h1 className='text-6xl'>
            Hello, I&apos;m <br />{' '}
            <span className='bg-gradient-to-r from-fuchsia-700 to-primary bg-clip-text font-extrabold text-transparent'>
              Ethan Perry
            </span>
          </h1>
          <h3 className='mt-4 text-lg'>
            Mechanical Engineer &#x2022; Student &#x2022; Theme Park Enthusiast
          </h3>
          <div className='mt-6 space-x-4'>
            <Button variant={'outline'} size={'lg'}>
              My Work
            </Button>
            <Button size={'lg'}>Contact Me</Button>
          </div>
        </div>
        <div className='flex h-fit w-full self-center'>
          <Image
            src={'/physics.png'}
            alt='rolercobter'
            className='w-full object-cover'
            width={500}
            height={500}
          ></Image>
        </div>
      </div>
      {/* Projects */}
      <div className='space-y-4 border-2 border-blue-300 p-4'>
        <h2 className='text-center text-3xl font-bold'>Projects</h2>
        <ul className='mx-auto grid max-w-2xl grid-cols-2 gap-4'>
          {data.projects.map((project) => {
            return (
              <li
                key={project.title}
                className='flex flex-col gap-1 rounded-md bg-secondary p-4 transition-opacity hover:cursor-pointer hover:opacity-70'
              >
                <AspectRatio ratio={1 / 1} className='z-0'>
                  <Image
                    src={project.image}
                    alt='project example'
                    className='mx-auto h-full rounded-md object-cover'
                    width={500}
                    height={500}
                  />
                </AspectRatio>
                <h3 className='text-xl font-bold'>{project.title}</h3>
                <p>{project.description}</p>
                <ul className='flex flex-wrap gap-3'>
                  {project.tools.map((tool) => {
                    return (
                      <li
                        key={tool}
                        className='rounded-md bg-primary/60 px-3 py-1 text-sm'
                      >
                        {tool}
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Skills */}
      <div className='border-2 border-green-300 p-4'>
        <h2 className='text-center text-3xl font-bold'>Skills</h2>
        <Skills />
        <PersonalHighlights />
      </div>
      {/* Resume */}
      <div className='min-h-screen border-2 border-orange-300'></div>
      <div className='min-h-screen border-2 border-orange-300'></div>
    </main>
  );
}

