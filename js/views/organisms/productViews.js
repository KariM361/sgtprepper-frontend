//view til vores produkter
import { Div, Fragment, Heading, Image, Paragraph } from "../atoms/index.js"


export const ProductListView = (products) => {
    const element = Fragment()

     products.forEach(product => {
        const{imageUrl,name, price, slug, stock, teaser} = product;
             
        const div = Div ()
        const img = Image(`http//localhost:4000${imageUrl}`,name)
        div.append(img)

        const info = Div()
        const h2 = Heading (name,2)
        const p = Paragraph()
        p.innerHTML = teaser
        info.append(h2,p)
        div.append(info)
       

        element.append(div)

    });

    return element
}