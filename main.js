// alert ('thomas e willian')
// function soma ( numero1,numero2 ){
//     return numero1+numero2;
// }
// console.log( soma (1,2));
// function areaQuadrado (lado){
//     return lado**2;
// }
// let area =parseInt(prompt('qual a area do Quadrado'));
// document.writeareaQuadrado
// console.log(areaQuadrado(area));
// let media=function(numero1,numero2){
//     return numero1+numero2/2
// }
// let estados =['AC','RR','AM','RO','PA','AP','MT','TO','MA','GO','DF','MS','PI','BA','MG','SP','PR','SC','RS','RJ','ES','CE','RN','PB','PE','AL','SE']
// let i = 0; 
// while(i<estados.length)
//     {
//         console.log(i); 
//         // i=i+1;
//         console.log(estados[i]);
//         i++;
//     }
//     for (let i = 0; i < estados.length; i++) {
//         // const element = array[i];
//         console.log(i)
//         console.log(estados[i])
//     }
//     let idade = 16;
//     if (idade>16) {
//  console.log('já pode ser emancipado ')}
//else{
//console.log('não pode ser emancipado')
//}
function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
    </div>
    </div>
    `
    container.appendChild(cartao)
}