import React from 'react'

import { RichText } from 'prismic-reactjs'
import Section from '../Section'
import Image from 'next/image'

const TeamBlock = ({ slice }) => {
    return (
        <div className="text-gray-600 body-font">
            <div className="container py-12 md:py-24 mx-auto">
                <Section>
                    <div className="flex flex-col text-center w-full pb-4 md:pb-8">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
                    </div>
                </Section>
                <div className="grid grid-flow-row grid-cols-1  md:grid-cols-3 grid-rows-1 gap-2 px-2">
                {slice.items.map((item,i) => (
                    <div className="p-2 w-full">
                    <Section>
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg space-x-6">
                            <Image className='bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4' src={item.employee_image.url} width={100} height={100} alt='team' />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium text-sm lg:text-xl">{RichText.asText(item.employee_name)}</h2>
                                <p className="text-gray-500 text-sm lg:text-lg font-light">{RichText.asText(item.employee_role)}</p>
                            </div>
                        </div>
                    </Section>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TeamBlock
