import React from 'react'


import { RichText } from 'prismic-reactjs'
import Section from '../Section'
import Image from 'next/image'

const StepsBlock = ({ slice }) => {
    const itemslen = slice.items.length

    return (
        <div className="text-gray-600 body-font">
            <h1 className='text-center text-black font-light text-2xl md:text-4xl'>
                {RichText.asText(slice.primary.steps_block_title)}
            </h1>
            <div className="max-w-screen-2xl py-24 mx-auto flex flex-wrap">

                <div className="flex flex-wrap w-full px-6">
                    <div className="lg:w-2/5 md:w-1/2 md:pr-16 md:py-6">

                        
                        {slice.items.map((step, i ) => (
                        <div key={i} className="flex relative pb-12">
                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div className={`h-full ${ (itemslen === i + 1) ? 'w-0' : 'w-1' } bg-gray-200 pointer-events-none`}></div>
                            </div>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white inline-flex items-center justify-center text-white relative z-10">
                                <Image src={step.step_icon.url} width={20} height={20}/>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className="font-medium title-font text-xl text-gray-900 mb-1 tracking-wider">
                                    {RichText.asText(step.step_name)}
                                </h2>
                                <p className="font-light leading-relaxed">
                                    {RichText.asText(step.step_description)}
                                </p>
                            </div>
                        </div>
                        ))}

                    </div>
                    <Image className='lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12' src={slice.primary.steps_block_image.url} alt='Featured' 
                        width={900} 
                        height={500} 
                    />
                </div>
            </div>
        </div>
    )
}

export default StepsBlock
