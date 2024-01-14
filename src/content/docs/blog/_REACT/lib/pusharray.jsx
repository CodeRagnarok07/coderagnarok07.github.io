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
    return <></>

}