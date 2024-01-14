import { Fragment as div, useEffect, useRef, useState } from 'react'
import Gql from '@/lib/Gql'

import Variants from './Variants'
import upload_s3 from '@/lib/upload_s3'

export default function Add({ setActive, refetch, id }) {

  const [variantsData, setVariantsData] = useState([])
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    categories: "",
    subCategories: "",
    subSubCategories: "",
    owner: "",
    weight: 0,
    price: 0,
    offerPrice: 0,
    wholesalePrice1: 0,
    wholesaleQuantity1: 0,
    wholesalePrice2: 0,
    wholesaleQuantity2: 0,
  })

  useEffect(() => {
    if (id) {
      const query = `
        query{
          getProductById(id:"${id}"){
            id,
            name,       
            description,
            categories{id name},
            subCategories{id name},
            subSubCategories{id name},
            wholesalePrice1,
            wholesaleQuantity1,
            wholesalePrice2,
            wholesaleQuantity2,
            weight,
            price,
            offerPrice,
            owner,
            ratings,
            totalViews,
            status,
            variants{
              name,
              sku,
              pictures
              sizes{
                size,
                stock
              },
              status
            },
          }
        }`

      Gql(query).then(res => {
        if (res.data.getProductById) {
          setFormData(res.data.getProductById)
          setVariantsData(res.data.getProductById.variants)
        }
      })

    }
  }, [])

  const [categorias, setCategorias] = useState(null)
  const [SubCateorias, setSubCateorias] = useState(null)
  const [SubSubCategorias, setSubSubCategorias] = useState(null)

  useEffect(() => {
    const getCategories = `
    query{
      getAllCategories(limit:999){
        docs{
          
            id  
            name
          
        }
      }}`

    Gql(getCategories).then(res => {

      if (res.data) {
        setCategorias(res.data.getAllCategories.docs)
      }
    })

    const querySub = `
    query{
    getAllSubCategories(limit:999){
      docs{
        id
        name
      }}}`

    Gql(querySub).then(res => {

      if (res.data) {
        setSubCateorias(res.data.getAllSubCategories.docs)
      } 
    })


    const querySubSub = `
    query{
      getAllSubSubCategories(limit:999){
        docs{
          id
          name
        }}}`

    Gql(querySubSub).then(res => {
      if (res.data) {
        setSubSubCategorias(res.data.getAllSubSubCategories.docs)
      } 
      
    })


  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()


    // let variIndex = 0
    // for (let vari of variantsData) {
    //   const arraypict = []
    //   let pictIndex = 0
    //   for (const pict of vari.pictures) {
    //     if (typeof (pict) != "string") {
    //       const pictUrl = await upload_s3(pict, `product-${formData.name}-${variantsData}-${pictIndex}`)
    //       arraypict[pictIndex] = pictUrl
    //     }
    //     pictIndex++
    //   }

    //   let newArray = [...variantsData];
    //   newArray[variIndex]["pictures"] = arraypict
    //   setVariantsData(newArray)
    //   variIndex++
    // }
    // console.log(variantsData)

    const postQuery =
      `
        mutation{
          ${id ? `updateProduct(id:"${id}"` : 'createProduct('}          
              input: {
                name: "${formData.name}",
                description: "${formData.description}",
                categories: "627bf0c086293b1dd96f9609",
                subCategories:  "627c16282e9d3d20684ce1c6",
                subSubCategories: "627c21b7a79d0bab8e45e229",
                owner: "6279a6ce81a3593393636e79",
                weight: ${formData.weight},
                price: ${formData.price},
                offerPrice: ${formData.offerPrice},
                wholesalePrice1: ${formData.wholesalePrice1},
                wholesaleQuantity1: ${formData.wholesaleQuantity1},
                wholesalePrice2: ${formData.wholesalePrice2},
                wholesaleQuantity2: ${formData.wholesaleQuantity2},
                variants: [${variantsData.map(e => `{                  
                  ${e.id && `id:"${e.id}",`}
                  name:"${e.name}", 
                  sku:"${e.sku}" 
                  status: ${e.status}
                  pictures:[${e.pictures.map(pic => `"${pic}"`)}]
                  sizes:[${e.sizes.map(size => `{size : "${size.size}" , stock : ${size.stock}}`)}]
                  
                }`)}]
              }
            ){
              id,
              name,
            }          
        }
        `
    const res = await Gql(postQuery)
    refetch()
    setActive(false) // props
  }


  return (
    <Link className='h-full'>
      <Link
        onClick={() => setActive(false)}
        className='z-1
        fixed inset-0 bg-opacity-80 bg-[#001F8199] 
        '>
      </Link>

      <Link className='z-0 fixed mx-auto inset-x-[25%] top-0 bottom-0 mt-[5%] h-0 bg-black'>
        <form onSubmit={handleSubmit} action="." className='bg-white rounded-xl  w-[708px]  h-[700px] overflow-y-auto  p-8'>

          <Link className='flex w-full '>


            <Link className='w-full'>
              <Link className='flex justify-between mb-3'>
                {id ?
                  <h3>Editar Producto: <span className='underline'>{formData.name}</span> </h3>
                  :
                  <h3>Crear nuevo producto</h3>
                }

                {/* close */}
                <Link onClick={() => setActive(false)} className='btn-pg ligh rounded-full center cursor-pointer'>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.31394 5.9L10.8489 2.364C10.9445 2.27176 11.0206 2.16141 11.073 2.03941C11.1255 1.9174 11.153 1.78618 11.1542 1.6534C11.1553 1.52062 11.13 1.38894 11.0798 1.26605C11.0295 1.14315 10.9552 1.0315 10.8613 0.937608C10.7674 0.843715 10.6558 0.769462 10.5329 0.719181C10.41 0.6689 10.2783 0.643598 10.1455 0.644752C10.0128 0.645906 9.88154 0.673492 9.75954 0.725901C9.63753 0.77831 9.52719 0.854492 9.43494 0.950003L5.89894 4.485L2.36394 0.950003C2.27169 0.854492 2.16135 0.77831 2.03935 0.725901C1.91734 0.673492 1.78612 0.645906 1.65334 0.644752C1.52056 0.643598 1.38888 0.6689 1.26599 0.719181C1.14309 0.769462 1.03144 0.843715 0.937547 0.937608C0.843654 1.0315 0.769401 1.14315 0.71912 1.26605C0.668839 1.38894 0.643537 1.52062 0.644691 1.6534C0.645845 1.78618 0.673431 1.9174 0.72584 2.03941C0.778249 2.16141 0.854431 2.27176 0.949942 2.364L4.48494 5.899L0.949942 9.435C0.854431 9.52725 0.778249 9.6376 0.72584 9.7596C0.673431 9.8816 0.645845 10.0128 0.644691 10.1456C0.643537 10.2784 0.668839 10.4101 0.71912 10.533C0.769401 10.6559 0.843654 10.7675 0.937547 10.8614C1.03144 10.9553 1.14309 11.0295 1.26599 11.0798C1.38888 11.1301 1.52056 11.1554 1.65334 11.1543C1.78612 11.1531 1.91734 11.1255 2.03935 11.0731C2.16135 11.0207 2.27169 10.9445 2.36394 10.849L5.89894 7.314L9.43494 10.849C9.52719 10.9445 9.63753 11.0207 9.75954 11.0731C9.88154 11.1255 10.0128 11.1531 10.1455 11.1543C10.2783 11.1554 10.41 11.1301 10.5329 11.0798C10.6558 11.0295 10.7674 10.9553 10.8613 10.8614C10.9552 10.7675 11.0295 10.6559 11.0798 10.533C11.13 10.4101 11.1553 10.2784 11.1542 10.1456C11.153 10.0128 11.1255 9.8816 11.073 9.7596C11.0206 9.6376 10.9445 9.52725 10.8489 9.435L7.31394 5.899V5.9Z" fill="#071234" />
                  </svg>
                </Link>
                {/* close */}
              </Link>

              <Link className='flex flex-col space-y-4'>

                {/* NOMBRE */}
                <Link className='ligh py-2 px-4 flex flex-col'>
                  <label htmlFor="name" className='small text-color1'>
                    Nombre del producto
                  </label>
                  <input
                    value={formData.name}
                    onChange={handleChange}
                    name="name" placeholder='Categoria..' className='bg-transparent' id='name' type="text" />
                </Link>
                {/* END NOMBRE */}

                {/* description */}
                <Link className='ligh py-2 px-4 flex flex-col'>
                  <label htmlFor="description" className='small text-color1'>
                    description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={handleChange}
                    name="description" placeholder='Categoria..' className='bg-transparent h-24' id='description' type="number" />
                </Link>
                {/* END description */}

                {/* CATEGORIAS */}
                <Link className='grid grid-cols-3 gap-5'>

                  <Link className='ligh py-2 px-4 flex flex-col'>
                    <label htmlFor="select" className='small text-color1'>
                      Categoria
                    </label>
                    <select
                      name="categories"
                      onChange={(target) => setFormData({ ...formData, [target.target.name]: target.target.value })}>

                      <option value={null} name="categories" className='ligh'>selecciona una obj</option>
                      {categorias && categorias.map((obj, indexobj) => (
                        <option key={indexobj} name="categories" value={obj.id}  >{obj.name}</option>
                      ))}
                    </select>
                  </Link>

                  {formData.categories != "" &&

                    <Link className='ligh py-2 px-4 flex flex-col'>
                      <label htmlFor="select" className='small text-color1'>
                        Selecciona una SubCategoria
                      </label>
                      <select
                        name="subCategories"
                        onChange={(target) => setFormData({ ...formData, [target.target.name]: target.target.value })}>

                        <option value={null} name="subCategories" className='ligh'>selecciona una obj</option>
                        {SubCateorias && SubCateorias.map((obj, indexobj) => (
                          <option key={indexobj} name="subCategories" value={obj.id}  >{obj.name}</option>
                        ))}
                      </select>
                    </Link>
                  }

                  {formData.subCategories != "" &&

                    <Link className='ligh py-2 px-4 flex flex-col'>
                      <label htmlFor="select" className='small text-color1'>
                        Selecciona una SubCategoria
                      </label>
                      <select
                        name="subSubCategories"
                        onChange={(target) => { setFormData({ ...formData, [target.target.name]: target.target.value }) }}>

                        <option value={null} name="subSubCategories" className='ligh'>selecciona una obj</option>
                        {SubSubCategorias && SubSubCategorias.map((obj, indexobj) => (
                          <option key={indexobj} name="subSubCategories" value={obj.id}  >{obj.name}</option>
                        ))}
                      </select>
                    </Link>
                  }



                </Link>
                {/* CATEGORIAS */}

                <Link className='grid grid-cols-2 gap-5'>

                  {/* price */}
                  <Link className='ligh py-2 px-4 flex flex-col'>
                    <label htmlFor="price" className='small text-color1'>
                      precio
                    </label>
                    <input
                      value={formData.price}
                      onChange={handleChange}
                      name="price" placeholder='Categoria..' className='bg-transparent' id='price' type="number" />
                  </Link>
                  {/* END precio */}

                  {/* offerPrice */}
                  <Link className='ligh py-2 px-4 flex flex-col'>
                    <label htmlFor="offerPrice" className='small text-color1'>
                      precio de oferta
                    </label>
                    <input
                      value={formData.offerPrice}
                      onChange={handleChange}
                      name="offerPrice" placeholder='Categoria..' className='bg-transparent' id='offerPrice' type="number" />
                  </Link>
                  {/* END offerPrice */}

                  {/* wholesaleQuantity1 */}
                  <Link className='ligh py-2 px-4 flex flex-col'>
                    <label htmlFor="wholesalePrice1" className='small text-color1'>
                      precio para mayorista pequeño
                    </label>
                    <input
                      value={formData.wholesalePrice1}
                      onChange={handleChange}
                      name="wholesalePrice1" placeholder='Categoria..' className='bg-transparent' id='wholesalePrice1' type="number" />
                  </Link>
                  {/* END precio */}

                  {/* wholesaleQuantity1 */}
                  <Link className='ligh py-2 px-4 flex flex-col'>
                    <label htmlFor="wholesaleQuantity1" className='small text-color1'>
                      Cantidad de precio para mayorista pequeño
                    </label>
                    <input
                      value={formData.wholesaleQuantity1}
                      onChange={handleChange}
                      name="wholesaleQuantity1" placeholder='Categoria..' className='bg-transparent' id='wholesaleQuantity1' type="number" />
                  </Link>
                  {/* END wholesaleQuantity1 */}

                  {/* wholesaleQuantity1 */}
                  <Link className='ligh py-2 px-4 flex flex-col'>
                    <label htmlFor="wholesalePrice2" className='small text-color1'>
                      precio para mayorista grande
                    </label>
                    <input
                      value={formData.wholesalePrice2}
                      onChange={handleChange}
                      name="wholesalePrice2" placeholder='Categoria..' className='bg-transparent' id='wholesalePrice2' type="number" />
                  </Link>
                  {/* END precio */}

                  {/* wholesaleQuantity2 */}
                  <Link className='ligh py-2 px-4 flex flex-col'>
                    <label htmlFor="wholesaleQuantity2" className='small text-color1'>
                      Cantidad de precio para mayorista grande
                    </label>
                    <input
                      value={formData.wholesaleQuantity2}
                      onChange={handleChange}
                      name="wholesaleQuantity2" placeholder='Categoria..' className='bg-transparent' id='wholesaleQuantity2' type="number" />
                  </Link>
                  {/* END wholesaleQuantity2 */}
                </Link>
              </Link>
            </Link>
          </Link>

          <Link className='mt-8'>


            {variantsData.length > 0 &&
              < Link className='mb-10 border border-gray-300 rounded-3xl p-3'>
                {variantsData.map((obj, indexObj) => (
                  <Link key={indexObj}>
                    <Variants allObjet={variantsData} setObjeto={setVariantsData} objeto={obj} index={indexObj} />
                  </Link>
                ))}

              </Link>
            }


            <Link className='mb-4'>
              <hr />
              <Link
                onClick={() => setVariantsData([...variantsData, {
                  "name": "",
                  "sku": "",
                  "pictures": [],
                  "sizes": [],
                  "status": false
                }])}
                className='cursor-pointer my-8 mx-auto w-1/3 border text-center p-2 border-[#001F81] rounded-md '>
                + Agregar nueva variante
              </Link>
              <hr />

            </Link>

          </Link>


          <Link className='flex justify-end'>
            <input type="submit" className='cursor-pointer primary py-4 px-8 rounded-md'
              value={id ? 'guardar Producto' : 'crear Producto'} />
          </Link>

        </form>

      </Link >
    </Link >
  )
}
