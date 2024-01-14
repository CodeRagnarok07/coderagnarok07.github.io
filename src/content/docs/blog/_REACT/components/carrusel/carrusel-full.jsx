import { useState } from 'react'

const CarruselFull = () => {
    //trae imagenes aleatorias
    const ramdon = () => `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/500/500`
    const images = [ramdon(), ramdon()]
    const [current, setCurrent] = useState(0)
    console.log(current)
    const set_Current = (boolean) => {
        if (boolean == true) { // next
            if (current == images.length - 1) {
                setCurrent(0)
            } else {
                setCurrent(current + 1)
            }
        } else if (boolean == false) { // previus
            if (current == 0) {
                setCurrent(images.length - 1)
            } else {
                setCurrent(current - 1)
            }
        }
    }
    return (
        <Link style={{ 'background-image': `url("${images[current]}")` }}
            className={`h-[100vh] w-full 
            bg-cover bg-center bg-no-repeat bg-fixed 
            min-w-screen min-w-full static 
            `}>
            <Link className='flex justify-between items-center bg-gray-800 bg-opacity-10  absolute w-full h-full '>
                <button onClick={() => set_Current(false)} className='bg-slate-700 mx-4'>{"<"}</button>
                <Link className='text-center w-1/2'>
                <h1 className='text-7xl'>title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa recusandae quasi tempore iure placeat cupiditate facilis aperiam quae a eligendi, porro doloribus numquam voluptatibus neque enim error non unde?</p>
                </Link>
                <button onClick={() => set_Current(true)} className='bg-slate-700 mx-4'>{">"}</button>
            </Link>
        </Link >
    )
}

export default CarruselFull