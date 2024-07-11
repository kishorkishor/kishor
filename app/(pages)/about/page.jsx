import Image from 'next/image';

import { Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About',
  description:
    'Helping brands in the digital world. Located in The Bangladesh. © Code by kishor',
};

export default function About() {
  return (
    <Transition>
      <section className='text-black container py-24'>
        <h1 className='text-9xl mt-32 mb-16 border-b-2 border-gray-200 pb-32'>
          Helping people thrive in the digital world
        </h1>

        <div className='flex gap-40'>
          <p className='mt-48 text-lg text-justify'>
            I recently graduated with a Bachelor of Engineering in Computer
            Science and Engineering from the American International
            University-Bangladesh. I have a strong background in programming and
            web development, specializing in Angular and ASP.NET Core, and I'm
            proficient in Java, Python, C and C++. During my internships, I gained
            valuable experience in project research, planning, and working
            directly with clients. I've also been recognized for my achievements
            in cybersecurity challenges, particularly in hacking competitions.
            I'm excited to bring my skills to a dynamic and innovative
            environment where I can contribute to meaningful projects and
            continue to grow professionally.
          </p>
          <Image
            src={'/about-img.jpg'}
            height={600}
            width={400}
            className='w-[700px]'
            alt='about pic'
          />
        </div>

        <h2 className='text-5xl mb-16 font-bold'>I am good at : </h2>
        <div className='flex gap-16 text-center'>
          <div className='bg-gray-200 rounded-md p-8'>
            <h4 className='font-bold text-2xl mb-4 uppercase'>Web Design</h4>
            <p>
              With a solid track record in designing websites, I deliver strong
              and user-friendly digital designs. (Since 2022 only in combination
              with development)
            </p>
          </div>
          <div className='bg-gray-200 rounded-md p-8'>
            <h4 className='font-bold text-2xl mb-4 uppercase'>HACKING</h4>
            <p>
            With extensive experience in cybersecurity, I have developed advanced skills in ethical hacking. My proficiency in identifying and mitigating security vulnerabilities has been demonstrated through my success in various hacking competitions, where I have consistently delivered effective solutions to complex security challenges
            </p>
          </div>
          <div className='bg-gray-200 rounded-md p-8'>
            <h4 className='font-bold text-2xl mb-4 uppercase'>
              Teaching
            </h4>
            <p>
            Teaching from foundational concepts to advanced techniques, that's what makes me stand out. 
            My deep understanding and clear communication skills enable me to effectively impart knowledge and foster 
            growth in my students.







            </p>
          </div>
        </div>
      </section>
    </Transition>
  );
}
