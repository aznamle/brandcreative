import React from 'react'
import { RichText } from 'prismic-reactjs'
import Section from '../Section'

const Contact = ({ slice }) => {
    
    return (
        <div className='bg-black mx-auto py-36'>
        <div className='space-y-24 md:space-y-36'>
            <Section>
            <div className='space-y-2 text-center'>
                <h1 className='text-5xl md:text-7xl font-semibold text-white'>{RichText.asText(slice.primary.contact_title)}</h1>
                <h1 className='text-2xl md:text-4xl text-white'>{RichText.asText(slice.primary.contact_subtitle)}</h1>
            </div>

            <div className='text-center max-w-2xl mx-auto text-white text-3xl md:justify-between space-y-12'>
                
                <div className='pt-6 md:pt-12'>
                <p className='text-2xl md:text-4xl text-white font-semibold'>{RichText.asText(slice.primary.contact_address)}</p>
                </div>

                <div>
                    <h1 className='text-4xl font-semibold text-white'>Email:</h1>
                    <a className='underline' href={`mailto:${RichText.asText(slice.primary.contact_email)}`}>
                        {RichText.asText(slice.primary.contact_email)}
                    </a>
                </div>
                <div>
                    <h1 className='text-4xl font-semibold text-white'>Phone:</h1>
                    <span className=''>
                        {RichText.asText(slice.primary.contact_phone)}
                    </span>
                </div>
            </div>
            </Section>
        </div>
        </div>
    )
}

export default Contact
