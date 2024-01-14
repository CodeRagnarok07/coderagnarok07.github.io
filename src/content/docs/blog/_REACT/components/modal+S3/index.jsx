import { lazy, Suspense, useEffect, useState } from 'react'
import Image from 'next/image'

import { useQuery } from '@tanstack/react-query';
import Gql from '@/lib/Gql'
import Pagination from '../Pagination';

const Add = lazy(() => import('./Add'))


export default function Productos() {
    const [page, setPage] = useState({
        totalPages: 0,
        totalDocs: 0,
        pagingCounter: null,
        page: 1,
        nextPage: null,
        prevPage: null,
    })



    // GET Categories
    const query = `
    query{
        getAllProducts(input:{          
            page:${page.page}
          }){
          totalPages
          page    
          totalDocs
          nextPage
          prevPage
          pagingCounter
          docs{
            id
            name
            price
            offerPrice
            owner
            categories{
                name
                id}
            subCategories{
                name
                id}
            subSubCategories{
                name
                id}
            variants{
                id
                pictures
                sizes{
                    stock
                }
            }
            status
          }
        }
      }`


    const { data, error, isLoading, refetch } = useQuery(["posts"], async () => Gql(query));


    const [Productos, setProductos] = useState(null)
    const [current, setCurrent] = useState(null)

    useEffect(() => {
        if (!isLoading ) {
            if(data.data){
                if(data.data.getAllProducts){
                
                setProductos(data.data.getAllProducts.docs)
                setPage({
                    ...page,
                    ["totalPages"]: data.data.getAllProducts.totalPages,
                    ["totalDocs"]: data.data.getAllProducts.totalDocs,
                    ["pagingCounter"]: data.data.getAllProducts.pagingCounter,
                    ["nextPage"]: data.data.getAllProducts.nextPage,
                    ["prevPage"]: data.data.getAllProducts.prevPage,
                })
            }
        }
        }
        refetch()

    }, [data, page.page])

    // print stock
    const getStock = (e) => {
        let stock = 0
        for (let i of e) {
            for (let s of i.sizes) {
                stock = stock + s.stock
            }
        }
        return stock
    }

    // delete
    const Delete = async (id, name) => {

        const confr = confirm(`desea borrar el usuario ${name}`)
        if (confr) {
            let del_query = `mutation{
                                deleteProduct(id:"${id}"){
                                    id
                                }            
                            }`
            await Gql(del_query)
            refetch()
        }
    }
    const [add, setAdd] = useState(false)


    const handleCheck = async (e) => {
        const query = `
        mutation{
            updateProduct(
                id: "${e.id}",
                input: {
                    categories: ["${e.categories.map(e => e.id)}"],
                    subCategories: ["${e.subCategories.map(e => e.id)}"],
                    subSubCategories: ["${e.subSubCategories.map(e => e.id)}"],
                    owner: "${e.owner}",
                    status: ${!e.status},
                    variants: [${e.variants.map(e => `{id:"${e.id}"}`)}]
                    }
                ){
                    id,
                    status,
                }
            }`

        const res = await Gql(query)
        refetch()
    }

    return (<Link className='h-100hv'>
        <Link className="flex justify-between mb-12">

            <h2>Productos</h2>

            <Link onClick={() => { setCurrent(null), setAdd(true) }}
                className="primary px-8 py-4 text-white font-medium rounded-md cursor-pointer">
                + crear Producto
            </Link>
        </Link>

        <Link className='border-2 rounded-xl p-8 mb-[33px]'>
            <table className='w-full text-right capitalize align-top '>
                <thead className='border-separate border-spacing-2'>
                    <tr className="font-medium h-10">
                        <th className='text-right w-[81px] pr-8'>
                            <Link >
                                <span>
                                    imagen
                                </span>
                                <svg className='mt-2' width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.04733 3.87608L8.34733 0.576084C8.40882 0.512411 8.48239 0.461622 8.56372 0.426683C8.64506 0.391744 8.73254 0.373353 8.82106 0.372584C8.90958 0.371815 8.99736 0.388682 9.0793 0.422203C9.16123 0.455724 9.23566 0.505226 9.29826 0.567821C9.36085 0.630416 9.41035 0.70485 9.44387 0.786781C9.4774 0.868712 9.49426 0.956499 9.49349 1.04502C9.49272 1.13354 9.47433 1.22102 9.43939 1.30235C9.40445 1.38369 9.35367 1.45725 9.28999 1.51875L5.51866 5.29008C5.39364 5.41506 5.2241 5.48527 5.04733 5.48527C4.87055 5.48527 4.70101 5.41506 4.57599 5.29008L0.804661 1.51875C0.740987 1.45725 0.690199 1.38369 0.65526 1.30235C0.62032 1.22102 0.60193 1.13354 0.60116 1.04502C0.600391 0.956499 0.617259 0.868712 0.65078 0.786781C0.6843 0.70485 0.733802 0.630416 0.796397 0.567821C0.858992 0.505226 0.933427 0.455724 1.01536 0.422203C1.09729 0.388682 1.18508 0.371815 1.27359 0.372584C1.36211 0.373353 1.44959 0.391744 1.53093 0.426683C1.61227 0.461622 1.68583 0.512411 1.74733 0.576084L5.04733 3.87608Z" fill="#071234" />
                                </svg>
                            </Link>
                        </th>
                        <th className='text-left'>
                            <Link >
                                <span>
                                    nombre
                                </span>
                                <svg className='mt-2' width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.04733 3.87608L8.34733 0.576084C8.40882 0.512411 8.48239 0.461622 8.56372 0.426683C8.64506 0.391744 8.73254 0.373353 8.82106 0.372584C8.90958 0.371815 8.99736 0.388682 9.0793 0.422203C9.16123 0.455724 9.23566 0.505226 9.29826 0.567821C9.36085 0.630416 9.41035 0.70485 9.44387 0.786781C9.4774 0.868712 9.49426 0.956499 9.49349 1.04502C9.49272 1.13354 9.47433 1.22102 9.43939 1.30235C9.40445 1.38369 9.35367 1.45725 9.28999 1.51875L5.51866 5.29008C5.39364 5.41506 5.2241 5.48527 5.04733 5.48527C4.87055 5.48527 4.70101 5.41506 4.57599 5.29008L0.804661 1.51875C0.740987 1.45725 0.690199 1.38369 0.65526 1.30235C0.62032 1.22102 0.60193 1.13354 0.60116 1.04502C0.600391 0.956499 0.617259 0.868712 0.65078 0.786781C0.6843 0.70485 0.733802 0.630416 0.796397 0.567821C0.858992 0.505226 0.933427 0.455724 1.01536 0.422203C1.09729 0.388682 1.18508 0.371815 1.27359 0.372584C1.36211 0.373353 1.44959 0.391744 1.53093 0.426683C1.61227 0.461622 1.68583 0.512411 1.74733 0.576084L5.04733 3.87608Z" fill="#071234" />
                                </svg>
                            </Link>
                        </th>
                        <th className='text-left'>
                            <Link >
                                <span>
                                    stock
                                </span>
                                <svg className='mt-2' width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.04733 3.87608L8.34733 0.576084C8.40882 0.512411 8.48239 0.461622 8.56372 0.426683C8.64506 0.391744 8.73254 0.373353 8.82106 0.372584C8.90958 0.371815 8.99736 0.388682 9.0793 0.422203C9.16123 0.455724 9.23566 0.505226 9.29826 0.567821C9.36085 0.630416 9.41035 0.70485 9.44387 0.786781C9.4774 0.868712 9.49426 0.956499 9.49349 1.04502C9.49272 1.13354 9.47433 1.22102 9.43939 1.30235C9.40445 1.38369 9.35367 1.45725 9.28999 1.51875L5.51866 5.29008C5.39364 5.41506 5.2241 5.48527 5.04733 5.48527C4.87055 5.48527 4.70101 5.41506 4.57599 5.29008L0.804661 1.51875C0.740987 1.45725 0.690199 1.38369 0.65526 1.30235C0.62032 1.22102 0.60193 1.13354 0.60116 1.04502C0.600391 0.956499 0.617259 0.868712 0.65078 0.786781C0.6843 0.70485 0.733802 0.630416 0.796397 0.567821C0.858992 0.505226 0.933427 0.455724 1.01536 0.422203C1.09729 0.388682 1.18508 0.371815 1.27359 0.372584C1.36211 0.373353 1.44959 0.391744 1.53093 0.426683C1.61227 0.461622 1.68583 0.512411 1.74733 0.576084L5.04733 3.87608Z" fill="#071234" />
                                </svg>
                            </Link>
                        </th>
                        <th className='text-left'>
                            <Link >
                                <span>
                                    Precio
                                </span>
                                <svg className='mt-2' width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.04733 3.87608L8.34733 0.576084C8.40882 0.512411 8.48239 0.461622 8.56372 0.426683C8.64506 0.391744 8.73254 0.373353 8.82106 0.372584C8.90958 0.371815 8.99736 0.388682 9.0793 0.422203C9.16123 0.455724 9.23566 0.505226 9.29826 0.567821C9.36085 0.630416 9.41035 0.70485 9.44387 0.786781C9.4774 0.868712 9.49426 0.956499 9.49349 1.04502C9.49272 1.13354 9.47433 1.22102 9.43939 1.30235C9.40445 1.38369 9.35367 1.45725 9.28999 1.51875L5.51866 5.29008C5.39364 5.41506 5.2241 5.48527 5.04733 5.48527C4.87055 5.48527 4.70101 5.41506 4.57599 5.29008L0.804661 1.51875C0.740987 1.45725 0.690199 1.38369 0.65526 1.30235C0.62032 1.22102 0.60193 1.13354 0.60116 1.04502C0.600391 0.956499 0.617259 0.868712 0.65078 0.786781C0.6843 0.70485 0.733802 0.630416 0.796397 0.567821C0.858992 0.505226 0.933427 0.455724 1.01536 0.422203C1.09729 0.388682 1.18508 0.371815 1.27359 0.372584C1.36211 0.373353 1.44959 0.391744 1.53093 0.426683C1.61227 0.461622 1.68583 0.512411 1.74733 0.576084L5.04733 3.87608Z" fill="#071234" />
                                </svg>
                            </Link>
                        </th>
                        <th className='text-left'>
                            <Link >
                                <span>
                                    Precio Oferta
                                </span>
                                <svg className='mt-2' width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.04733 3.87608L8.34733 0.576084C8.40882 0.512411 8.48239 0.461622 8.56372 0.426683C8.64506 0.391744 8.73254 0.373353 8.82106 0.372584C8.90958 0.371815 8.99736 0.388682 9.0793 0.422203C9.16123 0.455724 9.23566 0.505226 9.29826 0.567821C9.36085 0.630416 9.41035 0.70485 9.44387 0.786781C9.4774 0.868712 9.49426 0.956499 9.49349 1.04502C9.49272 1.13354 9.47433 1.22102 9.43939 1.30235C9.40445 1.38369 9.35367 1.45725 9.28999 1.51875L5.51866 5.29008C5.39364 5.41506 5.2241 5.48527 5.04733 5.48527C4.87055 5.48527 4.70101 5.41506 4.57599 5.29008L0.804661 1.51875C0.740987 1.45725 0.690199 1.38369 0.65526 1.30235C0.62032 1.22102 0.60193 1.13354 0.60116 1.04502C0.600391 0.956499 0.617259 0.868712 0.65078 0.786781C0.6843 0.70485 0.733802 0.630416 0.796397 0.567821C0.858992 0.505226 0.933427 0.455724 1.01536 0.422203C1.09729 0.388682 1.18508 0.371815 1.27359 0.372584C1.36211 0.373353 1.44959 0.391744 1.53093 0.426683C1.61227 0.461622 1.68583 0.512411 1.74733 0.576084L5.04733 3.87608Z" fill="#071234" />
                                </svg>
                            </Link>
                        </th>
                        <th className='text-left'>estado</th>
                        <th className='text-center'>acciones</th>
                    </tr>
                    <tr className='h-5'></tr>

                </thead  >
                <tbody className='text-color1  w-full border-t-2 '>
                    <tr className='h-5'></tr>

                    {Productos && Productos.map((e, i) => (
                        <tr key={i} className='text-left h-[64.75px]'>
                            <td>
                                <Link className='w-[56px] h-auto'>
                                    {e.variants.length > 0 && e.variants[0].pictures && e.variants[0].pictures[0] != undefined && e.variants[0].pictures[0].startsWith("http") &&
                                        <img className='z-0' width={100} height={100} src={e.variants[0].pictures[0]} />
                                    }
                                </Link>
                            </td>
                            <td className='font-normal'>
                                <Link>

                                    {e.name}
                                </Link>
                            </td>
                            {/* STOCK */}
                            <td className='font-normal'>
                                <Link>
                                    {getStock(e.variants)}
                                </Link>
                            </td>
                            <td className='font-normal'>
                                <Link>
                                    {e.price}$
                                </Link>
                            </td>
                            <td className='font-normal'>
                                <Link>
                                    {e.offerPrice}$
                                </Link>
                            </td>


                            <td className='pt-2 '>
                                <Link>
                                    <label className="switch">
                                        <input
                                            onClick={async () => handleCheck(e)}
                                            type="checkbox" defaultChecked={e.status} />
                                        <span className="slider round"></span>
                                    </label>
                                </Link>
                            </td>
                            <td className='h-full flex space-x-7'>
                                <Link
                                    className='cursor-pointer flex items-end space-x-1 mt-3'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.3333 8.00005C13.3333 6.79339 10.8267 5.34339 7.99534 5.33339C5.18334 5.32339 2.66668 6.78539 2.66668 8.00005C2.66668 9.21672 5.16934 10.6707 7.99801 10.6667C10.8347 10.6627 13.3333 9.21339 13.3333 8.00005ZM8.00001 12.0001C4.63868 12.0047 1.33334 10.2094 1.33334 8.00005C1.33334 5.79072 4.65601 3.98872 8.00001 4.00005C11.344 4.01139 14.6667 5.79072 14.6667 8.00005C14.6667 10.2094 11.3613 11.9954 8.00001 12.0001ZM8.00001 10.6667C7.29277 10.6667 6.61449 10.3858 6.11439 9.88567C5.6143 9.38558 5.33334 8.7073 5.33334 8.00005C5.33334 7.29281 5.6143 6.61453 6.11439 6.11444C6.61449 5.61434 7.29277 5.33339 8.00001 5.33339C8.70725 5.33339 9.38553 5.61434 9.88563 6.11444C10.3857 6.61453 10.6667 7.29281 10.6667 8.00005C10.6667 8.7073 10.3857 9.38558 9.88563 9.88567C9.38553 10.3858 8.70725 10.6667 8.00001 10.6667ZM8.00001 9.33339C8.35363 9.33339 8.69277 9.19291 8.94282 8.94286C9.19287 8.69281 9.33334 8.35368 9.33334 8.00005C9.33334 7.64643 9.19287 7.30729 8.94282 7.05724C8.69277 6.8072 8.35363 6.66672 8.00001 6.66672C7.64639 6.66672 7.30725 6.8072 7.0572 7.05724C6.80715 7.30729 6.66668 7.64643 6.66668 8.00005C6.66668 8.35368 6.80715 8.69281 7.0572 8.94286C7.30725 9.19291 7.64639 9.33339 8.00001 9.33339Z" fill="#646A7A" />
                                    </svg>
                                    <span className='-mb-1'>ver</span>
                                </Link>

                                {/* edit */}
                                <Link onClick={() => {
                                    setCurrent(e.id)
                                    setAdd(true)
                                }}
                                    className='cursor-pointer flex items-end space-x-1 mt-3'>
                                    <svg className='' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.82533 5.31454L3.79999 11.3399L3.40599 12.6839L4.72266 12.3032L10.768 6.25787L9.82533 5.31454ZM10.8533 4.28654L11.796 5.22921L12.6747 4.35054C12.7371 4.28803 12.7723 4.20326 12.7723 4.11487C12.7723 4.02648 12.7371 3.94172 12.6747 3.87921L12.2027 3.40787C12.1402 3.34538 12.0554 3.31028 11.967 3.31028C11.8786 3.31028 11.7938 3.34538 11.7313 3.40787L10.854 4.28654H10.8533ZM13.146 2.46521L13.6173 2.93654C13.9298 3.24909 14.1053 3.67293 14.1053 4.11487C14.1053 4.55681 13.9298 4.98066 13.6173 5.29321L5.42266 13.4885L2.60933 14.3019C2.49465 14.3349 2.3732 14.3366 2.25766 14.3067C2.14212 14.2768 2.03672 14.2165 1.95247 14.1319C1.86821 14.0474 1.80819 13.9418 1.77868 13.8262C1.74916 13.7105 1.75123 13.5891 1.78466 13.4745L2.61666 10.6379L10.79 2.46454C11.1025 2.15209 11.5264 1.97656 11.9683 1.97656C12.4103 1.97656 12.8341 2.15209 13.1467 2.46454L13.146 2.46521Z" fill="#646A7A" />
                                    </svg>
                                    <span className='-mb-1'>editar</span>
                                </Link>

                                {/* delete */}
                                <Link onClick={async () => Delete(e.id, e.name)}
                                    className='cursor-pointer flex items-end space-x-1 mt-3'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.5554 4.66659L12.07 13.4066C12.0513 13.747 11.9028 14.0673 11.6552 14.3016C11.4076 14.536 11.0796 14.6666 10.7387 14.6666H5.26135C4.92042 14.6666 4.59244 14.536 4.34483 14.3016C4.09721 14.0673 3.94877 13.747 3.93002 13.4066L3.44469 4.66659H3.33335C3.15654 4.66659 2.98697 4.59635 2.86195 4.47132C2.73692 4.3463 2.66669 4.17673 2.66669 3.99992V1.99992C2.66669 1.82311 2.73692 1.65354 2.86195 1.52851C2.98697 1.40349 3.15654 1.33325 3.33335 1.33325H12.6667C12.8435 1.33325 13.0131 1.40349 13.1381 1.52851C13.2631 1.65354 13.3334 1.82311 13.3334 1.99992V3.99992C13.3334 4.17673 13.2631 4.3463 13.1381 4.47132C13.0131 4.59635 12.8435 4.66659 12.6667 4.66659H12.5554ZM11.22 4.66659H4.78002L5.26135 13.3333H10.7387L11.22 4.66659ZM4.00002 2.66659V3.33325H12V2.66659H4.00002ZM6.66669 5.99992C6.8435 5.99992 7.01307 6.07016 7.13809 6.19518C7.26312 6.32021 7.33335 6.48977 7.33335 6.66659V11.3333C7.33335 11.5101 7.26312 11.6796 7.13809 11.8047C7.01307 11.9297 6.8435 11.9999 6.66669 11.9999C6.48988 11.9999 6.32031 11.9297 6.19528 11.8047C6.07026 11.6796 6.00002 11.5101 6.00002 11.3333V6.66659C6.00002 6.48977 6.07026 6.32021 6.19528 6.19518C6.32031 6.07016 6.48988 5.99992 6.66669 5.99992ZM9.33335 5.99992C9.51016 5.99992 9.67973 6.07016 9.80476 6.19518C9.92978 6.32021 10 6.48977 10 6.66659V11.3333C10 11.5101 9.92978 11.6796 9.80476 11.8047C9.67973 11.9297 9.51016 11.9999 9.33335 11.9999C9.15654 11.9999 8.98697 11.9297 8.86195 11.8047C8.73692 11.6796 8.66669 11.5101 8.66669 11.3333V6.66659C8.66669 6.48977 8.73692 6.32021 8.86195 6.19518C8.98697 6.07016 9.15654 5.99992 9.33335 5.99992Z" fill="#646A7A" />
                                    </svg>
                                    <span className='-mb-1'>eliminar</span>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Link>


        {add && <Suspense fallback={"loading.."}>
        <Add setActive={setAdd} refetch={refetch} id={current} />   
        </Suspense>}


        <Pagination page={page} setPage={setPage} refetch={refetch} name={"productos"}/>

    </Link>
    )
}
