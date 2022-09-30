import React from 'react';

interface Props {
  img?: string;
}

const MainHeroImage = ({ img }: Props) => {
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src={img || '/assets/images/lawn.jpeg'}
        alt="happy team image"
      />
    </div>
  );
};

export default MainHeroImage;
