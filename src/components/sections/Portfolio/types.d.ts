
type ImgsFromKey = [
    string, 
    () => Promise<{default: ImageMetadata;}>
]


type TypeGetImgsFromKey = ImgsFromKey[]


type DataPortfolio = {
    "id": string,
    "name": string,
    "Title": string,
    "description": string,
    "github": string,
    "live": string
}
