import React from 'react'
import { motion } from 'framer-motion'

function Loader() {

    //bounce distance
    const load = {
        visible: {
            opacity: '100%',
        },
        hidden: {
            opacity: '5%'
        }
    }

    //bounce effect
    const transition = {
        duration: .8,
        flip: Infinity,
        ease: 'easeIn'
    }

    return (
        <motion.div 
            className='z-40 h-full w-full flex items-center justify-center fixed top-0 left-0 bg-white opacity-100'
            initial='visible'
            animate='hidden'
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
