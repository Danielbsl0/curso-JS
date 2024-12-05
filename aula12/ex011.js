var idade = 15
console.log(`Sua idade é ${idade}`)
if (idade < 16){
    console.log('Não vota')
}else if (idade < 18 || idade > 65){
    console.log('O voto não é obrigatório')
}else{
    console.log('O voto é obrigatório')
}