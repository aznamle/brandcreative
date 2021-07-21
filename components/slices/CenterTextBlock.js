import { RichText } from 'prismic-reactjs'
import React from 'react'
import Section from '../Section'

const CenterTextBlock = ({ slice }) => {
    return (
        <div className='max-w-screen-2xl mx-auto py-48 text-center items-center justify-center'>
            <Section>
                <div className='space-y-6'>
                <h1 className='text-5xl text-black font-light'>{RichText.asText(slice.primary.center_block_title)}</h1>
                <p className='text-xl font-extralight tracking-wide leading-relaxed text-gray-700'>{RichText.asText(slice.primary.center_block_description)}</p>
                </div>
            </Section>
        </div>
    )
}

export default CenterTextBlock
