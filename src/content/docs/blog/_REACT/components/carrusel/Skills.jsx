import { useRef, useEffect, useState } from 'react'
import Image from 'next/image';

const SkillsExp = () => {
    const slider = useRef()
    const [skills, setSkills] = useState()

    useEffect(() => {
        const fetchero = async () => {
            const resp = await fetch(`/api/localdata/skills/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const apiData = await resp.json()
            setSkills(apiData.success
            )
        }
        fetchero()

    }, [])



    // useEffect(() => {
    //     slider.current.scrollLeft += 50
    // }, [50])

    return (
        <Link id='#skills' className="mb-12 mx-auto lg:m-24 text-center">
            <Link className='mb-24'>
                <Link className="border-b mx-[5%] mb-16">
                    <h3 className="text-center text-[3rem] font-bold mb-6 underline leading-[4rem] mx-4">
                        Technical skills
                    </h3>
                </Link>
                <Link className='my-16'>
                    <Link className='flex items-center justify-center w-full h-full '>
                        <button className='bg-gray-500 mx-2' onClick={() => slider.current.scrollLeft -= 400}>
                            <svg className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800' fillRule='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 19l-7-7 7-7'></path></svg>
                        </button>
                        <Link ref={slider} className='overflow-hidden scroll-smooth h-full flex items-start justify-start'>
                            {skills && skills.map((e, i) => (
                                <Link key={i} className='snapt-start flex-shrink-0 mx-4 w-full md:w-1/3'>
                                    <Link className="flex justify-center">
                                        <Link className='bg-gray-400 p-5 rounded-full'>
                                            <Image width={50} height={50} src={`/images/skills/${e.name}.svg`} alt={`images${i}`} className='object-cover object-center w-full' />
                                        </Link>
                                    </Link>

                                    <h5>{e.name}</h5>
                                    <p className="">
                                        {e.description}</p>
                                </Link>
                            ))}
                        </Link>
                        <button className='bg-gray-500 mx-2' onClick={() => slider.current.scrollLeft += 400}>
                            <svg className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800' fillRule='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'></path></svg>
                        </button>
                    </Link>

                </Link>
            </Link>
        </Link>

    )
}

export default SkillsExp