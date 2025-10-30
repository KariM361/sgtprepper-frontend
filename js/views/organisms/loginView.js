import { Button, Form } from "../atoms/index.js"
import { FormGroup } from "../molecules/index.js"

export const LoginFormView = () => {
     const form = Form('POST')
    const username = FormGroup ('Brugernavn', 'username', 'Indtast brugernavn', 'text')
    const password  = FormGroup ('Adgangskode', 'password', 'Indtast adgangskode', 'password')
    const button = Button('send')
    form.append(username, password, button)
    return form
}