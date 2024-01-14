import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";



const Projects = () => {

    const displayContent = (e) => {
        return { __html: e }
    };

    const route = useRouter()

    const [data, setData] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch(`/api/${route.locale}/about/projects/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const apiData = await resp.json()
            setData(apiData)

        }
        fetchData()
    }, [route])

    console.log(data.obj.map(e=> "hola"));

    return (data &&
        <Link className="">
            <h1 className="border-b py-5 text-center mb-6 underline leading-[4rem] mx-4 ">
                {data.title}
            </h1>

            <Link className="w-full mb-16">

                <Link className="flex flex-col md:space-y-24">

                    {false && data.obj.map((e, i) =>
                        <Link key={i} className={((i / 2) % 1 === 0) === true
                            ?
                            "flex flex-col lg:flex-row md:mx-24 lg:mx-0 justify-around items-center md:px-8 text-center lg:text-left"
                            :
                            "flex flex-col lg:flex-row-reverse md:mx-24 lg:mx-0 justify-around items-center md:px-8 text-center lg:text-right"}
                        >
                            <buttom href={e.live} rel="noreferrer" target="_blank" className="apsolute w-full lg:w-2/4  flex overflow-hidden ">
                                <Link className="h-full  border-2">
                                    <Image width={"2000%"} height={"1000%"} className="relative w-full h-full object-center object-cover shadow " src={e.image}
                                        alt={e.name} />
                                </Link>
                            </buttom>
                            <Link className='w-full lg:w-1/3 flex flex-col justify-center space-y-6 '>
                                <Link className="mx-4">
                                    <h3 className="text-gray-100 underline-offset-2 underline">
                                        <span aria-hidden="true" className="inset-0 text-center">
                                            {e.name}
                                        </span>
                                    </h3>
                                </Link>
                                <Link className="mx-auto xl:mx-4 ">
                                    <p dangerouslySetInnerHTML={displayContent(e.description)} ></p>
                                </Link>
                                <Link className="m-2">
                                    <hr />
                                </Link>
                                <Link className="flex justify-center xl:justify-between ">
                                    <Link className="flex space-x-2 mx-4">

                                        <p className="text-gray-200 ">init date: </p>
                                        <p className="text-gray-50"> {e.date}</p>
                                    </Link>

                                    <Link className="flex justify-between ">

                                        {e.gitHub &&
                                            <buttom className="px-2 py-1 mx-1 bg-gray-900 text-gray-200 border rounded hover:bg-gray-800"
                                                href={e.gitHub} target="__blank" >GitHub</buttom>
                                        }

                                        {e.live &&
                                            <buttom className="px-2 py-1 mx-1 bg-gray-300 text-gray-900 text-xs rounded hover:bg-gray-400"
                                                href={e.live} target="__blank">Live</buttom>
                                        }
                                    </Link>
                                </Link>
                            </Link>
                        </Link>
                    ) 
                    // :
                    //     <svg className="animate-spin h-20 w-20 mx-auto my-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    //         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    //         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    //     </svg>
                    }

                </Link>




            </Link>
        </Link>
    )
}


export default Projects