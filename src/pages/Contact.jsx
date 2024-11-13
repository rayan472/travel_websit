import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
    return (
        <div className='bg-gray-100'>
            <div className='relative bg-cover bg-center h-96'
                style={{ backgroundImage: 'url(/src/assets/Images/hero.png)' }}>
                <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
                    <h4 className='text-4xl md:text-6xl font-bold text-white mb-4'>Contact</h4>
                </div>
            </div>
            <div className='container mx-auto px-4 py-12'>
                <div className='grid gap-3 sm:grid-cols-1 md:grid-cols-2'>
                    <div className='bg-white rounded-lg shadow-md p-6'>
                        <h3 className='text-xl font-bold mb-4'>Contact Details</h3>
                        <div className='flex items-center mb-4'>
                            <FaEnvelope className='text-blue-500 mr-2' />
                            <p>info@travelagency.com</p>
                        </div>
                        <div className='flex items-center mb-4'>
                            <FaPhone className='text-blue-500 mr-2'/>
                            <p>+123 456 789</p>
                        </div>
                        <div className='flex items-center'>
                            <FaMapMarkerAlt className='text-blue-500 mr-2'/>
                            <p>cologix office nadir chowk nadir plazza zulfiqarabad gilgit</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-lg shadow-md p-6'>
                        <h3 className='text-xl font-bold mb-4'>Get in touch</h3>
                        <form>
                            <div className='mb-4'>
                                <label className='block text-gray-700 mb-2' htmlFor="Name">Name</label>
                                <input type="text" placeholder='Enter Name' className='w-full p-2 border border-gray-300 rounded'/>
                            </div>
                            <div className='mb-4'>
                                <label className='block text-gray-700 mb-2' htmlFor="Email">Email</label>
                                <input type="email" placeholder='Enter email' className='w-full p-2 border border-gray-300 rounded'/>
                            </div>
                            <div className='mb-4'>
                                <label className='block text-gray-700 mb-2' htmlFor="Name">Message</label>
                                <textarea name="" id="" placeholder='Write message' className='w-full p-2 border border-gray-300 rounded'></textarea>
                            </div>
                            <button className='py-2 px-4 bg-blue-500 text-white rounded'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact