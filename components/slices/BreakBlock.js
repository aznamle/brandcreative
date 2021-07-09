import React from 'react'
import Section from '../Section'
import { RichText } from 'prismic-reactjs'

const BreakBlock = ({ slice }) => {
    return (
        <div className=" flex w-100 bg-center bg-no-repeat bg-cover"
            style={{
            backgroundImage: `url(${slice.primary.break_block_image.url})`,
            height: '50vh',
            }}
        >
            <div className='flex md:max-w-5xl lg:max-w-screen-xl mx-auto items-center justify-center h-full'>
                <div className='text-left'>
                    <Section>
                        <p className='text-3xl md:text-6xl text-white font-light py-2'>
                            {RichText.asText(slice.primary.break_block_title)}
                        </p>
                        <h1 className='text-xl text-white tracking-wider'>{RichText.asText(slice.primary.break_block_description)}</h1>
                        {/* <p className='text-md lg:text-lg text-white'>{RichText.asText(slice.primary.block_description)}</p> */}
                    </Section>
                </div>
            </div>

        </div>
    )
}

export default BreakBlock
