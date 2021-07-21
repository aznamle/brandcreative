import React from 'react'
import Image from 'next/image'
import { RichText } from 'prismic-reactjs'

const CompanyBlock = ({ slice }) => {
    return (
        <div className='max-w-3xl mx-auto space-y-4 py-36'>
            <div className='w-1/3'>
                <Image src={slice.primary.company_logo.url} width={slice.primary.company_logo.dimensions.width} height={slice.primary.company_logo.dimensions.height} />
            </div>
            { slice.primary.company_description.map((text,i) => (
                <p className='text-xl font-extralight tracking-wide leading-relaxed'>
                    {text.text}
                </p>
            ))}
        </div>
    )
}

export default CompanyBlock
