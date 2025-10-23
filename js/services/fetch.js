export const request = async (url, method = 'GET', body) => {
    if (!url) throw new Error('Missing url') 

        const options = {
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    try {
        const response = await fetch(url, options)
        const result = await response.json()
    } catch (error) {
        console.error();
        
        }
    }