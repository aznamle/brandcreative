import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import { hrefResolver, linkResolver } from '../../prismic-configuration'


const ClientsBlock = ({ slice, clients }) => {
    return (
    <div className='bg-gray-50'>
        <div className='max-w-3xl lg:max-w-5xl mx-auto py-36 space-y-24'>
            <div className='md:flex items-stretch justify-center'>
                <div className='text-black md:w-1/3 text-center'>
                    <h1 className='text-5xl font-bold tracking-wide'>{RichText.asText(slice.primary.client_block_title)}</h1>
                </div>
                <div className='md:w-2/3 text-center'>
                    <p className='text-xl font-extralight tracking-wide leading-relaxed'>{RichText.asText(slice.primary.clients_block_description)}</p>
                </div>
            </div>

            <div className='items-center justify-center flex space-x-5'>
                {slice.items.map((client, i) => (
                    <div key={i} className='bg-white p-16'>
                        <Link href={`clients/${client.client_page.uid}`}>
                            <Image  className='object-center block transform duration-300 ease-out hover:scale-75' src={client.client_logo.url} width={250} height={200} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}

export default ClientsBlock
