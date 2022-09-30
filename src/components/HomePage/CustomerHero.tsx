import React from 'react';

import { useRouter } from 'next/router';

import { redirectToForm } from '../../lib/redirectToForm';

interface Props {
  isVariant: boolean;
}

const CustomerHero = ({ isVariant }: Props) => {
  const title = isVariant
    ? 'Affordable home maintenince'
    : 'High Quality home maintenince, guaranteed';
  const subtitle = isVariant ? 'with HomeHero' : 'with HomeHero.';

  const mainBody = isVariant
    ? 'Get high quality service, guaranteed with a HomeHero crew. Get an instant quote in 2 minutes'
    : "Use HomeHero's 1-stop home maintenince service for the highest quality work, simply.";

  const router = useRouter();

  const redirect = () => {
    redirectToForm(router, isVariant, 'customer');
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
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CustomerHero;
