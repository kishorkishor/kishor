import Link from 'next/link';

const WorkList = ({ name, year, slug, location }) => {
  return (
    <li>
      <Link
        className='flex justify-between pr-8 py-8 hover:translate-y-1 transition-transform border-b-2'
        href={`work/${slug}`}
        title={name}
      >
        <h2 className='uppercase text-5xl'>{name.slice(0, 15) + '....'}</h2>
        <p className='text-3xl'>{location}</p>
        <p className='text-3xl'>{year}</p>
      </Link>
    </li>
  );
};

export default WorkList;
