import React from 'react'
import Link from 'next/link'
import {
    GrFacebook,
    GrLinkedin
} from 'react-icons/gr'

function Footer() {
    return (
    <div>

    <div className="w-full h-full pt-16 flex items-center justify-center bg-black">
        <div className="md:w-3/4 w-full px-4 text-white flex flex-col">
            <div className="w-full text-3xl md:text-4xl lg:text-7xl font-bold">
                <h1 className="w-full md:w-3/4">Get in touch with us.<br /> Let your Brand speak.</h1>
            </div>
            <div className="flex mt-2 md:mt-6 lg:mt-8 flex-col md:flex-column md:justify-between">
                <p className="w-full md:w-2/3 text-gray-400">Let your Brand speak.</p>
                <div className="w-44 pt-6">
                <Link href='/contact'>
                    <a className="bg-white justify-center text-black text-center rounded-xl shadow px-10 py-3 flex items-center">Contact Us</a>
                </Link>
                </div>
            </div>
            <div className="flex flex-col border-b border-gray-600">
                <div className="flex mt-12 mb-12 flex-row justify-between">
                    <div className="flex flex-row space-x-4 items-center justify-between">
                        <a href="https://www.facebook.com/brandcreativeagency/">
                            <GrFacebook fontSize='30px' />                          
                        </a>
                        <a href="https://www.linkedin.com/company/brandcreative-llc-">
                            <GrLinkedin fontSize='30px' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer className="text-white bg-black body-font mb-auto">
            <div className=" border-gray-200">
                <div className="flex flex-wrap items-center justify-center px-10 py-10 mx-auto text-base bg-blueGray-900 ">
                    <div className="flex flex-wrap items-center justify-center mx-auto text-base">
                        <p className="mr-5 text-lg text-center text-gray-200"><strong>Brand<i className='text-gray-400'>creative</i></strong> | 2021
                        </p>

                        <a href="#"
                            className="justify-center mr-5 text-lg text-center tracking-widest text-blueGray-200 hover:text-gray-700"> All rights Reserved</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>                          
    )
}

export default Footer