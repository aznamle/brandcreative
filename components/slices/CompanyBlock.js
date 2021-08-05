import React from 'react'
import Image from 'next/image'
import { RichText } from 'prismic-reactjs'

const CompanyBlock = ({ slice }) => {
    return (
        <div className='max-w-3xl mx-auto space-y-4 py-36 px-12'>
        { slice.primary.company_logo.url != null ?
            <div className='w-1/3'>
                <Image src={slice.primary.company_logo.url} 
                    width={slice.primary.company_logo.dimensions.width}
                    height={slice.primary.company_logo.dimensions.height}
                    alt={slice.primary.company_logo.alt}
                />
            </div>
            : undefined
        }
            { slice.primary.company_description.map((text,i) => (
                <p key={i} className='text-xl font-extralight tracking-wide leading-relaxed text-gray-700'>
                    {text.text}
                </p>
            ))}
        </div>
    )
}

export default CompanyBlock
