import React from 'react';
import './CarouselControls.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const CarouselControls = ({ prev, next }) => {
  return (
    <div>
      <button className='btn-carousel prev' onClick={prev}>
        <div className='icon-lib icon-left'>
          <IoIosArrowBack />
        </div>
      </button>
      <button className='btn-carousel next' onClick={next}>
        <div className='icon-lib icon-right'>
          <IoIosArrowForward />
        </div>
      </button>
    </div>
  );
};

export default CarouselControls;
