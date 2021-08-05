import React from 'react'
import { motion } from 'framer-motion'

function Loader() {

    //bounce distance
    const load = {
        start: {
            y: '40%'
        },
        end: {
            y: '60%'
        }
    }

    //bounce effect
    const transition = {
        duration: .4,
        flip: Infinity,
        ease: 'easeInOut'
    }

    return (
        <motion.div 
            className='h-full w-full flex items-center justify-center fixed top-0 left-0 bg-white opacity-100'
            initial='start'
            animate='end'
        >
            <motion.h1 
                className='font-semibold lg:text-5xl md:font-4xl text-center'
                variants={load}
                transition={transition}
            >
                <h1 className='font-bold '>Brand</h1><h1 className={`font-medium italic text-gray-400`}>Creative</h1>
            </motion.h1>
        </motion.div>
    )
}
export default Loader
