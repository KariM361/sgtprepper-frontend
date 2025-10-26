//view til vores produkter
import { Div, Fragment, Heading, Image, Paragraph } from "../atoms/index.js"

// modtager en liste af produkter
export const ProductListView = (products) => {
    const element = Fragment()
    
    // looper igennem produkter
     products.forEach(product => {
        const{imageUrl,name, price, slug, stockText, stockClass, teaser} = product;
             
        const div = Div () //container for hvert produkt
        const img = Image(`http://localhost:4000${imageUrl}`,name)
        div.append(img)

        const info = Div() // viser info om produkt
        const h2 = Heading (name,2)
        const p = Paragraph()
        p.innerHTML = teaser//Ses i konsollen
        info.append(h2,p)
        div.append(info)

        const cost = Div()// viser pris
        cost.innerText = price

        const stockElm = Paragraph(stockClass)// viser lager status
        stockElm.innerText = stockText
        cost.append(stockElm)

        div.append(cost)
       
        
        element.append(div)

    });

    return element
}