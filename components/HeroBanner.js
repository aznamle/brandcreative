import React from 'react'
import { RichText } from 'prismic-reactjs';

export default function HeroBanner({ banner }) {
    const urlEmpty = banner.hero_image.url

    return (
        <div>
        { urlEmpty !== undefined ? <div className="flex w-100 h-screen items-center bg-center bg-no-repeat bg-cover z-20"
                style={{
                  backgroundImage: `url(${banner.image.url})`
                }}>
            </div>
            :
            <video src={RichText.asText(banner.video_url)} type='video/mp4' autoPlay muted loop playsInline alt="video" 
            className=" z-20 block object-cover object-center h-screen w-full"
            />
        }

        <div className="flex absolute inset-0 z-10 items-end justify-center h-screen w-full bg-cover bg-gray-900 bg-opacity-20" />
        </div>
    )
}
