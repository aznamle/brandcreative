import { RichText } from 'prismic-reactjs'
import React from 'react'
import Section from '../Section'

const CenterTextBlock = ({ slice }) => {
    return (
        <div className='max-w-screen-2xl mx-auto py-48 text-center items-center justify-center space-y-6'>
            <Section>
                <h1 className='text-5xl text-black font-light'>{RichText.asText(slice.primary.center_block_title)}</h1>
                <p className='text-xl font-light'>{RichText.asText(slice.primary.center_block_description)}</p>
            </Section>
        </div>
    )
}

export default CenterTextBlock
