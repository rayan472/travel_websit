import React from 'react'
import PopularDistination from '../components/PopularDistination'
import Services from '../components/Services'
import Clients from '../components/Clients'

function Home() {
    return (
       <>
        <div className='relative h-screen bg-cover bg-center' style={{backgroundImage: 'url(/src/assets/Images/hero.png)'}}>
            <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
                <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Explore the World with Us</h1>
                <p className='text-2xl md:text-2xl text-white mb-8'>Discover amazing places at axclusive deals</p>
                <button className='border text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-blue-500 
            transform transition duration-300 hover:scale-105'>Get Starded</button>
            </div>
        </div>
        <PopularDistination />
        <Services />
        <Clients />
       </>
    )
}

export default Home 