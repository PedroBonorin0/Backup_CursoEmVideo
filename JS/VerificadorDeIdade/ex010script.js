function verifica(){
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('anonasc')
    var res = document.getElementById('texto')

    if(nasc.value == 0 || Number(nasc.value) > ano){
        window.alert('[ERRO] Data de Nascimento Inválida')
    } else{
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(nasc.value)
        var niver = document.getElementsByName('niver')
        var foto = document.querySelector('img#foto')
        var genero = ''

        if(niver[1].checked){
            idade--
        }

        foto.style.height = '300px'
        foto.style.width = '300px'
        foto.style.borderRadius = '300px'

        if(sexo[0].checked){
            genero = 'Homem'
            if(Number(idade.value) < 4){
                foto.setAttribute('src', 'homem_bebe.jpg')
                window.alert('bebe')
            } else if(idade < 12){
                foto.setAttribute('src', 'homem_crianca.jpg')
            } else if(idade < 18){
                foto.setAttribute('src', 'homem_adolescente.jpg')
            } else if(idade < 65){
                foto.setAttribute('src', 'homem_adulto.jpg')
            } else {
                foto.setAttribute('src', 'homem_idoso.jpg')
            }
        } else {
            genero = 'Mulher'
            if(idade < 4){
                foto.setAttribute('src', 'mulher_bebe.jpg')
            } else if(idade < 12){
                foto.setAttribute('src', 'mulher_crianca.jpg')
            } else if(idade < 18){
                foto.setAttribute('src', 'mulher_adolescente.jpg')
            } else if(idade < 65){
                foto.setAttribute('src', 'mulher_adulto.jpg')
            } else {
                foto.setAttribute('src', 'mulher_idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} ano(s).`
        res.appendChild(foto)

        
    }
}