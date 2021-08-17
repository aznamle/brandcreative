import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import Section from '../Section'



const ClientsListBlock = ({ slice }) => {
    const logos = slice.items.length
    return (
        <div className='bg-gray-100'>
            <div className='py-24 space-y-24'>
                <div className='md:flex max-w-3xl lg:max-w-5xl mx-auto items-stretch justify-center md'>
                    <div className='text-black md:w-1/3 text-center'>
                        <h1 className='text-5xl font-bold tracking-wide'>{RichText.asText(slice.primary.client_block_title)}</h1>
                    </div>
                    <div className='md:w-2/3 text-center px-4'>
                        <p className='text-xl font-extralight tracking-wide leading-relaxed text-gray-700'>{RichText.asText(slice.primary.clients_block_description)}</p>
                    </div>
                </div>

                <div className={`mx-auto grid px-4 gap-2 ${ logos <= 3 ? `grid-cols-1 md:grid-cols-3 max-w-6xl px-12 md:px-0` : `px-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-screen-2xl` } `}>
                    {slice.items.map((client, i) => (
                        <Section key={i}>
                            <div className={`h-70 items-center bg-white flex ${ logos <= 3 ? 'px-0' : 'p-10'}`}>
                                    <Link href={{ pathname: `/clients/${client.client_page.uid}`}}>
                                        <a>
                                            <Image className='object-center block transform duration-300 ease-out hover:scale-75' 
                                                src={client.client_logo.url} 
                                                width={client.client_logo.dimensions.width} 
                                                height={client.client_logo.dimensions.height}
                                                alt={client.client_logo.alt}
                                            />
                                        </a>
                                    </Link>
                            </div>
                        </Section>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default ClientsListBlock
