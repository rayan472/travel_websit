import React from 'react';
import me from '../assets/Images/me.png';
import me2 from '../assets/Images/me2.png';

const Clients = () => {
    const testimonials = [
        {
            name: 'John Doe',
            image: me2,
            text: 'This travel provided excellent service and help pad us plan the perfect vaction. Highly recommend!',
            location: 'New York, USA',
        },
        {
            name: 'Jane Smith',
            image: me,
            text: 'Amazing experience! The tour guides were Knowledgeable and the destination were breathtaking.',
            location: 'London, UK',
        },
        {
            name: 'Alice Johnson',
            image: me2,
            text: 'Great customer services and fantastic travel pakages. Will definitely book with them again',
            location: 'Sydney, Australia',
        },
    ];

    return (
        <div className='py-12 bg-gray-100'>
            <div className='container mx-auto px-4'>
                <h2 className='text-3xl font-bold text-center mb-8'>What Our Clients Say</h2>
                <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className='bg-white rounded-lg p-6 shadow-md text-center cursor-pointer
                        transform transition duration-300 hover:scale-105'>
                            <img src={testimonial.image} alt={testimonial.name} className='w-24 h-24 rounded-full mx-auto mb-4' />
                            <h3 className='text-xl font-bold mb-2'>{testimonial.name}</h3>
                            <p className='text-gray-600'>{testimonial.location}</p>
                            <p className='text-gray-600 italic'>{testimonial.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Clients;
