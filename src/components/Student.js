import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import sanityClient from '../client';
import ProjectNavBar from '../components/ProjectNavBar';

export default function Student() {
  const [singleStudent, setSingleStudent] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"] {
      name,
      _id,
      slug,
      story,
      introduction,
      github,
      linkedin,
      graduation,
      resume,
      age,
      studySubject,
      pathway,

      mainImage{
        asset->{
          _id,
          url
        }
      },
      tags,
      "projects": *[_type=='project' && references(^._id)]{
        title,
        slug,
        mainImage{
          asset->{
            id,
            url
          }
        }
      },
        "slug": slug.current
    }`
      )
      .then((data) => setSingleStudent(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singleStudent) return <div>Loading....</div>;
  console.log(singleStudent);

  return (
    <div className='min-h-screen '>
      <ProjectNavBar />
      <section className=''>
        <header className='text-center container-xl bg-gray-300 back-image'>
          <h1 className='text-3xl pt-48 flex flex-col sm:text-7xl sm:justify-center lg:flex-row'>
            HI! I'M{' '}
            <h1 className='ml-2 uppercase student-text'>
              {singleStudent.name}
            </h1>
          </h1>
          <h3 className='justify-center p-10 mt-10 text-xl '>
            {singleStudent.introduction}
          </h3>
        </header>

        <main className='container mx-auto text-gray-400' data-aos='fade-right'>
          <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-1 mt-20'>
            {/* LEFT SECTION */}
            <div className=' flex-col justify-between mr-6'>
              <h1 className='student-text text-3xl font-black'>Story</h1>
              <p className='leading-loose mt-10'>{singleStudent.story}</p>
              <div className='flex flex-wrap'>
                {singleStudent.tags &&
                  singleStudent.tags.map((tag) => (
                    <p className='bg-gray-100 text-gray-400 rounded m-2'>
                      # {tag}
                    </p>
                  ))}
              </div>
            </div>

            {/* MIDDLE SECTION */}
            <div className='mx-auto mb-10 pr-4'>
              <img
                src={singleStudent.mainImage.asset.url}
                className='shadow-xl px-2'
                alt={singleStudent.mainImage.alt}
              />
            </div>
            {/* RIGHT SECTION */}
            <div className='ml-0 '>
              <h1 className='student-text text-3xl font-extrabold'>
                Personal Information
              </h1>
              <div className='flex justify-between mt-8 bottom-border'>
                <p className='flex-none py-4 text-lg mr-2'>Name: </p>
                <p className='flex-initial py-4 text-lg '>
                  {singleStudent.name}
                </p>
              </div>
              <div className='flex justify-between bottom-border'>
                <p className='flex-none py-4 text-lg mr-2'>Age: </p>
                <p className='flex-initial py-4 text-lg '>
                  {singleStudent.age}
                </p>
              </div>
              <div className='flex justify-between bottom-border'>
                <p className='flex-none py-4 text-lg mr-2'>Degree: </p>
                <p className='flex-initial py-4 text-lg '>
                  {singleStudent.studySubject}
                </p>
              </div>
              <div className='flex justify-between bottom-border'>
                <p className='flex-none py-4 text-lg mr-2'>Pathway: </p>
                <p className='flex-initial py-4 ml-6 text-lg '>
                  {singleStudent.pathway}
                </p>
              </div>
              <div className='flex justify-between bottom-border'>
                <p className='flex-none py-4 text-lg mr-2'>Graduation: </p>
                <p className='flex-initial py-4 text-lg '>
                  {singleStudent.graduation}
                </p>
              </div>
              <div className='flex justify-between'>
                <div className='text-7xl mt-14'>
                  <a href={singleStudent.linkedin}>
                    <ion-icon name='logo-linkedin' target='_blank'></ion-icon>
                  </a>
                </div>
                <div className='text-7xl mt-14'>
                  <a href={singleStudent.github}>
                    <ion-icon name='logo-github' target='_blank'></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* PROJECTS */}

        <div className='container  mx-auto'>
          <div className='student-text text-3xl mt-20 mb-10'>
            Projects involved
          </div>

          <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-2 mb-10'>
            {singleStudent.projects &&
              singleStudent.projects.map((p, index) => (
                <article className='image mx-1 h-max max-h-40 sm:max-h-72 md:max-h-80 lg:max-h-full'>
                  <Link
                    className='pb-2'
                    to={'/project/' + p.slug.current}
                    key={p.slug.current}
                  >
                    <span className='rounded shadow leading-snug' key={index}>
                      <img
                        src={p.mainImage.asset.url}
                        alt={p.mainImage.alt}
                        className='w-full h-full rounded-r object-cover'
                      />
                    </span>
                    <div className='image-overlay z-50'>
                      <div className='italic image-title text-5xl'>
                        {p.title}
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
