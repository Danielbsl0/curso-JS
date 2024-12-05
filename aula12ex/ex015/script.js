function verificar(){
    var agora = new Date()
    var txtano = document.getElementById('txtano')
    var anoAtual = agora.getFullYear()
    var res = document.getElementById('res')
    if (txtano.value.length == 0 || txtano.value > anoAtual){
        alert('Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var ano = Number(txtano.value)
        var idade = anoAtual-ano
        if (fsex[0].checked){
            if (idade <=12){
                res.innerHTML = '<p>Homem criança detectado!</p>'
                res.innerHTML += '<img src="imagens/homem.bebe.jpg" alt="">'
            }else if(idade<=18){
                res.innerHTML = '<p>Homem jovem detectado!</p>'
                res.innerHTML += '<img src="imagens/homem.jovem.jpg" alt="">'
            }else if(idade<=60){
                res.innerHTML = '<p>Homem adulto detectado!</p>'
                res.innerHTML += '<img src="imagens/homem.adulto.jpg" alt="">'
            }else{
                res.innerHTML = '<p>Homem idoso detectado!</p>'
                res.innerHTML += '<img src="imagens/homem.idoso.jpg" alt="">'
            }
        }else{
            if (idade <=12){
                res.innerHTML = '<p>Mulher criança detectada!</p>'
                res.innerHTML += '<img src="imagens/mulher.bebe.jpg" alt="">'
            }else if(idade<=18){
                res.innerHTML = '<p>Mulher jovem detectada!</p>'
                res.innerHTML += '<img src="imagens/mulher.jovem.jpg" alt="">'
            }else if(idade<=60){
                res.innerHTML = '<p>Mulher adulta detectada!</p>'
                res.innerHTML += '<img src="imagens/mulher.adulta.jpg" alt="">'
            }else{
                res.innerHTML = '<p>Mulher idosa detectada!</p>'
                res.innerHTML += '<img src="imagens/mulher.idosa.jpg" alt="">'
            }
            res.style.textAlign = 'center'
        }
    }
    
    
}