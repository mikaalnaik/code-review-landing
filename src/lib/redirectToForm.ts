import { NextRouter } from 'next/router';

import { event } from './gtag';

export const redirectToForm = (
  router: NextRouter,
  isVariant: boolean,
  type: 'contractor' | 'customer'
) => {
  event({
    action: 'click-get-started',
    value: isVariant ? 'variant' : 'control',
    category: 'general',
    label: type,
  });
  router.push('https://tally.so/r/w7RAy0');
};
