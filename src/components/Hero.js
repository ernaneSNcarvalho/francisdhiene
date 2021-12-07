import React from 'react'
import img from '../assets/4.jpg'

const Hero = () => {
    return (
        <div className='flex flex-col items-center sm:flex-row sm:justify-between'>
            <div className='p-8'>
                <h2 className='text-2xl font-bold'>Consultoria do Sono</h2>
                <p className='font-green-700 text-xl'>Higine do sono infantil</p>
                <p className='font-green-700 text-xl'>Mentoria de sono infantil.</p>
            </div>
            <div>
                <img src={img} />
            </div>
        </div>
    )
}

export default Hero