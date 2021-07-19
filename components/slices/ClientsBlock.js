import React from 'react'
import Image from 'next/image'
import { RichText } from 'prismic-reactjs'

const ClientsBlock = ({ slice }) => {
    console.log(slice)
    return (
        <div className='max-w-5xl mx-auto py-36'>
            <div className='flex items-center justify-center'>
                <div className='text-black w-1/3 text-center'>
                    <h1 className='text-3xl font-bold tracking-wide'>{RichText.asText(slice.primary.client_block_title)}</h1>
                </div>
                <div className='w-2/3 text-center'>
                    <p className='text-2xl font-extralight tracking-wide leading-normal'>{RichText.asText(slice.primary.clients_block_description)}</p>
                </div>
            </div>

            <div className='items-center justify-center flex'>
                {slice.items.map((client, i) => (
                    <div>
                        <span>{client.client_page.slug}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ClientsBlock
