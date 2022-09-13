function gerar(){
    var fNumero = document.getElementById('numero')
    var num = Number(fNumero.value)
    var res = document.getElementById('tabuada')

    res.innerHTML = ''
    
    for(var i = 1; i <= 10; i++){
        res.innerHTML += `<tr><td>${num} X ${i} = ${num*i}</td></tr>`
    }
}