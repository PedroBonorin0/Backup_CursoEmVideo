let num = [5, 8, 2, 9, 3]

num.push(1)
num.sort()

for(let pos in num){
    console.log(num[pos])
}
var posicao = num.indexOf(3)
console.log(posicao)