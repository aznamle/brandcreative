import { RichText } from 'prismic-reactjs'
import React from 'react'

const ContentBlock = ({ slice }) => {
    return (
        <div className='max-w-screen-2xl mx-auto py-32 space-y-6'>
            <div className='max-w-4xl '>
                <h1 className='font-light text-4xl leading-relaxed'>{RichText.asText(slice.primary.content_block_title)}</h1>
            </div>
            <div className='flex space-x-10'>
                <div className='w-1/3 space-y-6'>
                    <h1 className='font-extralight text-4xl leading-relaxed'>{RichText.asText(slice.primary.content_block_subtitle)}</h1>
                    <p className='font-extralight text-xl leading-relaxed'>{RichText.asText(slice.primary.content_block_description)}</p>
                </div>
                
                <div className='w-2/3'>
                    <img src={slice.primary.content_block_image.url} />
                </div>
            </div>
        </div>
    )
}

export default ContentBlock
