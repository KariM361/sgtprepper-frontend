//view til vores produkter
import { Div, Fragment, Image } from "../atoms/index.js"


export const ProductListView = (products) => {
    const element = Fragment()


   
    products.forEach(product => {
        const{imageUrl,name, price, slug, stock, teaser} = product;
       
        const div = Div ()
       const img = Image(`http//localhost:4000${imageUrl}`,name)

       div.append(img)

        element.append(div)

    });

    return element
}