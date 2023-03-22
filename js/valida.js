
export function validaForm(input){
    const tipoInput = input.dataset.tipo
    
    
    if(validadores[tipoInput]){
        validadores[tipoInput](input)
    }

    if(input.validity.valid){
        
        input.nextElementSibling.innerHTML = ''
        input.classList.remove('aplica-erro')
        input.classList.add('inputs')

    }else{
        input.nextElementSibling.classList.add('mensagem-erro-true')
        input.nextElementSibling.innerHTML = mostraMensagemDeErro (tipoInput, input)
        input.classList.remove('inputs')  
        input.classList.add('aplica-erro')

    }


}

export function validaFormArea(textArea){
    const textAreaTipo = textArea.dataset.tipo

    if(validadores[textAreaTipo]){
        validadores[textAreaTipo](textArea)
    }
    
    if(textArea.validity.valid){

        textArea.nextElementSibling.innerHTML = ''
        textArea.classList.remove('aplica-erro')
        textArea.classList.add('inputs')

    }else{
        textArea.nextElementSibling.classList.add('mensagem-erro-true')
        textArea.nextElementSibling.innerHTML = mostraMensagemDeErro (textAreaTipo, textArea)
        textArea.classList.remove('inputs')
        textArea.classList.add('aplica-erro')
    }

}

const tipoErro = [
    'valueMissing',
    'typeMismatch',
    'customError'
]



const mensagemErro = {

    nome: {
        valueMissing: 'O campo nome não pode estar vazio.',
        customError: 'O texto é longo demais, coloque apenas o necessário. (Máx 50 caracteres)'
    },
    email: {
        valueMissing: 'O campo E-mail não pode estar vazio.',
        typeMismatch: 'O Email não é válido.'
    },
    assunto: {
        valueMissing: 'O campo assunto não pode estar vazio.',
        customError: 'O texto é longo demais, coloque apenas o necessário. (Máx 50 caracteres)'
    },
    mensagem: {
        valueMissing: 'O campo mensagem não pode estar vazio.',
        customError: 'O máximo de caracteres foi excedido!'
    }
}

const validadores = {
    nome:input => validaNome(input),
    assunto:input => validaAssunto(input),
    mensagem:input => validaMensagem(input)
}



function mostraMensagemDeErro (tipoDeInput, input){
    let mensagem = ''
    tipoErro.forEach(erro =>{
        if(input.validity[erro]){
            mensagem = mensagemErro[tipoDeInput][erro]
        }
    })


    return mensagem 
}

//const tentando = document.querySelectorAll('input')

// tentando.forEach(input => {
//     input.addEventListener('click', (evento) => {
//         console.log(evento)
//         console.log(evento.target.value.length)
//     })
// })

function validaNome(input){

    let mensagem = ''
    
    if(input.selectionEnd > 50){

        mensagem = 'O texto é longo demais, coloque apenas o necessário. (Máx 50 caracteres)'
        
    }

    input.setCustomValidity(mensagem)

}

function validaAssunto(input){

    let mensagem = ''

    if(input.selectionEnd > 50){
        mensagem = 'O texto é longo demais, coloque apenas o necessário. (Máx 50 caracteres)'
    }

    input.setCustomValidity(mensagem)
}

function validaMensagem(input){
    let mensagem = ''

    if(input.selectionEnd > 300){
        mensagem = 'O máximo de caracteres foi excedido!'
    }

    input.setCustomValidity(mensagem)
}


