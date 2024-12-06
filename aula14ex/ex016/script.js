function contar(){
    var txti = document.getElementById('txtini')
    var txtf = document.getElementById('txtfim')
    var txtp = document.getElementById('txtpasso')
    var res = document.getElementById('res')
    if (txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0){
        res.innerHTML = 'Impossível contar!'
    }else{
        var ini = Number(txti.value)
        var fim = Number(txtf.value)
        var pas = Number(txtp.value)
        if (pas == 0){
            pas = 1
            alert('Passo inválido, considerando Passo 1')
        }
        if (ini < fim){
            res.innerHTML = 'Contando... <br>'
            for (var c=ini; c<=fim; c+=pas){
                res.innerHTML += `<strong>${c}</strong>`
                if (c < fim){
                    res.innerHTML += '👉'
                }else{
                    res.innerHTML += '🚩'
                }
            }
        }else{
            res.innerHTML = 'Contando... <br>'
            for (var c=ini; c>=fim; c-=pas){
                res.innerHTML += `<strong>${c}</strong>`
                if (c > fim){
                    res.innerHTML += '👉'
                }else{
                    res.innerHTML += '🚩'
                }
            }
        }
    }
}