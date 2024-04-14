const resolvPath = async (objPath:ImageMetadata) => {
    const thumbnail = objPath[1];
    if (!thumbnail) {
        throw new Error(`Could not resolve showcase thumbnail: no es una ruta ${objPath[0]}`);
    }

    const src = await thumbnail();
    return src.default;
};

export default resolvPath