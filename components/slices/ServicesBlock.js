import React from 'react'

import { RichText } from 'prismic-reactjs'
import Section from '../Section'
import Image from 'next/image'

const ServicesBlock = ({ slice }) => {
    return (
        <div className='bg-gray-100'>
            <div className='max-w-screen-2xl mx-auto py-36 space-y-16 md:space-y-6'>
                    
                    <h1 className='text-center font-extralight text-4xl'>
                        {RichText.asText(slice.primary.service_block_title)}
                    </h1>

                    <div className='grid grid-flow-row grids-col-1 md:grid-cols-3 grid-rows-1 gap-12'>

                        {slice.items.map((item,i) => (
                        <Section key={i} >
                            <div className='items-center text-center space-y-2 py-2 md:py-12'>
                                <Image src={item.service_icon.url} width={60} height={60} alt={item.service_icon.alt} />
                                <h1 className='text-xl font-bold'>{RichText.asText(item.service_title)}</h1>
                                <p className='text-gray-500 font-light leading-loose'>
                                    {item.service_description.map((text, i) => (
                                        <div key={i}>
                                            {text.text}
                                        </div>
                                    ))}
                                </p>
                            </div>
                        </Section>
                        ))}
                    </div> 
            </div>
        </div>
    )
}

export default ServicesBlock
