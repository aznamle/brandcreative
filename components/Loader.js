import React from 'react'
import { motion } from 'framer-motion'

function Loader() {

    //bounce distance
    const load = {
        start: {
            y: '45%'
        },
        end: {
            y: '55%'
        }
    }

    //bounce effect
    const transition = {
        duration: .6,
        flip: Infinity,
        ease: 'easeInOut'
    }

    return (
        <motion.div 
            className='z-40 h-full w-full flex items-center justify-center fixed top-0 left-0 bg-white opacity-100'
            initial='start'
            animate='end'
        >
                <motion.h1
                    className='text-5xl font-bold'
                    variants={load}
                    transition={transition}
                >
                    Brand
                </motion.h1>
                <motion.h1
                    className={`text-5xl font-bold italic text-gray-400`}
                    variants={load}
                    transition={transition}
                >
                    Creative         
                </motion.h1>
        </motion.div>
    )
}
export default Loader
