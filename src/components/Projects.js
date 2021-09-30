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
    <main id='project' className='pj-back min-h-screen p-1 sm:p-12'>
      <section className='container mx-auto'>
        <h1 className='text-xl flex justify-center m-10'>PROJECTS</h1>
        <div
          className='grid md:grid-cols-1 lg:grid-cols-2 gap-2 '
          data-aos='fade-right'
        >
          {projectData &&
            projectData.map((project, index) => (
              <article className='image'>
                <Link
                  className=''
                  to={'/project/' + project.slug.current}
                  key={project.slug.current}
                >
                  <span
                    className='block h-96 relative rounded shadow leading-snug'
                    key={index}
                  >
                    <img
                      src={project.mainImage.asset.url}
                      alt={project.mainImage.alt}
                      className='w-full h-full rounded-r object-cover absolute'
                    />
                  </span>
                  <div className='image-overlay z-40'>
                    <div className='italic image-title text-5xl'>
                      {project.title}
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
