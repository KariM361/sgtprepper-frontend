import { clearToken } from "../../services/auth.js"
import { Button, Form, Paragraph } from "../atoms/index.js"
import { FormGroup } from "../molecules/index.js"

export const LoginFormView = () => {
     const form = Form('POST')
    const username = FormGroup ('Brugernavn', 'username', 'Indtast brugernavn', 'text')
    const password  = FormGroup ('Adgangskode', 'password', 'Indtast adgangskode', 'password')
    const button = Button('send')
    form.append(username, password, button)
    return form
}

export const UserInforview = (user) => {
    const element = Paragraph()
    element.innerText = `Velkommen ${user.firstname} ${user.lastname}`
    const button = Button ('Logout','button')
    button.addEventListener('click',()=> {
        clearToken()
    })
    element.append(button)
    return element
}