import React from 'react'
import './style.css'
import { Link } from 'gatsby'
import wa from '../assets/WhatsApp.svg'

const BtnWhatsapp = () => {
    return (
        <div className='bg-green shadow align-baseline rounded px-3 py-2 flex flex-col items-center justify-center text-bold'>
        <Link to='https://web.whatsapp.com/send?phone=5534984262755' target='_blank'>
            <img id='btn-whapp' src={wa} alt='whatsapp' />
            <h3 className='text-green-900 text-xl font-bold'>Clique Aqui!</h3>
            <p className='text-green-900 text-xl font-bold'>Faca uma entrevista gratis!</p>
            <p className='text-green-900 text-xl font-bold'>(34)98426-2755</p>
        </Link>
    </div>
        )
}

export default BtnWhatsapp