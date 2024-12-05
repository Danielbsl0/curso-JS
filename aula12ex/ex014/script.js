function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >=0 && hora<12){
        img.src = 'images/manha.jpg'
        document.body.style.background = '#ca882a'
    }else if (hora < 18){
        img.src = 'images/tarde.jpg'
        document.body.style.background = '#89593c'
    }else{
        img.src = 'images/noite.jpg'
        document.body.style.background = '#BD8052'
    }
}
