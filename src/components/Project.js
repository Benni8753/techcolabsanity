import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

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
      _id,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body,
      description,
      tags,
      "students": *[_type=='student' && references(^._id)]{
        name,
        mainImage{
          asset->{
            id,
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
    <main className='bg-gray-200 min-h-screen p-12'>
      <article className='container shadow-lg mx-auto bg-gray-100 rounded-lg'>
        <header className='relative'>
          <div className='absolute h-full w-full flex items-center justify-center p-8'>
            <div className='bg-white bg-opacity-75 rounded p-12'>
              <h1 className='text-3xl lg:text-6xl mb-4'>
                {singleProject.title}
              </h1>
              <div className='flex justify-center text-gray-800'>
                {singleProject.students &&
                  singleProject.students.map((student) => (
                    <div>
                      <img
                        src={urlFor(student.mainImage).url()}
                        alt={student.name}
                        className='w-10 h-10 rounded-full'
                      />
                      <p className='flex items-center pl-2 text-2xl'>
                        {student.name}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <img
            src={singleProject.mainImage.asset.url}
            alt={singleProject.title}
            className='w-full object-cover rounded-t'
            style={{ height: '400px' }}
          />
        </header>
        <div className='px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full'>
          <BlockContent
            blocks={singleProject.body}
            projectId='x44gmgik'
            dataset='production'
          />
        </div>
      </article>
    </main>
  );
}
