import React from 'react'
import Section from '../Section'
import { RichText } from 'prismic-reactjs'

const BreakBlock = ({ slice }) => {
    return (
        <div className="w-100 bg-center bg-no-repeat bg-cover"
            style={{
            height: '50vh',
            backgroundImage: `linear-gradient(rgb(0 0 0 / 30%), rgb(0 0 0 / 30%)), url(${slice.primary.break_block_image.url}`,
            }}
        >
            <div className='flex md:max-w-5xl lg:max-w-screen-2xl mx-auto items-center justify-end h-full'>
                <div className='text-right'>
                    <Section>
                        <p className='text-3xl md:text-6xl text-white font-extralight py-2'>
                            {RichText.asText(slice.primary.break_block_title)}
                        </p>
                        <h1 className='text-xl font-extralight text-white tracking-wider'>{RichText.asText(slice.primary.break_block_description)}</h1>
                    </Section>
                </div>
            </div>

        </div>
    )
}

export default BreakBlock
