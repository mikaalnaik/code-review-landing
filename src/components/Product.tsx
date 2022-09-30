import React from 'react';

import Divider from './Divider';

interface Props {
  itemOne?: {
    title: string;
    description: string;
    img: string;
  };
  itemTwo?: {
    title: string;
    description: string;
  };
  itemThree?: {
    title: string;
    description: string;
  };
  sectionTitle?: string;
}

const Product = ({ itemOne, itemTwo, itemThree, sectionTitle }: Props) => {
  // const [_, secondItem] = product.items;

  const firstItem = {
    title: itemOne?.title || 'Get Instant Access To Clients',
    img: itemOne?.img || '/assets/images/home-run.png',
    description:
      itemOne?.description ||
      'Our growing roster of clients means that you can focus on your work instead of cold-calling and prospecting.',
  };
  const secondItem = {
    title: itemTwo?.title || 'Industry Leading Customer Support',
    description:
      itemTwo?.description ||
      "We help keep your clients happy and help resolve issues when they aren't. Simplify your billing, scheduling, and crew management",
  };

  const thirdItem = {
    title: itemThree?.title || 'Route Optimization',
    description:
      itemThree?.description ||
      'Our optimized routes help you get to more sites faster, with less crew downtime.',
  };

  const product = {
    title: sectionTitle || 'Why Join HomeHero?',
  };

  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {product.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full text-center sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {firstItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8`}>{firstItem?.description}</p>
            </div>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="featureImg w-100"
              src={firstItem.img}
              alt={firstItem?.title}
            />
          </div>
        </div>
        <div className={`flex flex-wrap flex-col sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="featureImg w-100"
              src={'/assets/images/communication.png'}
              alt={secondItem?.title}
            />
          </div>
          <div className={`w-full text-center sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {secondItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8`}>{secondItem?.description}</p>
            </div>
          </div>
        </div>

        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full text-center sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {thirdItem.title}
              </h3>
              <p className={`text-gray-600 mb-8`}>{thirdItem.description}</p>
            </div>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="featureImg w-100"
              src={'/assets/images/map.png'}
              alt={firstItem?.title}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
