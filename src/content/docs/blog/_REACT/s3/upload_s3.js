/**
 * https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/s3-example-photo-album.html
 * @param {from input} file from input
 * @param {icon/img + slug} slug 
 * @returns {url:"string"} 
 */
const upload_s3 = async (file, slug) => {
    if (file) {
        // get url with keys access
        const data = await fetch("/api/s3", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'name': `${slug}.${file.type.split('/')[1]}`, 'type': file.type })
        }
        ).then(res => res.json())

        // push file
        const url = await fetch(data.url, {
            method: 'PUT',
            headers: {
                "Content-Type": file.type
            },
            body: file
        }).then(res => res.url.split('?')[0])
            .catch(err => {
                console.log("hay un error", err)
            })
        
        console.log(url)
        return url
    }else{
        return null
    }
}

export default upload_s3
