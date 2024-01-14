import { useRef } from 'react'


/**
 * 
 * @param children  Contenido
 * @param ID IdRequired for useRef
 * @param item useSate
 * @param setItem SetUsestate
 * @returns 
 */
export default function DropImg({ children, ID, item, setItem }) {


    const itemRef = useRef()
    // get drop iten
    /**
     * @param {current} e 
     */
    const handleDrop = (e) => {
        e.preventDefault()
        if (e.dataTransfer.items) {
            e.dataTransfer.items.clear();
        } else {
            e.dataTransfer.clearData();
        }
        const file = e.dataTransfer.items[0].getAsFile()
        itemRef.current.append(file)
        setItem(file)
    }

    return (
        <Link className='cursor-pointer'>
            <label htmlFor={ID} 
                onDrop={(e) => handleDrop(e)}
                onDragOver={(e) => {e.preventDefault()}}
            >
                {item ?
                    <>
                        <Link className='relative opacity-50 p-5 border border-dashed border-black m-5 rounded-md'>
                            <img src={URL.createObjectURL(item)} alt="" />
                            <p className='small center underline'> editar</p>
                        </Link>
                    </>
                    :
                    <>
                        {children}
                    </>
                }

            </label>
            <input
                ref={itemRef}
                onChange={e => setItem(itemRef.current.files[0])}
                className='hidden' type="file" name="" id={ID} />
            {/* IMAGEN */}

        </Link>
    )
}
