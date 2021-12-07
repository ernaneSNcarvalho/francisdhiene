import React from 'react'
import './style.css'
import { Link } from 'gatsby'
import BtnWhatsapp from '../components/BtnWhatsapp'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import Hero from '../components/Hero'



const Index = () => {
    return (
        <div>
            <div className='p-4 sm:flex bg-green-200 sm:justify-between items-center'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css" integrity="sha512-+L4yy6FRcDGbXJ9mPG8MT/3UCDzwR9gPeyFNMCtInsol++5m3bk2bXWKdZjvybmohrAsn3Ua5x8gfLnbE1YkOg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <Logo />
                <div className='rounded bg-white shadow rounded px-5 py-2 flex flex-col items-center sm:justify-right content-end'>
                    <div className='rounded px-5 py-2 mt-5 flex flex-col items-center mt-6 sm:mt-0 sm:flex-row mx-10'>
                        <Link className='btn-wa' to='https://web.whatsapp.com/send?phone=5534984262755' target='_blank'><i className='fa fa-whatsapp'></i></Link>
                        <BtnWhatsapp />
                    </div>
                </div>
            </div>
            <Hero />
            <Footer />
        </div>
    )
}

export default Index