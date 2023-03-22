import { validaForm } from "./valida.js"
import {validaFormArea} from "./valida.js"


const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
    input.addEventListener('blur', (evento) =>{
        validaForm(evento.target)
    })
})

const textAreas = document.querySelectorAll('textarea')

textAreas.forEach(textarea => {
    textarea.addEventListener('blur', (evento) => {
        validaFormArea(evento.target)
    })
})