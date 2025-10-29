import{ Fragment} from "../views/atoms/index.js"
import { FooterView, HeaderView, MainView, NavBarView} from "../views/molecules/index.js"
import { getCategoryList } from "./categoryController.js";

export const Layout = async (title,content) => {
    document.title = title
   
    
    // Henter kategorier til navigationen (fx “Vand”, “Mad”, “Udstyr”)
    const arrNavItems = await getCategoryList()
    
    // Laver et tomt HTML-element som vi kan fylde indhold i
    const element = Fragment()
    element.append(
        HeaderView(),
        NavBarView(arrNavItems),
        MainView(title,content),
        FooterView()
    )
      // Returnerer hele layoutet klar til visning
return element
}