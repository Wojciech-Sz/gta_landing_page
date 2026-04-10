import React from 'react';

const ComingSoon = () => {
  return (
    <section className='entrance-message'>
      <div className='h-full col-center gap-10'>
        <img
          src='/images/logo.webp'
          alt='logo'
          className='entrance-logo'
        />

        <div className='text-wrapper'>
          <h3 className='gradient-title'>
            Coming <br /> May 26th <br /> 2030
          </h3>
        </div>

        <div className='flex-center gap-10'>
          <img
            src='/images/ps-logo.svg'
            alt='ps-logo'
            className='md:w-32 w-20'
          />
          <img
            src='/images/x-logo.svg'
            alt='x-logo'
            className='md:w-53 w-40'
          />
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
