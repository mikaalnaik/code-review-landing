import React from 'react';

import { useRouter } from 'next/router';

import config from '../config/index.json';
import { redirectToForm } from '../lib/redirectToForm';

interface Props {
  isVariant: boolean;
  isCustomerPage: boolean;
}

const SecondHero = ({ isVariant, isCustomerPage }: Props) => {
  const { mainHero } = config;

  const router = useRouter();

  const redirect = () => {
    redirectToForm(
      router,
      isVariant,
      isCustomerPage ? 'customer' : 'contractor'
    );
  };

  return (
    <main className="mt-10 mx-auto text-center max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-center justify-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Get Started</span>{' '}
          <span className={`block text-primary xl:inline`}>Today</span>
        </h1>

        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
          <div className="rounded-md shadow">
            <a
              onClick={redirect}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
            >
              {mainHero.primaryAction.text}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SecondHero;
