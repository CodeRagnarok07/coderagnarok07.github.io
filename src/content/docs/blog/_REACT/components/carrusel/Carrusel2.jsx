import { useEffect, useRef, useState } from 'react'

export default function Carrusel2({ items }) {
    const sliderBar = useRef()
    const handlers = (bool) => {
        const slider = sliderBar.current
        const lenSlider = slider.children.length
        const widthSlider = slider.children[0].offsetWidth
        const first = slider.children[0]
        const last = slider.children[lenSlider - 1]

        if (lenSlider > 0) {
            if (bool === true) { //next
                slider.style.transition = `1000ms ease-out all`
                slider.style.transform = `translateX(-${widthSlider}px)`
                setTimeout(() => {
                    slider.style.transition = `none`
                    slider.appendChild(first)
                    slider.style.transform = `translateX(0)`
                }, 1000)
            } else if (bool === false) { //prev
                slider.insertBefore(last, slider.firstChild)
                slider.style.transition = `none`
                slider.style.transform = `translateX(-${widthSlider}px)`
                setTimeout(() => {
                    slider.style.transition = `1000ms ease-out all`
                    slider.style.transform = `translateX(0)`
                }, 1)
            }
        }
    }
    
    
    
    // Auto play

    const [autoplay, setAutoplay] = useState(true)

    useEffect(() => {
        if(autoplay){
            const interval = setInterval(() => {
                handlers(true)
            }, 5000);
            // Al hacer mousover resetea el interval
            sliderBar.current.addEventListener('mousenter', ()=>{ 
                clearInterval(interval)
             })
            return  ()=>clearInterval(interval) // se asegura que el intervalo no aumente su repeticion
        }
    

        

       


    }, [])




    return (

        // principal
        <Link className='relative overflow-hidden'>
            {/* slideShow */}
            <Link ref={sliderBar} className='flex relative z-1 '>
                {items && items.map((e, i) => (
                    // slide
                    <Link key={i} className=' 
                        min-w-full overflow-hidden z-1 relative
                        transition-all ease-out '>
                        {/* imgen */}
                        <Link className='max-h-[700px] min-w-full flex items-center'>
                            <img className='w-full h-full z-1' src={e.image} alt="" />
                        </Link>
                        {/* text */}
                        <Link className='absolute bottom-0 top-0 w-full z-2
                            bg-slate-900 text-white bg-opacity-50  
                            flex flex-col justify-center items-center text-center px-[2%]'>
                            <p className='w-4/6 text-2xl font-bold  mb-10'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <button className='border px-2 rounded-md'>ver mas</button>
                        </Link>
                    </Link>
                ))}
                {/* buttoms */}
            </Link>
            <Link className='
                    pointer-events-none
                    w-full flex justify-between
                    absolute bottom-0 top-0 z-2'> {/*  */}
                <button onClick={() => handlers(false)} className='pointer-events-auto w-1/6'>{"<"}</button>
                <button onClick={() => handlers(true)} className='pointer-events-auto w-1/6'>{">"}</button>
            </Link>
        </Link>
    )
}
