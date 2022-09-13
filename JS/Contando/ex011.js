function contar(){
    var fInicio = document.getElementById('inicio')
    var inicio = Number(fInicio.value)

    var fFim = document.getElementById('fim')
    var fim = Number(fFim.value)

    var fPasso = document.getElementById('passo')
    var passo = Number(fPasso.value)

    var textRes = document.getElementById('res')
    var contando = document.createElement('contando')
    contando.getAttribute('id', 'conta')
    contando.innerHTML = ''

    if(passo <= 0){
        window.alert('Passo inválido! Setando passo para 1.')
        passo.value = 1
    }

    textRes.innerHTML = '<p>Contando...'

    for(inicio = inicio; inicio <= fim; inicio += passo){
        contando.innerHTML += `${inicio} &#128073; `
    }

    contando.innerHTML += '&#127937 </p>'
    textRes.appendChild(contando)

}