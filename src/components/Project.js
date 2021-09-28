import React, { useEffect, useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import sanityClient from '../client';
import ProjectNavBar from './ProjectNavBar';
import Contact from './Contact';

export default function Project() {
  const [singleProject, setSingleProject] = useState(null);
  const { slug } = useParams();

  let history = useHistory();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"] {
      title,
      sub_title,
      _id,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      image_one{
        asset->{
          _id,
          url
        }
      },
      image_two{
        asset->{
          _id,
          url
        }
      },
      image_three{
        asset->{
          _id,
          url
        }
      },
      image_four{
        asset->{
          _id,
          url
        }
      },
      body,
      description_one,
      description_two,
      tags,
      "students": *[_type=='student' && references(^._id)]{
        name,
        slug,
        mainImage{
          asset->{
            _id,
            url
          }
        }
      },
        "slug": slug.current,
    }`
      )
      .then((data) => setSingleProject(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singleProject) return <div>Loading....</div>;
  console.log(singleProject);

  return (
    <main className='bg-gray-200'>
      <button
        onClick={() => history.goBack()}
        className='invisible bg-gray-800 fixed h-16 w-48 border border-white-800 text-white bottom-0 right-0 m-4 font-bold md:visible'
        type='button'
      >
        BACK TO PROJECTS
      </button>

      <ProjectNavBar />
      <div
        className='w-full min-h-screen bg-no-repeat bg-cover bg-left px-0 py-4 lg:p-12'
        style={{ backgroundImage: `url(${singleProject.mainImage.asset.url})` }}
      >
        <section className='container mx-auto'>
          <div
            className='grid md:grid-cols-2 lg:grid-cols-2 gap-2'
            data-aos='fade-left'
          >
            <div className=''></div>
            <div className='bg-black bg-opacity-50 rounded p-12 mt-20'>
              <h1 className='lg:text-3xl lg:text-6xl mb-4'>
                {singleProject.title}
              </h1>
              <p>{singleProject.sub_title}</p>
            </div>
          </div>
        </section>
      </div>
      <div className='w-full h-4/6 bg-no-repeat bg-cover flex justify-between bg-left px-0 py-4 lg:p-12'>
        <section className='container m-auto'>
          <div className='flex justify-center text-3xl'>
            <h1 className='mb-10 text-gray-700 font-bold'>Students involved</h1>
          </div>
          <div className='container m-auto'>
            <div className='flex flex-wrap justify-between'>
              {singleProject.students &&
                singleProject.students.map((student, index) => (
                  <article
                    className=' w-52 h-52 m-2 mb-2 m-auto'
                    data-aos='fade-right'
                  >
                    <Link
                      className=''
                      to={'/student/' + student.slug.current}
                      key={student.slug.current}
                    >
                      <span
                        className='block w-52 h-52 relative  m-auto rounded shadow leading-snug bg-gray-300 border-indigo-100 '
                        key={index}
                      >
                        <img
                          src={student.mainImage.asset.url}
                          alt={student.mainImage.alt}
                          className='w-full h-full rounded-r object-cover absolute '
                        />
                      </span>
                      <div className='z-40'></div>
                    </Link>
                  </article>
                ))}
            </div>
          </div>
        </section>
      </div>
      <div id='contact' className='bg-gray-500 px-0 py-4 lg:p-12'>
        <section className='container mx-auto'>
          <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-10 '>
            <div className='flex flex-col space-y-8 justify-between '>
              <img
                src={singleProject.image_one.asset.url}
                alt={singleProject.title}
                className='w-full object-cover rounded-t'
                style={{ height: '350px' }}
              />
              <img
                src={singleProject.image_two.asset.url}
                alt={singleProject.title}
                className='w-full object-cover rounded-t'
                style={{ height: '350px' }}
              />
              <img
                src={singleProject.image_three.asset.url}
                alt={singleProject.title}
                className='w-full object-cover rounded-t'
                style={{ height: '350px' }}
              />
              <img
                src={singleProject.image_four.asset.url}
                alt={singleProject.title}
                className='w-full object-cover rounded-t'
                style={{ height: '350px' }}
              />
            </div>
            <div data-aos='fade-left'>
              <p className='mb-5'>{singleProject.description_one}</p>
              <p>{singleProject.description_two}</p>
            </div>
          </div>
        </section>
      </div>
      <Contact />

      {/* STATIC BUTTON */}
    </main>
  );
}
