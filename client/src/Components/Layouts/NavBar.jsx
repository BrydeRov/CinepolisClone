// import React from 'react'

import { Link } from "react-router-dom"
import SubNavButton from "../SubNavButton"

const subNavButtons = [
    { label: 'Menú', icon: 'bi bi-arrow-short' },
    { label: 'Próximos Estrenos' },
    { label: 'Preventas' },
];

const socialButtons = [
    { class: 'bi bi-facebook hover:text-blue-400', url: 'https://www.facebook.com/cinepolisonline'},
    { class: 'bi bi-twitter-x hover:text-blue-400', url: 'https://twitter.com/cinepolis'},
    { class: 'bi bi-instagram hover:text-pink-400', url: 'https://www.instagram.com/cinepolismx'},
    { class: 'bi bi-youtube hover:text-red-600', url: 'https://www.youtube.com/user/CinepolisOnline'},
    { class: 'bi bi-linkedin hover:text-blue-600', url: 'https://www.linkedin.com/company/296080'},
    { class: 'bi bi-phone hover:text-blue-600', url: 'https://cinepolis.com/aplicaciones-moviles/'},
]

const NavBar = () => {
    return (
        <div className="sticky shadow-md z-30 top-0 w-full">
            <nav className='flex flex-row h-16 ps-80' style={{ backgroundColor: '#002069' }}>
                {/* Logo */}
                <Link to='/' className="my-auto">
                    <img className='h-10' src='../public/Images/CinepolisLogo.png' />
                </Link>
                {/* Dropdown */}
                <div className="md:flex hidden">
                    <select className='ms-8 h-8 w-44 rounded-sm text-slate-500 my-auto px-4'>
                    <option className='me-auto border'>Queretaro</option>
                    </select>
                    <div className='flex flex-col my-auto mt-4'>
                        <select className='ms-3 h-8 rounded-sm text-slate-500 px-4'>
                            <option className='me-auto border'>Seleccionar un cine</option>
                        </select>
                        <small className='text-white text-xs text-center bottom-0 hover:text-blue-500'>¿No encuentras tu cine?</small>
                    </div>
                    {/* Button */}
                    <button className='h-8 my-auto rounded-sm shadow-sm font-bold ms-4 px-2 py-1 text-xs' style={{ backgroundColor: '#fbcf4c' }}>
                        VER CARTELERA
                    </button>
                </div>
            </nav >
            <nav className='md:flex hidden flex-row items-center h-10 px-72' style={{ backgroundColor: '#222222' }}>
                {subNavButtons.map((item, index) => (
                    <SubNavButton key={index} label={item.label} icon={item.icon ? item.icon : null}/>
                ))}
                <Link to='https://palomaynacho.com/' className="text-white font-bold p-2 hover:bg-black" target="_blank">
                    Paloma & Nacho
                </Link>
                {/* Social Icons */}
                <div className="ms-56 flex">
                    {socialButtons.map((item, index) => (
                        <Link key={index} to={item?.url} target='_blank'>
                            <i className={`text-white text-xl ${item.class} ms-4`}/>
                        </Link>
                    ))}
                </div>
            </nav>  
        </div>
    )
}

export default NavBar
