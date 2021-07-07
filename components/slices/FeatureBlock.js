import React from 'react'

import { RichText } from 'prismic-reactjs'
import Section from '../Section'


const FeatureBlock = ({ slice }) => {
    return (
        <div className='flex max-w-screen-2xl py-16 mx-auto'>
            <div className='w-2/3'>
                <Section>
                    <div className="max-w-md lg:max-w-5xl items-center justify-center space-y-6 md:px-12 py-4 md:py-8 w-100">
                        <h1 className="text-2xl md:text-5xl font-light leading-relaxed">{RichText.asText(slice.primary.feature_block_title)}</h1>
                            {slice.primary.feature_block_description.map((text, i ) => (
                                <p className='text-2xl font-light tracking-wide leading-relaxed'>
                                    {text.text}
                                </p>
                            ))}
                    </div>
                </Section>
            </div>
            <div className='w-1/3 mx-auto'>
                <img src={slice.primary.feature_block_image.url} />
            </div>
        </div>
    )
}

export default FeatureBlock
