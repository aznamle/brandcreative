import React from 'react'

import { RichText } from 'prismic-reactjs'
import Section from '../Section'
import Image from 'next/image'

const TeamBlock = ({ slice }) => {
    return (
        <div className='max-w-screen-xl mx-auto py-36'>
            <div className='grid grid-flow-row grid-cols-1 md:grid-cols-4 grid-rows-1 gap-12 px-16 md:px-0'>
                {slice.items.map((item,i) => (
                    <Section key={i}>
                        <div className='items-center justify-center text-center'>
                            <Image className='' src={item.employee_image.url} width={item.employee_image.dimensions.width} height={item.employee_image.dimensions.height} />
                            <h1 className='font-bold text-black text-xl leading-relaxed tracking-wider'>{RichText.asText(item.employee_name)}</h1>
                            <span className='font-light text-black text-md tracking-wider'>founding & managing partner</span>
                        </div>
                    </Section>
                ))}
            </div>
        </div>
    )
}

export default TeamBlock
