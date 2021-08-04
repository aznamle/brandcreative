import React from 'react'

import { RichText } from 'prismic-reactjs'
import Section from '../Section'
import Image from 'next/image'

const TeamBlock = ({ slice }) => {
    return (
        <div class="text-gray-600 body-font">
            <div class="container  py-24 mx-auto">
                <div class="flex flex-col text-center w-full pb-8">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
                </div>
                <div class="grid grid-flow-row grid-cols-1  md:grid-cols-3 grid-rows-1 gap-2 -m-2">
                {slice.items.map((item,i) => (
                    <div class="p-2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg space-x-6">
                            <Image className='bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4' src={item.employee_image.url} width={100} height={100} alt='team' />
                            <div class="flex-grow">
                                <h2 class="text-gray-900 title-font font-medium">{RichText.asText(item.employee_name)}</h2>
                                <p class="text-gray-500">UI Designer</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TeamBlock
