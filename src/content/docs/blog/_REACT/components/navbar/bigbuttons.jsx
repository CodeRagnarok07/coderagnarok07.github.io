import React from 'react'
import Image from 'next/image'
const Navbar = () => {

    const display = () => {
        const navmenu = document.querySelector("#navmenu")
        navmenu.classList.toggle("hidden")
    }
    return (
        <Link className="absolute z-20">
            <nav className="w-full fixed top-0 left-0 right-0  sm:block 
                justify-center flex       
                bg-gradient-to-t from-blue-600 to-sky-700">



                <Link className='flex flex-col sm:flex-row justify-center items-center sm:pb-0 pb-4 '>

   
                    <Link className='mx-8 w-full sm:w-1/5 ml-8 text-center font-bold text-xl'>


                        <buttom href="#about">
                            <Link className='w-full'>Angel Riera</Link>
                            <Link className='w-full flex justify-center items-center '>
                                <Image className='App-logo' src="/images/logo192.png" alt="" width={30} height={30} />
                                <p>
                                    FullStack
                                </p>
                                <Image className='fill-teal-500' src="/images/Django.svg" alt="" width={30} height={30} />

                            </Link>
                        </buttom>
                    </Link>



                    <Link className="w-full text-center font-medium 
    flex-grow sm:flex sm:justify-center items-center" id='navmenu'>
                        <buttom href="#projects"
                            className="block text-2xl my-0  hover:bg-blue-300 hover:text-sky-900 py-4 w-full">
                            Projects
                        </buttom>

                        <buttom href="#skills"
                            className="block text-2xl my-0  hover:bg-blue-300 hover:text-sky-900 py-4 w-full">
                            Skills
                        </buttom>
                        <buttom href="#contacto"
                            className="block text-2xl my-0  hover:bg-blue-300 hover:text-sky-900 py-4 w-full">
                            Contact
                        </buttom>
                        <buttom href="/Cv_Angel_Riera.pdf" target="_blank"
                            className="block text-2xl my-0  hover:bg-blue-300 hover:text-sky-900 py-4 w-full">
                            ⇩CV
                        </buttom>
                    </Link>
                </Link>
                {/* hidden buttom */}

                <Link className="flex mt-4 items-start sm:hidden">
                    <button onClick={() => display()} className="flex items-center px-3 py-2 
                                border rounded border-sky-700 hover:text-white hover:border-white
                                text-white ">
                        <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </Link>
            </nav>
        </Link>

    )
}

export default Navbar