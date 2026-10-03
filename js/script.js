const msg = document.querySelector('h2')
const body = document.querySelector('body')
const lampada = document.getElementById('lampada')
const botao = document.getElementById('onOff')

let apagada = true
let quebrada = false

botao.addEventListener('click', () => {
    if (!quebrada) {
        if (apagada) {
            lampada.src = 'assets/lampada-acesa.png'
            body.style.backgroundColor = '#f1f1f1'
            botao.src = 'assets/switch-on.png'
            msg.innerHTML = 'Acione o interruptor para apagar a lâmpada'
            apagada = false
        } else {
            lampada.src = 'assets/lampada-apagada.png'
            body.style.backgroundColor = '#010101'
            botao.src = 'assets/switch-off.png'
            msg.innerHTML = 'Acione o interruptor para acender a lâmpada'
            apagada = true
        }
    } else {
        if (apagada) {
            botao.src = 'assets/switch-on.png'
            apagada = false
        } else {
            botao.src = 'assets/switch-off.png'
            apagada = true
        }
    }
})
lampada.addEventListener('click', () => {
    lampada.src = 'assets/lampada-quebrada.png'
    msg.innerHTML = 'Eu disse que não era pra encostar no bagulho!'
    body.style.backgroundColor = '#010101'
    quebrada = true
})