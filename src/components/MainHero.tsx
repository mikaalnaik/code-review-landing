import React from 'react';

import { useRouter } from 'next/router';

import config from '../config/index.json';
import { redirectToForm } from '../lib/redirectToForm';

interface Props {
  isVariant: boolean;
}

const MainHero = ({ isVariant }: Props) => {
  const { mainHero } = config;

  const title = isVariant
    ? 'Grow your home maintenance business'
    : 'Kickstart a new home maintenance business';
  const subtitle = isVariant ? 'instantly with HomeHero' : 'with HomeHero.';

  const mainBody = isVariant
    ? 'Instantly grow your client list and take customer support and payroll off your plate.'
    : "It's never been easier to build your own home maintenance business. Let HomeHero take care of your clients, payroll and scheduling.";

  const router = useRouter();

  const redirect = () => {
    redirectToForm(router, isVariant, 'contractor');
  };

  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">{title}</span>{' '}
          <span className={`block text-primary xl:inline`}>{subtitle}</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {mainBody}
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
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

export default MainHero;
