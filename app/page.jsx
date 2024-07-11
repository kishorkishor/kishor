import {
  Contact,
  Description,
  Header,
  Navbar,
  Project,
  Thumbnail,
  Transition,
} from '@/layout';
import Education from '@/app/_components/Education'; // Add this import

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Home | Kishor Tarafder',
  description: '',
};

export default function Home() {
  return (
    <Transition>
      <Header />
      <main>
        <Description />
        <Education /> {/* Add this line */}
        <Thumbnail />
        <Project />
      </main>
    </Transition>
  );
}
