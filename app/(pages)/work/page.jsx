import { projects } from '@/app/_data/projectData';
import WorkList from '@/app/_layout/work/WorkList';
import { Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Work',
  description:
    '',
};

export default function Work() {
  const projectList = projects.map(project => (
    <WorkList key={project.slug} {...project} />
  ));

  return (
    <Transition>
      <section className='container mt-64 mb-40'>
        <h1 className='text-9xl'>Creating next level digital products</h1>
        <div>
          <ul>
            <li className='flex justify-between text-gray-300 px-8 py-4 mt-20 border-b-2'>
              <h2>Name</h2>
              <p>Location</p>
              <p>Year</p>
            </li>
            {projectList}
          </ul>
        </div>
      </section>
    </Transition>
  );
}
