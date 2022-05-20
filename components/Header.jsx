import Image from 'next/image'
import React from 'react'
import YahooLogo from '../assets/yahoo.png'

const Header = () => {
    return (
        <div className='flex flex-row items-center justify-between px-12 py-4'>
            <Image
                src={YahooLogo}
                alt="yahoo_frontpage_en"
                width={50}
                height={50}
                className='absolute top-0 left-0'
            />
            <p className='text-lg font-semibold tracking-wide'>Help</p>
        </div>
    )
}

export default Header