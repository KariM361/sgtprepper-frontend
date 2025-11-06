import{ Fragment } from "../views/atoms/index.js"
import { FooterView, HeaderView, MainView, NavBarView} from "../views/molecules/index.js"
import { getCategoryList } from "./categoryController.js";

export const Layout = async (title,content) => {
   //sætter fanebladets title i browseren
    document.title = title
   
    // Henter kategorier til navigationen (fx “Vand”, “Mad”, “Udstyr”)
    const arrNavItems = await getCategoryList()
    
    // Laver et tomt HTML-element som vi kan fylde indhold i
    const element = Fragment()

    element.append(
        HeaderView(),               //topfelt(logo, evt. login)
        NavBarView(arrNavItems),    //Menu med kategorier
        MainView(title,content),    //selve sidens indhold
        FooterView()                // bundfeldt(footer)
    )
      // Returnerer hele layoutet klar til visning
return element
}