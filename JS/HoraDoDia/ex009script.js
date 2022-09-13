function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //hora = 6
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'manha.jpg'
        document.body.style.background = 'rgb(236, 226, 85)'
    } else if(hora>=12 && hora < 18){
        //boa tarde
        img.src = 'tarde.jpg'
        document.body.style.background = 'rgb(243, 167, 96)'
    } else {
        //boa noite
        img.src = 'noite.jpg'
        document.body.style.background = 'rgb(102, 102, 102)'
    }
}