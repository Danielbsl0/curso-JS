let val = []
let res = document.getElementById('res')
function adicionar(){
    res.innerHTML = ''
    let txtnum = document.getElementById('txtn')
    let num = Number(txtnum.value)
    let tab = document.getElementById('seltab')
    if (txtnum.value.length === 0){
        alert('[ERRO!] Preencha todos os campos e tente novamente.')
    }else if (num <1 || num > 100){
        alert('[ERRO!] Número inválido. Por favor tente novamente')
    }else{
        if (val.indexOf(num) === -1){
            let item = document.createElement('option')
            item.text = `Valor ${num} adicionado.`
            tab.appendChild(item)
            val.push(num)
        }
    }
}
function finalizar(){
    let ac = 0
    for (let i in val){
        ac += val[i]
    }
    res.innerHTML += `<p>Ao todo temos <strong>${val.length}</strong> numeros cadastrados.</p>` + `<p>O maior valor encontrado foi <strong>${Math.max(...val)}</strong></p>` + `<p>O menor valor encontrado foi <strong>${Math.min(...val)}</strong></p>` + `<p>Somando todos os valores temos: <strong>${ac}</strong></p>` + `<p>A média dos valores é: <strong>${ac/val.length}</strong></p>`
}