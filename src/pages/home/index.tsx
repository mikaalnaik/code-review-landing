import React from 'react';

import { GetServerSidePropsContext } from 'next';

import About from '../../components/About';
import Analytics from '../../components/Analytics';
import Header from '../../components/Header';
import CustomerHero from '../../components/HomePage/CustomerHero';
import LazyShow from '../../components/LazyShow';
import MainHeroImage from '../../components/MainHeroImage';
import Product from '../../components/Product';
import SecondHero from '../../components/SecondHero';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let isVariant = false;
  const { v } = context.query;

  if (v) {
    if (v === '1') {
      isVariant = true;
    }
  } else {
    isVariant = Math.random() < 0.5;
  }
  return {
    props: {
      isVariant,
    },
  };
}

interface Props {
  isVariant: boolean;
}

const App = ({ isVariant }: Props) => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header isVariant={isVariant} isCustomerPage={true} />
            <CustomerHero isVariant={isVariant} />
          </div>
        </div>
        <MainHeroImage img={'/assets/images/house.jpeg'} />
      </div>
      <LazyShow>
        <Product
          sectionTitle="Why Use HomeHero"
          itemOne={{
            title: 'High Quality Maintenaince',
            description:
              'Stop managing multiple providers. Our Pros deliver the highest quality service.',
            img: '/assets/images/home-app.png',
          }}
          itemTwo={{
            title: 'Affordable, instant quotes',
            description:
              "We believe that everyone should have the support to take care of their home. HomeHero's affordable service can help you get started in less than 5 minutes",
            img: '/assets/images/flowers.png',
          }}
          itemThree={{
            title: 'Amazing customer support',
            description:
              'Our industry leading customer support make sure you stay happy with your service.',
            img: '/assets/images/chat.png',
          }}
        />
      </LazyShow>
      <LazyShow>
        <div className={`relative bg-background`}>
          <div className="max-w-7xl mx-auto">
            <SecondHero isVariant={isVariant} isCustomerPage={true} />
          </div>
          {/* <MainHeroImage /> */}
        </div>
      </LazyShow>
      <LazyShow>
        <About />
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;
