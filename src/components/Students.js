import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';

export default function Students() {
  const [studentData, setStudent] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "student"]{
        name,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setStudent(data))
      .catch(console.error);
  }, []);

  return (
    <main id='student' className='st-back min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-xl flex justify-center m-10'>STUDENTS</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3 '>
          {studentData &&
            studentData.map((student, index) => (
              <article className='image'>
                <Link
                  className=''
                  to={'/student/' + student.slug.current}
                  key={student.slug.current}>
                  <span
                    className='block h-96 relative rounded shadow leading-snug bg-gray-300 border-indigo-100 '
                    key={index}>
                    <img
                      src={student.mainImage.asset.url}
                      alt={student.mainImage.alt}
                      className='w-full h-full rounded-r object-cover absolute image-add'
                    />
                  </span>
                  <div className='image-overlay z-40'>
                    <div className='italic image-title text-5xl'>
                      {student.name}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
