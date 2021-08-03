import React from 'react'
import { RichText } from 'prismic-reactjs'
import Section from '../Section'

const PageHeader = ({ slice }) => {
    return (
        <div className=" flex w-100 bg-center bg-no-repeat bg-cover"
            style={{
            backgroundImage: `linear-gradient(rgb(0 0 0 / 30%), rgb(0 0 0 / 30%)), url(${slice.primary.header_image.url})`,
            height: '50vh',
            }}
        >
            <div className='flex md:max-w-5xl lg:max-w-screen-xl mx-auto items-center justify-center h-full'>
                <div className='text-center space-y-4 px-4'>
                    <Section>
                        <p className='text-lg font-light text-white tracking-wider'>
                            {RichText.asText(slice.primary.sub_title)}
                        </p>
                        <h1 className='text-3xl md:text-4xl text-white font-light py-2'>{RichText.asText(slice.primary.title)}</h1>
                        {slice.primary.block_description.map((text,i) => (
                            <p key={i} className='text-md lg:text-xl text-white font-light'>
                                {text.text}
                            </p>
                        ))}
                    </Section>
                </div>
            </div>
        </div>
    )
}

export default PageHeader
