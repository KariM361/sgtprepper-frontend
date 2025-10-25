import { getList } from "../models/productModel.js"
import { Paragraph} from "../views/atoms/index.js"
import { Layout } from "./layoutController.js"

export const ProductPage = async () => {
    const {category} = Object.fromEntries(new URLSearchParams(location.search));
    const data = await getList(category)

    
    const title = "Se vores produkter"
    const p = Paragraph()
    p.innerHTML = "Lister over produkter"
    return Layout(title,p)
    }