import Image from 'next/image';

import { projects } from '@/app/_data/projectData';
import { Transition } from '@/layout';

const ProjectDetails = ({ params }) => {
  const projectData = projects.find(project => project.slug === params.project);

  return (
    <Transition>
      <section className='container mt-64 mb-40'>
        <h1 className='uppercase text-8xl'>{projectData.name}</h1>
        <div className='px-8 py-12 flex justify-between text-xl border-b-2 mb-8'>
          <p>
            <span className='font-bold'>Service:</span> Development
          </p>
          <p>
            <span className='font-bold'>Credit:</span> {projectData.credit}
          </p>
          <p>
            <span className='font-bold'>Location:</span> {projectData.location}
          </p>
          <p>
            <span className='font-bold'>Year:</span> {projectData.year}
          </p>
        </div>

        <Image
          src={projectData.img}
          className='w-full aspect-video object-center object-cover'
          height={1000}
          width={1600}
          alt={projectData.name}
        />

        <div className='py-12'>
          <h3 className='text-3xl font-bold mb-4'>Description:</h3>
          <p>{projectData.description}</p>
        </div>
      </section>
    </Transition>
  );
};

export default ProjectDetails;
