import React from 'react'

import { RichText } from 'prismic-reactjs'
import Section from '../Section'
import Image from 'next/image'

const ServicesBlock = ({ slice }) => {
    return (
        <div className='bg-gray-50'>
            <div className='max-w-screen-2xl mx-auto py-36'>
                <Section>
                    <div className='grid grid-flow-row grid-cols-3 grid-rows-1 gap-12'>
                        {slice.items.map((item,i) => (
                            <div key={i} className='items-center text-center space-y-2 py-12'>
                                <h1 className='text-xl font-bold'>{RichText.asText(item.service_title)}</h1>
                                <p className='text-gray-400 font-light leading-loose'>
                                    {item.service_description.map(text => (
                                        <div>
                                            {text.text}
                                        </div>
                                    ))}
                                </p>
                            </div>
                        ))}
                    </div> 
                </Section>
            </div>
        </div>
    )
}

export default ServicesBlock
