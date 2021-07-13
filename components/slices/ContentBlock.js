import { RichText } from 'prismic-reactjs'
import React from 'react'
import Image from 'next/image'

const ContentBlock = ({ slice }) => {
    
    const align = slice.primary.image_align
    
    return (
        <div className='max-w-screen-2xl mx-auto py-32 space-y-6'>
            
            <div className='max-w-4xl pb-4'>
                <h1 className='font-light text-5xl leading-relaxed'>{RichText.asText(slice.primary.content_block_title)}</h1>
            </div>

            <div className='flex space-x-10'>

                { align == false ? 
                    <div className='w-2/3'>
                        <Image src={slice.primary.content_block_image.url} alt="image" width={1800} height={708} />
                    </div>
                    : undefined
                }

                <div className='w-1/3 space-y-6'>
                    <h1 className='font-extralight text-4xl leading-relaxed'>{RichText.asText(slice.primary.content_block_subtitle)}</h1>
                    <p className='font-extralight text-xl leading-relaxed'>{RichText.asText(slice.primary.content_block_description)}</p>
                </div>
                
                { align == true ? 
                    <div className='w-2/3'>
                        <Image src={slice.primary.content_block_image.url} alt="image" width={1800} height={708} />
                    </div>
                    : undefined
                }

            </div>
        </div>
    )
}

export default ContentBlock
