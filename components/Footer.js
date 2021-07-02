import React from 'react'

function Footer() {
    return (
    <div>
    <footer className="text-white bg-black body-font mb-auto">
            <div className=" border-gray-200">
                <div className="flex flex-wrap items-center justify-center px-10 py-10 mx-auto text-base bg-blueGray-900 ">
                    <div className="flex flex-wrap items-center justify-center mx-auto text-base">
                        <p className="mr-5 text-lg text-center tracking-widest text-gray-200"><strong>Brandcreative</strong> | 2021
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