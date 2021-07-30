import React from 'react'

import { RichText } from 'prismic-reactjs'
import Section from '../Section'
import Image from 'next/image'

const TeamBlock = ({ slice }) => {
    return (
        <div className='max-w-screen-xl mx-auto py-36'>
            <div className='grid grid-flow-row grid-cols-4 grid-rows-1 gap-12'>
                {slice.items.map((item,i) => (
                    <Section key={i}>
                    <div className='items-center justify-center text-center'>
                        <Image className='' src={item.employee_image.url} width={item.employee_image.dimensions.width} height={item.employee_image.dimensions.height} />
                        <h1 className='font-bold text-black text-xl'>{RichText.asText(item.employee_name)}</h1>
                    </div>
                    </Section>
                ))}
            </div>
        </div>
    )
}

export default TeamBlock
