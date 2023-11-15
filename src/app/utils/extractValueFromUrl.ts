export const extractValueFromUrl = (url: string) =>{
    const match = url.match(/\/(\d+)\/$/)
    return match ? match[1] : null
}