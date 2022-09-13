let amigo = {nome: 'Pedro', sexo: 'Masculino', peso: 80, emagrecer(p){
    console.log('Emagreceu!')
    this.peso -= p
}}

amigo.emagrecer(5)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)