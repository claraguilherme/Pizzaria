var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var horário = `${hora}:${minuto}`

var pizza = document.getElementsByName('txtpizza')
var fundo = document.getElementById('fundo')

var res = ''
var nome = ''

/*var pago = document.getElementsById('botao')
pago.addEventListener('click', calcular)*/


function calcular(){
    var casa = document.getElementById('casa')
    if (pizza[0].checked) {
    res = 30
    nome = 'pizza de queijo'
    } else if (pizza[1].checked) {
    res = 35 
    nome = 'pizza de peperoni'
    } else if (pizza[2].checked) {
    res = 45 
    nome = 'pizza de carne'
    } else if (pizza[3].checked) {
    res = 5
    nome = 'refri'
    }
    var valor = res.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    fundo.innerHTML = `Compra de ${nome} realizada às ${horário} custando ${valor}!` // e entregue na casa ${casa}
}

