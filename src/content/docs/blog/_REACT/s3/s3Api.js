import S3 from 'aws-sdk/clients/s3'

const Upload_S3 = new S3({
    region: process.env.NEXT_PUBLIC_AWS_REGION,
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    signatureVersion: 'v4'
})


export default async function handler(req, res) {

    const { name, type } = req.body
    if (req.method == 'POST') {
        try {
            const params = {
                Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,
                Key: name,
                Expires: 60,
                ContentType: type,
                ACL: 'public-read'
            }
            const url = await Upload_S3.getSignedUrlPromise('putObject', params)
            return res.status(200).json({ url })   

        } catch (error) {
            console.log(error, "hay un error");
            return res.status(200).json({ error: error })

        }
    }
    else {
        return res.status(200).json({ error: "method no allow" })
    }
}
