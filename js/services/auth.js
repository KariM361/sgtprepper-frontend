export const setSessionItem = (name, value) => {
sessionStorage.setItem(name, JSON.stringify(value))
}

export const getSessionItem = () => {
try {
    const value = sessionStorage.getItem(name)
    return value ? JSON.parse(value) : null
} catch (error) {
    console.log(error);
    return null
    
}

}