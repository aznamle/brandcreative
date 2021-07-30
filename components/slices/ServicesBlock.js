import React from 'react'

import { RichText } from 'prismic-reactjs'
import Section from '../Section'
import Image from 'next/image'

const ServicesBlock = ({ slice }) => {
    console.log(slice)
    return (
        <div className='bg-gray-50'>
            <div className='max-w-screen-2xl mx-auto py-36'>
                    <div className='grid grid-flow-row grids-col-1 md:grid-cols-3 grid-rows-1 gap-12'>

                        {slice.items.map((item,i) => (
                        <Section>
                            <div key={i} className='items-center text-center space-y-2 py-2 md:py-12'>
                                <Image src={item.service_icon.url} width={60} height={60} />
                                <h1 className='text-xl font-bold'>{RichText.asText(item.service_title)}</h1>
                                <p className='text-gray-400 font-light leading-loose'>
                                    {item.service_description.map(text => (
                                        <div>
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
