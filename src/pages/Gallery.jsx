import React from 'react';
import image1 from '../assets/Images/Image1.png';
import image2 from '../assets/Images/Image2.png';
import image3 from '../assets/Images/Image3.png';
import image4 from '../assets/Images/Image4.png';
import image5 from '../assets/Images/Image5.png';
import image6 from '../assets/Images/Image6.png';


const Gallery = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <div>
      <div className='relative bg-cover bg-center h-96'
        style={{ backgroundImage: 'url(/src/assets/Images/hero.png)' }}>
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
          <h4 className='text-4xl md:text-6xl font-bold text-white mb-4'>Gallery</h4>
        </div>
      </div>

      <div className='container mx-auto px-4 py-12'>
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {images.map((img, index) => (
            <div key={index} className='overflow-hidden rounded-lg shadow-md transform transition duration-300 hover:scale-105'>
              <img src={img} alt={`Gallery Image ${index + 1}`} className='w-full h-full object-cover' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
