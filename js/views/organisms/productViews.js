//view til vores produkter
import { Layout} from "../../controllers/layoutController.js";
import { Div, Fragment } from "../atoms/index.js"


export const productListView = (products) => {
    const element = Div()
    element.innerHTML = 'ProduktListe'

    const Layout = Layout('Produkter', element)
    return Layout
    
}