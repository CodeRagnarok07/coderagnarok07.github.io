import React, { useEffect, useState } from 'react'
import DropImg from '../../DropImg'
import upload_s3 from '@/lib/upload_s3'
import SubAdd from './SubAdd'


export default function Variants({ allObjet, setObjeto, objeto, index }) {

    const [sizes, setSizes] = useState(objeto.sizes)

    // const [imageFile, setImageFile] = useState(id ? formData.image : null)
    const [Imgagen1, setImgagen1] = useState("")
    const [Imgagen2, setImgagen2] = useState("")

    const handleChange = (e) => {
        // const iconUrl = await upload_s3(Imgagen2, `icon-${slug}`)
        let name = e.target.name
        let newArray = [...allObjet];
        newArray[index][name] = e.target.value
        setObjeto(newArray)
    }


    useEffect(() => {
        let newArray = [...allObjet];
        newArray[index]["sizes"] = sizes
        setObjeto(newArray)
    }, [sizes])

    
    const uploadImgs = async (img, n2) => {
        if (typeof (img) != "string") {
            await upload_s3(img, `product-${objeto.name}-variante-${objeto.name}-${index}-${n2}-${img.name}`).then(resUrl => {
                let newArray = [...allObjet];
                newArray[index]["pictures"][n2] = resUrl
                setObjeto(newArray)
                alert(`${img.name} fue subida exitosamente`)
            })
        }
    }

    useEffect(() => {
        uploadImgs(Imgagen1, 0) 
    }, [Imgagen1])

    useEffect(() => {
        uploadImgs(Imgagen2, 2) 
    }, [Imgagen2])





    const Delete = (e) => {
        const filtered = allObjet.filter((e, i) => i !== index)
        setObjeto(filtered);
    }

    // onChange={(e) => {
    //     let newArray = [...allObjet];
    //     newArray[index] = { "sizes": e.target.value };
    //     setObjeto(newArray);
    // }
    // }





    return (

        <Link
            className='border border-gray-300 rounded-3xl p-6 mb-8'>
            <Link className='flex justify-between'>
                <h3 className='w-1/3'>{objeto.name}</h3>
                <Link className='flex w-1/3 justify-between items-center'>
                    <Link className='flex justify-between '>
                        <label id='status' className="switch mt-[10px]">
                            <input
                                checked={objeto.status}
                                value={objeto.status}
                                onChange={(e) => {
                                    let newArray = [...allObjet];
                                    newArray[index] = { ...objeto, ["status"]: e.target.checked };
                                    setObjeto(newArray)
                                }}
                                name="status"
                                type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                        <label htmlFor="status" className='ml-4 text-color1'>Activar</label>
                    </Link>
                </Link>


                <Link
                    onClick={Delete}
                    className='cursor-pointer border hover:border-red-500 p-1 my-1 text-red-600 font-bold'>
                    Eliminar
                </Link>

            </Link>


            {/* CATEGORIAS */}
            <Link className='grid grid-cols-3 gap-5 mb-4'>

                {/* SLUG */}
                <Link className='ligh py-2 px-4 flex flex-col'>
                    <label htmlFor="name" className='small text-color1'>
                        name
                    </label>
                    <input
                        value={objeto.name}
                        onChange={(e) => handleChange(e)}
                        name="name" placeholder='Categoria..' className='bg-transparent' id='name' type="text" />




                </Link>
                {/* END SLUG */}
                {/* SLUG */}
                <Link className='ligh py-2 px-4 flex flex-col'>
                    <label htmlFor="sku" className='small text-color1'>
                        sku
                    </label>
                    <input
                        value={objeto.sku}
                        onChange={(e) => handleChange(e)}
                        name="sku" placeholder='Categoria..' className='bg-transparent' id='sku' type="text" />
                </Link>
                {/* END SLUG */}







            </Link>
            {objeto.sizes.map((s, is) => (
                <Link key={is}>
                    <SubAdd allObjet={sizes} setObjeto={setSizes} objeto={s} index={is} />
                </Link>
            ))}

            <Link
                onClick={() => setSizes([...sizes, [{ "name": "" }]])}
                className='cursor-pointer my-8 mx-auto w-1/3 border text-center p-2 border-[#001F81] rounded-md '>
                + Agregar talla
            </Link>

            {/* CATEGORIAS */}

            <Link className="grid grid-cols-2 gap-4">
                <Link className='group relative h-[166px] flex-col center ligh rounded-xl mb-4'>
                    {Imgagen1 &&
                        <p className='text-white font-bold absolute p-2 group-hover:bg-gray-900 rounded-xl'>imagen 1</p>
                    }
                    <DropImg ID={`${index}img1`} item={Imgagen1} setItem={setImgagen1} >

                        {objeto.pictures[0] && objeto.pictures[0].startsWith("http") ?

                            <img className='cursor-pointer' src={objeto.pictures[0]} alt="" />
                            :

                            <>
                                <Link className='mx-auto h-14 w-14 yellow rounded-full center cursor-pointer'>
                                    <svg className='' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.3333 5.21871V12.7414C11.3333 13.095 11.1928 13.4341 10.9428 13.6842C10.6927 13.9342 10.3536 14.0747 9.99996 14.0747C9.64634 14.0747 9.3072 13.9342 9.05715 13.6842C8.8071 13.4341 8.66663 13.095 8.66663 12.7414V5.21871L7.17196 6.71471C6.9216 6.96489 6.5821 7.10538 6.22815 7.10525C5.87421 7.10513 5.53481 6.96441 5.28463 6.71404C5.03444 6.46368 4.89395 6.12418 4.89408 5.77024C4.89421 5.41629 5.03493 5.07689 5.28529 4.82671L9.05729 1.05737C9.30733 0.807413 9.64641 0.666992 9.99996 0.666992C10.3535 0.666992 10.6926 0.807413 10.9426 1.05737L14.7146 4.82804C14.8385 4.95201 14.9368 5.09916 15.0038 5.2611C15.0708 5.42304 15.1052 5.59659 15.1052 5.77185C15.1051 5.9471 15.0705 6.12063 15.0034 6.28252C14.9363 6.44441 14.8379 6.59149 14.714 6.71537C14.59 6.83925 14.4428 6.9375 14.2809 7.00451C14.119 7.07152 13.9454 7.10598 13.7702 7.10592C13.5949 7.10586 13.4214 7.07128 13.2595 7.00415C13.0976 6.93703 12.9505 6.83868 12.8266 6.71471L11.3333 5.21871ZM1.99996 16.6667H18C18.3536 16.6667 18.6927 16.8072 18.9428 17.0572C19.1928 17.3073 19.3333 17.6464 19.3333 18C19.3333 18.3537 19.1928 18.6928 18.9428 18.9429C18.6927 19.1929 18.3536 19.3334 18 19.3334H1.99996C1.64634 19.3334 1.3072 19.1929 1.05715 18.9429C0.807102 18.6928 0.666626 18.3537 0.666626 18C0.666626 17.6464 0.807102 17.3073 1.05715 17.0572C1.3072 16.8072 1.64634 16.6667 1.99996 16.6667Z" fill="white" />
                                    </svg>
                                </Link>
                                <Link className='text-center mx-4 font-medium'>
                                    Arrastra y suelta o elige la imagen
                                </Link>
                            </>

                        }
                    </DropImg>


                </Link>


                <Link className='group relative h-[166px] flex-col center ligh rounded-xl mb-4'>
                    {Imgagen2 &&
                        <p className='text-white font-bold absolute p-2 group-hover:bg-gray-900 rounded-xl'>imagen 1</p>
                    }
                    <DropImg ID={`${index}img2`} item={Imgagen2} setItem={setImgagen2} >
                        {objeto.pictures[1] && objeto.pictures[1].startsWith("http") ?
                            <img className='cursor-pointer' src={objeto.pictures[1]} alt="" />
                            :

                            <>
                                <Link className='mx-auto h-14 w-14 yellow rounded-full center cursor-pointer'>
                                    <svg className='' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.3333 5.21871V12.7414C11.3333 13.095 11.1928 13.4341 10.9428 13.6842C10.6927 13.9342 10.3536 14.0747 9.99996 14.0747C9.64634 14.0747 9.3072 13.9342 9.05715 13.6842C8.8071 13.4341 8.66663 13.095 8.66663 12.7414V5.21871L7.17196 6.71471C6.9216 6.96489 6.5821 7.10538 6.22815 7.10525C5.87421 7.10513 5.53481 6.96441 5.28463 6.71404C5.03444 6.46368 4.89395 6.12418 4.89408 5.77024C4.89421 5.41629 5.03493 5.07689 5.28529 4.82671L9.05729 1.05737C9.30733 0.807413 9.64641 0.666992 9.99996 0.666992C10.3535 0.666992 10.6926 0.807413 10.9426 1.05737L14.7146 4.82804C14.8385 4.95201 14.9368 5.09916 15.0038 5.2611C15.0708 5.42304 15.1052 5.59659 15.1052 5.77185C15.1051 5.9471 15.0705 6.12063 15.0034 6.28252C14.9363 6.44441 14.8379 6.59149 14.714 6.71537C14.59 6.83925 14.4428 6.9375 14.2809 7.00451C14.119 7.07152 13.9454 7.10598 13.7702 7.10592C13.5949 7.10586 13.4214 7.07128 13.2595 7.00415C13.0976 6.93703 12.9505 6.83868 12.8266 6.71471L11.3333 5.21871ZM1.99996 16.6667H18C18.3536 16.6667 18.6927 16.8072 18.9428 17.0572C19.1928 17.3073 19.3333 17.6464 19.3333 18C19.3333 18.3537 19.1928 18.6928 18.9428 18.9429C18.6927 19.1929 18.3536 19.3334 18 19.3334H1.99996C1.64634 19.3334 1.3072 19.1929 1.05715 18.9429C0.807102 18.6928 0.666626 18.3537 0.666626 18C0.666626 17.6464 0.807102 17.3073 1.05715 17.0572C1.3072 16.8072 1.64634 16.6667 1.99996 16.6667Z" fill="white" />
                                    </svg>
                                </Link>
                                <Link className='text-center mx-4 font-medium'>
                                    Arrastra y suelta o elige la imagen
                                </Link>
                            </>

                        }
                    </DropImg>

                </Link>

            </Link>
        </Link>




    )
}
