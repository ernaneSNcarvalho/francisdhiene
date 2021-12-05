import React from 'react'
import './style.css'
import ReactWhatsapp from 'react-whatsapp';
import { Link } from 'gatsby'
import wa from '../assets/WhatsApp.svg'


const Index = () => {
    return (
        <div className='p-4 sm:flex bg-green-200 sm:justfy-between items-center'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css" integrity="sha512-+L4yy6FRcDGbXJ9mPG8MT/3UCDzwR9gPeyFNMCtInsol++5m3bk2bXWKdZjvybmohrAsn3Ua5x8gfLnbE1YkOg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div className='bg-green-200 text-green-900'>
                <h1 className='text-green-900 text-4xl font-bold italic p-3'>Fran Di Carvalho </h1>
                <p className='text-green-900 text-2xl font-bold italic p-3'>Sono Infantil</p>
            </div> 
            <div className='rounded bg-white shadow rounded px-5 py-2 flex flex-col items-center sm:justfy-right content-end'>
                <div className='shadow rounded px-5 py-2 mt-5 flex flex-col items-center mt-6 sm:mt-0 sm:flex-row mx-10'>
                    <Link className='btn-wa' to='https://web.whatsapp.com/send?phone=5534984262755' target='_blank'><i className='fa fa-whatsapp'></i></Link>
                    <img id='btn-whapp' src={wa} alt='whatsapp' />
                    <div className='text-green-900 text-center align-right ml-2 content-end py-100'>
                        <Link to='https://web.whatsapp.com/send?phone=5534984262755' target='_blank'>
                            <h3 className='text-green-900 text-xs font-bold'>Clique Aqui!</h3>
                            <p className='text-green-900 text-xs font-bold'>Faca uma entrevista gratis!</p>
                            <p className='text-green-900 font-bold'>(34)98426-2755</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index