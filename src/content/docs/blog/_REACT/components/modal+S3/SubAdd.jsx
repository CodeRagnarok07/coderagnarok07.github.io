export default function SubAdd({ allObjet, objeto, setObjeto, index }) {

    const handleChange = (e) => {
        let newArray = [...allObjet]; // copying the old datas array
        newArray[index] = {...newArray[index], [e.target.name]: e.target.value }; // replace e.target.value with whatever you want to change it to
        setObjeto(newArray);
    }


    const Delete = () => {
        const filtered = allObjet.filter((e, i) => i !== index)
        setObjeto(filtered);
    }

    return (

        <Link
            className='mb-8 space-x-2 center '>
                {/* SLUG */}
                <Link className='ligh py-1 px-2 flex flex-col w-2/3'>
                    <label htmlFor="size" className='small text-color1'>
                        name
                    </label>
                    <input
                        value={objeto.size}
                        onChange={(e) => handleChange(e)}
                        name="size" placeholder='Categoria..' className='bg-transparent' id='size' type="text" />
                </Link>
                <Link className='ligh py-1 px-2 flex flex-col w-2/3'>
                    <label htmlFor="stock" className='small text-color1'>
                        Stock
                    </label>
                    <input
                        value={objeto.stock}
                        onChange={(e) => handleChange(e)}
                        name="stock" placeholder='Categoria..' className='bg-transparent' id='stock' type="number" />
                </Link>
                {/* END SLUG */}



            <Link
                onClick={Delete}
                className='cursor-pointer border hover:border-red-500 p-1 my-1 text-red-600 font-bold'>
                Eliminar
            </Link>


        </Link>




    )
}
