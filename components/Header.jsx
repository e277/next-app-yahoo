import Image from 'next/image'
import React from 'react'
import YahooLogo from '../assets/yahoo.png'

const Header = () => {
    return (
        <div className='flex flex-row items-center justify-between px-12 py-4'>
            <Image
                src={YahooLogo}
                alt="yahoo_frontpage_en"
                width={120}
                height={50}
                className='absolute top-0 left-0 object-contain'
            />
            <p className='text-lg text-blue-400 tracking-wide'>Help</p>
        </div>
    )
}

export default Header