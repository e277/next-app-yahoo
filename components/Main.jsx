import React from 'react'
import Image from 'next/image'
import YahooLogo from '../assets/yahoo.png'

const Main = () => {
    return (
        <div className='h-[100%-32px] bg-blue-500'>
            <div>
                <p className='font-bold'>
                    Yahoo makes it easy to enjoy what matters most in your world
                </p>
                <p>
                    Best in classs Yahoo mail,breaking local, national and global news, finance, sports, music, movies and more. You get more out of the web, you get more out of life.
                </p>
            </div>
            <div>
                <form>
                    <div>
                        <Image
                            src={YahooLogo}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Main