var numeros = []
var soma
var maior
var menor
var fnum
var num
var adicionados = document.getElementById('adicionados')


function adicionar(){
    fnum = document.getElementById('numero')
    num = Number(fnum.value)

    if(num < 1 || num > 100){
        window.alert('Favor inserir um número válido!')
    } else {
        numeros.push(num)
        if(numeros.length == 1){
            adicionados.innerHTML = `<tr><td>Número ${num} adiconado.</td></tr>`
        } else {
            adicionados.innerHTML += `<tr><td>Número ${num} adiconado.</td></tr>`
        }
    }
    fnum.value = ''
    fnum.focus()
}

function verificar(){
    
    if(numeros.length == 0){
        window.alert('Favor inserir pelo menos 1 número para Verificar!')
    } else {
        soma = 0
    
        for(let i = 0; i < numeros.length; i++){
            if(i == 0){
                maior = numeros[0]
                menor = numeros[0]
            } 
            if(numeros[i] > maior){
                maior = numeros[i]
            }
            if(numeros[i] < menor){
                menor = numeros[i]
            }
            soma+=numeros[i]
        }
        var res = document.getElementById('res')
        res.innerHTML = `Números detectados: ${numeros.length}.<br>`
        res.innerHTML += `O maior valor detectado foi: ${maior}.<br>`
        res.innerHTML += `O menor valor detectado foi: ${menor}.<br>`
        res.innerHTML += `Soma dos valores: ${soma}.<br>`
        res.innerHTML += `Média dos valores: ${(soma/numeros.length).toFixed(2)}.<br>`
    }
}

function limpar(){
    fnum.value = ''
    res.innerHTML = ''
    adicionados.innerHTML = ' <tr><td>Adicione os valores acima!</td></tr>'
    numeros = []

}