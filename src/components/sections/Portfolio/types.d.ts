
type ImgsFromKey = [
    string, 
    () => Promise<{default: ImageMetadata;}>
]

type TypeGetImgsFromKey = ImgsFromKey[]