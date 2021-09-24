import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import ProjectNavBar from './ProjectNavBar';
import Contact from './Contact';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function Project() {
  const [singleProject, setSingleProject] = useState(null);
  const { slug } = useParams();

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
    console.log(singleProject);
  }, [slug]);

  if (!singleProject) return <div>Loading....</div>;
  console.log(singleProject);

  return (
    // <main className='bg-gray-200 min-h-screen p-12'>
    //   <article className='container shadow-lg mx-auto bg-gray-100 rounded-lg'>
    //     <header className='relative'>
    //       <div className='absolute h-full w-full flex items-center justify-center p-8'>
    //         <div className='bg-white bg-opacity-75 rounded p-12'>
    //           <h1 className='text-3xl lg:text-6xl mb-4'>
    //             {singleProject.title}
    //           </h1>
    //         </div>
    //       </div>
    //       <img
    //         src={singleProject.mainImage.asset.url}
    //         alt={singleProject.title}
    //         className='w-full object-cover rounded-t'
    //         style={{ height: '400px' }}
    //       />
    //     </header>
    //     <div className='px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full'>
    //       <BlockContent
    //         blocks={singleProject.body}
    //         projectId='x44gmgik'
    //         dataset='production'
    //       />
    //     </div>
    //   </article>
    //   <div className='flex justify-center text-gray-800'>
    //             {singleProject.students &&
    //               singleProject.students.map((student) => (
    //                 <div>
    //                   <img
    //                     src={urlFor(student.mainImage).url()}
    //                     alt={student.name}
    //                     className='w-10 h-10 rounded-full'
    //                   />
    //                   <p className='flex items-center pl-2 text-2xl'>
    //                     {student.name}
    //                   </p>
    //                 </div>
    //               ))}
    //           </div>
    // </main>
    <main className='bg-gray-300'>
      <ProjectNavBar />
      {/* <header className="relative">
        <div className="absolute h-full w-full flex items-center justify-center p-8">
          <div className="bg-black bg-opacity-50 rounded p-12">
            <h1 className="lg:text-3xl lg:text-6xl mb-4">
              {singleProject.title}
            </h1>
            <p>{singleProject.sub_title}</p>
          </div>
        </div>
        <img
          src={singleProject.mainImage.asset.url}
          alt={singleProject.title}
          className="w-full object-cover rounded-t"
          style={{ height: "400px" }}
        />
      </header> */}
      <div
        className='w-full h-4/6 bg-no-repeat bg-cover bg-left px-0 py-4 lg:p-12'
        style={{ backgroundImage: `url(${singleProject.mainImage.asset.url})` }}
      >
        <section className='container mx-auto'>
          <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-2'>
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
      <div className='w-full h-4/6 bg-no-repeat bg-cover bg-left px-0 py-4 lg:p-12'>
        <section className='container m-auto'>
          <div className='flex justify-center text-3xl'>
            <h1>Students involved</h1>
          </div>
          <div className='container m-auto'>
            <div className='flex justify-center'>
              {singleProject.students &&
                singleProject.students.map((student, index) => (
                  <article className='proj-prof-student w-max h-max p-12'>
                    <Link
                      className=''
                      to={'/student/' + student.slug.current}
                      key={student.slug.current}
                    >
                      <span
                        className='block h-52  relative  rounded shadow leading-snug bg-gray-300 border-indigo-100 '
                        key={index}
                      >
                        <img
                          src={student.mainImage.asset.url}
                          alt={student.mainImage.alt}
                          className='w-full h-full rounded-r object-cover absolute image-add'
                        />
                      </span>
                      <div className='proj-prof-student-overlay z-40'>
                        <div className='italic image-title text-5xl'>
                          {student.name}
                        </div>
                      </div>
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
            <div>
              <p className='mb-5'>{singleProject.description_one}</p>
              <p>{singleProject.description_two}</p>
            </div>
          </div>
        </section>
      </div>
      <Contact />
    </main>
  );
}
