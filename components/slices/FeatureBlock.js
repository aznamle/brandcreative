import React from 'react'

import { RichText } from 'prismic-reactjs'
import Section from '../Section'
import Image from 'next/image'

const FeatureBlock = ({ slice }) => {
    return (
        <div className='md:flex max-w-screen-2xl px-12 py-16 mx-auto space-y-4'>
            <div className='md:w-2/3'>
                <Section>
                    <div className="max-w-md lg:max-w-5xl items-center justify-center space-y-6 md:px-12 py-4 md:py-8 w-100">
                        <h1 className="text-2xl md:text-5xl font-light leading-relaxed">{RichText.asText(slice.primary.feature_block_title)}</h1>
                            {slice.primary.feature_block_description.map((text, i ) => (
                                <p key={i} className='text-xl md:text-2xl font-extralight tracking-wide leading-relaxed text-gray-700'>
                                    {text.text}
                                </p>
                            ))}
                    </div>
                    </Section>
            </div>
            <div className='w-2/3 md:w-1/3 mx-auto'>
                <Image src={slice.primary.feature_block_image.url} alt='image' width={slice.primary.feature_block_image.dimensions.width} height={slice.primary.feature_block_image.dimensions.height} />
            </div>
        </div>
    )
}

export default FeatureBlock