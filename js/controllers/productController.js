import { getList } from "../models/productModel.js"
import { ProductListView} from "../views/organisms/productViews.js"
import { Layout } from "./layoutController.js"

export const ProductPage = async () => {
    const {category = 'mad-og-langtidsopbevaring'} = Object.fromEntries(new URLSearchParams(location.search));

    //bygger produkt liste
    const data = await getList(category)
    const html = ProductListView(data)

    //samler og returnerer side layoutet
    const layout = Layout('Produkter', html)
    return layout

return html

    
    // const title = "Se vores produkter"
    // const p = Paragraph()
    // p.innerHTML = "Lister over produkter"
    // return Layout(title,p)
    }