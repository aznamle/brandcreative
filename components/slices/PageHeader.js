import React from 'react'
import { RichText } from 'prismic-reactjs'
import Section from '../Section'

const PageHeader = ({ slice }) => {
    return (
        <div className=" flex w-100 bg-center bg-no-repeat bg-cover"
            style={{
            backgroundImage: `url(${slice.primary.header_image.url})`,
            height: '100vh'
            }}
        >            
        <div className=''/>
                <div className='flex md:max-w-5xl lg:max-w-screen-xl mx-auto items-center justify-center h-full'>
                <div className='text-center lg:text-left w-4/5 lg:w-3/5'>
                    <Section>
                        <p className='text-lg text-white tracking-wider'>
                            {RichText.asText(slice.primary.sub_title)}
                        </p>
                        <h1 className='text-3xl md:text-4xl text-white tracking-wider py-2'>{RichText.asText(slice.primary.title)}</h1>
                        {/* <p className='text-md lg:text-lg text-white'>{RichText.asText(slice.primary.block_description)}</p> */}
                    </Section>
                </div>
                <div className='hidden lg:block w-2/5'>
                </div>
            </div>
        </div>
    )
}

export default PageHeader
