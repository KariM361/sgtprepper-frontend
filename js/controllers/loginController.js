

import { Authenticate } from '../models/loginModel.js';
import { getToken, setToken} from '../services/auth.js';
import { LoginFormView, UserInfoView } from "../views/organisms/loginView.js";
import { Layout } from './layoutController.js';

//funktionen der laver hele Login-siden
export const LoginPage = () => {
    if(getToken()){
        const token = getToken()
        const html = UserInfoView (token.user)
        return('Din side', html)
    }
    else { 
    //henter Login-formularen som et html-element
   const element = LoginFormView()

   //lytter efter når brugeren trykker "Log ind"
   element.addEventListener('submit', (e)=> {
    handleLogin(e)
   })

   //returnerer hele siden med layout og formular
    return Layout('Login', element)
    }
}

//function der håndterer selve login-processen
export const handleLogin = async (e) => {
 e.preventDefault()//stopper siden fra at reloade(standard for forms)
 const form = e.currentTarget//formularen der blev sendt

 // henter værdier fra felterne og fjerner mellemrum
const username = form.username.value.trim()
const password =  form.username.value.trim()

//Tjekker at begge felter er udfyldt
if(username && password) {
    //kalder funktionen der tjekker login på serveren
const data = await Authenticate (username, password)

if(data.accessToken){
   setToken (data)
   location.href ='./index.htm'
}} 
}