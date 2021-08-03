import { RichText } from 'prismic-reactjs'
import React from 'react'
import Image from 'next/image'

const ContentBlock = ({ slice }) => {
    
    const align = slice.primary.image_align
    
    return (
        <div className='max-w-screen-2xl mx-auto px-6 py-16 md:py-36 space-y-1 md:space-y-6'>
            
            <div className='max-w-4xl p-4'>
                <h1 className='font-extralight text-3xl md:text-5xl leading-relaxed'>{RichText.asText(slice.primary.content_block_title)}</h1>
            </div>

            <div className='md:flex md:space-x-10'>

                { align == false ? 
                    <div className='md:w-2/3 p-4 md:p-0'>
                        <Image src={slice.primary.content_block_image.url} alt="image" width={slice.primary.content_block_image.dimensions.width} height={slice.primary.content_block_image.dimensions.height} />
                    </div>
                    : undefined
                }

                <div className='md:w-1/3 p-4 space-y-6'>
                    <h1 className='font-extralight text-2xl md:text-4xl leading-relaxed'>{RichText.asText(slice.primary.content_block_subtitle)}</h1>
                    <p className='font-extralight text-xl leading-relaxed'>{RichText.asText(slice.primary.content_block_description)}</p>
                </div>
                
                { align == true ? 
                    <div className='md:w-2/3 p-4 md:p-0'>
                        <Image src={slice.primary.content_block_image.url} alt="image" width={slice.primary.content_block_image.dimensions.width} height={slice.primary.content_block_image.dimensions.height} />
                    </div>
                    : undefined
                }

            </div>
        </div>
    )
}

export default ContentBlock
