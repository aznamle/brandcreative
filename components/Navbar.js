import React, { useState, useEffect } from 'react'
import { default as NextLink } from 'next/link'
import { RichText } from 'prismic-reactjs'

import DocLink from './DocLink'


const Navbar = ({ menu = [] }) => (
  <Links menuLinks={menu.data.menu_links} />
)

const Links = ({ menuLinks }) => {

  const [navbar, setNavbar] = useState(false)
  const [isExpanded, toggleExpansion] = useState(false)
  const closeMobileMenu = () => toggleExpansion(false)


  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY >= 80) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
  }, [])


  const MenuLink = ({ menuLink }) => (
    <li className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-200 mr-4">
      <DocLink
        linkClass={`${ navbar ? `text-black hover:text-gray-300` : `text-white hover:text-gray-400`} font-light text-md lg:text-xl md:text-l transition ease-in-out duration-300`} 
        link={menuLink.link}
        toggleExpansion={toggleExpansion}
        >
        {RichText.asText(menuLink.label)}
      </DocLink>
    </li>
  )

  if(menuLinks) {
    return (
      <nav className={`transition duration-500 ease-in-out ${ navbar ? `bg-white` : `bg-transparent`} flex items-center justify-between lg:justify-around flex-wrap p-6 shadow-md top-0 fixed inset-x-0 z-40`}>
        
        <div className=" flex-shrink-0 text-black mr-6">
          <div className={`${ navbar ? `text-black hover:text-gray-300` : `text-white hover:text-gray-400`} flex items-center transition ease-in-out duration-300`}>
            <NextLink href='/'>
            <a className='flex space-x-2 font-semibold text-xl lg:text-2xl md:text-xl' onClick={closeMobileMenu}><h1 className='font-bold'>C A R B N </h1><h1 className='font-light'>F O R M E</h1></a>
            </NextLink>
          </div>
        </div>
        <div className="block lg:hidden">
          <button onClick={() => toggleExpansion(!isExpanded)} className={`${ navbar ? `text-black border-black` : `text-white border-white`} flex items-center px-3 py-3 rounded hover:text-gray-200 hover:border-black transition ease-in-out duration-500`}>
            <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className={`${ isExpanded ? `block` : `hidden` } w-full lg:flex lg:items-center lg:w-auto`}>
          <div className="lg:flex-grow">


            {menuLinks.map((menuLink, index) => (
              <MenuLink
                menuLink={menuLink}
                key={`menulink-${index}`}
              />
            ))}

          </div>
        </div>
      </nav>
    )
  }
  return null
}

export default Navbar