import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';

export default function Projects() {
  const [projectData, setProject] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
        title,
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
      .then((data) => setProject(data))
      .catch(console.error);
  }, []);

  return (
    <main id='project' className='pj-back min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-xl flex justify-center m-10'>PROJECTS</h1>
        <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-2 '>
          {projectData &&
            projectData.map((project, index) => (
              <article className='image'>
                <Link
                  className='animate-pulse'
                  to={'/project/' + project.slug.current}
                  key={project.slug.current}>
                  <span
                    className='block h-96 relative rounded shadow leading-snug bg-white border-l-8 border-indigo-100'
                    key={index}>
                    <img
                      src={project.mainImage.asset.url}
                      alt={project.mainImage.alt}
                      className='w-full h-full rounded-r object-cover absolute'
                    />
                    {/* <span className='block relative h-full flex justify-end items-end pr-5 pb-4'>
                      <h3 className='text-gray-800 text-lg font-blog px-3 py-4 bg-blue-700 text-red-100 bg-opacity-75 rounded'>
                        {project.title}
                      </h3>
                    </span> */}
                  </span>
                  <div className='image-overlay z-40'>
                    <div className='image-title text-5xl'>{project.title}</div>
                  </div>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
