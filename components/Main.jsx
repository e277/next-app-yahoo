import React from 'react'
import Image from 'next/image'
import YahooLogo from '../assets/yahoo.png'
import GoogleLogo from '../assets/google.png'

const Main = () => {
    return (
        <div className='flex flex-row items-center justify-center px-64 max-h-screen'>
            <div className='w-2/3 p-12'>
                <p className='font-bold text-2xl mb-4'>
                    Yahoo makes it easy to enjoy what matters most in your world
                </p>
                <p className='text-xl'>
                    Best in classs Yahoo mail,breaking local, national and global news, finance, sports, music, movies and more. You get more out of the web, you get more out of life.
                </p>
            </div>

            <div className='w-1/3 mt-2 text-center shadow-md'>
                <div className="block w-full text-center pt-6">
                    <Image
                        src={YahooLogo}
                        alt="yahoo logo"
                        width={90}
                        height={40}
                        className='object-contain'
                    />
                </div>

                <form className='p-8'>
                    <div className='space-y-4'>
                        <h1 className='text-2xl font-semibold'>Sign In</h1>
                        <p className=''>using your yahoo account</p>
                        <input
                            type="text"
                            placeholder='Username, email or mobile'
                            className='w-full p-3'
                        />
                        <button className='w-full bg-blue-400 rounded-full py-2 text-white'>Next</button>
                        <div className='flex items-center justify-between text-blue-400'>
                            <p><input type="checkbox" name="" id="" /> Stay signed in</p>
                            <p> Forget Username?</p>
                        </div>
                        <button className='w-full border border-blue-400 rounded-full text-blue-400 font-bold py-2'>Create Account</button>
                        <p>Or, continue with</p>
                        <div className='py-2 flex items-center justify-center border border-blue-400 rounded-full'>
                            <Image
                                src={GoogleLogo}
                                alt='Google Logo'
                                width={24}
                                height={24}
                                className='object-contain'
                            />
                            <button className='ml-2'>
                                Google
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Main